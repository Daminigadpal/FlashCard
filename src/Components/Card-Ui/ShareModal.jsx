import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-daisyui";
import {
    FacebookShareButton,
    // FacebookIcon,
    LinkedinShareButton,
    // LinkedinIcon,
    TelegramShareButton,
    // TelegramIcon,
    TwitterShareButton,
    // TwitterIcon,
    WhatsappShareButton,
    // WhatsappIcon,
    EmailShareButton,
    // MailruIcon,
  } from 'react-share';
  import { TbCopy } from "react-icons/tb";
  import { IoMdClose } from "react-icons/io";
  import { BsShare } from "react-icons/bs";
  import Whatsapp from "../../Assets/whatsapp-icon.svg";
  import Facebook from "../../Assets/facebook-icon.svg";
  import Twitter from "../../Assets/twitter-icon.svg";
  import LinkedIn from "../../Assets/linkedin-icon.svg";
  import Mail from "../../Assets/mail-icon.svg";
  
  
  

import CopyToClipboard from "react-copy-to-clipboard";

const ShareModal = ({isOpen, closeModal}) => {
    // const title = `${document.title} | Advanced Dontpad`;
    const url = window.location.href;
    // const iconSize = 48;

    const [isCopied, setIsCopied] = useState(false);
    // const [share, setShare] = useState("none"); //state for share button

    // const shareHandlerClose = () => {
    //   setShare("none");
      
    // };
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      } else {
        document.body.style.overflow = ''; // Restore scrolling when modal is closed
      }
  
      // Cleanup the overflow style when the component unmounts
      return () => {
        document.body.style.overflow = '';
      };
    }, [isOpen]);

    
    useEffect(() => {
        isCopied &&
          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
      }, [isCopied]);

    

      // const handleCopy = () => {
      //   setIsCopied(true);
      // };
   
    return (
      <div >
      <div >
        <Modal
          open={isOpen}
          onClickBackdrop={closeModal}
          dataTheme="light"
        >
          <Modal.Header className="font-bold">Share</Modal.Header>
          <Modal.Body>
            <div className="m-5 flex flex-col ">
              <Button
                size="sm"
                shape="circle"
                className="absolute right-2 top-2 bg-white border-none text-slate-700 text-2xl font-bold shadow-lg"
                onClick={() => {
                  setIsCopied(false);
                  closeModal();
                }}
              >
                <IoMdClose
                  onClick={closeModal}
                  className="absolute text-slate-500 right-3 top-3 text-2xl cursor-pointer"
                />
              </Button>

              <div className="flex items-center space-x-3">
                <p className="flex items-center flex-1 border-2 p-2 text-xs text-slate-500 border-slate-300 rounded-md border-dashed">
                  Link:
                  <span className="mx-2 font-semibold text-xs overflow-x-hidden text-black">
                    {url}
                  </span>
                </p>

                <CopyToClipboard text={url} onCopy={() => setIsCopied(true)}>
                  <TbCopy className="text-xl text-slate-500 scale-x-[-1] cursor-pointer" />
                </CopyToClipboard>

                <BsShare className="text-xl text-slate-500 cursor-pointer" />
              </div>
              <h2 className="p-2 h-5 ml-3 text-sm text-green-500 font-semibold">
                {isCopied && "Link copied to clipboard"}
              </h2>
              <div className="mt-6 flex items-center space-x-10 justify-center">
                <WhatsappShareButton url="https://web.whatsapp.com/">
                  <img
                    src={Whatsapp}
                    alt="Whatsapp"
                    className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                </WhatsappShareButton>
                <FacebookShareButton url="https://www.facebook.com/">
                  <img
                    src={Facebook}
                    alt="facebook"
                    className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                </FacebookShareButton>
                <TwitterShareButton url="https://twitter.com/">
                  <img
                    src={Twitter}
                    alt="Twitter"
                    className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                </TwitterShareButton>
                <LinkedinShareButton url="https://www.linkedin.com/">
                  <img
                    src={LinkedIn}
                    alt="Linkedin"
                    className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                </LinkedinShareButton>

                <EmailShareButton url="https://gmail.com/">
                  <img
                    src={Mail}
                    alt="Mail"
                    className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                </EmailShareButton>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      </div>
    );
   }

   export default ShareModal;