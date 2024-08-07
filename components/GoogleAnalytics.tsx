"use client";
import { useEffect } from "react";
import Script from "next/script";

const GoogleAnalytics = () => {
  useEffect(() => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", "G-GC71M359QP");
  }, []);

  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-GC71M359QP"
      ></script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GC71M359QP');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
