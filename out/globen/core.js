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
var latlng_to_xyz__2 = (function (lng,lat){return latlng_to_xyz.call(null,lng,lat,20);
});
var latlng_to_xyz__3 = (function (lng,lat,u){var phi = ((90 - lat) * (Math.PI / 180));var theta = ((180 - lng) * (Math.PI / 180));var x = ((u * Math.sin(phi)) * Math.cos(theta));var y = (u * Math.cos(phi));var z = ((u * Math.sin(phi)) * Math.sin(theta));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y,new cljs.core.Keyword(null,"z","z",1013904364),z], null);
});
latlng_to_xyz = function(lng,lat,u){
switch(arguments.length){
case 2:
return latlng_to_xyz__2.call(this,lng,lat);
case 3:
return latlng_to_xyz__3.call(this,lng,lat,u);
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
return (function (p1__111414_SHARP_){return cljs.core.re_find.call(null,/project$/,p1__111414_SHARP_);
});})(bundle))
,cljs.core.keys.call(null,bundle)));return project_id;
});
globen.core.load_globen = (function load_globen(runner){var u = 19.9;var world = runner.world;var box = (new goo.Sphere(16,16,u));var mat = goo.Material.createMaterial(goo.ShaderLib.simpleColored);var uniforms = mat.uniforms;var en = world.createEntity(box,mat);(uniforms["color"] = [0.3,0.6,0.9]);
return en.addToWorld();
});
globen.core.draw_polygons = (function draw_polygons(world,coords){var vertices = cljs.core.map.call(null,(function (p__111420){var vec__111421 = p__111420;var lat = cljs.core.nth.call(null,vec__111421,0,null);var lng = cljs.core.nth.call(null,vec__111421,1,null);return globen.core.latlng_to_xyz.call(null,lng,lat);
}),coords);var verts = cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"z","z",1013904364)),vertices);var line = (new goo.PolyLine(cljs.core.clj__GT_js.call(null,cljs.core.flatten.call(null,verts)),true));var vec__111419 = verts;var p1 = cljs.core.nth.call(null,vec__111419,0,null);var p2 = cljs.core.nth.call(null,vec__111419,1,null);var ps = cljs.core.nthnext.call(null,vec__111419,2);var normal = (new goo.Vector3(cljs.core.clj__GT_js.call(null,p1))).normalize();var path = (new goo.PolyLine([0,0,0,normal.x,normal.y,normal.z]));var surface = line.mul(path);var top_surface = (new goo.FilledPolygon(cljs.core.clj__GT_js.call(null,cljs.core.flatten.call(null,verts))));var gen_mat = getColoredMaterial();var en = world.createEntity(surface,gen_mat,[0,0,0]);var top = world.createEntity(top_surface,gen_mat,[0,0,0]);var cullFace = (gen_mat["cullState"]);(cullFace["cullFace"] = "Front");
(gen_mat["flat"] = true);
top.addToWorld();
return en.addToWorld();
});
globen.core.draw_line = (function draw_line(world,points){var line = (new goo.PolyLine(cljs.core.clj__GT_js.call(null,points),true));var gen_mat = goo.Material.createMaterial(goo.ShaderLib.simpleColored);var en = world.createEntity(line,gen_mat,[0,0,0]);return en.addToWorld();
});
globen.core.draw_shape = (function draw_shape(world,coords){var vertices = cljs.core.map.call(null,(function (p__111424){var vec__111425 = p__111424;var lat = cljs.core.nth.call(null,vec__111425,0,null);var lng = cljs.core.nth.call(null,vec__111425,1,null);return globen.core.latlng_to_xyz.call(null,lat,lng);
}),coords);var verts = cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"z","z",1013904364)),vertices);return globen.core.draw_line.call(null,world,cljs.core.flatten.call(null,verts));
});
globen.core.draw_country = (function draw_country(world,c){var geom = (c["geometry"]);var coords = (geom["coordinates"]);var shapes = ((cljs.core._EQ_.call(null,geom.type,"Polygon"))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coords], null):coords);var seq__111430 = cljs.core.seq.call(null,shapes);var chunk__111431 = null;var count__111432 = 0;var i__111433 = 0;while(true){
if((i__111433 < count__111432))
{var s = cljs.core._nth.call(null,chunk__111431,i__111433);globen.core.draw_shape.call(null,world,(s[0]));
{
var G__111434 = seq__111430;
var G__111435 = chunk__111431;
var G__111436 = count__111432;
var G__111437 = (i__111433 + 1);
seq__111430 = G__111434;
chunk__111431 = G__111435;
count__111432 = G__111436;
i__111433 = G__111437;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__111430);if(temp__4092__auto__)
{var seq__111430__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__111430__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__111430__$1);{
var G__111438 = cljs.core.chunk_rest.call(null,seq__111430__$1);
var G__111439 = c__4191__auto__;
var G__111440 = cljs.core.count.call(null,c__4191__auto__);
var G__111441 = 0;
seq__111430 = G__111438;
chunk__111431 = G__111439;
count__111432 = G__111440;
i__111433 = G__111441;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__111430__$1);globen.core.draw_shape.call(null,world,(s[0]));
{
var G__111442 = cljs.core.next.call(null,seq__111430__$1);
var G__111443 = null;
var G__111444 = 0;
var G__111445 = 0;
seq__111430 = G__111442;
chunk__111431 = G__111443;
count__111432 = G__111444;
i__111433 = G__111445;
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
globen.core.draw_countries = (function draw_countries(world,data){var data__$1 = topojson.simplify(data,{"verbose": true, "retain-proportion": 0.2, "coordinate-system": "spherical"});var countries = topojson.feature(data__$1,(data__$1["objects"]["countries"]));var features = countries.features;var australias = cljs.core.filter.call(null,((function (data__$1,countries,features){
return (function (p1__111446_SHARP_){return cljs.core._EQ_.call(null,p1__111446_SHARP_.id,globen.core.AUS);
});})(data__$1,countries,features))
,features);var batch_size = 10;var c__5525__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_111776){var state_val_111777 = (state_111776[1]);if((state_val_111777 === 32))
{var inst_111756 = (state_111776[2]);var state_111776__$1 = state_111776;var statearr_111778_111853 = state_111776__$1;(statearr_111778_111853[2] = inst_111756);
(statearr_111778_111853[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 1))
{var inst_111654 = cljs.core.partition.call(null,batch_size,batch_size,cljs.core.PersistentVector.EMPTY,features);var inst_111655 = cljs.core.seq.call(null,inst_111654);var inst_111656 = inst_111655;var inst_111657 = null;var inst_111658 = 0;var inst_111659 = 0;var state_111776__$1 = (function (){var statearr_111779 = state_111776;(statearr_111779[7] = inst_111658);
(statearr_111779[8] = inst_111657);
(statearr_111779[9] = inst_111659);
(statearr_111779[10] = inst_111656);
return statearr_111779;
})();var statearr_111780_111854 = state_111776__$1;(statearr_111780_111854[2] = null);
(statearr_111780_111854[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 33))
{var inst_111739 = (state_111776[11]);var inst_111743 = cljs.core.chunk_first.call(null,inst_111739);var inst_111744 = cljs.core.chunk_rest.call(null,inst_111739);var inst_111745 = cljs.core.count.call(null,inst_111743);var inst_111726 = inst_111744;var inst_111727 = inst_111743;var inst_111728 = inst_111745;var inst_111729 = 0;var state_111776__$1 = (function (){var statearr_111781 = state_111776;(statearr_111781[12] = inst_111726);
(statearr_111781[13] = inst_111729);
(statearr_111781[14] = inst_111727);
(statearr_111781[15] = inst_111728);
return statearr_111781;
})();var statearr_111782_111855 = state_111776__$1;(statearr_111782_111855[2] = null);
(statearr_111782_111855[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 2))
{var inst_111658 = (state_111776[7]);var inst_111659 = (state_111776[9]);var inst_111661 = (inst_111659 < inst_111658);var inst_111662 = inst_111661;var state_111776__$1 = state_111776;if(cljs.core.truth_(inst_111662))
{var statearr_111783_111856 = state_111776__$1;(statearr_111783_111856[1] = 4);
} else
{var statearr_111784_111857 = state_111776__$1;(statearr_111784_111857[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 34))
{var inst_111739 = (state_111776[11]);var inst_111748 = cljs.core.first.call(null,inst_111739);var inst_111749 = globen.core.draw_country.call(null,world,inst_111748);var inst_111750 = cljs.core.next.call(null,inst_111739);var inst_111726 = inst_111750;var inst_111727 = null;var inst_111728 = 0;var inst_111729 = 0;var state_111776__$1 = (function (){var statearr_111785 = state_111776;(statearr_111785[12] = inst_111726);
(statearr_111785[13] = inst_111729);
(statearr_111785[14] = inst_111727);
(statearr_111785[15] = inst_111728);
(statearr_111785[16] = inst_111749);
return statearr_111785;
})();var statearr_111786_111858 = state_111776__$1;(statearr_111786_111858[2] = null);
(statearr_111786_111858[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 3))
{var inst_111774 = (state_111776[2]);var state_111776__$1 = state_111776;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_111776__$1,inst_111774);
} else
{if((state_val_111777 === 35))
{var inst_111753 = (state_111776[2]);var state_111776__$1 = state_111776;var statearr_111787_111859 = state_111776__$1;(statearr_111787_111859[2] = inst_111753);
(statearr_111787_111859[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 4))
{var inst_111657 = (state_111776[8]);var inst_111659 = (state_111776[9]);var inst_111664 = cljs.core._nth.call(null,inst_111657,inst_111659);var inst_111669 = cljs.core.seq.call(null,inst_111664);var inst_111670 = inst_111669;var inst_111671 = null;var inst_111672 = 0;var inst_111673 = 0;var state_111776__$1 = (function (){var statearr_111788 = state_111776;(statearr_111788[17] = inst_111670);
(statearr_111788[18] = inst_111673);
(statearr_111788[19] = inst_111672);
(statearr_111788[20] = inst_111671);
return statearr_111788;
})();var statearr_111789_111860 = state_111776__$1;(statearr_111789_111860[2] = null);
(statearr_111789_111860[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 36))
{var inst_111711 = (state_111776[21]);var inst_111763 = (state_111776[2]);var inst_111764 = cljs.core.next.call(null,inst_111711);var inst_111656 = inst_111764;var inst_111657 = null;var inst_111658 = 0;var inst_111659 = 0;var state_111776__$1 = (function (){var statearr_111790 = state_111776;(statearr_111790[7] = inst_111658);
(statearr_111790[8] = inst_111657);
(statearr_111790[9] = inst_111659);
(statearr_111790[10] = inst_111656);
(statearr_111790[22] = inst_111763);
return statearr_111790;
})();var statearr_111791_111861 = state_111776__$1;(statearr_111791_111861[2] = null);
(statearr_111791_111861[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 5))
{var inst_111711 = (state_111776[21]);var inst_111656 = (state_111776[10]);var inst_111711__$1 = cljs.core.seq.call(null,inst_111656);var state_111776__$1 = (function (){var statearr_111792 = state_111776;(statearr_111792[21] = inst_111711__$1);
return statearr_111792;
})();if(inst_111711__$1)
{var statearr_111793_111862 = state_111776__$1;(statearr_111793_111862[1] = 19);
} else
{var statearr_111794_111863 = state_111776__$1;(statearr_111794_111863[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 6))
{var inst_111772 = (state_111776[2]);var state_111776__$1 = state_111776;var statearr_111795_111864 = state_111776__$1;(statearr_111795_111864[2] = inst_111772);
(statearr_111795_111864[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 7))
{var inst_111673 = (state_111776[18]);var inst_111672 = (state_111776[19]);var inst_111675 = (inst_111673 < inst_111672);var inst_111676 = inst_111675;var state_111776__$1 = state_111776;if(cljs.core.truth_(inst_111676))
{var statearr_111799_111865 = state_111776__$1;(statearr_111799_111865[1] = 9);
} else
{var statearr_111800_111866 = state_111776__$1;(statearr_111800_111866[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 8))
{var inst_111704 = (state_111776[2]);var inst_111705 = cljs.core.async.timeout.call(null,0);var state_111776__$1 = (function (){var statearr_111801 = state_111776;(statearr_111801[23] = inst_111704);
return statearr_111801;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111776__$1,18,inst_111705);
} else
{if((state_val_111777 === 9))
{var inst_111670 = (state_111776[17]);var inst_111673 = (state_111776[18]);var inst_111672 = (state_111776[19]);var inst_111671 = (state_111776[20]);var inst_111678 = cljs.core._nth.call(null,inst_111671,inst_111673);var inst_111679 = globen.core.draw_country.call(null,world,inst_111678);var inst_111680 = (inst_111673 + 1);var tmp111796 = inst_111670;var tmp111797 = inst_111672;var tmp111798 = inst_111671;var inst_111670__$1 = tmp111796;var inst_111671__$1 = tmp111798;var inst_111672__$1 = tmp111797;var inst_111673__$1 = inst_111680;var state_111776__$1 = (function (){var statearr_111802 = state_111776;(statearr_111802[17] = inst_111670__$1);
(statearr_111802[18] = inst_111673__$1);
(statearr_111802[19] = inst_111672__$1);
(statearr_111802[20] = inst_111671__$1);
(statearr_111802[24] = inst_111679);
return statearr_111802;
})();var statearr_111803_111867 = state_111776__$1;(statearr_111803_111867[2] = null);
(statearr_111803_111867[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 10))
{var inst_111670 = (state_111776[17]);var inst_111683 = (state_111776[25]);var inst_111683__$1 = cljs.core.seq.call(null,inst_111670);var state_111776__$1 = (function (){var statearr_111804 = state_111776;(statearr_111804[25] = inst_111683__$1);
return statearr_111804;
})();if(inst_111683__$1)
{var statearr_111805_111868 = state_111776__$1;(statearr_111805_111868[1] = 12);
} else
{var statearr_111806_111869 = state_111776__$1;(statearr_111806_111869[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 11))
{var inst_111702 = (state_111776[2]);var state_111776__$1 = state_111776;var statearr_111807_111870 = state_111776__$1;(statearr_111807_111870[2] = inst_111702);
(statearr_111807_111870[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 12))
{var inst_111683 = (state_111776[25]);var inst_111685 = cljs.core.chunked_seq_QMARK_.call(null,inst_111683);var state_111776__$1 = state_111776;if(inst_111685)
{var statearr_111808_111871 = state_111776__$1;(statearr_111808_111871[1] = 15);
} else
{var statearr_111809_111872 = state_111776__$1;(statearr_111809_111872[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 13))
{var state_111776__$1 = state_111776;var statearr_111810_111873 = state_111776__$1;(statearr_111810_111873[2] = null);
(statearr_111810_111873[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 14))
{var inst_111700 = (state_111776[2]);var state_111776__$1 = state_111776;var statearr_111811_111874 = state_111776__$1;(statearr_111811_111874[2] = inst_111700);
(statearr_111811_111874[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 15))
{var inst_111683 = (state_111776[25]);var inst_111687 = cljs.core.chunk_first.call(null,inst_111683);var inst_111688 = cljs.core.chunk_rest.call(null,inst_111683);var inst_111689 = cljs.core.count.call(null,inst_111687);var inst_111670 = inst_111688;var inst_111671 = inst_111687;var inst_111672 = inst_111689;var inst_111673 = 0;var state_111776__$1 = (function (){var statearr_111812 = state_111776;(statearr_111812[17] = inst_111670);
(statearr_111812[18] = inst_111673);
(statearr_111812[19] = inst_111672);
(statearr_111812[20] = inst_111671);
return statearr_111812;
})();var statearr_111813_111875 = state_111776__$1;(statearr_111813_111875[2] = null);
(statearr_111813_111875[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 16))
{var inst_111683 = (state_111776[25]);var inst_111692 = cljs.core.first.call(null,inst_111683);var inst_111693 = globen.core.draw_country.call(null,world,inst_111692);var inst_111694 = cljs.core.next.call(null,inst_111683);var inst_111670 = inst_111694;var inst_111671 = null;var inst_111672 = 0;var inst_111673 = 0;var state_111776__$1 = (function (){var statearr_111817 = state_111776;(statearr_111817[17] = inst_111670);
(statearr_111817[18] = inst_111673);
(statearr_111817[19] = inst_111672);
(statearr_111817[20] = inst_111671);
(statearr_111817[26] = inst_111693);
return statearr_111817;
})();var statearr_111818_111876 = state_111776__$1;(statearr_111818_111876[2] = null);
(statearr_111818_111876[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 17))
{var inst_111697 = (state_111776[2]);var state_111776__$1 = state_111776;var statearr_111819_111877 = state_111776__$1;(statearr_111819_111877[2] = inst_111697);
(statearr_111819_111877[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 18))
{var inst_111658 = (state_111776[7]);var inst_111657 = (state_111776[8]);var inst_111659 = (state_111776[9]);var inst_111656 = (state_111776[10]);var inst_111707 = (state_111776[2]);var inst_111708 = (inst_111659 + 1);var tmp111814 = inst_111658;var tmp111815 = inst_111657;var tmp111816 = inst_111656;var inst_111656__$1 = tmp111816;var inst_111657__$1 = tmp111815;var inst_111658__$1 = tmp111814;var inst_111659__$1 = inst_111708;var state_111776__$1 = (function (){var statearr_111820 = state_111776;(statearr_111820[7] = inst_111658__$1);
(statearr_111820[8] = inst_111657__$1);
(statearr_111820[9] = inst_111659__$1);
(statearr_111820[27] = inst_111707);
(statearr_111820[10] = inst_111656__$1);
return statearr_111820;
})();var statearr_111821_111878 = state_111776__$1;(statearr_111821_111878[2] = null);
(statearr_111821_111878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 19))
{var inst_111711 = (state_111776[21]);var inst_111713 = cljs.core.chunked_seq_QMARK_.call(null,inst_111711);var state_111776__$1 = state_111776;if(inst_111713)
{var statearr_111822_111879 = state_111776__$1;(statearr_111822_111879[1] = 22);
} else
{var statearr_111823_111880 = state_111776__$1;(statearr_111823_111880[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 20))
{var state_111776__$1 = state_111776;var statearr_111824_111881 = state_111776__$1;(statearr_111824_111881[2] = null);
(statearr_111824_111881[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 21))
{var inst_111770 = (state_111776[2]);var state_111776__$1 = state_111776;var statearr_111825_111882 = state_111776__$1;(statearr_111825_111882[2] = inst_111770);
(statearr_111825_111882[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 22))
{var inst_111711 = (state_111776[21]);var inst_111715 = cljs.core.chunk_first.call(null,inst_111711);var inst_111716 = cljs.core.chunk_rest.call(null,inst_111711);var inst_111717 = cljs.core.count.call(null,inst_111715);var inst_111656 = inst_111716;var inst_111657 = inst_111715;var inst_111658 = inst_111717;var inst_111659 = 0;var state_111776__$1 = (function (){var statearr_111826 = state_111776;(statearr_111826[7] = inst_111658);
(statearr_111826[8] = inst_111657);
(statearr_111826[9] = inst_111659);
(statearr_111826[10] = inst_111656);
return statearr_111826;
})();var statearr_111827_111883 = state_111776__$1;(statearr_111827_111883[2] = null);
(statearr_111827_111883[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 23))
{var inst_111711 = (state_111776[21]);var inst_111720 = cljs.core.first.call(null,inst_111711);var inst_111725 = cljs.core.seq.call(null,inst_111720);var inst_111726 = inst_111725;var inst_111727 = null;var inst_111728 = 0;var inst_111729 = 0;var state_111776__$1 = (function (){var statearr_111828 = state_111776;(statearr_111828[12] = inst_111726);
(statearr_111828[13] = inst_111729);
(statearr_111828[14] = inst_111727);
(statearr_111828[15] = inst_111728);
return statearr_111828;
})();var statearr_111829_111884 = state_111776__$1;(statearr_111829_111884[2] = null);
(statearr_111829_111884[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 24))
{var inst_111767 = (state_111776[2]);var state_111776__$1 = state_111776;var statearr_111830_111885 = state_111776__$1;(statearr_111830_111885[2] = inst_111767);
(statearr_111830_111885[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 25))
{var inst_111729 = (state_111776[13]);var inst_111728 = (state_111776[15]);var inst_111731 = (inst_111729 < inst_111728);var inst_111732 = inst_111731;var state_111776__$1 = state_111776;if(cljs.core.truth_(inst_111732))
{var statearr_111834_111886 = state_111776__$1;(statearr_111834_111886[1] = 27);
} else
{var statearr_111835_111887 = state_111776__$1;(statearr_111835_111887[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 26))
{var inst_111760 = (state_111776[2]);var inst_111761 = cljs.core.async.timeout.call(null,0);var state_111776__$1 = (function (){var statearr_111836 = state_111776;(statearr_111836[28] = inst_111760);
return statearr_111836;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_111776__$1,36,inst_111761);
} else
{if((state_val_111777 === 27))
{var inst_111726 = (state_111776[12]);var inst_111729 = (state_111776[13]);var inst_111727 = (state_111776[14]);var inst_111728 = (state_111776[15]);var inst_111734 = cljs.core._nth.call(null,inst_111727,inst_111729);var inst_111735 = globen.core.draw_country.call(null,world,inst_111734);var inst_111736 = (inst_111729 + 1);var tmp111831 = inst_111726;var tmp111832 = inst_111727;var tmp111833 = inst_111728;var inst_111726__$1 = tmp111831;var inst_111727__$1 = tmp111832;var inst_111728__$1 = tmp111833;var inst_111729__$1 = inst_111736;var state_111776__$1 = (function (){var statearr_111837 = state_111776;(statearr_111837[12] = inst_111726__$1);
(statearr_111837[13] = inst_111729__$1);
(statearr_111837[14] = inst_111727__$1);
(statearr_111837[15] = inst_111728__$1);
(statearr_111837[29] = inst_111735);
return statearr_111837;
})();var statearr_111838_111888 = state_111776__$1;(statearr_111838_111888[2] = null);
(statearr_111838_111888[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 28))
{var inst_111726 = (state_111776[12]);var inst_111739 = (state_111776[11]);var inst_111739__$1 = cljs.core.seq.call(null,inst_111726);var state_111776__$1 = (function (){var statearr_111839 = state_111776;(statearr_111839[11] = inst_111739__$1);
return statearr_111839;
})();if(inst_111739__$1)
{var statearr_111840_111889 = state_111776__$1;(statearr_111840_111889[1] = 30);
} else
{var statearr_111841_111890 = state_111776__$1;(statearr_111841_111890[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 29))
{var inst_111758 = (state_111776[2]);var state_111776__$1 = state_111776;var statearr_111842_111891 = state_111776__$1;(statearr_111842_111891[2] = inst_111758);
(statearr_111842_111891[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 30))
{var inst_111739 = (state_111776[11]);var inst_111741 = cljs.core.chunked_seq_QMARK_.call(null,inst_111739);var state_111776__$1 = state_111776;if(inst_111741)
{var statearr_111843_111892 = state_111776__$1;(statearr_111843_111892[1] = 33);
} else
{var statearr_111844_111893 = state_111776__$1;(statearr_111844_111893[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_111777 === 31))
{var state_111776__$1 = state_111776;var statearr_111845_111894 = state_111776__$1;(statearr_111845_111894[2] = null);
(statearr_111845_111894[1] = 32);
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
var state_machine__5511__auto____0 = (function (){var statearr_111849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_111849[0] = state_machine__5511__auto__);
(statearr_111849[1] = 1);
return statearr_111849;
});
var state_machine__5511__auto____1 = (function (state_111776){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_111776);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e111850){if((e111850 instanceof Object))
{var ex__5514__auto__ = e111850;var statearr_111851_111895 = state_111776;(statearr_111851_111895[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_111776);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e111850;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__111896 = state_111776;
state_111776 = G__111896;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_111776){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_111776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_111852 = f__5526__auto__.call(null);(statearr_111852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto__);
return statearr_111852;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return c__5525__auto__;
});
globen.core.load_countries = (function load_countries(runner){return $.get("data/world-50m.json").then((function (data){var world = runner.world;return globen.core.draw_countries.call(null,world,data);
}));
});
globen.core.draw_data_cubes = (function draw_data_cubes(runner,data){var seq__111903 = cljs.core.seq.call(null,data);var chunk__111904 = null;var count__111905 = 0;var i__111906 = 0;while(true){
if((i__111906 < count__111905))
{var vec__111907 = cljs.core._nth.call(null,chunk__111904,i__111906);var lat = cljs.core.nth.call(null,vec__111907,0,null);var lng = cljs.core.nth.call(null,vec__111907,1,null);var value = cljs.core.nth.call(null,vec__111907,2,null);var p_111909 = globen.core.latlng_to_xyz.call(null,lat,lng);globen.core.add_point.call(null,p_111909,value,runner.world);
{
var G__111910 = seq__111903;
var G__111911 = chunk__111904;
var G__111912 = count__111905;
var G__111913 = (i__111906 + 1);
seq__111903 = G__111910;
chunk__111904 = G__111911;
count__111905 = G__111912;
i__111906 = G__111913;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__111903);if(temp__4092__auto__)
{var seq__111903__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__111903__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__111903__$1);{
var G__111914 = cljs.core.chunk_rest.call(null,seq__111903__$1);
var G__111915 = c__4191__auto__;
var G__111916 = cljs.core.count.call(null,c__4191__auto__);
var G__111917 = 0;
seq__111903 = G__111914;
chunk__111904 = G__111915;
count__111905 = G__111916;
i__111906 = G__111917;
continue;
}
} else
{var vec__111908 = cljs.core.first.call(null,seq__111903__$1);var lat = cljs.core.nth.call(null,vec__111908,0,null);var lng = cljs.core.nth.call(null,vec__111908,1,null);var value = cljs.core.nth.call(null,vec__111908,2,null);var p_111918 = globen.core.latlng_to_xyz.call(null,lat,lng);globen.core.add_point.call(null,p_111918,value,runner.world);
{
var G__111919 = cljs.core.next.call(null,seq__111903__$1);
var G__111920 = null;
var G__111921 = 0;
var G__111922 = 0;
seq__111903 = G__111919;
chunk__111904 = G__111920;
count__111905 = G__111921;
i__111906 = G__111922;
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
globen.core.draw_data_shape = (function() {
var draw_data_shape = null;
var draw_data_shape__3 = (function (world,coords,data){return draw_data_shape.call(null,world,coords,data,10);
});
var draw_data_shape__4 = (function (world,coords,data,s){var u = (function (v){return (20 + (s * cljs.core.get.call(null,data,v,0)));
});var to_xyz = ((function (u){
return (function (p__111925){var vec__111926 = p__111925;var lat = cljs.core.nth.call(null,vec__111926,0,null);var lng = cljs.core.nth.call(null,vec__111926,1,null);return globen.core.latlng_to_xyz.call(null,lat,lng,u.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
});})(u))
;var vertices = cljs.core.map.call(null,to_xyz,coords);var verts = cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"z","z",1013904364)),vertices);return globen.core.draw_line.call(null,world,cljs.core.flatten.call(null,verts));
});
draw_data_shape = function(world,coords,data,s){
switch(arguments.length){
case 3:
return draw_data_shape__3.call(this,world,coords,data);
case 4:
return draw_data_shape__4.call(this,world,coords,data,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_data_shape.cljs$core$IFn$_invoke$arity$3 = draw_data_shape__3;
draw_data_shape.cljs$core$IFn$_invoke$arity$4 = draw_data_shape__4;
return draw_data_shape;
})()
;
globen.core.draw_circle = (function draw_circle(world,lat,data){var r = cljs.core.range.call(null,-180,180,1);var points = cljs.core.map.call(null,((function (r){
return (function (p1__111927_SHARP_){return cljs.core.identity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__111927_SHARP_,lat], null));
});})(r))
,r);return globen.core.draw_data_shape.call(null,world,points,data,10);
});
globen.core.draw_lat = (function draw_lat(runner,data){var batch_size = 2;var values = cljs.core.range.call(null,90,-90,-1);var c__5525__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_112265){var state_val_112266 = (state_112265[1]);if((state_val_112266 === 32))
{var inst_112245 = (state_112265[2]);var state_112265__$1 = state_112265;var statearr_112267_112342 = state_112265__$1;(statearr_112267_112342[2] = inst_112245);
(statearr_112267_112342[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 1))
{var inst_112139 = cljs.core.partition.call(null,batch_size,batch_size,cljs.core.PersistentVector.EMPTY,values);var inst_112140 = cljs.core.seq.call(null,inst_112139);var inst_112141 = inst_112140;var inst_112142 = null;var inst_112143 = 0;var inst_112144 = 0;var state_112265__$1 = (function (){var statearr_112268 = state_112265;(statearr_112268[7] = inst_112142);
(statearr_112268[8] = inst_112143);
(statearr_112268[9] = inst_112141);
(statearr_112268[10] = inst_112144);
return statearr_112268;
})();var statearr_112269_112343 = state_112265__$1;(statearr_112269_112343[2] = null);
(statearr_112269_112343[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 33))
{var inst_112227 = (state_112265[11]);var inst_112231 = cljs.core.chunk_first.call(null,inst_112227);var inst_112232 = cljs.core.chunk_rest.call(null,inst_112227);var inst_112233 = cljs.core.count.call(null,inst_112231);var inst_112213 = inst_112232;var inst_112214 = inst_112231;var inst_112215 = inst_112233;var inst_112216 = 0;var state_112265__$1 = (function (){var statearr_112270 = state_112265;(statearr_112270[12] = inst_112213);
(statearr_112270[13] = inst_112214);
(statearr_112270[14] = inst_112215);
(statearr_112270[15] = inst_112216);
return statearr_112270;
})();var statearr_112271_112344 = state_112265__$1;(statearr_112271_112344[2] = null);
(statearr_112271_112344[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 2))
{var inst_112143 = (state_112265[8]);var inst_112144 = (state_112265[10]);var inst_112146 = (inst_112144 < inst_112143);var inst_112147 = inst_112146;var state_112265__$1 = state_112265;if(cljs.core.truth_(inst_112147))
{var statearr_112272_112345 = state_112265__$1;(statearr_112272_112345[1] = 4);
} else
{var statearr_112273_112346 = state_112265__$1;(statearr_112273_112346[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 34))
{var inst_112227 = (state_112265[11]);var inst_112236 = cljs.core.first.call(null,inst_112227);var inst_112237 = runner.world;var inst_112238 = globen.core.draw_circle.call(null,inst_112237,inst_112236,data);var inst_112239 = cljs.core.next.call(null,inst_112227);var inst_112213 = inst_112239;var inst_112214 = null;var inst_112215 = 0;var inst_112216 = 0;var state_112265__$1 = (function (){var statearr_112274 = state_112265;(statearr_112274[12] = inst_112213);
(statearr_112274[16] = inst_112238);
(statearr_112274[13] = inst_112214);
(statearr_112274[14] = inst_112215);
(statearr_112274[15] = inst_112216);
return statearr_112274;
})();var statearr_112275_112347 = state_112265__$1;(statearr_112275_112347[2] = null);
(statearr_112275_112347[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 3))
{var inst_112263 = (state_112265[2]);var state_112265__$1 = state_112265;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112265__$1,inst_112263);
} else
{if((state_val_112266 === 35))
{var inst_112242 = (state_112265[2]);var state_112265__$1 = state_112265;var statearr_112276_112348 = state_112265__$1;(statearr_112276_112348[2] = inst_112242);
(statearr_112276_112348[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 4))
{var inst_112142 = (state_112265[7]);var inst_112144 = (state_112265[10]);var inst_112149 = cljs.core._nth.call(null,inst_112142,inst_112144);var inst_112154 = cljs.core.seq.call(null,inst_112149);var inst_112155 = inst_112154;var inst_112156 = null;var inst_112157 = 0;var inst_112158 = 0;var state_112265__$1 = (function (){var statearr_112277 = state_112265;(statearr_112277[17] = inst_112158);
(statearr_112277[18] = inst_112157);
(statearr_112277[19] = inst_112156);
(statearr_112277[20] = inst_112155);
return statearr_112277;
})();var statearr_112278_112349 = state_112265__$1;(statearr_112278_112349[2] = null);
(statearr_112278_112349[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 36))
{var inst_112198 = (state_112265[21]);var inst_112252 = (state_112265[2]);var inst_112253 = cljs.core.next.call(null,inst_112198);var inst_112141 = inst_112253;var inst_112142 = null;var inst_112143 = 0;var inst_112144 = 0;var state_112265__$1 = (function (){var statearr_112279 = state_112265;(statearr_112279[22] = inst_112252);
(statearr_112279[7] = inst_112142);
(statearr_112279[8] = inst_112143);
(statearr_112279[9] = inst_112141);
(statearr_112279[10] = inst_112144);
return statearr_112279;
})();var statearr_112280_112350 = state_112265__$1;(statearr_112280_112350[2] = null);
(statearr_112280_112350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 5))
{var inst_112141 = (state_112265[9]);var inst_112198 = (state_112265[21]);var inst_112198__$1 = cljs.core.seq.call(null,inst_112141);var state_112265__$1 = (function (){var statearr_112281 = state_112265;(statearr_112281[21] = inst_112198__$1);
return statearr_112281;
})();if(inst_112198__$1)
{var statearr_112282_112351 = state_112265__$1;(statearr_112282_112351[1] = 19);
} else
{var statearr_112283_112352 = state_112265__$1;(statearr_112283_112352[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 6))
{var inst_112261 = (state_112265[2]);var state_112265__$1 = state_112265;var statearr_112284_112353 = state_112265__$1;(statearr_112284_112353[2] = inst_112261);
(statearr_112284_112353[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 7))
{var inst_112158 = (state_112265[17]);var inst_112157 = (state_112265[18]);var inst_112160 = (inst_112158 < inst_112157);var inst_112161 = inst_112160;var state_112265__$1 = state_112265;if(cljs.core.truth_(inst_112161))
{var statearr_112288_112354 = state_112265__$1;(statearr_112288_112354[1] = 9);
} else
{var statearr_112289_112355 = state_112265__$1;(statearr_112289_112355[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 8))
{var inst_112191 = (state_112265[2]);var inst_112192 = cljs.core.async.timeout.call(null,0);var state_112265__$1 = (function (){var statearr_112290 = state_112265;(statearr_112290[23] = inst_112191);
return statearr_112290;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112265__$1,18,inst_112192);
} else
{if((state_val_112266 === 9))
{var inst_112158 = (state_112265[17]);var inst_112157 = (state_112265[18]);var inst_112156 = (state_112265[19]);var inst_112155 = (state_112265[20]);var inst_112163 = cljs.core._nth.call(null,inst_112156,inst_112158);var inst_112164 = runner.world;var inst_112165 = globen.core.draw_circle.call(null,inst_112164,inst_112163,data);var inst_112166 = (inst_112158 + 1);var tmp112285 = inst_112157;var tmp112286 = inst_112156;var tmp112287 = inst_112155;var inst_112155__$1 = tmp112287;var inst_112156__$1 = tmp112286;var inst_112157__$1 = tmp112285;var inst_112158__$1 = inst_112166;var state_112265__$1 = (function (){var statearr_112291 = state_112265;(statearr_112291[24] = inst_112165);
(statearr_112291[17] = inst_112158__$1);
(statearr_112291[18] = inst_112157__$1);
(statearr_112291[19] = inst_112156__$1);
(statearr_112291[20] = inst_112155__$1);
return statearr_112291;
})();var statearr_112292_112356 = state_112265__$1;(statearr_112292_112356[2] = null);
(statearr_112292_112356[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 10))
{var inst_112169 = (state_112265[25]);var inst_112155 = (state_112265[20]);var inst_112169__$1 = cljs.core.seq.call(null,inst_112155);var state_112265__$1 = (function (){var statearr_112293 = state_112265;(statearr_112293[25] = inst_112169__$1);
return statearr_112293;
})();if(inst_112169__$1)
{var statearr_112294_112357 = state_112265__$1;(statearr_112294_112357[1] = 12);
} else
{var statearr_112295_112358 = state_112265__$1;(statearr_112295_112358[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 11))
{var inst_112189 = (state_112265[2]);var state_112265__$1 = state_112265;var statearr_112296_112359 = state_112265__$1;(statearr_112296_112359[2] = inst_112189);
(statearr_112296_112359[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 12))
{var inst_112169 = (state_112265[25]);var inst_112171 = cljs.core.chunked_seq_QMARK_.call(null,inst_112169);var state_112265__$1 = state_112265;if(inst_112171)
{var statearr_112297_112360 = state_112265__$1;(statearr_112297_112360[1] = 15);
} else
{var statearr_112298_112361 = state_112265__$1;(statearr_112298_112361[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 13))
{var state_112265__$1 = state_112265;var statearr_112299_112362 = state_112265__$1;(statearr_112299_112362[2] = null);
(statearr_112299_112362[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 14))
{var inst_112187 = (state_112265[2]);var state_112265__$1 = state_112265;var statearr_112300_112363 = state_112265__$1;(statearr_112300_112363[2] = inst_112187);
(statearr_112300_112363[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 15))
{var inst_112169 = (state_112265[25]);var inst_112173 = cljs.core.chunk_first.call(null,inst_112169);var inst_112174 = cljs.core.chunk_rest.call(null,inst_112169);var inst_112175 = cljs.core.count.call(null,inst_112173);var inst_112155 = inst_112174;var inst_112156 = inst_112173;var inst_112157 = inst_112175;var inst_112158 = 0;var state_112265__$1 = (function (){var statearr_112301 = state_112265;(statearr_112301[17] = inst_112158);
(statearr_112301[18] = inst_112157);
(statearr_112301[19] = inst_112156);
(statearr_112301[20] = inst_112155);
return statearr_112301;
})();var statearr_112302_112364 = state_112265__$1;(statearr_112302_112364[2] = null);
(statearr_112302_112364[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 16))
{var inst_112169 = (state_112265[25]);var inst_112178 = cljs.core.first.call(null,inst_112169);var inst_112179 = runner.world;var inst_112180 = globen.core.draw_circle.call(null,inst_112179,inst_112178,data);var inst_112181 = cljs.core.next.call(null,inst_112169);var inst_112155 = inst_112181;var inst_112156 = null;var inst_112157 = 0;var inst_112158 = 0;var state_112265__$1 = (function (){var statearr_112306 = state_112265;(statearr_112306[17] = inst_112158);
(statearr_112306[18] = inst_112157);
(statearr_112306[26] = inst_112180);
(statearr_112306[19] = inst_112156);
(statearr_112306[20] = inst_112155);
return statearr_112306;
})();var statearr_112307_112365 = state_112265__$1;(statearr_112307_112365[2] = null);
(statearr_112307_112365[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 17))
{var inst_112184 = (state_112265[2]);var state_112265__$1 = state_112265;var statearr_112308_112366 = state_112265__$1;(statearr_112308_112366[2] = inst_112184);
(statearr_112308_112366[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 18))
{var inst_112142 = (state_112265[7]);var inst_112143 = (state_112265[8]);var inst_112141 = (state_112265[9]);var inst_112144 = (state_112265[10]);var inst_112194 = (state_112265[2]);var inst_112195 = (inst_112144 + 1);var tmp112303 = inst_112142;var tmp112304 = inst_112143;var tmp112305 = inst_112141;var inst_112141__$1 = tmp112305;var inst_112142__$1 = tmp112303;var inst_112143__$1 = tmp112304;var inst_112144__$1 = inst_112195;var state_112265__$1 = (function (){var statearr_112309 = state_112265;(statearr_112309[7] = inst_112142__$1);
(statearr_112309[8] = inst_112143__$1);
(statearr_112309[9] = inst_112141__$1);
(statearr_112309[27] = inst_112194);
(statearr_112309[10] = inst_112144__$1);
return statearr_112309;
})();var statearr_112310_112367 = state_112265__$1;(statearr_112310_112367[2] = null);
(statearr_112310_112367[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 19))
{var inst_112198 = (state_112265[21]);var inst_112200 = cljs.core.chunked_seq_QMARK_.call(null,inst_112198);var state_112265__$1 = state_112265;if(inst_112200)
{var statearr_112311_112368 = state_112265__$1;(statearr_112311_112368[1] = 22);
} else
{var statearr_112312_112369 = state_112265__$1;(statearr_112312_112369[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 20))
{var state_112265__$1 = state_112265;var statearr_112313_112370 = state_112265__$1;(statearr_112313_112370[2] = null);
(statearr_112313_112370[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 21))
{var inst_112259 = (state_112265[2]);var state_112265__$1 = state_112265;var statearr_112314_112371 = state_112265__$1;(statearr_112314_112371[2] = inst_112259);
(statearr_112314_112371[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 22))
{var inst_112198 = (state_112265[21]);var inst_112202 = cljs.core.chunk_first.call(null,inst_112198);var inst_112203 = cljs.core.chunk_rest.call(null,inst_112198);var inst_112204 = cljs.core.count.call(null,inst_112202);var inst_112141 = inst_112203;var inst_112142 = inst_112202;var inst_112143 = inst_112204;var inst_112144 = 0;var state_112265__$1 = (function (){var statearr_112315 = state_112265;(statearr_112315[7] = inst_112142);
(statearr_112315[8] = inst_112143);
(statearr_112315[9] = inst_112141);
(statearr_112315[10] = inst_112144);
return statearr_112315;
})();var statearr_112316_112372 = state_112265__$1;(statearr_112316_112372[2] = null);
(statearr_112316_112372[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 23))
{var inst_112198 = (state_112265[21]);var inst_112207 = cljs.core.first.call(null,inst_112198);var inst_112212 = cljs.core.seq.call(null,inst_112207);var inst_112213 = inst_112212;var inst_112214 = null;var inst_112215 = 0;var inst_112216 = 0;var state_112265__$1 = (function (){var statearr_112317 = state_112265;(statearr_112317[12] = inst_112213);
(statearr_112317[13] = inst_112214);
(statearr_112317[14] = inst_112215);
(statearr_112317[15] = inst_112216);
return statearr_112317;
})();var statearr_112318_112373 = state_112265__$1;(statearr_112318_112373[2] = null);
(statearr_112318_112373[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 24))
{var inst_112256 = (state_112265[2]);var state_112265__$1 = state_112265;var statearr_112319_112374 = state_112265__$1;(statearr_112319_112374[2] = inst_112256);
(statearr_112319_112374[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 25))
{var inst_112215 = (state_112265[14]);var inst_112216 = (state_112265[15]);var inst_112218 = (inst_112216 < inst_112215);var inst_112219 = inst_112218;var state_112265__$1 = state_112265;if(cljs.core.truth_(inst_112219))
{var statearr_112323_112375 = state_112265__$1;(statearr_112323_112375[1] = 27);
} else
{var statearr_112324_112376 = state_112265__$1;(statearr_112324_112376[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 26))
{var inst_112249 = (state_112265[2]);var inst_112250 = cljs.core.async.timeout.call(null,0);var state_112265__$1 = (function (){var statearr_112325 = state_112265;(statearr_112325[28] = inst_112249);
return statearr_112325;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112265__$1,36,inst_112250);
} else
{if((state_val_112266 === 27))
{var inst_112213 = (state_112265[12]);var inst_112214 = (state_112265[13]);var inst_112215 = (state_112265[14]);var inst_112216 = (state_112265[15]);var inst_112221 = cljs.core._nth.call(null,inst_112214,inst_112216);var inst_112222 = runner.world;var inst_112223 = globen.core.draw_circle.call(null,inst_112222,inst_112221,data);var inst_112224 = (inst_112216 + 1);var tmp112320 = inst_112213;var tmp112321 = inst_112214;var tmp112322 = inst_112215;var inst_112213__$1 = tmp112320;var inst_112214__$1 = tmp112321;var inst_112215__$1 = tmp112322;var inst_112216__$1 = inst_112224;var state_112265__$1 = (function (){var statearr_112326 = state_112265;(statearr_112326[12] = inst_112213__$1);
(statearr_112326[13] = inst_112214__$1);
(statearr_112326[29] = inst_112223);
(statearr_112326[14] = inst_112215__$1);
(statearr_112326[15] = inst_112216__$1);
return statearr_112326;
})();var statearr_112327_112377 = state_112265__$1;(statearr_112327_112377[2] = null);
(statearr_112327_112377[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 28))
{var inst_112213 = (state_112265[12]);var inst_112227 = (state_112265[11]);var inst_112227__$1 = cljs.core.seq.call(null,inst_112213);var state_112265__$1 = (function (){var statearr_112328 = state_112265;(statearr_112328[11] = inst_112227__$1);
return statearr_112328;
})();if(inst_112227__$1)
{var statearr_112329_112378 = state_112265__$1;(statearr_112329_112378[1] = 30);
} else
{var statearr_112330_112379 = state_112265__$1;(statearr_112330_112379[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 29))
{var inst_112247 = (state_112265[2]);var state_112265__$1 = state_112265;var statearr_112331_112380 = state_112265__$1;(statearr_112331_112380[2] = inst_112247);
(statearr_112331_112380[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 30))
{var inst_112227 = (state_112265[11]);var inst_112229 = cljs.core.chunked_seq_QMARK_.call(null,inst_112227);var state_112265__$1 = state_112265;if(inst_112229)
{var statearr_112332_112381 = state_112265__$1;(statearr_112332_112381[1] = 33);
} else
{var statearr_112333_112382 = state_112265__$1;(statearr_112333_112382[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_112266 === 31))
{var state_112265__$1 = state_112265;var statearr_112334_112383 = state_112265__$1;(statearr_112334_112383[2] = null);
(statearr_112334_112383[1] = 32);
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
var state_machine__5511__auto____0 = (function (){var statearr_112338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_112338[0] = state_machine__5511__auto__);
(statearr_112338[1] = 1);
return statearr_112338;
});
var state_machine__5511__auto____1 = (function (state_112265){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_112265);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e112339){if((e112339 instanceof Object))
{var ex__5514__auto__ = e112339;var statearr_112340_112384 = state_112265;(statearr_112340_112384[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112265);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e112339;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__112385 = state_112265;
state_112265 = G__112385;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_112265){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_112265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_112341 = f__5526__auto__.call(null);(statearr_112341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto__);
return statearr_112341;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return c__5525__auto__;
});
globen.core.load_elevation_data = (function load_elevation_data(runner){return $.get("data/elevation.json").then((function (res){var points = (res["table"]["rows"]);var points__$1 = cljs.core.filter.call(null,((function (points){
return (function (p__112394){var vec__112395 = p__112394;var _ = cljs.core.nth.call(null,vec__112395,0,null);var ___$1 = cljs.core.nth.call(null,vec__112395,1,null);var v = cljs.core.nth.call(null,vec__112395,2,null);return (v > 0);
});})(points))
,points);var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (points,points__$1){
return (function (p__112396){var vec__112397 = p__112396;var _ = cljs.core.nth.call(null,vec__112397,0,null);var ___$1 = cljs.core.nth.call(null,vec__112397,1,null);var v = cljs.core.nth.call(null,vec__112397,2,null);return v;
});})(points,points__$1))
,points__$1));var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (points,points__$1,min_v){
return (function (p__112398){var vec__112399 = p__112398;var _ = cljs.core.nth.call(null,vec__112399,0,null);var ___$1 = cljs.core.nth.call(null,vec__112399,1,null);var v = cljs.core.nth.call(null,vec__112399,2,null);return v;
});})(points,points__$1,min_v))
,points__$1));var scale = d3.scale.linear().domain([min_v,0,max_v]).range([-1,0,1]);var to_key_values = ((function (points,points__$1,min_v,max_v,scale){
return (function (p__112400){var vec__112401 = p__112400;var lng = cljs.core.nth.call(null,vec__112401,0,null);var lat = cljs.core.nth.call(null,vec__112401,1,null);var v = cljs.core.nth.call(null,vec__112401,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null),scale.call(null,v)], null);
});})(points,points__$1,min_v,max_v,scale))
;var dict = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,to_key_values,points__$1));cljs.core.print.call(null,cljs.core.first.call(null,points__$1));
cljs.core.print.call(null,min_v);
cljs.core.print.call(null,max_v);
return globen.core.draw_lat.call(null,runner,dict);
}));
});
globen.core.load_population_data = (function load_population_data(runner){return $.get("data/population909500.json").then((function (res){var vec__112408 = res;var vec__112409 = cljs.core.nth.call(null,vec__112408,0,null);var year = cljs.core.nth.call(null,vec__112409,0,null);var data = cljs.core.nth.call(null,vec__112409,1,null);var rest = cljs.core.nthnext.call(null,vec__112408,1);var points = cljs.core.partition.call(null,3,data);var is_big = ((function (vec__112408,vec__112409,year,data,rest,points){
return (function (p__112410){var vec__112411 = p__112410;var _ = cljs.core.nth.call(null,vec__112411,0,null);var ___$1 = cljs.core.nth.call(null,vec__112411,1,null);var v = cljs.core.nth.call(null,vec__112411,2,null);return (v > 0.05);
});})(vec__112408,vec__112409,year,data,rest,points))
;var big_points = cljs.core.filter.call(null,is_big,points);var to_key_values = ((function (vec__112408,vec__112409,year,data,rest,points,is_big,big_points){
return (function (p__112412){var vec__112413 = p__112412;var lng = cljs.core.nth.call(null,vec__112413,0,null);var lat = cljs.core.nth.call(null,vec__112413,1,null);var v = cljs.core.nth.call(null,vec__112413,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null),v], null);
});})(vec__112408,vec__112409,year,data,rest,points,is_big,big_points))
;var dict = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,to_key_values,points));cljs.core.print.call(null,cljs.core.count.call(null,points));
cljs.core.print.call(null,cljs.core.first.call(null,dict));
return globen.core.draw_lat.call(null,runner,dict);
}));
});
globen.core.init = (function init(){var runner = globen.core.new_runner.call(null);(window["runner"] = runner);
globen.core.setup_world.call(null,runner);
globen.core.attach.call(null,runner,"container");
globen.core.load_globen.call(null,runner);
return globen.core.load_population_data.call(null,runner);
});
(window["onload"] = globen.core.init);

//# sourceMappingURL=core.js.map