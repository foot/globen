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
return (function (p1__55110_SHARP_){return cljs.core.re_find.call(null,/project$/,p1__55110_SHARP_);
});})(bundle))
,cljs.core.keys.call(null,bundle)));return project_id;
});
globen.core.load_globen = (function load_globen(runner){var u = 20;var world = runner.world;var box = (new goo.Sphere(16,16,u));var mat = goo.Material.createMaterial(goo.ShaderLib.simpleLit);var en = world.createEntity(box,mat);return en.addToWorld();
});
globen.core.draw_data = (function draw_data(runner,data){var seq__55118 = cljs.core.seq.call(null,data);var chunk__55119 = null;var count__55120 = 0;var i__55121 = 0;while(true){
if((i__55121 < count__55120))
{var vec__55122 = cljs.core._nth.call(null,chunk__55119,i__55121);var lat = cljs.core.nth.call(null,vec__55122,0,null);var lng = cljs.core.nth.call(null,vec__55122,1,null);var value = cljs.core.nth.call(null,vec__55122,2,null);var p_55124 = globen.core.latlng_to_xyz.call(null,lat,lng);globen.core.add_point.call(null,p_55124,value,runner.world);
{
var G__55125 = seq__55118;
var G__55126 = chunk__55119;
var G__55127 = count__55120;
var G__55128 = (i__55121 + 1);
seq__55118 = G__55125;
chunk__55119 = G__55126;
count__55120 = G__55127;
i__55121 = G__55128;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__55118);if(temp__4092__auto__)
{var seq__55118__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55118__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__55118__$1);{
var G__55129 = cljs.core.chunk_rest.call(null,seq__55118__$1);
var G__55130 = c__4191__auto__;
var G__55131 = cljs.core.count.call(null,c__4191__auto__);
var G__55132 = 0;
seq__55118 = G__55129;
chunk__55119 = G__55130;
count__55120 = G__55131;
i__55121 = G__55132;
continue;
}
} else
{var vec__55123 = cljs.core.first.call(null,seq__55118__$1);var lat = cljs.core.nth.call(null,vec__55123,0,null);var lng = cljs.core.nth.call(null,vec__55123,1,null);var value = cljs.core.nth.call(null,vec__55123,2,null);var p_55133 = globen.core.latlng_to_xyz.call(null,lat,lng);globen.core.add_point.call(null,p_55133,value,runner.world);
{
var G__55134 = cljs.core.next.call(null,seq__55118__$1);
var G__55135 = null;
var G__55136 = 0;
var G__55137 = 0;
seq__55118 = G__55134;
chunk__55119 = G__55135;
count__55120 = G__55136;
i__55121 = G__55137;
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
globen.core.load_data = (function load_data(runner){return $.get("data/population909500.json").then((function (res){var vec__55142 = res;var vec__55143 = cljs.core.nth.call(null,vec__55142,0,null);var year = cljs.core.nth.call(null,vec__55143,0,null);var data = cljs.core.nth.call(null,vec__55143,1,null);var rest = cljs.core.nthnext.call(null,vec__55142,1);var points = cljs.core.partition.call(null,3,data);var is_big = ((function (vec__55142,vec__55143,year,data,rest,points){
return (function (p__55144){var vec__55145 = p__55144;var _ = cljs.core.nth.call(null,vec__55145,0,null);var ___$1 = cljs.core.nth.call(null,vec__55145,1,null);var v = cljs.core.nth.call(null,vec__55145,2,null);return (v > 0.05);
});})(vec__55142,vec__55143,year,data,rest,points))
;var big_points = cljs.core.filter.call(null,is_big,points);return globen.core.draw_data.call(null,runner,big_points);
}));
});
globen.core.draw_shape = (function draw_shape(world,coords){var vertices = cljs.core.map.call(null,(function (p__55148){var vec__55149 = p__55148;var lat = cljs.core.nth.call(null,vec__55149,0,null);var lng = cljs.core.nth.call(null,vec__55149,1,null);return globen.core.latlng_to_xyz.call(null,lng,lat);
}),coords);var verts = cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"z","z",1013904364)),vertices);var line = (new goo.PolyLine(cljs.core.clj__GT_js.call(null,cljs.core.flatten.call(null,verts)),true));var gen_mat = goo.Material.createMaterial(goo.ShaderLib.simpleColored);var en = world.createEntity(line,gen_mat,[0,0,0]);return en.addToWorld();
});
globen.core.draw_country = (function draw_country(world,c){var geom = (c["geometry"]);var coords = (geom["coordinates"]);var shapes = ((cljs.core._EQ_.call(null,geom.type,"Polygon"))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coords], null):coords);var seq__55154 = cljs.core.seq.call(null,shapes);var chunk__55155 = null;var count__55156 = 0;var i__55157 = 0;while(true){
if((i__55157 < count__55156))
{var s = cljs.core._nth.call(null,chunk__55155,i__55157);globen.core.draw_shape.call(null,world,(s[0]));
{
var G__55158 = seq__55154;
var G__55159 = chunk__55155;
var G__55160 = count__55156;
var G__55161 = (i__55157 + 1);
seq__55154 = G__55158;
chunk__55155 = G__55159;
count__55156 = G__55160;
i__55157 = G__55161;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__55154);if(temp__4092__auto__)
{var seq__55154__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55154__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__55154__$1);{
var G__55162 = cljs.core.chunk_rest.call(null,seq__55154__$1);
var G__55163 = c__4191__auto__;
var G__55164 = cljs.core.count.call(null,c__4191__auto__);
var G__55165 = 0;
seq__55154 = G__55162;
chunk__55155 = G__55163;
count__55156 = G__55164;
i__55157 = G__55165;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__55154__$1);globen.core.draw_shape.call(null,world,(s[0]));
{
var G__55166 = cljs.core.next.call(null,seq__55154__$1);
var G__55167 = null;
var G__55168 = 0;
var G__55169 = 0;
seq__55154 = G__55166;
chunk__55155 = G__55167;
count__55156 = G__55168;
i__55157 = G__55169;
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
return (function (p1__55170_SHARP_){return cljs.core._EQ_.call(null,p1__55170_SHARP_.id,globen.core.AUS);
});})(data__$1,countries,features))
,features);var batch_size = 10;var c__5525__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_55500){var state_val_55501 = (state_55500[1]);if((state_val_55501 === 32))
{var inst_55480 = (state_55500[2]);var state_55500__$1 = state_55500;var statearr_55502_55577 = state_55500__$1;(statearr_55502_55577[2] = inst_55480);
(statearr_55502_55577[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 1))
{var inst_55378 = cljs.core.partition.call(null,batch_size,batch_size,cljs.core.PersistentVector.EMPTY,features);var inst_55379 = cljs.core.seq.call(null,inst_55378);var inst_55380 = inst_55379;var inst_55381 = null;var inst_55382 = 0;var inst_55383 = 0;var state_55500__$1 = (function (){var statearr_55503 = state_55500;(statearr_55503[7] = inst_55382);
(statearr_55503[8] = inst_55383);
(statearr_55503[9] = inst_55381);
(statearr_55503[10] = inst_55380);
return statearr_55503;
})();var statearr_55504_55578 = state_55500__$1;(statearr_55504_55578[2] = null);
(statearr_55504_55578[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 33))
{var inst_55463 = (state_55500[11]);var inst_55467 = cljs.core.chunk_first.call(null,inst_55463);var inst_55468 = cljs.core.chunk_rest.call(null,inst_55463);var inst_55469 = cljs.core.count.call(null,inst_55467);var inst_55450 = inst_55468;var inst_55451 = inst_55467;var inst_55452 = inst_55469;var inst_55453 = 0;var state_55500__$1 = (function (){var statearr_55505 = state_55500;(statearr_55505[12] = inst_55450);
(statearr_55505[13] = inst_55451);
(statearr_55505[14] = inst_55453);
(statearr_55505[15] = inst_55452);
return statearr_55505;
})();var statearr_55506_55579 = state_55500__$1;(statearr_55506_55579[2] = null);
(statearr_55506_55579[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 2))
{var inst_55382 = (state_55500[7]);var inst_55383 = (state_55500[8]);var inst_55385 = (inst_55383 < inst_55382);var inst_55386 = inst_55385;var state_55500__$1 = state_55500;if(cljs.core.truth_(inst_55386))
{var statearr_55507_55580 = state_55500__$1;(statearr_55507_55580[1] = 4);
} else
{var statearr_55508_55581 = state_55500__$1;(statearr_55508_55581[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 34))
{var inst_55463 = (state_55500[11]);var inst_55472 = cljs.core.first.call(null,inst_55463);var inst_55473 = globen.core.draw_country.call(null,world,inst_55472);var inst_55474 = cljs.core.next.call(null,inst_55463);var inst_55450 = inst_55474;var inst_55451 = null;var inst_55452 = 0;var inst_55453 = 0;var state_55500__$1 = (function (){var statearr_55509 = state_55500;(statearr_55509[12] = inst_55450);
(statearr_55509[13] = inst_55451);
(statearr_55509[14] = inst_55453);
(statearr_55509[15] = inst_55452);
(statearr_55509[16] = inst_55473);
return statearr_55509;
})();var statearr_55510_55582 = state_55500__$1;(statearr_55510_55582[2] = null);
(statearr_55510_55582[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 3))
{var inst_55498 = (state_55500[2]);var state_55500__$1 = state_55500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55500__$1,inst_55498);
} else
{if((state_val_55501 === 35))
{var inst_55477 = (state_55500[2]);var state_55500__$1 = state_55500;var statearr_55511_55583 = state_55500__$1;(statearr_55511_55583[2] = inst_55477);
(statearr_55511_55583[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 4))
{var inst_55383 = (state_55500[8]);var inst_55381 = (state_55500[9]);var inst_55388 = cljs.core._nth.call(null,inst_55381,inst_55383);var inst_55393 = cljs.core.seq.call(null,inst_55388);var inst_55394 = inst_55393;var inst_55395 = null;var inst_55396 = 0;var inst_55397 = 0;var state_55500__$1 = (function (){var statearr_55512 = state_55500;(statearr_55512[17] = inst_55395);
(statearr_55512[18] = inst_55396);
(statearr_55512[19] = inst_55394);
(statearr_55512[20] = inst_55397);
return statearr_55512;
})();var statearr_55513_55584 = state_55500__$1;(statearr_55513_55584[2] = null);
(statearr_55513_55584[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 36))
{var inst_55435 = (state_55500[21]);var inst_55487 = (state_55500[2]);var inst_55488 = cljs.core.next.call(null,inst_55435);var inst_55380 = inst_55488;var inst_55381 = null;var inst_55382 = 0;var inst_55383 = 0;var state_55500__$1 = (function (){var statearr_55514 = state_55500;(statearr_55514[7] = inst_55382);
(statearr_55514[8] = inst_55383);
(statearr_55514[9] = inst_55381);
(statearr_55514[10] = inst_55380);
(statearr_55514[22] = inst_55487);
return statearr_55514;
})();var statearr_55515_55585 = state_55500__$1;(statearr_55515_55585[2] = null);
(statearr_55515_55585[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 5))
{var inst_55380 = (state_55500[10]);var inst_55435 = (state_55500[21]);var inst_55435__$1 = cljs.core.seq.call(null,inst_55380);var state_55500__$1 = (function (){var statearr_55516 = state_55500;(statearr_55516[21] = inst_55435__$1);
return statearr_55516;
})();if(inst_55435__$1)
{var statearr_55517_55586 = state_55500__$1;(statearr_55517_55586[1] = 19);
} else
{var statearr_55518_55587 = state_55500__$1;(statearr_55518_55587[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 6))
{var inst_55496 = (state_55500[2]);var state_55500__$1 = state_55500;var statearr_55519_55588 = state_55500__$1;(statearr_55519_55588[2] = inst_55496);
(statearr_55519_55588[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 7))
{var inst_55396 = (state_55500[18]);var inst_55397 = (state_55500[20]);var inst_55399 = (inst_55397 < inst_55396);var inst_55400 = inst_55399;var state_55500__$1 = state_55500;if(cljs.core.truth_(inst_55400))
{var statearr_55523_55589 = state_55500__$1;(statearr_55523_55589[1] = 9);
} else
{var statearr_55524_55590 = state_55500__$1;(statearr_55524_55590[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 8))
{var inst_55428 = (state_55500[2]);var inst_55429 = cljs.core.async.timeout.call(null,0);var state_55500__$1 = (function (){var statearr_55525 = state_55500;(statearr_55525[23] = inst_55428);
return statearr_55525;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55500__$1,18,inst_55429);
} else
{if((state_val_55501 === 9))
{var inst_55395 = (state_55500[17]);var inst_55396 = (state_55500[18]);var inst_55394 = (state_55500[19]);var inst_55397 = (state_55500[20]);var inst_55402 = cljs.core._nth.call(null,inst_55395,inst_55397);var inst_55403 = globen.core.draw_country.call(null,world,inst_55402);var inst_55404 = (inst_55397 + 1);var tmp55520 = inst_55395;var tmp55521 = inst_55396;var tmp55522 = inst_55394;var inst_55394__$1 = tmp55522;var inst_55395__$1 = tmp55520;var inst_55396__$1 = tmp55521;var inst_55397__$1 = inst_55404;var state_55500__$1 = (function (){var statearr_55526 = state_55500;(statearr_55526[24] = inst_55403);
(statearr_55526[17] = inst_55395__$1);
(statearr_55526[18] = inst_55396__$1);
(statearr_55526[19] = inst_55394__$1);
(statearr_55526[20] = inst_55397__$1);
return statearr_55526;
})();var statearr_55527_55591 = state_55500__$1;(statearr_55527_55591[2] = null);
(statearr_55527_55591[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 10))
{var inst_55394 = (state_55500[19]);var inst_55407 = (state_55500[25]);var inst_55407__$1 = cljs.core.seq.call(null,inst_55394);var state_55500__$1 = (function (){var statearr_55528 = state_55500;(statearr_55528[25] = inst_55407__$1);
return statearr_55528;
})();if(inst_55407__$1)
{var statearr_55529_55592 = state_55500__$1;(statearr_55529_55592[1] = 12);
} else
{var statearr_55530_55593 = state_55500__$1;(statearr_55530_55593[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 11))
{var inst_55426 = (state_55500[2]);var state_55500__$1 = state_55500;var statearr_55531_55594 = state_55500__$1;(statearr_55531_55594[2] = inst_55426);
(statearr_55531_55594[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 12))
{var inst_55407 = (state_55500[25]);var inst_55409 = cljs.core.chunked_seq_QMARK_.call(null,inst_55407);var state_55500__$1 = state_55500;if(inst_55409)
{var statearr_55532_55595 = state_55500__$1;(statearr_55532_55595[1] = 15);
} else
{var statearr_55533_55596 = state_55500__$1;(statearr_55533_55596[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 13))
{var state_55500__$1 = state_55500;var statearr_55534_55597 = state_55500__$1;(statearr_55534_55597[2] = null);
(statearr_55534_55597[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 14))
{var inst_55424 = (state_55500[2]);var state_55500__$1 = state_55500;var statearr_55535_55598 = state_55500__$1;(statearr_55535_55598[2] = inst_55424);
(statearr_55535_55598[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 15))
{var inst_55407 = (state_55500[25]);var inst_55411 = cljs.core.chunk_first.call(null,inst_55407);var inst_55412 = cljs.core.chunk_rest.call(null,inst_55407);var inst_55413 = cljs.core.count.call(null,inst_55411);var inst_55394 = inst_55412;var inst_55395 = inst_55411;var inst_55396 = inst_55413;var inst_55397 = 0;var state_55500__$1 = (function (){var statearr_55536 = state_55500;(statearr_55536[17] = inst_55395);
(statearr_55536[18] = inst_55396);
(statearr_55536[19] = inst_55394);
(statearr_55536[20] = inst_55397);
return statearr_55536;
})();var statearr_55537_55599 = state_55500__$1;(statearr_55537_55599[2] = null);
(statearr_55537_55599[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 16))
{var inst_55407 = (state_55500[25]);var inst_55416 = cljs.core.first.call(null,inst_55407);var inst_55417 = globen.core.draw_country.call(null,world,inst_55416);var inst_55418 = cljs.core.next.call(null,inst_55407);var inst_55394 = inst_55418;var inst_55395 = null;var inst_55396 = 0;var inst_55397 = 0;var state_55500__$1 = (function (){var statearr_55541 = state_55500;(statearr_55541[17] = inst_55395);
(statearr_55541[18] = inst_55396);
(statearr_55541[19] = inst_55394);
(statearr_55541[26] = inst_55417);
(statearr_55541[20] = inst_55397);
return statearr_55541;
})();var statearr_55542_55600 = state_55500__$1;(statearr_55542_55600[2] = null);
(statearr_55542_55600[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 17))
{var inst_55421 = (state_55500[2]);var state_55500__$1 = state_55500;var statearr_55543_55601 = state_55500__$1;(statearr_55543_55601[2] = inst_55421);
(statearr_55543_55601[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 18))
{var inst_55382 = (state_55500[7]);var inst_55383 = (state_55500[8]);var inst_55381 = (state_55500[9]);var inst_55380 = (state_55500[10]);var inst_55431 = (state_55500[2]);var inst_55432 = (inst_55383 + 1);var tmp55538 = inst_55382;var tmp55539 = inst_55381;var tmp55540 = inst_55380;var inst_55380__$1 = tmp55540;var inst_55381__$1 = tmp55539;var inst_55382__$1 = tmp55538;var inst_55383__$1 = inst_55432;var state_55500__$1 = (function (){var statearr_55544 = state_55500;(statearr_55544[7] = inst_55382__$1);
(statearr_55544[8] = inst_55383__$1);
(statearr_55544[9] = inst_55381__$1);
(statearr_55544[10] = inst_55380__$1);
(statearr_55544[27] = inst_55431);
return statearr_55544;
})();var statearr_55545_55602 = state_55500__$1;(statearr_55545_55602[2] = null);
(statearr_55545_55602[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 19))
{var inst_55435 = (state_55500[21]);var inst_55437 = cljs.core.chunked_seq_QMARK_.call(null,inst_55435);var state_55500__$1 = state_55500;if(inst_55437)
{var statearr_55546_55603 = state_55500__$1;(statearr_55546_55603[1] = 22);
} else
{var statearr_55547_55604 = state_55500__$1;(statearr_55547_55604[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 20))
{var state_55500__$1 = state_55500;var statearr_55548_55605 = state_55500__$1;(statearr_55548_55605[2] = null);
(statearr_55548_55605[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 21))
{var inst_55494 = (state_55500[2]);var state_55500__$1 = state_55500;var statearr_55549_55606 = state_55500__$1;(statearr_55549_55606[2] = inst_55494);
(statearr_55549_55606[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 22))
{var inst_55435 = (state_55500[21]);var inst_55439 = cljs.core.chunk_first.call(null,inst_55435);var inst_55440 = cljs.core.chunk_rest.call(null,inst_55435);var inst_55441 = cljs.core.count.call(null,inst_55439);var inst_55380 = inst_55440;var inst_55381 = inst_55439;var inst_55382 = inst_55441;var inst_55383 = 0;var state_55500__$1 = (function (){var statearr_55550 = state_55500;(statearr_55550[7] = inst_55382);
(statearr_55550[8] = inst_55383);
(statearr_55550[9] = inst_55381);
(statearr_55550[10] = inst_55380);
return statearr_55550;
})();var statearr_55551_55607 = state_55500__$1;(statearr_55551_55607[2] = null);
(statearr_55551_55607[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 23))
{var inst_55435 = (state_55500[21]);var inst_55444 = cljs.core.first.call(null,inst_55435);var inst_55449 = cljs.core.seq.call(null,inst_55444);var inst_55450 = inst_55449;var inst_55451 = null;var inst_55452 = 0;var inst_55453 = 0;var state_55500__$1 = (function (){var statearr_55552 = state_55500;(statearr_55552[12] = inst_55450);
(statearr_55552[13] = inst_55451);
(statearr_55552[14] = inst_55453);
(statearr_55552[15] = inst_55452);
return statearr_55552;
})();var statearr_55553_55608 = state_55500__$1;(statearr_55553_55608[2] = null);
(statearr_55553_55608[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 24))
{var inst_55491 = (state_55500[2]);var state_55500__$1 = state_55500;var statearr_55554_55609 = state_55500__$1;(statearr_55554_55609[2] = inst_55491);
(statearr_55554_55609[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 25))
{var inst_55453 = (state_55500[14]);var inst_55452 = (state_55500[15]);var inst_55455 = (inst_55453 < inst_55452);var inst_55456 = inst_55455;var state_55500__$1 = state_55500;if(cljs.core.truth_(inst_55456))
{var statearr_55558_55610 = state_55500__$1;(statearr_55558_55610[1] = 27);
} else
{var statearr_55559_55611 = state_55500__$1;(statearr_55559_55611[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 26))
{var inst_55484 = (state_55500[2]);var inst_55485 = cljs.core.async.timeout.call(null,0);var state_55500__$1 = (function (){var statearr_55560 = state_55500;(statearr_55560[28] = inst_55484);
return statearr_55560;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55500__$1,36,inst_55485);
} else
{if((state_val_55501 === 27))
{var inst_55450 = (state_55500[12]);var inst_55451 = (state_55500[13]);var inst_55453 = (state_55500[14]);var inst_55452 = (state_55500[15]);var inst_55458 = cljs.core._nth.call(null,inst_55451,inst_55453);var inst_55459 = globen.core.draw_country.call(null,world,inst_55458);var inst_55460 = (inst_55453 + 1);var tmp55555 = inst_55450;var tmp55556 = inst_55451;var tmp55557 = inst_55452;var inst_55450__$1 = tmp55555;var inst_55451__$1 = tmp55556;var inst_55452__$1 = tmp55557;var inst_55453__$1 = inst_55460;var state_55500__$1 = (function (){var statearr_55561 = state_55500;(statearr_55561[12] = inst_55450__$1);
(statearr_55561[13] = inst_55451__$1);
(statearr_55561[29] = inst_55459);
(statearr_55561[14] = inst_55453__$1);
(statearr_55561[15] = inst_55452__$1);
return statearr_55561;
})();var statearr_55562_55612 = state_55500__$1;(statearr_55562_55612[2] = null);
(statearr_55562_55612[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 28))
{var inst_55450 = (state_55500[12]);var inst_55463 = (state_55500[11]);var inst_55463__$1 = cljs.core.seq.call(null,inst_55450);var state_55500__$1 = (function (){var statearr_55563 = state_55500;(statearr_55563[11] = inst_55463__$1);
return statearr_55563;
})();if(inst_55463__$1)
{var statearr_55564_55613 = state_55500__$1;(statearr_55564_55613[1] = 30);
} else
{var statearr_55565_55614 = state_55500__$1;(statearr_55565_55614[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 29))
{var inst_55482 = (state_55500[2]);var state_55500__$1 = state_55500;var statearr_55566_55615 = state_55500__$1;(statearr_55566_55615[2] = inst_55482);
(statearr_55566_55615[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 30))
{var inst_55463 = (state_55500[11]);var inst_55465 = cljs.core.chunked_seq_QMARK_.call(null,inst_55463);var state_55500__$1 = state_55500;if(inst_55465)
{var statearr_55567_55616 = state_55500__$1;(statearr_55567_55616[1] = 33);
} else
{var statearr_55568_55617 = state_55500__$1;(statearr_55568_55617[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_55501 === 31))
{var state_55500__$1 = state_55500;var statearr_55569_55618 = state_55500__$1;(statearr_55569_55618[2] = null);
(statearr_55569_55618[1] = 32);
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
var state_machine__5511__auto____0 = (function (){var statearr_55573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_55573[0] = state_machine__5511__auto__);
(statearr_55573[1] = 1);
return statearr_55573;
});
var state_machine__5511__auto____1 = (function (state_55500){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_55500);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e55574){if((e55574 instanceof Object))
{var ex__5514__auto__ = e55574;var statearr_55575_55619 = state_55500;(statearr_55575_55619[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55500);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e55574;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__55620 = state_55500;
state_55500 = G__55620;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_55500){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_55500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_55576 = f__5526__auto__.call(null);(statearr_55576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto__);
return statearr_55576;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return c__5525__auto__;
});
globen.core.load_countries = (function load_countries(runner){return $.get("data/world-50m.json").then((function (data){var world = runner.world;return globen.core.draw_countries.call(null,world,data);
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