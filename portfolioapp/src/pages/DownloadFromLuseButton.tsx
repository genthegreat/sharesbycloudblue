import { scrapeWebsite } from '../server/scraper';

const DownloadFromLuseButton = () => {
  const handleDownloadClick = () => {
    //scrapeWebsite();
  };

  return (
    <button onClick={handleDownloadClick}>Download New Data</button>
  );
};

export default DownloadFromLuseButton;
