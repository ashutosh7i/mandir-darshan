export async function getStreamForChannel(config, apiKey) {
    const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
    const maxResults = 5; // Fetch multiple results if filtering by title
  
    const fetchVideos = async (channelId, eventType, results = 1) => {
      const url = `${baseUrl}?key=${apiKey}&channelId=${channelId}&type=video&eventType=${eventType}&maxResults=${results}&part=snippet&order=date`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const data = await response.json();
      return data.items || [];
    };
  
    const matchTitle = (videos, titleSegment) => {
      const regex = new RegExp(titleSegment, 'i');
      return videos.find((video) => regex.test(video.snippet.title));
    };
  
    const processChannel = async (channel) => {
      const { channelId, title } = channel;
  
      try {
        if (title) {
          // Fetch more results to filter by title
          let videos = await fetchVideos(channelId, 'live', maxResults);
          let matchedVideo = matchTitle(videos, title);
  
          if (!matchedVideo) {
            // No matching live stream, try completed streams
            videos = await fetchVideos(channelId, 'completed', maxResults);
            matchedVideo = matchTitle(videos, title);
          }
  
          return matchedVideo || null;
        } else {
          // Fetch the latest live or completed video
          let videos = await fetchVideos(channelId, 'live', 1);
          if (videos.length > 0) return videos[0];
  
          // If no live video, fallback to completed
          videos = await fetchVideos(channelId, 'completed', 1);
          return videos.length > 0 ? videos[0] : null;
        }
      } catch (error) {
        console.error(`Error fetching streams for channel ${channelId}:`, error);
        return null;
      }
    };
  
    const results = await Promise.all(config.map((channel) => processChannel(channel)));
    return results;
  }
  
//   // Example usage
//   const channels = [
//     { channelId: "UCT1egsvA08YcdMLiEu1DTRg", title: "🔴 Live Darshan - Shree Somnath Temple, First" },
//     { channelId: "UCT-3fEwrrxlwMrWgMvoqt-w", title: null } // Replace with actual IDs
//   ];
  
//   const apiKey = 'AIzaSyACzmNkYHvGJQNilWXq0I9pIOaVdGFJ3D4'; // Replace with your API key
  
//   getStreamForChannel(channels, apiKey).then((streams) => {
//     streams.forEach((stream, index) => {
//       if (stream) {
//         console.log(`Stream for channel ${channels[index].channelId}:`, stream);
//       } else {
//         console.log(`No streams found for channel ${channels[index].channelId}`);
//       }
//     });
//   });
  