(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(13),r=(n(28),n(3)),i=n(10),o=n(9),l=n.n(o),s=n(8),u=n.n(s),m=n(7),p=n.n(m),d=n(6),b=n.n(d),h=n(5),j=n.n(h),O=function(e){function t(){return l()(this,t),p()(this,b()(t).apply(this,arguments))}return j()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.className,c=e.children;return Object(a.createElement)("section",{className:"bluehost-home-section "+n},c&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)("h2",null,t),Object(a.createElement)("section",{className:"bordered-box"},c)))}}]),t}(a.Component),f=n(4),E=function(e){function t(){return l()(this,t),p()(this,b()(t).apply(this,arguments))}return j()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.icon,n=e.iconSize,c=e.title,r=e.desc,i=e.className,o=e.children;return Object(a.createElement)("div",{className:"bluehost-home-section-row pure-g "+i},Object(a.createElement)("div",{className:"pure-u-1 pure-u-sm-1-2 details"},Object(a.createElement)("h3",null,Object(a.createElement)(f.Dashicon,{icon:t||"",size:n})," ",Object(a.createElement)("span",{className:"title"},c)),Object(a.createElement)("p",null,r)),Object(a.createElement)("div",{className:"pure-u-1 pure-u-sm-1-2 action"},o))}}]),t}(a.Component),g=location.origin+"/wp-admin/",_="endurance-wp-module-admin-app",w=function(){return Object(a.createElement)(E,{icon:"admin-post",title:Object(r.__)("Blog Posts",_),desc:Object(r.__)("Add blog posts or organize existing pages.",_)},Object(a.createElement)(i.a,{href:g+"post-new.php",isDefault:!0},"New Post"),Object(a.createElement)(i.a,{href:g+"edit-tags.php?taxonomy=category",isLink:!0},"Manage Categories"))},y=function(){return Object(a.createElement)(E,{icon:"admin-page",title:Object(r.__)("Pages",_),desc:Object(r.__)("Add fresh pages to your website.",_)},Object(a.createElement)(i.a,{href:g+"post-new.php?post_type=page",isDefault:!0},"New Page"))},v=function(){return Object(a.createElement)(E,{icon:"menu",title:Object(r.__)("Navigation Menus",_),desc:Object(r.__)("Adjust or edit your site's navigation menus.",_)},Object(a.createElement)(i.a,{href:g+"customize.php?autofocus[panel]=nav_menus",isDefault:!0},"Manage Menus"))},D=function(){return Object(a.createElement)(E,{icon:"cart",title:Object(r.__)("Sell Products","endurance-wp-module-admin-app"),desc:Object(r.__)("Manage products in your online store.",_)},Object(a.createElement)(i.a,{href:g+"customize.php?autofocus[panel]=nav_menus",isDefault:!0},"Install WooCommerce"))},N=function(){return Object(a.createElement)(O,{title:"Content",className:"content"},Object(a.createElement)(w,null),Object(a.createElement)(y,null),Object(a.createElement)(v,null),Object(a.createElement)(D,null))},C=location.origin+"/wp-admin/",k=function(){return Object(a.createElement)(E,{icon:"admin-customizer",title:Object(r.__)("Customizer","endurance-wp-module-admin-app"),desc:Object(r.__)("Make edits and see changes before you update.","endurance-wp-module-admin-app")},Object(a.createElement)(i.a,{href:C+"customize.php",isDefault:!0},"Customize Theme"))},M=function(){return Object(a.createElement)(E,{icon:"admin-appearance",title:Object(r.__)("WordPress Themes","endurance-wp-module-admin-app"),desc:Object(r.__)("Browse themes to find one that inspires you!","endurance-wp-module-admin-app")},Object(a.createElement)(i.a,{href:C+"themes.php",isDefault:!0},"Premium Themes"),Object(a.createElement)(i.a,{href:C+"themes.php",isLink:!0},"Free Themes"))},P=function(e){return Object(a.createElement)(O,{title:"Design & Build",className:"design"},Object(a.createElement)(k,null),Object(a.createElement)(M,null))},S=location.origin+"/wp-admin/",z=function(){return Object(a.createElement)(E,{icon:"share",title:Object(r.__)("Social","endurance-wp-module-admin-app"),desc:Object(r.__)("Add social sharing buttons so site visitors can share your content and help grow your traffic.","endurance-wp-module-admin-app")},Object(a.createElement)(i.a,{href:S+"customize.php",isDefault:!0},"Manage Social"))},B=function(){return Object(a.createElement)(E,{icon:"megaphone",title:Object(r.__)("Publicize","endurance-wp-module-admin-app"),desc:Object(r.__)("Set your site to automatically share new content with your social networks.","endurance-wp-module-admin-app")},Object(a.createElement)(i.a,{href:S+"themes.php",isDefault:!0},"Set Sharing"))},T=function(){return Object(a.createElement)(E,{isCentered:!0,icon:"chart-bar",title:Object(r.__)("Stats","endurance-wp-module-admin-app"),desc:Object(r.__)("Learn which posts are the most popular and stay informed when your traffic surges.","endurance-wp-module-admin-app")},Object(a.createElement)(i.a,{href:S+"themes.php",isDefault:!0},"View Stats"))},F=function(){return Object(a.createElement)(O,{title:"Traffic & Engagement",className:"traffic"},Object(a.createElement)(z,null),Object(a.createElement)(B,null),Object(a.createElement)(T,null))},A=location.origin+"/wp-admin/",W=function(){return Object(a.createElement)(E,{isCentered:!0,icon:"performance",title:Object(r.__)("Page Cache","endurance-wp-module-admin-app"),desc:Object(r.__)("Configure your caching to give you the best performance for your site’s needs.","endurance-wp-module-admin-app")},Object(a.createElement)(i.a,{href:A+"admin.php?page=bluehost#/tools",isDefault:!0},"Configure"))},x=function(){return Object(a.createElement)(E,{isCentered:!0,icon:"visibility",title:Object(r.__)("Photon","endurance-wp-module-admin-app"),desc:Object(r.__)("Photon is an image acceleration service that will resize your images and serve them from a CDN.","endurance-wp-module-admin-app")},Object(a.createElement)(i.a,{href:A+"themes.php",isDefault:!0},"Install Jetpack"))},H=function(e){return Object(a.createElement)(O,{title:"Performance",className:"performance"},Object(a.createElement)(W,null),Object(a.createElement)(x,null))},I=(location.origin,function(){return Object(a.createElement)(E,{icon:"desktop",title:Object(r.__)("Manage My Sites","endurance-wp-module-admin-app"),desc:Object(r.__)("Manage your site from Bluehost's control panel. You can create backups, set security, and improve performance.","endurance-wp-module-admin-app")},Object(a.createElement)(i.a,{href:"https://my.bluehost.com/hosting/app?lil=1#/sites",isDefault:!0},"Manage"))}),J=function(){return Object(a.createElement)(E,{icon:"email",title:Object(r.__)("Email","endurance-wp-module-admin-app"),desc:Object(r.__)("Create email accounts, compose, send, and receive your email from your Bluehost control panel.","endurance-wp-module-admin-app")},Object(a.createElement)(i.a,{href:"https://my.bluehost.com/hosting/app?lil=1#/email-office",isDefault:!0},"Manage"))},L=function(){return Object(a.createElement)(E,{icon:"admin-site",title:Object(r.__)("Domains","endurance-wp-module-admin-app"),desc:Object(r.__)("Find a new domain and assign it to your site or start a new site with a fresh domain.","endurance-wp-module-admin-app")},Object(a.createElement)(i.a,{href:"https://my.bluehost.com/hosting/app?lil=1#/domains",isDefault:!0},"Find a Domain"))},Y=function(){return Object(a.createElement)(E,{icon:"editor-help",title:Object(r.__)("Help","endurance-wp-module-admin-app"),desc:Object(r.__)("Get help from Bluehost’s U.S.-based award-winning support team. It’s available 24/7 through phone and chat.","endurance-wp-module-admin-app")},Object(a.createElement)(i.a,{href:"https://my.bluehost.com/hosting/help",isDefault:!0},"Help Me"))},q=function(e){return Object(a.createElement)(O,{title:"Hosting",className:"hosting"},Object(a.createElement)(I,null),Object(a.createElement)(J,null),Object(a.createElement)(L,null),Object(a.createElement)(Y,null))};var G=function(){var e=window.bluehost.comingSoon;return Object(a.createElement)("div",{className:"notices"},e&&Object(a.createElement)(f.Notice,{status:"warning",isDismissible:!1},Object(a.createElement)("h2",null,'Your site says "Coming Soon."'),Object(a.createElement)("p",null,"Right now, your site is displaying a “coming soon” message. This gives you time to work on your site before you unveil it to the public. ")))};t.default=function(){return Object(a.createElement)(c.a,null,Object(a.createElement)("div",{className:"welcome-section"},Object(a.createElement)("h1",null,"Welcome to your WordPress site!"),Object(a.createElement)("p",null,"From here, you can quickly add content to your site, manage for-sale products, work on your site’s design and performance, manage hosting, and access tools to increase your traffic.")),Object(a.createElement)(G,null),Object(a.createElement)(N,null),Object(a.createElement)(P,null),Object(a.createElement)(F,null),Object(a.createElement)(H,null),Object(a.createElement)(q,null))}}}]);