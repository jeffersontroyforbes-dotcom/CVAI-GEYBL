/** Runs before paint when embedded (iframe sniff or ?embed=1). */
export const embedDetectScript = `(function(){try{var q=new URLSearchParams(window.location.search);var embed=q.get("embed");if(embed==="1"||embed==="true"||window.self!==window.top){document.documentElement.setAttribute("data-embed","true")}}catch(e){try{if(window.self!==window.top){document.documentElement.setAttribute("data-embed","true")}}catch(_){}}})();`;

export function EmbedDetect() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: embedDetectScript }}
    />
  );
}
