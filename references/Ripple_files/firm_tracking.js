(function(w){
  var config = {"metricsLabels":{"contentBoards":"TR Content Board","personalizations":"TR Personalization","audiences":"TR Audience","campaigns":"TR Campaign"},"hitTypes":{"contentBoards":"event","audiences":"event","personalizations":"event","campaigns":"event"},"shouldTrackOrgAssets":true,"firmTrackProvider":"ga","triblioVisitorId":"A3LubdowskzCuOjLb1sJJvpY","gaObjectAlias":"ga"};
  var triblioVisitorId = config.triblioVisitorId;
  var firmographicRecord =  {"name":"TPG Internet, Pty Ltd","sicCode":48,"isIsp":"N/A","employees":"5,000 to 10,000","revenue":"$500,000,000 to $1,000,000,000","country":"Australia","domain":"tpg.com.au","naicCode":517,"employeesCode":9,"revenueCode":8,"region":"New South Wales","city":"North Sydney","subIndustry":"Telecommunications","industry":"Telecommunications"};
  var shouldTrackOrgAssets = config.shouldTrackOrgAssets;
  var eIdsToNames = {"personalizations":{"RbzP":"GA-SP-PT","jqK8":"Target List"},"campaigns":{"v2P5":"GA-SP-PT","jzq8":"LinkedIn"},"contentHubs":{},"audiences":{"6455":"Demo - First Stage","aEWG":"Testing - SP 2 (Accounts and Domain)","nXwY":"ODL TOFU UK","BGgk":"Salesforce Audience","2Dqq":"Example - Account Lists","Aw1e":"Example - Visitor Behavior","Qm1G":"2020 Named Accounts","16lw":"Ripple Swell Global 2021","m34e":"Spain and Portugal","zp2m":"Portugal/Spain Accounts (Salesforce Report)","7q1X":"Large Payment Provider, UK","Ygb5":"NAL, US","4ZbB":"ODL TOFU AUS","O0lj":"ODL TOFU AUS and UK","9KPK":"No One Test Audience","zXPE":"Receive into Brazil Inbound 2022Q3","Pjgv":"Demo Audience","8DLM":"Demo","PJbw":"NewValueReprt-Q1'22-APAC-PSP","bPbL":"CONT-NewValueReprt-Q1'22-APAC-Banks","QAzL":"CONT-NewValueReprt-Q1'22-AMER-Bank","zRlL":"CONT-NewValueReprt-Q1'22-AMER-PSP","O4eZ":"Customers (excluding SCP senders)","xABD":"Testing - SP (Account List Type)","O0D5":"Testing - SP 3 (Visitor Behavior)","5vM2":"Demo - Third Stage","6D9g":"test","k13j":"NewValueReprt-Q1'22-EMEA-PSP","BleK":"CONT-NewValueReprt-Q1'22-EMEA-Bank","Pzew":"Sales-Banks-Eastern Europe/Middle East","36OK":"Small Payment Provider, US","gjp6":"Large + Small NAL, UK","JnoE":"@DataSync","BRQD":"Small Bank, AUS","l1do":"RoR Visitors - Azimo PH","jPwa":"Sales Target Accounts","G0j7":"NAL, AUS","GQ8k":"Prospects-No Active Opps-Top Sender Markets","9K5m":"[For Smart Pages] 2020Q3-BR/Rendimento Senders-Adri","3XL8":"[For Smart Pages] 2020Q3-BR/Rendimento Senders-Omar","Rjb6":"[For Smart Pages] 2020Q3-TH/SCB Senders-Zach","egL6":"[For Smart Pages] 2020Q3-TH/SCB Senders-Omar","lKbw":"2020Q3 - Thailand/SCB Senders, All","ple9":"2020Q3 - Brazil/Rendimento Senders, All","ApWe":"Everyone","Qnw4":"Visitor Behavior","DaGZ":"2020 Q3 Nigeria Senders","ApEo":"Large Bank, US","nq1O":"Prospect Accounts in Salesforce","gK7d":"[For Smart Pages] 2020Q3 - TH/SCP Senders - Jessie","blbR":"Prospects w/ Active Deals (excluding SCP senders)","5aP4":"LinkedIn - First Stage","ekKb":"TEST - First Stage","4lYM":"TEST - Second Stage","jQx3":"TEST - Third Stage","kqxL":"TEST - Fourth Stage","8jxd":"SINGLE_ASSET_Suppress List for Google","0xw1":"Swell Global 2022 Audiences","3LkX":"Liquidity Hub Awareness audience list","2aLv":"ODL Suppression List","XOvL":"ODL Opps MOFU","pE3K":"Google Segment test - First Stage","xlqZ":"SINGLE_ASSET_TEST","w1d1":"Tier 1 and Tier 2 Central Banks List"}};
  var gaObjectAlias = config.gaObjectAlias;
  var thirdPartyLibraryLoaded = false;

  if(!w.Triblio){ w.Triblio = {}; }
  if(w.Triblio.onAccountIdentificationReady){ w.Triblio.onAccountIdentificationReady(firmographicRecord); }
  w.Triblio.getAccountIdentification = function(){
    return firmographicRecord;
  };

  if(!w.TriblioAssetNameTracking) w.TriblioAssetNameTracking = {queued:[]};

  function GATracker(){
    this.maxRetries = 1000;
    this.retryCount = 0;
  }

  GATracker.prototype.run = function(){
    var that = this;

    this.waitForThirdParty(function(){
      that.postFirmographicData();

      that.checkAssetNamesQueue();
    });
  };

  GATracker.prototype.waitForThirdParty = function(callback){
    var that = this;

    if(typeof w[gaObjectAlias] === "undefined" && this.retryCount <= this.maxRetries){
      /*wait for ga to load*/
      setTimeout(function(){
        that.retryCount++;
        that.waitForThirdParty(callback);
      }, 5);
    }
    else if(this.retryCount > this.maxRetries){
      console.log("cant find google analytics library on page!");
    }
    else{
      thirdPartyLibraryLoaded = true;
      callback();
    }
  };

  GATracker.prototype.postFirmographicData = function(){
    var data = {"name":"TPG Internet, Pty Ltd","sicCode":48,"isIsp":"N/A","employees":"5,000 to 10,000","revenue":"$500,000,000 to $1,000,000,000","country":"Australia","domain":"tpg.com.au","naicCode":517,"employeesCode":9,"revenueCode":8,"region":"New South Wales","city":"North Sydney","subIndustry":"Telecommunications","industry":"Telecommunications"};
window[gaObjectAlias](function(){
                  window[gaObjectAlias].getAll().forEach(function(tracker){
                    if(tracker.get("trackingId") && tracker.get("trackingId") === "UA-45576805-1"){
                tracker.set("dimension2", data.name);
tracker.set("dimension3", data.industry);
tracker.set("dimension4", data.subIndustry);
tracker.set("dimension6", data.revenueCode);
tracker.set("dimension10", data.city);
tracker.set("dimension11", data.region);
tracker.set("dimension12", data.country);
tracker.set("dimension20", data.domain);
tracker.set("dimension1", data.isIsp);
tracker.set("dimension5", "N/A");
tracker.set("dimension7", "N/A");
tracker.set("dimension8", "N/A");
tracker.set("dimension9", "N/A");

                      tracker.send("event", {nonInteraction: true});
                    }
                  });
                });
  };

  GATracker.prototype.checkAssetNamesQueue = function(){
    var that = this;

    if(w.TriblioAssetNameTracking.queued){
      w.TriblioAssetNameTracking.queued.forEach(function(ids){
        that.postAssetNames(ids);
      });
    }
  };

  GATracker.prototype.postAssetNames = function(ids){
    if(shouldTrackOrgAssets && thirdPartyLibraryLoaded){
      var data = _getAssetNamesFromIds(ids);

      data.forEach(function(d){
      window[gaObjectAlias]("send",{
        "hitType": d.hitType,
        "eventCategory": d.metricsLabel,
        "eventLabel": d.name,
        "nonInteraction": true
      });
    });
  
    }
  };

  function _getAssetNamesFromIds(data){
    /*currently there is no click tracking on assets for ga, so get out of here!*/
    if(data.action === 'click') return [];

    var lookup = eIdsToNames;
    if(!lookup || !Object.keys(lookup).length){
      lookup = {personalizations:{}, contentHubs: {}, audiences:{}, campaigns:{}};
    }

    var names = [];
    var isTypeBoardAndHasData = data.hubId && lookup.contentHubs[data.hubId];

    if(isTypeBoardAndHasData){
      names.push({
        metricsLabel:config.metricsLabels.contentBoards,
        name: lookup.contentHubs[data.hubId],
        hitType: config.hitTypes.contentBoards
      });
    }
    else if(data.type !== "board" && data.personalizationId && data.audienceSegmentId && data.campaignId){
      var personalizationIds = data.personalizationId.split(",");
      var audienceSegmentIds = data.audienceSegmentId.split(",");
      var campaignIds = data.campaignId.split(",");

      personalizationIds.forEach(function(pId, index){
        var hasPersonalization = (personalizationIds[index] && lookup.personalizations[personalizationIds[index]]) ? true : false;
        var hasAudience = (audienceSegmentIds[index] && lookup.audiences[audienceSegmentIds[index]]) ? true : false;
        var hasCampaign = (campaignIds[index] && lookup.campaigns[campaignIds[index]]) ? true : false;

        if(hasPersonalization && hasAudience && hasCampaign){
          names.push({
            metricsLabel:config.metricsLabels.personalizations,
            name: lookup.personalizations[personalizationIds[index]],
            hitType: config.hitTypes.personalizations
          });

          names.push({
            metricsLabel: config.metricsLabels.campaigns,
            name: lookup.campaigns[campaignIds[index]],
            hitType: config.hitTypes.campaigns
          });

          names.push({
            metricsLabel: config.metricsLabels.audiences,
            name: lookup.audiences[audienceSegmentIds[index]],
            hitType: config.hitTypes.audiences
          });
        }
      });
    }
    return names;
  }

  var tracker = new GATracker();
  w.TriblioAssetNameTracking.postAssetNames = tracker.postAssetNames;

  tracker.run();
}(window));