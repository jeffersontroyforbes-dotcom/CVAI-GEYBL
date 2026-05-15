/** Runs before paint when embedded in a parent frame (e.g. Nike GEYBL). */
export const embedDetectScript = `(function(){try{if(window.self!==window.top){document.documentElement.setAttribute("data-embed","true")}}catch(e){}})();`;

export function EmbedDetect() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: embedDetectScript }}
    />
  );
}
