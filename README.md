# instagram-unlike-script
# this Javascript unlikes the reels from instagram (made for chrome and for all mac,windows & linux)
#this Javascript is made by aarush and backedup by google antigravity AI.
# This script has been tested and worked on MACos 26 tahore
# The in_unlike is the safest script while ig_unlike_unsafe is not the safest one and also makes websites buggy for certain OS

# How to run this script
step-1 open chrome://extensions/ and enable developer option in top right corner.
step-2 visit https://www.instagram.com/your_activity/interactions/likes/ in new tab
step-3 open console on chrome (using ctrl-shift-j for windows and cmd-option-j for MacOS).
step-4 write allow pasting in console and press enter
step-5 type allow pasting in console
step-6 paste the script and press enter
step-7 let the tab be open until the action is done 

## About This Project

The idea for this project came from a friend who is a digital creator with a public Instagram profile. He wanted to remove previously liked Reels and posts that reflected personal interests so that his public activity better aligned with the content he wanted to share professionally. While helping him, I realized that Instagram doesn't provide a built-in way to bulk unlike liked content, making the process unnecessarily repetitive and time-consuming. I also wanted the same functionality for my own account, where I had accumulated thousands of liked Reels over time and I also wanted to switch my Instagram ID to professional ID for my further goals  . This project was built to address that gap by automating a task that would otherwise require hours of manual effort.

After digging around, I found I wasn't alone — a lot of people online felt the same way. I also came across paid tools like [unlikeall.com](https://www.unlikeall.com/) that charge a fee to do exactly this. So I built my own version instead, and decided to make it free, open-source, and transparent about how it works — no hidden fees, no account credentials sent to a third-party server, and no black-box logic.

Compared to paid alternatives, this project is:

- **Free** — no subscription or one-time fee
- **Open-source** — you can read exactly what the code does before running it
- **Self-hosted** — runs locally, so your login credentials never leave your machine
- **Customizable** — modify the unlike speed, limits, or targeting logic to fit your needs


