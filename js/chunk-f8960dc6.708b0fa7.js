(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8960dc6"],{"0ab9":function(t,e,a){"use strict";var i=a("4292"),r=a.n(i);r.a},4292:function(t,e,a){},"4de4":function(t,e,a){"use strict";var i=a("23e7"),r=a("b727").filter,n=a("d039"),s=a("1dde"),o=s("filter"),c=o&&!n((function(){[].filter.call({length:-1,0:1},(function(t){throw t}))}));i({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"98e7":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"like-movie"},[a("div",{staticClass:"top"}),a("div",{staticClass:"my-collection"},[a("van-nav-bar",{attrs:{title:"我的收藏","left-text":"返回","left-arrow":""},on:{"click-left":t.back}})],1),a("div",{staticClass:"movie-detail-info"},t._l(t.currentLikeMovieData,(function(e,i){return a("div",{key:i,staticClass:"clearfix movie-detail-box",attrs:{id:e.id},on:{click:function(a){return t.viewMovieDetail({name:"movieDetail",params:{id:e.id}})}}},[a("div",{staticClass:"fl theme-pictures"},[a("div",{},[a("div",[a("img",{staticClass:"auto-img",attrs:{src:e.images.small,alt:""}})])])]),a("div",{staticClass:"fl thematic-content"},[a("div",{staticClass:"clearfix movie-delete"},[a("span",{staticClass:"fl movie-title one-text"},[t._v(t._s(e.title))]),a("span",{staticClass:"fr collection",on:{click:function(a){return a.stopPropagation(),t.deleteLikeMovie(e.id)}}},[a("van-icon",{attrs:{name:"delete"}})],1)]),a("div",{staticClass:"movie-plot"},[t._v(t._s(e.genresInfo))]),a("div",{staticClass:"movie-time clearfix"},[a("div",{staticClass:"fl"},[a("van-icon",{attrs:{name:"comment-circle-o"}}),a("span",[t._v(t._s(e.comments))])],1),a("div",{staticClass:"fl"},[a("van-icon",{attrs:{name:"underway-o"}}),a("span",[t._v(t._s(e.durations[0]))])],1)]),a("div",{staticClass:"score clearfix"},[a("div",{staticClass:"fl clearfix star-box-count"},[a("div",{ref:"noactivestar",refInFor:!0,staticClass:"noactive-star fl"},[a("span",[a("van-icon",{attrs:{name:"star-o"}})],1),a("span",[a("van-icon",{attrs:{name:"star-o"}})],1),a("span",[a("van-icon",{attrs:{name:"star-o"}})],1),a("span",[a("van-icon",{attrs:{name:"star-o"}})],1),a("span",[a("van-icon",{attrs:{name:"star-o"}})],1)]),a("div",{staticClass:"active-star",style:{width:e.width+"px"}},[a("span",[a("van-icon",{attrs:{name:"star-o"}})],1),a("span",[a("van-icon",{attrs:{name:"star-o"}})],1),a("span",[a("van-icon",{attrs:{name:"star-o"}})],1),a("span",[a("van-icon",{attrs:{name:"star-o"}})],1),a("span",[a("van-icon",{attrs:{name:"star-o"}})],1)])]),a("div",{staticClass:"fraction fl"},[t._v(t._s(e.rating.average))])])])])})),0)])},r=[],n=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),s=a("2f62");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l=Object(s["a"])("likeMovieModule"),v=l.mapState,f={name:"likeMovie",computed:c({},v(["currentLikeMovieData"])),methods:{back:function(){this.$router.go(-1)},viewMovieDetail:function(t){this.$router.push(t)},deleteLikeMovie:function(t){for(var e=this,a=0;a<this.currentLikeMovieData.length;a++)if(t==this.currentLikeMovieData[a].id){this.$store.dispatch("likeMovieModule/deleteLikeMovie",a).then((function(){var t=JSON.parse(localStorage.getItem("user")),a=JSON.parse(localStorage.getItem("likeMovieData"));a[t.username]=e.currentLikeMovieData,localStorage.setItem("likeMovieData",JSON.stringify(a))}));break}}},created:function(){var t=localStorage.getItem("user");if(t){var e=JSON.parse(t);if(e.isLogin){this.$toast.loading({duration:0,message:"加载中..."});var a=localStorage.getItem("likeMovieData");a=a?JSON.parse(a):{};var i=a[e.username];i=i||[],this.$store.commit("likeMovieModule/getCurrentLikeMovieData",i),this.$toast.clear()}else this.$router.push({name:"login"})}else this.$router.push({name:"login"})}},u=f,d=(a("0ab9"),a("2877")),m=Object(d["a"])(u,i,r,!1,null,"94f405d6",null);e["default"]=m.exports},ade3:function(t,e,a){"use strict";function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",(function(){return i}))},b64b:function(t,e,a){var i=a("23e7"),r=a("7b0b"),n=a("df75"),s=a("d039"),o=s((function(){n(1)}));i({target:"Object",stat:!0,forced:o},{keys:function(t){return n(r(t))}})},dbb4:function(t,e,a){var i=a("23e7"),r=a("83ab"),n=a("56ef"),s=a("fc6a"),o=a("06cf"),c=a("8418");i({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,a,i=s(t),r=o.f,l=n(i),v={},f=0;while(l.length>f)a=r(i,e=l[f++]),void 0!==a&&c(v,e,a);return v}})},e439:function(t,e,a){var i=a("23e7"),r=a("d039"),n=a("fc6a"),s=a("06cf").f,o=a("83ab"),c=r((function(){s(1)})),l=!o||c;i({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(t,e){return s(n(t),e)}})}}]);
//# sourceMappingURL=chunk-f8960dc6.708b0fa7.js.map