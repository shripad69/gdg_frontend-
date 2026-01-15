const CONFIG = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",

  S3_BASE_URL: import.meta.env.VITE_PUBLIC_S3_URL
    ? `https://${import.meta.env.VITE_PUBLIC_S3_URL}`
    : "https://gdgwce-web.s3.ap-south-1.amazonaws.com",
};

export default CONFIG;
