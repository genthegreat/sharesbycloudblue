import { scrapeWebsite } from './scraper';
import cron from 'node-cron';

// Schedule the script to run every Monday to Friday at 9:00 AM
cron.schedule('0 9 * * 1-5', () => {
  scrapeWebsite();
}, {
  timezone: 'your_timezone_here'
});
