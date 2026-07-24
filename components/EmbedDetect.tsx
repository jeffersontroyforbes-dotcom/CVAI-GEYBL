/** Runs before paint when embedded (iframe, ?embed=1, or /embed/* path). */
export const embedDetectScript = `(function(){try{var path=window.location.pathname||"";var q=new URLSearchParams(window.location.search);var embed=q.get("embed");var isEmbedPath=path==="/embed"||path.indexOf("/embed/")===0;if(isEmbedPath||embed==="1"||embed==="true"||window.self!==window.top){document.documentElement.setAttribute("data-embed","true")}}catch(e){try{if(window.self!==window.top){document.documentElement.setAttribute("data-embed","true")}}catch(_){}}})();`;

export function EmbedDetect() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: embedDetectScript }}
    />
  );
}
