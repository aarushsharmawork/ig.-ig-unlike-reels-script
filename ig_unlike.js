    (async function executeExactMatchInstagramAutoUnlike() {                                                                     
        const CONFIG = {                                                                                                         
            TARGET_UNLIKES: 1000,                                                                                                
            BATCH_SIZE: 12,                                                                                                      
            CLICK_DELAY_MIN: 1.8,                                                                                                
            CLICK_DELAY_MAX: 2.8,                                                                                                
            BATCH_PAUSE_MIN: 14,                                                                                                 
            BATCH_PAUSE_MAX: 20,                                                                                                 
            LONG_PAUSE_INTERVAL: 4,                                                                                              
            LONG_PAUSE_MIN: 35,                                                                                                  
            LONG_PAUSE_MAX: 50                                                                                                   
        };                                                                                                                       
                                                                                                                                 
        const delay = ms => new Promise(r => setTimeout(r, ms));                                                                 
        const randomDelay = (minSec, maxSec) => delay(Math.floor((Math.random() * (maxSec - minSec) + minSec) * 1000));          
                                                                                                                                 
        let totalUnliked = 0, batchCount = 0;                                                                                    
                                                                                                                                 
        console.log("Starting Unlike Engine... (Developed by Aarush Sharma) Target: " + CONFIG.TARGET_UNLIKES + " | Batch: " +   
  CONFIG.BATCH_SIZE);                                                                                                            
                                                                                                                                 
        while (totalUnliked < CONFIG.TARGET_UNLIKES) {                                                                           
            batchCount++;                                                                                                        
            console.log("\n==================================================");                                                 
            console.log("Batch #" + batchCount + " | Total Unliked: " + totalUnliked + "/" + CONFIG.TARGET_UNLIKES);             
            console.log("==================================================");                                                   
                                                                                                                                 
            let selectBtn = Array.from(document.querySelectorAll('button, div[role="button"], span')).find(e => e.innerText && e.
  innerText.trim().toLowerCase() === 'select');                                                                                  
            let cancelBtn = Array.from(document.querySelectorAll('button, div[role="button"], span')).find(e => e.innerText && e.
  innerText.trim().toLowerCase() === 'cancel');                                                                                  
                                                                                                                                 
            if (selectBtn && !cancelBtn) {                                                                                       
                selectBtn.click();                                                                                               
                console.log("Activated Select mode...");                                                                         
                await randomDelay(2.5, 4.0);                                                                                     
            }                                                                                                                    
                                                                                                                                 
            let selectedInThisBatch = 0;                                                                                         
            const remainingToTarget = CONFIG.TARGET_UNLIKES - totalUnliked;                                                      
            const currentBatchLimit = Math.min(CONFIG.BATCH_SIZE, remainingToTarget);                                            
                                                                                                                                 
            for (let step = 0; step < currentBatchLimit; step++) {                                                               
                let gridElements = Array.from(document.querySelectorAll('img')).filter(img => {                                  
                    const rect = img.getBoundingClientRect();                                                                    
                    return rect.width > 80 && rect.height > 80 && rect.top > 0 && rect.top < window.innerHeight;                 
                });                                                                                                              
                                                                                                                                 
                if (gridElements.length <= step) {                                                                               
                    window.scrollBy(0, 350);                                                                                     
                    await randomDelay(2.0, 3.0);                                                                                 
                    gridElements = Array.from(document.querySelectorAll('img')).filter(img => {                                  
                        const rect = img.getBoundingClientRect();                                                                
                        return rect.width > 80 && rect.height > 80 && rect.top > 0 && rect.top < window.innerHeight;             
                    });                                                                                                          
                }                                                                                                                
                                                                                                                                 
                if (step >= gridElements.length) {                                                                               
                    console.log("Reached end of visible items for this batch.");                                                 
                    break;                                                                                                       
                }                                                                                                                
                                                                                                                                 
                const targetImg = gridElements[step];                                                                            
                const clickEl = targetImg.closest('div[role="button"]') || targetImg.closest('a') || targetImg.parentElement ||  
  targetImg;                                                                                                                     
                clickEl.click();                                                                                                 
                selectedInThisBatch++;                                                                                           
                console.log(" Selected item " + selectedInThisBatch + " of " + currentBatchLimit);                               
                await randomDelay(CONFIG.CLICK_DELAY_MIN, CONFIG.CLICK_DELAY_MAX);                                               
            }                                                                                                                    
                                                                                                                                 
            if (selectedInThisBatch === 0) {                                                                                     
                console.log("No items selected. Scrolling...");                                                                  
                window.scrollTo(0, document.body.scrollHeight);                                                                  
                await randomDelay(4.0, 6.0);                                                                                     
                continue;                                                                                                        
            }                                                                                                                    
                                                                                                                                 
            await randomDelay(2.0, 3.0);                                                                                         
                                                                                                                                 
            let bottomActionBtn = Array.from(document.querySelectorAll('button, div[role="button"], span')).filter(e => {        
                if (!e.innerText || !e.innerText.trim().toLowerCase().includes('unlike')) return false;                          
                const rect = e.getBoundingClientRect();                                                                          
                return rect.top > window.innerHeight * 0.5;                                                                      
            }).pop();                                                                                                            
                                                                                                                                 
            if (bottomActionBtn) {                                                                                               
                console.log("👉 [STEP 1] Clicked Bottom Action Button ('" + bottomActionBtn.innerText.trim() + "')");            
                bottomActionBtn.click();                                                                                         
                console.log("⏳ Pausing 2.0s for Pop-up Modal animation...");                                                    
                await delay(2000);                                                                                               
                                                                                                                                 
                let modalConfirmBtn = null;                                                                                      
                for (let attempt = 1; attempt <= 10; attempt++) {                                                                
                    let exactMatches = Array.from(document.querySelectorAll('button, div[role="button"], span')).filter(el => {  
                        const text = (el.innerText || el.textContent || '').trim().toLowerCase();                                
                        return text === 'unlike';                                                                                
                    });                                                                                                          
                    if (exactMatches.length > 0) {                                                                               
                        modalConfirmBtn = exactMatches[exactMatches.length - 1];                                                 
                        break;                                                                                                   
                    }                                                                                                            
                    await delay(500);                                                                                            
                }                                                                                                                
                                                                                                                                 
                if (modalConfirmBtn) {                                                                                           
                    console.log("🎯 [STEP 2 SUCCESS] Clicked EXACT Popup Confirmation Button ('" + modalConfirmBtn.innerText.    
  trim() + "')!");                                                                                                               
                    modalConfirmBtn.click();                                                                                     
                    totalUnliked += selectedInThisBatch;                                                                         
                    console.log("✅ [BATCH #" + batchCount + " COMPLETE] Unliked " + selectedInThisBatch + " reels! Total: " +   
  totalUnliked + "/" + CONFIG.TARGET_UNLIKES);                                                                                   
                    await randomDelay(4.0, 5.5);                                                                                 
                } else {                                                                                                         
                    console.log("❌ STEP 2 Failed: Exact Unlike button not found on modal.");                                    
                    break;                                                                                                       
                }                                                                                                                
            } else {                                                                                                             
                console.log("❌ STEP 1 Failed: Bottom action button not found.");                                                
                break;                                                                                                           
            }                                                                                                                    
                                                                                                                                 
            if (batchCount % CONFIG.LONG_PAUSE_INTERVAL === 0 && totalUnliked < CONFIG.TARGET_UNLIKES) {                         
                const restTime = Math.floor(Math.random() * (CONFIG.LONG_PAUSE_MAX - CONFIG.LONG_PAUSE_MIN) + CONFIG.            
  LONG_PAUSE_MIN);                                                                                                               
                console.log("☕ [Safety Pause] Resting for " + restTime + "s...");                                               
                window.scrollTo(0, document.body.scrollHeight);                                                                  
                await randomDelay(restTime, restTime + 2);                                                                       
            } else {                                                                                                             
                const pauseSec = Math.floor(Math.random() * (CONFIG.BATCH_PAUSE_MAX - CONFIG.BATCH_PAUSE_MIN) + CONFIG.          
  BATCH_PAUSE_MIN);                                                                                                              
                console.log("⏳ Pausing for " + pauseSec + "s before next batch...");                                            
                window.scrollTo(0, document.body.scrollHeight);                                                                  
                await randomDelay(pauseSec, pauseSec + 1);                                                                       
            }                                                                                                                    
        }                                                                                                                        
                                                                                                                                 
        console.log("Finished! Total unliked: " + totalUnliked);                                                                 
    })();  
