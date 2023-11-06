import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
  } from 'react-share';

import CopyToClipboard from "react-copy-to-clipboard";

const ShareModal = () => {
    const title = `${document.title} | Advanced Dontpad`;
    const url = window.location.href;
    const iconSize = 48;

    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        isCopied &&
          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
      }, [isCopied]);

      const handleCopy = () => {
        setIsCopied(true);
      };
   
    return (
        <div className="ShareButtons">
        <CopyToClipboard text="Text to copy to clipboard" onCopy={handleCopy}>
        <button>Copy to Clipboard</button>
      </CopyToClipboard>
      {isCopied && <div>Copied to clipboard!</div>}
        <WhatsappShareButton url={url} title="share on WhatsApp">
          <button>
            <WhatsappIcon size={iconSize} round />
          </button>
        </WhatsappShareButton>
        <FacebookShareButton url={url} title="share on Facebook">
          <button>
            <FacebookIcon size={iconSize} round />
          </button>
        </FacebookShareButton>
        <TwitterShareButton url={url} title="share on Twitter">
          <button>
            <TwitterIcon size={iconSize} round />
          </button>
        </TwitterShareButton>
        <TelegramShareButton url={url} title="share on Telegram">
          <button>
            <TelegramIcon size={iconSize} round />
          </button>
        </TelegramShareButton>
        <LinkedinShareButton url={url} title="share on LinkedIn">
          <button>
            <LinkedinIcon size={iconSize} round />
          </button>
        </LinkedinShareButton>
      </div>
    );
   }

   export default ShareModal;