import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './button';
import { FaTimes, FaEnvelope, FaCopy, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const ContactModal = ({ isOpen, onClose }) => {
  const [copiedField, setCopiedField] = useState(null);
  
  const contactInfo = {
    email: 'guptadhananjay090@gmail.com',
    linkedin: 'https://www.linkedin.com/in/dhananjay-g/',
  };
  
  const handleCopyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }).catch(() => {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
      } catch (err) {
        console.error('Copy failed');
      }
      document.body.removeChild(textarea);
    });
  };
  
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn" }
    }
  };
  
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Contact Card Modal */}
          <motion.div
            className="relative w-full max-w-md bg-secondary-background border-4 border-border rounded-base shadow-shadow"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b-4 border-border">
              <h2 className="text-2xl font-bold">Get In Touch</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-main/10 rounded-base border-2 border-border hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
            
            {/* Contact Information */}
            <div className="p-6 space-y-4">
              <p className="text-foreground/70 text-sm mb-6">
                Feel free to reach out through any of these channels. I'd love to hear from you!
              </p>
              
              {/* Email */}
              <div className="bg-background border-2 border-border rounded-base p-4 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-main/20 rounded-base border-2 border-border flex items-center justify-center">
                      <FaEnvelope className="w-4 h-4 text-main" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">Email</h3>
                      <p className="text-foreground/80 text-sm">{contactInfo.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopyToClipboard(contactInfo.email, 'email')}
                    className="p-2 hover:bg-main/10 rounded-base border-2 border-border hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                    title="Copy email address"
                  >
                    {copiedField === 'email' ? (
                      <span className="text-green-600 text-xs font-bold">✓</span>
                    ) : (
                      <FaCopy className="w-3 h-3" />
                    )}
                  </button>
                </div>
              </div>
              
              {/* LinkedIn */}
              <div className="bg-background border-2 border-border rounded-base p-4 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-base border-2 border-border flex items-center justify-center">
                      <FaLinkedin className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">LinkedIn</h3>
                      <p className="text-foreground/80 text-sm">Professional Network</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => window.open(contactInfo.linkedin, '_blank')}
                      className="px-3 py-1 text-xs font-bold bg-blue-600 text-white rounded-base border-2 border-blue-700 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                    >
                      Visit
                    </button>
                    <button
                      onClick={() => handleCopyToClipboard(contactInfo.linkedin, 'linkedin')}
                      className="p-2 hover:bg-main/10 rounded-base border-2 border-border hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                      title="Copy LinkedIn URL"
                    >
                      {copiedField === 'linkedin' ? (
                        <span className="text-green-600 text-xs font-bold">✓</span>
                      ) : (
                        <FaCopy className="w-3 h-3" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Microsoft Teams
              <div className="bg-background border-2 border-border rounded-base p-4 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-base border-2 border-border flex items-center justify-center">
                      <FaVideo className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">Microsoft Teams</h3>
                      <p className="text-foreground/80 text-sm">{contactInfo.teams}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopyToClipboard(contactInfo.teams, 'teams')}
                    className="p-2 hover:bg-main/10 rounded-base border-2 border-border hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                    title="Copy Teams contact"
                  >
                    {copiedField === 'teams' ? (
                      <span className="text-green-600 text-xs font-bold">✓</span>
                    ) : (
                      <FaCopy className="w-3 h-3" />
                    )}
                  </button>
                </div>
              </div> */}
              
              {/* Copy Feedback */}
              {copiedField && (
                <div className="text-center">
                  <span className="text-green-600 text-sm font-bold">
                    ✅ Copied to clipboard!
                  </span>
                </div>
              )}
              
              {/* Close Button */}
              <div className="pt-4">
                <Button
                  onClick={onClose}
                  className="w-full"
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;