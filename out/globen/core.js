// Compiled by ClojureScript 0.0-2173
goog.provide('globen.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
globen.core.AUS = 36;
globen.core.aussie_data = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-33.859972,151.211111], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-37.813611,144.963056], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-31.952222,115.858889], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-27.467917,153.027778], null)], null);
globen.core.latlng_to_xyz = (function() {
var latlng_to_xyz = null;
var latlng_to_xyz__2 = (function (lat,lng){return latlng_to_xyz.call(null,lat,lng,20);
});
var latlng_to_xyz__3 = (function (lat,lng,u){var phi = ((90 - lat) * (Math.PI / 180));var theta = ((180 - lng) * (Math.PI / 180));var x = ((u * Math.sin(phi)) * Math.cos(theta));var y = (u * Math.cos(phi));var z = ((u * Math.sin(phi)) * Math.sin(theta));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y,new cljs.core.Keyword(null,"z","z",1013904364),z], null);
});
latlng_to_xyz = function(lat,lng,u){
switch(arguments.length){
case 2:
return latlng_to_xyz__2.call(this,lat,lng);
case 3:
return latlng_to_xyz__3.call(this,lat,lng,u);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
latlng_to_xyz.cljs$core$IFn$_invoke$arity$2 = latlng_to_xyz__2;
latlng_to_xyz.cljs$core$IFn$_invoke$arity$3 = latlng_to_xyz__3;
return latlng_to_xyz;
})()
;
globen.core.add_point = (function add_point(p,v,world){var u = (v * 1);var box = (new goo.Box(u,u,u));var mat = goo.Material.createMaterial(goo.ShaderLib.simpleLit);var tick = ((function (u,box,mat){
return (function (entity,tpf){return entity.setRotation(world.time,(1.2 * world.time),0);
});})(u,box,mat))
;var en = world.createEntity(box,mat,tick);var trans = en.transformComponent.transform.translation;(trans["x"] = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p));
(trans["y"] = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p));
(trans["z"] = new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p));
return en.addToWorld();
});
globen.core.add_control_script = (function add_control_script(camera,runner){var domElement = (runner["renderer"]["domElement"]);var initalPosition = (new goo.Vector3(80,(Math.PI / 2),0));var options = {"spherical": initalPosition, "domElement": domElement};var orbit_script = goo.Scripts.create("OrbitCamControlScript",options);return camera.set(orbit_script);
});
globen.core.setup_world = (function setup_world(runner){var world = runner.world;world.createEntity((new goo.PointLight()),[100,100,100]).addToWorld();
world.createEntity((new goo.PointLight()),[-100,-100,-100]).addToWorld();
return globen.core.add_control_script.call(null,world.createEntity((new goo.Camera()),[0,0,600]).addToWorld(),runner).lookAt([0,0,0]);
});
globen.core.attach = (function attach(runner,id){var canvas = (runner["renderer"]["domElement"]);var container = document.getElementById(id);return container.appendChild(canvas);
});
globen.core.new_runner = (function new_runner(){return (new goo.GooRunner({"logo": false, "antialias": false}));
});
globen.core.get_project_id = (function get_project_id(js_bundle){var bundle = cljs.core.js__GT_clj.call(null,js_bundle);var project_id = cljs.core.first.call(null,cljs.core.filter.call(null,((function (bundle){
return (function (p1__50408_SHARP_){return cljs.core.re_find.call(null,/project$/,p1__50408_SHARP_);
});})(bundle))
,cljs.core.keys.call(null,bundle)));return project_id;
});
globen.core.load_globen = (function load_globen(runner){var u = 20;var world = runner.world;var box = (new goo.Sphere(16,16,u));var mat = goo.Material.createMaterial(goo.ShaderLib.simpleLit);var en = world.createEntity(box,mat);return en.addToWorld();
});
globen.core.draw_data = (function draw_data(runner,data){var seq__50416 = cljs.core.seq.call(null,data);var chunk__50417 = null;var count__50418 = 0;var i__50419 = 0;while(true){
if((i__50419 < count__50418))
{var vec__50420 = cljs.core._nth.call(null,chunk__50417,i__50419);var lat = cljs.core.nth.call(null,vec__50420,0,null);var lng = cljs.core.nth.call(null,vec__50420,1,null);var value = cljs.core.nth.call(null,vec__50420,2,null);var p_50422 = globen.core.latlng_to_xyz.call(null,lat,lng);globen.core.add_point.call(null,p_50422,value,runner.world);
{
var G__50423 = seq__50416;
var G__50424 = chunk__50417;
var G__50425 = count__50418;
var G__50426 = (i__50419 + 1);
seq__50416 = G__50423;
chunk__50417 = G__50424;
count__50418 = G__50425;
i__50419 = G__50426;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50416);if(temp__4092__auto__)
{var seq__50416__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50416__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__50416__$1);{
var G__50427 = cljs.core.chunk_rest.call(null,seq__50416__$1);
var G__50428 = c__4191__auto__;
var G__50429 = cljs.core.count.call(null,c__4191__auto__);
var G__50430 = 0;
seq__50416 = G__50427;
chunk__50417 = G__50428;
count__50418 = G__50429;
i__50419 = G__50430;
continue;
}
} else
{var vec__50421 = cljs.core.first.call(null,seq__50416__$1);var lat = cljs.core.nth.call(null,vec__50421,0,null);var lng = cljs.core.nth.call(null,vec__50421,1,null);var value = cljs.core.nth.call(null,vec__50421,2,null);var p_50431 = globen.core.latlng_to_xyz.call(null,lat,lng);globen.core.add_point.call(null,p_50431,value,runner.world);
{
var G__50432 = cljs.core.next.call(null,seq__50416__$1);
var G__50433 = null;
var G__50434 = 0;
var G__50435 = 0;
seq__50416 = G__50432;
chunk__50417 = G__50433;
count__50418 = G__50434;
i__50419 = G__50435;
continue;
}
}
} else
{return null;
}
}
break;
}
});
globen.core.load_data = (function load_data(runner){return $.get("data/population909500.json").then((function (res){var vec__50440 = JSON.parse(res);var vec__50441 = cljs.core.nth.call(null,vec__50440,0,null);var year = cljs.core.nth.call(null,vec__50441,0,null);var data = cljs.core.nth.call(null,vec__50441,1,null);var rest = cljs.core.nthnext.call(null,vec__50440,1);var points = cljs.core.partition.call(null,3,data);var is_big = ((function (vec__50440,vec__50441,year,data,rest,points){
return (function (p__50442){var vec__50443 = p__50442;var _ = cljs.core.nth.call(null,vec__50443,0,null);var ___$1 = cljs.core.nth.call(null,vec__50443,1,null);var v = cljs.core.nth.call(null,vec__50443,2,null);return (v > 0.05);
});})(vec__50440,vec__50441,year,data,rest,points))
;var big_points = cljs.core.filter.call(null,is_big,points);return globen.core.draw_data.call(null,runner,big_points);
}));
});
globen.core.draw_shape = (function draw_shape(world,coords){var vertices = cljs.core.map.call(null,(function (p__50446){var vec__50447 = p__50446;var lat = cljs.core.nth.call(null,vec__50447,0,null);var lng = cljs.core.nth.call(null,vec__50447,1,null);return globen.core.latlng_to_xyz.call(null,lng,lat);
}),coords);var verts = cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"z","z",1013904364)),vertices);var line = (new goo.PolyLine(cljs.core.clj__GT_js.call(null,cljs.core.flatten.call(null,verts)),true));var gen_mat = goo.Material.createMaterial(goo.ShaderLib.simpleColored);var en = world.createEntity(line,gen_mat,[0,0,0]);return en.addToWorld();
});
globen.core.draw_country = (function draw_country(world,c){var geom = (c["geometry"]);var coords = (geom["coordinates"]);var shapes = ((cljs.core._EQ_.call(null,geom.type,"Polygon"))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coords], null):coords);var seq__50452 = cljs.core.seq.call(null,shapes);var chunk__50453 = null;var count__50454 = 0;var i__50455 = 0;while(true){
if((i__50455 < count__50454))
{var s = cljs.core._nth.call(null,chunk__50453,i__50455);globen.core.draw_shape.call(null,world,(s[0]));
{
var G__50456 = seq__50452;
var G__50457 = chunk__50453;
var G__50458 = count__50454;
var G__50459 = (i__50455 + 1);
seq__50452 = G__50456;
chunk__50453 = G__50457;
count__50454 = G__50458;
i__50455 = G__50459;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50452);if(temp__4092__auto__)
{var seq__50452__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50452__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__50452__$1);{
var G__50460 = cljs.core.chunk_rest.call(null,seq__50452__$1);
var G__50461 = c__4191__auto__;
var G__50462 = cljs.core.count.call(null,c__4191__auto__);
var G__50463 = 0;
seq__50452 = G__50460;
chunk__50453 = G__50461;
count__50454 = G__50462;
i__50455 = G__50463;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__50452__$1);globen.core.draw_shape.call(null,world,(s[0]));
{
var G__50464 = cljs.core.next.call(null,seq__50452__$1);
var G__50465 = null;
var G__50466 = 0;
var G__50467 = 0;
seq__50452 = G__50464;
chunk__50453 = G__50465;
count__50454 = G__50466;
i__50455 = G__50467;
continue;
}
}
} else
{return null;
}
}
break;
}
});
globen.core.draw_countries = (function draw_countries(world,data){var data__$1 = topojson.simplify(data,{"verbose": true, "retain-proportion": 0.025, "coordinate-system": "spherical"});var countries = topojson.feature(data__$1,(data__$1["objects"]["countries"]));var features = countries.features;var australias = cljs.core.filter.call(null,((function (data__$1,countries,features){
return (function (p1__50468_SHARP_){return cljs.core._EQ_.call(null,p1__50468_SHARP_.id,globen.core.AUS);
});})(data__$1,countries,features))
,features);var batch_size = 10;var c__5525__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_50798){var state_val_50799 = (state_50798[1]);if((state_val_50799 === 32))
{var inst_50778 = (state_50798[2]);var state_50798__$1 = state_50798;var statearr_50800_50875 = state_50798__$1;(statearr_50800_50875[2] = inst_50778);
(statearr_50800_50875[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 1))
{var inst_50676 = cljs.core.partition.call(null,batch_size,batch_size,cljs.core.PersistentVector.EMPTY,features);var inst_50677 = cljs.core.seq.call(null,inst_50676);var inst_50678 = inst_50677;var inst_50679 = null;var inst_50680 = 0;var inst_50681 = 0;var state_50798__$1 = (function (){var statearr_50801 = state_50798;(statearr_50801[7] = inst_50681);
(statearr_50801[8] = inst_50680);
(statearr_50801[9] = inst_50678);
(statearr_50801[10] = inst_50679);
return statearr_50801;
})();var statearr_50802_50876 = state_50798__$1;(statearr_50802_50876[2] = null);
(statearr_50802_50876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 33))
{var inst_50761 = (state_50798[11]);var inst_50765 = cljs.core.chunk_first.call(null,inst_50761);var inst_50766 = cljs.core.chunk_rest.call(null,inst_50761);var inst_50767 = cljs.core.count.call(null,inst_50765);var inst_50748 = inst_50766;var inst_50749 = inst_50765;var inst_50750 = inst_50767;var inst_50751 = 0;var state_50798__$1 = (function (){var statearr_50803 = state_50798;(statearr_50803[12] = inst_50749);
(statearr_50803[13] = inst_50748);
(statearr_50803[14] = inst_50750);
(statearr_50803[15] = inst_50751);
return statearr_50803;
})();var statearr_50804_50877 = state_50798__$1;(statearr_50804_50877[2] = null);
(statearr_50804_50877[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 2))
{var inst_50681 = (state_50798[7]);var inst_50680 = (state_50798[8]);var inst_50683 = (inst_50681 < inst_50680);var inst_50684 = inst_50683;var state_50798__$1 = state_50798;if(cljs.core.truth_(inst_50684))
{var statearr_50805_50878 = state_50798__$1;(statearr_50805_50878[1] = 4);
} else
{var statearr_50806_50879 = state_50798__$1;(statearr_50806_50879[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 34))
{var inst_50761 = (state_50798[11]);var inst_50770 = cljs.core.first.call(null,inst_50761);var inst_50771 = globen.core.draw_country.call(null,world,inst_50770);var inst_50772 = cljs.core.next.call(null,inst_50761);var inst_50748 = inst_50772;var inst_50749 = null;var inst_50750 = 0;var inst_50751 = 0;var state_50798__$1 = (function (){var statearr_50807 = state_50798;(statearr_50807[12] = inst_50749);
(statearr_50807[13] = inst_50748);
(statearr_50807[14] = inst_50750);
(statearr_50807[15] = inst_50751);
(statearr_50807[16] = inst_50771);
return statearr_50807;
})();var statearr_50808_50880 = state_50798__$1;(statearr_50808_50880[2] = null);
(statearr_50808_50880[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 3))
{var inst_50796 = (state_50798[2]);var state_50798__$1 = state_50798;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50798__$1,inst_50796);
} else
{if((state_val_50799 === 35))
{var inst_50775 = (state_50798[2]);var state_50798__$1 = state_50798;var statearr_50809_50881 = state_50798__$1;(statearr_50809_50881[2] = inst_50775);
(statearr_50809_50881[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 4))
{var inst_50681 = (state_50798[7]);var inst_50679 = (state_50798[10]);var inst_50686 = cljs.core._nth.call(null,inst_50679,inst_50681);var inst_50691 = cljs.core.seq.call(null,inst_50686);var inst_50692 = inst_50691;var inst_50693 = null;var inst_50694 = 0;var inst_50695 = 0;var state_50798__$1 = (function (){var statearr_50810 = state_50798;(statearr_50810[17] = inst_50692);
(statearr_50810[18] = inst_50693);
(statearr_50810[19] = inst_50694);
(statearr_50810[20] = inst_50695);
return statearr_50810;
})();var statearr_50811_50882 = state_50798__$1;(statearr_50811_50882[2] = null);
(statearr_50811_50882[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 36))
{var inst_50733 = (state_50798[21]);var inst_50785 = (state_50798[2]);var inst_50786 = cljs.core.next.call(null,inst_50733);var inst_50678 = inst_50786;var inst_50679 = null;var inst_50680 = 0;var inst_50681 = 0;var state_50798__$1 = (function (){var statearr_50812 = state_50798;(statearr_50812[22] = inst_50785);
(statearr_50812[7] = inst_50681);
(statearr_50812[8] = inst_50680);
(statearr_50812[9] = inst_50678);
(statearr_50812[10] = inst_50679);
return statearr_50812;
})();var statearr_50813_50883 = state_50798__$1;(statearr_50813_50883[2] = null);
(statearr_50813_50883[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 5))
{var inst_50733 = (state_50798[21]);var inst_50678 = (state_50798[9]);var inst_50733__$1 = cljs.core.seq.call(null,inst_50678);var state_50798__$1 = (function (){var statearr_50814 = state_50798;(statearr_50814[21] = inst_50733__$1);
return statearr_50814;
})();if(inst_50733__$1)
{var statearr_50815_50884 = state_50798__$1;(statearr_50815_50884[1] = 19);
} else
{var statearr_50816_50885 = state_50798__$1;(statearr_50816_50885[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 6))
{var inst_50794 = (state_50798[2]);var state_50798__$1 = state_50798;var statearr_50817_50886 = state_50798__$1;(statearr_50817_50886[2] = inst_50794);
(statearr_50817_50886[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 7))
{var inst_50694 = (state_50798[19]);var inst_50695 = (state_50798[20]);var inst_50697 = (inst_50695 < inst_50694);var inst_50698 = inst_50697;var state_50798__$1 = state_50798;if(cljs.core.truth_(inst_50698))
{var statearr_50821_50887 = state_50798__$1;(statearr_50821_50887[1] = 9);
} else
{var statearr_50822_50888 = state_50798__$1;(statearr_50822_50888[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 8))
{var inst_50726 = (state_50798[2]);var inst_50727 = cljs.core.async.timeout.call(null,0);var state_50798__$1 = (function (){var statearr_50823 = state_50798;(statearr_50823[23] = inst_50726);
return statearr_50823;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50798__$1,18,inst_50727);
} else
{if((state_val_50799 === 9))
{var inst_50692 = (state_50798[17]);var inst_50693 = (state_50798[18]);var inst_50694 = (state_50798[19]);var inst_50695 = (state_50798[20]);var inst_50700 = cljs.core._nth.call(null,inst_50693,inst_50695);var inst_50701 = globen.core.draw_country.call(null,world,inst_50700);var inst_50702 = (inst_50695 + 1);var tmp50818 = inst_50692;var tmp50819 = inst_50693;var tmp50820 = inst_50694;var inst_50692__$1 = tmp50818;var inst_50693__$1 = tmp50819;var inst_50694__$1 = tmp50820;var inst_50695__$1 = inst_50702;var state_50798__$1 = (function (){var statearr_50824 = state_50798;(statearr_50824[17] = inst_50692__$1);
(statearr_50824[24] = inst_50701);
(statearr_50824[18] = inst_50693__$1);
(statearr_50824[19] = inst_50694__$1);
(statearr_50824[20] = inst_50695__$1);
return statearr_50824;
})();var statearr_50825_50889 = state_50798__$1;(statearr_50825_50889[2] = null);
(statearr_50825_50889[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 10))
{var inst_50705 = (state_50798[25]);var inst_50692 = (state_50798[17]);var inst_50705__$1 = cljs.core.seq.call(null,inst_50692);var state_50798__$1 = (function (){var statearr_50826 = state_50798;(statearr_50826[25] = inst_50705__$1);
return statearr_50826;
})();if(inst_50705__$1)
{var statearr_50827_50890 = state_50798__$1;(statearr_50827_50890[1] = 12);
} else
{var statearr_50828_50891 = state_50798__$1;(statearr_50828_50891[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 11))
{var inst_50724 = (state_50798[2]);var state_50798__$1 = state_50798;var statearr_50829_50892 = state_50798__$1;(statearr_50829_50892[2] = inst_50724);
(statearr_50829_50892[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 12))
{var inst_50705 = (state_50798[25]);var inst_50707 = cljs.core.chunked_seq_QMARK_.call(null,inst_50705);var state_50798__$1 = state_50798;if(inst_50707)
{var statearr_50830_50893 = state_50798__$1;(statearr_50830_50893[1] = 15);
} else
{var statearr_50831_50894 = state_50798__$1;(statearr_50831_50894[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 13))
{var state_50798__$1 = state_50798;var statearr_50832_50895 = state_50798__$1;(statearr_50832_50895[2] = null);
(statearr_50832_50895[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 14))
{var inst_50722 = (state_50798[2]);var state_50798__$1 = state_50798;var statearr_50833_50896 = state_50798__$1;(statearr_50833_50896[2] = inst_50722);
(statearr_50833_50896[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 15))
{var inst_50705 = (state_50798[25]);var inst_50709 = cljs.core.chunk_first.call(null,inst_50705);var inst_50710 = cljs.core.chunk_rest.call(null,inst_50705);var inst_50711 = cljs.core.count.call(null,inst_50709);var inst_50692 = inst_50710;var inst_50693 = inst_50709;var inst_50694 = inst_50711;var inst_50695 = 0;var state_50798__$1 = (function (){var statearr_50834 = state_50798;(statearr_50834[17] = inst_50692);
(statearr_50834[18] = inst_50693);
(statearr_50834[19] = inst_50694);
(statearr_50834[20] = inst_50695);
return statearr_50834;
})();var statearr_50835_50897 = state_50798__$1;(statearr_50835_50897[2] = null);
(statearr_50835_50897[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 16))
{var inst_50705 = (state_50798[25]);var inst_50714 = cljs.core.first.call(null,inst_50705);var inst_50715 = globen.core.draw_country.call(null,world,inst_50714);var inst_50716 = cljs.core.next.call(null,inst_50705);var inst_50692 = inst_50716;var inst_50693 = null;var inst_50694 = 0;var inst_50695 = 0;var state_50798__$1 = (function (){var statearr_50839 = state_50798;(statearr_50839[17] = inst_50692);
(statearr_50839[26] = inst_50715);
(statearr_50839[18] = inst_50693);
(statearr_50839[19] = inst_50694);
(statearr_50839[20] = inst_50695);
return statearr_50839;
})();var statearr_50840_50898 = state_50798__$1;(statearr_50840_50898[2] = null);
(statearr_50840_50898[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 17))
{var inst_50719 = (state_50798[2]);var state_50798__$1 = state_50798;var statearr_50841_50899 = state_50798__$1;(statearr_50841_50899[2] = inst_50719);
(statearr_50841_50899[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 18))
{var inst_50681 = (state_50798[7]);var inst_50680 = (state_50798[8]);var inst_50678 = (state_50798[9]);var inst_50679 = (state_50798[10]);var inst_50729 = (state_50798[2]);var inst_50730 = (inst_50681 + 1);var tmp50836 = inst_50680;var tmp50837 = inst_50678;var tmp50838 = inst_50679;var inst_50678__$1 = tmp50837;var inst_50679__$1 = tmp50838;var inst_50680__$1 = tmp50836;var inst_50681__$1 = inst_50730;var state_50798__$1 = (function (){var statearr_50842 = state_50798;(statearr_50842[7] = inst_50681__$1);
(statearr_50842[8] = inst_50680__$1);
(statearr_50842[27] = inst_50729);
(statearr_50842[9] = inst_50678__$1);
(statearr_50842[10] = inst_50679__$1);
return statearr_50842;
})();var statearr_50843_50900 = state_50798__$1;(statearr_50843_50900[2] = null);
(statearr_50843_50900[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 19))
{var inst_50733 = (state_50798[21]);var inst_50735 = cljs.core.chunked_seq_QMARK_.call(null,inst_50733);var state_50798__$1 = state_50798;if(inst_50735)
{var statearr_50844_50901 = state_50798__$1;(statearr_50844_50901[1] = 22);
} else
{var statearr_50845_50902 = state_50798__$1;(statearr_50845_50902[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 20))
{var state_50798__$1 = state_50798;var statearr_50846_50903 = state_50798__$1;(statearr_50846_50903[2] = null);
(statearr_50846_50903[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 21))
{var inst_50792 = (state_50798[2]);var state_50798__$1 = state_50798;var statearr_50847_50904 = state_50798__$1;(statearr_50847_50904[2] = inst_50792);
(statearr_50847_50904[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 22))
{var inst_50733 = (state_50798[21]);var inst_50737 = cljs.core.chunk_first.call(null,inst_50733);var inst_50738 = cljs.core.chunk_rest.call(null,inst_50733);var inst_50739 = cljs.core.count.call(null,inst_50737);var inst_50678 = inst_50738;var inst_50679 = inst_50737;var inst_50680 = inst_50739;var inst_50681 = 0;var state_50798__$1 = (function (){var statearr_50848 = state_50798;(statearr_50848[7] = inst_50681);
(statearr_50848[8] = inst_50680);
(statearr_50848[9] = inst_50678);
(statearr_50848[10] = inst_50679);
return statearr_50848;
})();var statearr_50849_50905 = state_50798__$1;(statearr_50849_50905[2] = null);
(statearr_50849_50905[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 23))
{var inst_50733 = (state_50798[21]);var inst_50742 = cljs.core.first.call(null,inst_50733);var inst_50747 = cljs.core.seq.call(null,inst_50742);var inst_50748 = inst_50747;var inst_50749 = null;var inst_50750 = 0;var inst_50751 = 0;var state_50798__$1 = (function (){var statearr_50850 = state_50798;(statearr_50850[12] = inst_50749);
(statearr_50850[13] = inst_50748);
(statearr_50850[14] = inst_50750);
(statearr_50850[15] = inst_50751);
return statearr_50850;
})();var statearr_50851_50906 = state_50798__$1;(statearr_50851_50906[2] = null);
(statearr_50851_50906[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 24))
{var inst_50789 = (state_50798[2]);var state_50798__$1 = state_50798;var statearr_50852_50907 = state_50798__$1;(statearr_50852_50907[2] = inst_50789);
(statearr_50852_50907[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 25))
{var inst_50750 = (state_50798[14]);var inst_50751 = (state_50798[15]);var inst_50753 = (inst_50751 < inst_50750);var inst_50754 = inst_50753;var state_50798__$1 = state_50798;if(cljs.core.truth_(inst_50754))
{var statearr_50856_50908 = state_50798__$1;(statearr_50856_50908[1] = 27);
} else
{var statearr_50857_50909 = state_50798__$1;(statearr_50857_50909[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 26))
{var inst_50782 = (state_50798[2]);var inst_50783 = cljs.core.async.timeout.call(null,0);var state_50798__$1 = (function (){var statearr_50858 = state_50798;(statearr_50858[28] = inst_50782);
return statearr_50858;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50798__$1,36,inst_50783);
} else
{if((state_val_50799 === 27))
{var inst_50749 = (state_50798[12]);var inst_50748 = (state_50798[13]);var inst_50750 = (state_50798[14]);var inst_50751 = (state_50798[15]);var inst_50756 = cljs.core._nth.call(null,inst_50749,inst_50751);var inst_50757 = globen.core.draw_country.call(null,world,inst_50756);var inst_50758 = (inst_50751 + 1);var tmp50853 = inst_50749;var tmp50854 = inst_50748;var tmp50855 = inst_50750;var inst_50748__$1 = tmp50854;var inst_50749__$1 = tmp50853;var inst_50750__$1 = tmp50855;var inst_50751__$1 = inst_50758;var state_50798__$1 = (function (){var statearr_50859 = state_50798;(statearr_50859[12] = inst_50749__$1);
(statearr_50859[13] = inst_50748__$1);
(statearr_50859[14] = inst_50750__$1);
(statearr_50859[15] = inst_50751__$1);
(statearr_50859[29] = inst_50757);
return statearr_50859;
})();var statearr_50860_50910 = state_50798__$1;(statearr_50860_50910[2] = null);
(statearr_50860_50910[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 28))
{var inst_50761 = (state_50798[11]);var inst_50748 = (state_50798[13]);var inst_50761__$1 = cljs.core.seq.call(null,inst_50748);var state_50798__$1 = (function (){var statearr_50861 = state_50798;(statearr_50861[11] = inst_50761__$1);
return statearr_50861;
})();if(inst_50761__$1)
{var statearr_50862_50911 = state_50798__$1;(statearr_50862_50911[1] = 30);
} else
{var statearr_50863_50912 = state_50798__$1;(statearr_50863_50912[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 29))
{var inst_50780 = (state_50798[2]);var state_50798__$1 = state_50798;var statearr_50864_50913 = state_50798__$1;(statearr_50864_50913[2] = inst_50780);
(statearr_50864_50913[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 30))
{var inst_50761 = (state_50798[11]);var inst_50763 = cljs.core.chunked_seq_QMARK_.call(null,inst_50761);var state_50798__$1 = state_50798;if(inst_50763)
{var statearr_50865_50914 = state_50798__$1;(statearr_50865_50914[1] = 33);
} else
{var statearr_50866_50915 = state_50798__$1;(statearr_50866_50915[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50799 === 31))
{var state_50798__$1 = state_50798;var statearr_50867_50916 = state_50798__$1;(statearr_50867_50916[2] = null);
(statearr_50867_50916[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5510__auto__){
return (function() {
var state_machine__5511__auto__ = null;
var state_machine__5511__auto____0 = (function (){var statearr_50871 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50871[0] = state_machine__5511__auto__);
(statearr_50871[1] = 1);
return statearr_50871;
});
var state_machine__5511__auto____1 = (function (state_50798){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_50798);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e50872){if((e50872 instanceof Object))
{var ex__5514__auto__ = e50872;var statearr_50873_50917 = state_50798;(statearr_50873_50917[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50798);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50872;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__50918 = state_50798;
state_50798 = G__50918;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_50798){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_50798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_50874 = f__5526__auto__.call(null);(statearr_50874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto__);
return statearr_50874;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return c__5525__auto__;
});
globen.core.load_countries = (function load_countries(runner){return $.get("data/world-50m.json").then((function (res){var world = runner.world;var data = JSON.parse(res);return globen.core.draw_countries.call(null,world,data);
}));
});
globen.core.init = (function init(){var runner = globen.core.new_runner.call(null);(window["runner"] = runner);
globen.core.setup_world.call(null,runner);
globen.core.attach.call(null,runner,"container");
globen.core.load_globen.call(null,runner);
globen.core.load_countries.call(null,runner);
return globen.core.load_data.call(null,runner);
});
(window["onload"] = globen.core.init);

//# sourceMappingURL=core.js.map