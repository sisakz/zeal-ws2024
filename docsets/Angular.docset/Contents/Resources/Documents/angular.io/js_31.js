window.__SCRIPTS_LOADED__ = {};!function(e){function d(d){for(var o,i,t=d[0],l=d[1],u=d[2],s=0,b=[];s<t.length;s++)i=t[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&b.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(c&&c(d);b.length;)b.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,d=0;d<r.length;d++){for(var n=r[d],o=!0,t=1;t<n.length;t++){var l=n[t];0!==a[l]&&(o=!1)}o&&(r.splice(d--,1),e=i(i.s=n[0]))}return e}var o={},a={1:0},r=[];function i(d){if(o[d])return o[d].exports;var n=o[d]={i:d,l:!1,exports:{}};return e[d].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var d=[],n=a[e];if(0!==n)if(n)d.push(n[2]);else{var o=new Promise((function(d,o){n=a[e]=[d,o]}));d.push(n[2]=o);var r,t=document.createElement("script");t.charset="utf-8",t.timeout=120,i.nc&&t.setAttribute("nonce",i.nc),t.src=function(e){return i.p+""+({0:"sharedCore",3:"shared~loader.DMDrawer~bundle.Compose~bundle.RichTextCompose~bundle.ComposeMedia~bundle.DirectMessages~bundle",4:"shared~loader.DMDrawer~bundle.Compose~bundle.RichTextCompose~bundle.DirectMessages~bundle.DMRichTextCompose~b",5:"shared~loader.AudioDock~bundle.AudioSpacePeek~bundle.AudioSpaceLoggedIn~loader.AudioContextSpaceMedia~loader.",6:"shared~bundle.MultiAccount~bundle.Login~bundle.LoggedOutHome~loader.SignupModule~ondemand.IntentPrompt",7:"shared~bundle.SettingsRevamp~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Settings~bundle.Settin",8:"shared~bundle.Compose~bundle.RichTextCompose~ondemand.ComposeScheduling~bundle.PlainTextCompose",9:"shared~loader.DMDrawer~bundle.DirectMessages~bundle.DMRichTextCompose~bundle.Report",10:"shared~loader.Typeahead~bundle.Communities~bundle.Explore~bundle.UserLists",11:"shared~bundle.Birdwatch~bundle.Explore~bundle.Topics",12:"shared~bundle.ComposeMedia~bundle.SettingsProfile~bundle.Ocf",13:"shared~bundle.Place~bundle.Search~bundle.QuoteTweetActivity",14:"shared~bundle.SettingsRevamp~bundle.AccountVerification~bundle.BadgeViolationsNotification",15:"shared~bundle.SettingsRevamp~bundle.SettingsTransparency~ondemand.SettingsInternals",16:"shared~loaders.video.VideoPlayerDefaultUI~loader.MediaPreviewVideoPlayer~loaders.video.VideoPlayerEventsUI",17:"relay-vendor~vendorFS",18:"shared~bundle.AudioSpacePeek~bundle.AudioSpaceLoggedIn",19:"shared~bundle.LoggedOutHome~loader.SignupModule",20:"shared~bundle.Settings~bundle.Display",21:"shared~bundle.TweetMediaDetail~bundle.UserAvatar",22:"shared~loader.DashMenu~bundle.Account",23:"shared~loader.Typeahead~bundle.Explore",24:"shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerEventsUI",25:"shared~ondemand.EmojiPickerData~ondemand.EmojiPicker",26:"shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer",27:"shared~ondemand.SettingsRevamp~ondemand.SettingsInternals",28:"bundle.AboutThisAd",29:"bundle.Account",30:"bundle.AccountVerification",31:"bundle.AdvancedSearch",32:"bundle.Articles",33:"bundle.AudioSpaceDetail",34:"bundle.AudioSpaceDiscovery",35:"bundle.AudioSpaceLoggedIn",36:"bundle.BadgeViolationsNotification",37:"bundle.Birdwatch",38:"bundle.Bookmarks",39:"bundle.Collection",40:"bundle.Communities",41:"bundle.Compose",42:"bundle.ComposeMedia",43:"bundle.ConnectTab",44:"bundle.Conversation",45:"bundle.ConversationParticipants",46:"bundle.DMRichTextCompose",47:"bundle.DirectMessages",48:"bundle.Display",49:"bundle.Download",50:"bundle.Explore",51:"bundle.ExploreTopics",52:"bundle.FollowerRequests",53:"bundle.GenericTimeline",54:"bundle.GifSearch",55:"bundle.HomeTimeline",56:"bundle.KeyboardShortcuts",57:"bundle.LiveEvent",58:"bundle.Login",59:"bundle.Logout",60:"bundle.Moment",61:"bundle.MomentMaker",62:"bundle.MultiAccount",63:"bundle.NetworkInstrument",64:"bundle.NewsLanding",65:"bundle.Newsletters",66:"bundle.NotMyAccount",67:"bundle.NotificationDetail",68:"bundle.Notifications",69:"bundle.OAuth",70:"bundle.Ocf",71:"bundle.Place",72:"bundle.PlainTextCompose",73:"bundle.ProfileRedirect",74:"bundle.QuoteTweetActivity",75:"bundle.ReaderMode",76:"bundle.Report",77:"bundle.RichTextCompose",78:"bundle.Search",79:"bundle.Settings",80:"bundle.SettingsBizProfile",81:"bundle.SettingsInternals",82:"bundle.SettingsProfessionalProfile",83:"bundle.SettingsProfile",84:"bundle.SettingsRevamp",85:"bundle.SettingsTransparency",86:"bundle.SmsLogin",87:"bundle.Topics",88:"bundle.Trends",89:"bundle.TweetActivity",90:"bundle.TweetActivityReactions",91:"bundle.TweetMediaDetail",92:"bundle.TweetMediaTags",93:"bundle.Twitterversary",94:"bundle.UserAvatar",95:"bundle.UserFollowLists",96:"bundle.UserLists",97:"bundle.UserMoments",98:"bundle.UserProfile",99:"bundle.UserRedirect",150:"loader.AbsolutePower",151:"loader.AppModules",152:"loader.AudioContextSpaceMedia",153:"loader.AudioContextVoiceMedia",154:"loader.AudioDock",155:"loader.AudioOnlyVideoPlayer",156:"loader.DMDrawer",157:"loader.DashMenu",158:"loader.ExploreSidebar",159:"loader.FeedbackSheet",160:"loader.FeedbackTombstone",161:"loader.HoverCard",162:"loader.MediaPreviewVideoPlayer",163:"loader.NewTweetsPill",164:"loader.PreviewActions",165:"loader.ProfileClusterFollow",166:"loader.PushNotificationsPrompt",167:"loader.SideNav",168:"loader.SignupModule",169:"loader.TimelineRenderer",170:"loader.TweetCurationActionMenu",171:"loader.Typeahead",172:"loader.WideLayout",173:"loader.directMessagesData",174:"loader.graphQLDarkReads",175:"loader.personalizationData",176:"loaders.video.PlayerHls13",177:"loaders.video.PlayerHls14",178:"loaders.video.VideoPlayerDefaultUI",179:"loaders.video.VideoPlayerEventsUI",181:"ondemand.Balloons",182:"ondemand.BranchSdk",183:"ondemand.CarouselScroller",184:"ondemand.ComposeScheduling",185:"ondemand.Dropdown",186:"ondemand.EditBirthdate",187:"ondemand.EditPinned",188:"ondemand.EmojiPicker",189:"ondemand.GraphQLModule",190:"ondemand.HoverCard",191:"ondemand.InlinePlayer",192:"ondemand.IntentPrompt",193:"ondemand.LottieWeb",194:"ondemand.ProfileSidebar",195:"ondemand.ReactBeautifulDnd",196:"ondemand.RichText",197:"ondemand.ScrollArticle",198:"ondemand.SettingsInternals",199:"ondemand.SettingsRevamp",200:"ondemand.UserProfileGraphQL",201:"ondemand.countries-ar",202:"ondemand.countries-bg",203:"ondemand.countries-bn",204:"ondemand.countries-ca",205:"ondemand.countries-cs",206:"ondemand.countries-da",207:"ondemand.countries-de",208:"ondemand.countries-el",209:"ondemand.countries-en",210:"ondemand.countries-en-GB",211:"ondemand.countries-es",212:"ondemand.countries-eu",213:"ondemand.countries-fa",214:"ondemand.countries-fi",215:"ondemand.countries-fil",216:"ondemand.countries-fr",217:"ondemand.countries-ga",218:"ondemand.countries-gl",219:"ondemand.countries-gu",220:"ondemand.countries-he",221:"ondemand.countries-hi",222:"ondemand.countries-hr",223:"ondemand.countries-hu",224:"ondemand.countries-id",225:"ondemand.countries-it",226:"ondemand.countries-ja",227:"ondemand.countries-kn",228:"ondemand.countries-ko",229:"ondemand.countries-mr",230:"ondemand.countries-ms",231:"ondemand.countries-nb",232:"ondemand.countries-nl",233:"ondemand.countries-pl",234:"ondemand.countries-pt",235:"ondemand.countries-ro",236:"ondemand.countries-ru",237:"ondemand.countries-sk",238:"ondemand.countries-sr",239:"ondemand.countries-sv",240:"ondemand.countries-ta",241:"ondemand.countries-th",242:"ondemand.countries-tr",243:"ondemand.countries-uk",244:"ondemand.countries-ur",245:"ondemand.countries-zh",246:"ondemand.countries-zh-Hant",247:"ondemand.emoji.ar",248:"ondemand.emoji.ar-x-fm",249:"ondemand.emoji.bg",250:"ondemand.emoji.bn",251:"ondemand.emoji.ca",252:"ondemand.emoji.cs",253:"ondemand.emoji.da",254:"ondemand.emoji.de",255:"ondemand.emoji.el",256:"ondemand.emoji.en",257:"ondemand.emoji.en-GB",258:"ondemand.emoji.en-ss",259:"ondemand.emoji.en-xx",260:"ondemand.emoji.es",261:"ondemand.emoji.eu",262:"ondemand.emoji.fa",263:"ondemand.emoji.fi",264:"ondemand.emoji.fil",265:"ondemand.emoji.fr",266:"ondemand.emoji.ga",267:"ondemand.emoji.gl",268:"ondemand.emoji.gu",269:"ondemand.emoji.he",270:"ondemand.emoji.hi",271:"ondemand.emoji.hr",272:"ondemand.emoji.hu",273:"ondemand.emoji.id",274:"ondemand.emoji.it",275:"ondemand.emoji.ja",276:"ondemand.emoji.kn",277:"ondemand.emoji.ko",278:"ondemand.emoji.mr",279:"ondemand.emoji.ms",280:"ondemand.emoji.nb",281:"ondemand.emoji.nl",282:"ondemand.emoji.pl",283:"ondemand.emoji.pt",284:"ondemand.emoji.ro",285:"ondemand.emoji.ru",286:"ondemand.emoji.sk",287:"ondemand.emoji.sr",288:"ondemand.emoji.sv",289:"ondemand.emoji.ta",290:"ondemand.emoji.th",291:"ondemand.emoji.tr",292:"ondemand.emoji.uk",293:"ondemand.emoji.ur",294:"ondemand.emoji.vi",295:"ondemand.emoji.zh",296:"ondemand.emoji.zh-Hant",297:"ondemand.framerateTracking"}[e]||e)+"."+{0:"448a8a5",3:"beaca86",4:"548253c",5:"2fa4508",6:"74d6127",7:"2575f8f",8:"0057e49",9:"a8e03a8",10:"7c27220",11:"ac92379",12:"c9fcc1f",13:"f80e984",14:"e8461ad",15:"c7e90fd",16:"e804917",17:"aaffd39",18:"61c962e",19:"06fedf6",20:"f7c2632",21:"f5c64d4",22:"66f2f81",23:"72368f3",24:"a9e8f09",25:"7a812d4",26:"3b85c62",27:"282aeac",28:"912f4a4",29:"1e96546",30:"ddbe99a",31:"ac003a9",32:"c4e3359",33:"f68bc73",34:"e68c676",35:"63370de",36:"941ed50",37:"83e8ce9",38:"7acb045",39:"7a8949a",40:"27cb86a",41:"055c993",42:"2721941",43:"c3c9ec1",44:"f461301",45:"c52fd1c",46:"09224e1",47:"8fb94de",48:"ce46515",49:"0561680",50:"4a7bcb9",51:"1c6ea34",52:"0cb6637",53:"1c9d5b2",54:"610523d",55:"079a136",56:"6512a3b",57:"721851e",58:"0d13efb",59:"a9a9dc8",60:"df83e61",61:"32f9329",62:"4d4e29e",63:"2cf1814",64:"40e1591",65:"d43c201",66:"ee38a59",67:"2b9bfbd",68:"1448a39",69:"2892727",70:"f820882",71:"1b24c2c",72:"dd1746f",73:"d3f680f",74:"081b832",75:"14101ea",76:"d5e7f74",77:"a03875d",78:"68813c0",79:"9f13a6f",80:"b2d1c62",81:"ac0e759",82:"e9d9d71",83:"5656be0",84:"feb922c",85:"0246d8a",86:"94e5370",87:"44c84a5",88:"c082bb9",89:"0c05592",90:"85a5a95",91:"c413346",92:"e5fe580",93:"07a8461",94:"5e1763e",95:"9503749",96:"3edd3dd",97:"db926a8",98:"0a1431e",99:"977dded",150:"cd29fc0",151:"b6bcfa2",152:"5e9eba3",153:"79090e6",154:"7704773",155:"3e157be",156:"3519345",157:"d1b394b",158:"4edd42f",159:"543cac6",160:"7932b00",161:"e118f21",162:"d203a18",163:"348eb3c",164:"4d89549",165:"bd726a2",166:"42502f0",167:"30b445c",168:"e7976c3",169:"9f731f3",170:"4d0f0ac",171:"ab1d5bb",172:"df80680",173:"6b594ec",174:"45dc7bd",175:"deb923a",176:"21d0cac",177:"8c9f590",178:"86061db",179:"eb296fd",181:"2ff43ce",182:"82d2759",183:"154e761",184:"a6d40f6",185:"d221903",186:"8e77e95",187:"bcd3ba3",188:"db28dd0",189:"37be9fb",190:"0e410ac",191:"42451e2",192:"5122180",193:"2337fd0",194:"aadf833",195:"0401977",196:"826b101",197:"12072b8",198:"f682896",199:"fee9501",200:"45096a2",201:"739940e",202:"c76bfc6",203:"1c9f320",204:"b2b53ef",205:"29850ed",206:"4d6bcf5",207:"4d7acb8",208:"e606066",209:"c563611",210:"197e4ad",211:"aa97567",212:"2769c3e",213:"dfb77e4",214:"830beee",215:"eab798f",216:"656a23f",217:"14f8cc5",218:"c0f4963",219:"7f0849e",220:"6206cff",221:"6c765b8",222:"281b2f0",223:"6a1dfc5",224:"9640c17",225:"2e052bf",226:"c6f704f",227:"d1be6d2",228:"0cbc176",229:"9617d78",230:"416a896",231:"202468e",232:"9231133",233:"4c182e6",234:"e8c1890",235:"e53f98e",236:"f4c8e87",237:"e68dd7f",238:"4a63a4e",239:"20f488f",240:"644bf5d",241:"3ece140",242:"da245db",243:"11aea2b",244:"6ba1629",245:"efb7d40",246:"e115abc",247:"85cebbc",248:"3535773",249:"be89782",250:"208fc2a",251:"c53ed32",252:"25334a2",253:"f7773d0",254:"bfffd91",255:"ae0e7ad",256:"2472849",257:"477f30b",258:"1f0fcd8",259:"61708f2",260:"7ee1651",261:"ac7bf96",262:"5b67ab7",263:"16781f6",264:"c43be41",265:"1386312",266:"d83b5ce",267:"0bfdc34",268:"fc4ce04",269:"82daa88",270:"9e0b08d",271:"d1c47cb",272:"41d6c61",273:"9a3da8f",274:"4c5513f",275:"bc8d454",276:"e32a6d1",277:"bd153df",278:"bba0a54",279:"e66e6ce",280:"03e2c11",281:"7b3140d",282:"c427d56",283:"7ff487c",284:"5feaa69",285:"0863b1e",286:"b60c45e",287:"288d332",288:"9276aee",289:"2128ffb",290:"0ffb905",291:"0e79e80",292:"be6a066",293:"518e97c",294:"c50b601",295:"c394856",296:"99c8f93",297:"d3184af"}[e]+"5.js"}(e);var l=new Error;r=function(d){t.onerror=t.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var o=d&&("load"===d.type?"missing":d.type),r=d&&d.target&&d.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}a[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:t})}),12e4);t.onerror=t.onload=r,document.head.appendChild(t)}return Promise.all(d)},i.m=e,i.c=o,i.d=function(e,d,n){i.o(e,d)||Object.defineProperty(e,d,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,d){if(1&d&&(e=i(e)),8&d)return e;if(4&d&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&d&&"string"!=typeof e)for(var o in e)i.d(n,o,function(d){return e[d]}.bind(null,o));return n},i.n=function(e){var d=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(d,"a",d),d},i.o=function(e,d){return Object.prototype.hasOwnProperty.call(e,d)},i.p="https://abs.twimg.com/responsive-web/client-web-legacy/",i.oe=function(e){throw e};var t=window.webpackJsonp=window.webpackJsonp||[],l=t.push.bind(t);t.push=d,t=t.slice();for(var u=0;u<t.length;u++)d(t[u]);var c=l;n()}([]),window.__SCRIPTS_LOADED__.runtime=!0;
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/runtime.209d19b5.js.map