# Safety Features
   1. Anti-Detection & Account Protection Engine                                             
                                                                                                   
  • Human-like Variable Delays (Jitter): Unlike basic scripts that click at exact robotic intervals
  (e.g. every 500ms), this script introduces randomized micro-variations (1.8s–2.8s per click) to  
  mirror genuine human pacing.                                                                     
  • Automated "Coffee Breaks": Takes periodic extended rests (35–50 seconds) every 4 batches,      
  preventing your account from triggering Instagram's automated velocity flags.                    
  • Controlled Batch Architecture: Processes items in small 12-item batches rather than attempting 
  thousands at once, staying well within safe API thresholds.                                      
  ──────                                                                                           
  ### 2. Spatial & Exact-Match Element Targeting                                                
                                                                                                   
  • Exact String Filter (text === 'unlike'): Strictly targets the red confirmation button while    
  completely ignoring static header titles ("Unlike posts?") and bottom bar counters ("Unlike      
  (12)").                                                                                          
  • Viewport Geometry Filtering: Uses screen coordinates (rect.top > 50%) to distinguish the bottom
  floating action bar from center pop-up modals.                                                   
  • Image Dimension Thresholding: Automatically filters out profile avatars, stories, and          
  navigation icons by detecting only actual post/reel thumbnails (width > 80px && height > 80px).  
  ──────                                                                                           
  ### 3. State Resiliency & DOM Auto-Recovery                                                   
                                                                                                   
  • Dynamic Re-Querying (Zero Stale Elements): Re-evaluates elements before every single click     
  rather than storing fixed arrays. This prevents crashes caused by Instagram's React UI re-       
  rendering blue checkmark overlays.                                                               
  • Mid-Batch Viewport Auto-Scrolling: If fewer than 12 reels are currently visible on screen, the 
  script automatically scrolls down 300px mid-batch to locate and process the remaining items.     
  • Pre-Batch Modal Reset: Automatically detects and resolves lingering pop-ups from previous runs 
  before starting a new cycle.                                                                     
  ──────                                                                                           
  ### 4. Cross-Platform & Zero-Install Simplicity                                               
                                                                                                   
  • Native Browser Execution: Runs directly inside Chrome Developer Console on macOS, Windows,     
  Linux, and ChromeOS—no Python, node modules, or third-party extensions required.                 
  • Pure ASCII Packaging: Formatted as a single-line pure ASCII block to eliminate invisible non-  
  breaking space errors (SyntaxError) during copy-pasting.                                         
  ──────                                                                                           
  ### 📊 Feature Comparison Matrix                                                                 
                                                                                                   
   Feature                      │     Standard Basic Scripts     │      This Optimized Script
  ──────────────────────────────┼────────────────────────────────┼─────────────────────────────────
   Execution Delay              │ Fixed / Instant (Triggers Bot  │      🎲 Randomized Jitter
                                │             Flag)              │           (1.8s–2.8s)
   Safety Rest Breaks           │              None              │    ☕ Automated 35s–50s Rest
                                │                                │            Intervals
   React Re-render Support      │   Fails (Stale DOM Elements)   │   🔄 Dynamic Re-Querying Per
                                │                                │              Click
   Pop-up Confirmation Handling │   Gets Stuck / Misses Popup    │   🎯 Strict text === 'unlike'
                                │                                │            Targeting
   Grid Detection               │    Unreliable URL Matching     │  📐 Image Dimension Filtering
                                │                                │             (>80px)
   Cross-Platform Compatibility │             Varies             │ 💻 100% Chrome (Mac & Windows)




#USE RESPONSIBLY — AUTOMATION SAFETY BANNER                                              
  │                                                                                                
  │ This script automates browser interactions on Instagram Web. Use this script responsibly and in
  │ compliance with Instagram's Community Guidelines. Overusing browser automation can trigger     
  │ automated account safety mechanisms.                                                           
  ──────                                                                                           
  ### ⚠️ Potential Risks & Impact Matrix                                                           
                                                                                                   
   Risk Factor            │ Risk L… │ Description & Consequence    │ Mitigation Built Into Script
  ────────────────────────┼─────────┼──────────────────────────────┼───────────────────────────────
   Temporary Action Block │   🟡    │ Instagram may temporarily    │ Script uses dynamic 12-item
                          │ Medium  │ restrict your account from   │ batching with randomized
                          │         │ liking or unclicking posts   │ pauses.
                          │         │ for 24 to 48 hours if action │
                          │         │ thresholds are exceeded.     │
   Automated Bot Flagging │ 🟠 High │ Performing thousands of      │ Script implements randomized
                          │         │ actions per hour without     │ click delays (1.8s–2.8s) &
                          │         │ human delays can trigger     │ rest intervals.
                          │         │ Instagram's anti-bot system, │
                          │         │ requiring a CAPTCHA          │
                          │         │ verification or password     │
                          │         │ reset.                       │
   Session Invalidation   │ 🟢 Low  │ Closing the browser tab or   │ Safe to stop at any time by
                          │         │ navigating away while the    │ refreshing the page (Cmd + R
                          │         │ script is running will halt  │ or Ctrl + R).
                          │         │ execution. Unliked posts up  │
                          │         │ to that point remain         │
                          │         │ unliked.                     │


  ──────                                                                                           
  ### Best Practices for Safe Account Operation                                                 
                                                                                                   
  1. Recommended Daily Limits:                                                                     
      • Do not exceed 300–1000 unlikes per day.                                                     
      • If you have thousands of reels to unlike, spread them across 3 to 4 days rather than       
      running them all in a single session.                                                        
  2. Leave the Tab in the Background:                                                              
      • Keep the Instagram Chrome tab active in its own window while the script runs. Do not       
      minimize the window completely, as Chrome may throttle JavaScript timers in background tabs. 
  3. What to Do If an "Action Blocked" Alert Appears:                                              
      • If Instagram displays a pop-up saying "Try again later" or "Action Blocked":               
          1. Immediately refresh the Chrome page (Ctrl + R / F5) to stop the script.                
          2. Wait 24 hours before running the script again.
## Disclaimer and user responsiblity
  1. AS-IS SOFTWARE: Provided without warranties of any kind.                                  

     2. NO LIABILITY: The author/owner is NOT liable for any account blocks,                        
       restrictions, or damages resulting from the use of this script.                             
    3. AT YOUR OWN RISK: Execution and account management remain the user's responsibility.
    4. Any unlawful activity or privacy harming shall not be tolerateds
