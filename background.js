chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    color: 'LightGreen'
  }, () => {
    console.log('The color is light green.')
  })
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [ new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'developer.chrome.com' }
      })],
      actions: [ new chrome.declarativeContent.ShowPageAction() ]
    }])
  })
})
