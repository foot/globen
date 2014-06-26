// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t52478 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52478 = (function (f,fn_handler,meta52479){
this.f = f;
this.fn_handler = fn_handler;
this.meta52479 = meta52479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52478.cljs$lang$type = true;
cljs.core.async.t52478.cljs$lang$ctorStr = "cljs.core.async/t52478";
cljs.core.async.t52478.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t52478");
});
cljs.core.async.t52478.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t52478.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t52478.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t52478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52480){var self__ = this;
var _52480__$1 = this;return self__.meta52479;
});
cljs.core.async.t52478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52480,meta52479__$1){var self__ = this;
var _52480__$1 = this;return (new cljs.core.async.t52478(self__.f,self__.fn_handler,meta52479__$1));
});
cljs.core.async.__GT_t52478 = (function __GT_t52478(f__$1,fn_handler__$1,meta52479){return (new cljs.core.async.t52478(f__$1,fn_handler__$1,meta52479));
});
}
return (new cljs.core.async.t52478(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__52482 = buff;if(G__52482)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__52482.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__52482.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__52482);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__52482);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_52483 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_52483);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_52483);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___52484 = n;var x_52485 = 0;while(true){
if((x_52485 < n__4291__auto___52484))
{(a[x_52485] = 0);
{
var G__52486 = (x_52485 + 1);
x_52485 = G__52486;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__52487 = (i + 1);
i = G__52487;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t52491 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52491 = (function (flag,alt_flag,meta52492){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta52492 = meta52492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52491.cljs$lang$type = true;
cljs.core.async.t52491.cljs$lang$ctorStr = "cljs.core.async/t52491";
cljs.core.async.t52491.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t52491");
});
cljs.core.async.t52491.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t52491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t52491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t52491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52493){var self__ = this;
var _52493__$1 = this;return self__.meta52492;
});
cljs.core.async.t52491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52493,meta52492__$1){var self__ = this;
var _52493__$1 = this;return (new cljs.core.async.t52491(self__.flag,self__.alt_flag,meta52492__$1));
});
cljs.core.async.__GT_t52491 = (function __GT_t52491(flag__$1,alt_flag__$1,meta52492){return (new cljs.core.async.t52491(flag__$1,alt_flag__$1,meta52492));
});
}
return (new cljs.core.async.t52491(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t52497 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52497 = (function (cb,flag,alt_handler,meta52498){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta52498 = meta52498;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52497.cljs$lang$type = true;
cljs.core.async.t52497.cljs$lang$ctorStr = "cljs.core.async/t52497";
cljs.core.async.t52497.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t52497");
});
cljs.core.async.t52497.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t52497.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t52497.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t52497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52499){var self__ = this;
var _52499__$1 = this;return self__.meta52498;
});
cljs.core.async.t52497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52499,meta52498__$1){var self__ = this;
var _52499__$1 = this;return (new cljs.core.async.t52497(self__.cb,self__.flag,self__.alt_handler,meta52498__$1));
});
cljs.core.async.__GT_t52497 = (function __GT_t52497(cb__$1,flag__$1,alt_handler__$1,meta52498){return (new cljs.core.async.t52497(cb__$1,flag__$1,alt_handler__$1,meta52498));
});
}
return (new cljs.core.async.t52497(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52500_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52500_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__52501 = (i + 1);
i = G__52501;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__52502){var map__52504 = p__52502;var map__52504__$1 = ((cljs.core.seq_QMARK_.call(null,map__52504))?cljs.core.apply.call(null,cljs.core.hash_map,map__52504):map__52504);var opts = map__52504__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__52502 = null;if (arguments.length > 1) {
  p__52502 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__52502);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__52505){
var ports = cljs.core.first(arglist__52505);
var p__52502 = cljs.core.rest(arglist__52505);
return alts_BANG___delegate(ports,p__52502);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t52513 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52513 = (function (ch,f,map_LT_,meta52514){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta52514 = meta52514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52513.cljs$lang$type = true;
cljs.core.async.t52513.cljs$lang$ctorStr = "cljs.core.async/t52513";
cljs.core.async.t52513.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t52513");
});
cljs.core.async.t52513.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t52513.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t52513.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t52513.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t52516 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52516 = (function (fn1,_,meta52514,ch,f,map_LT_,meta52517){
this.fn1 = fn1;
this._ = _;
this.meta52514 = meta52514;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta52517 = meta52517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52516.cljs$lang$type = true;
cljs.core.async.t52516.cljs$lang$ctorStr = "cljs.core.async/t52516";
cljs.core.async.t52516.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t52516");
});
cljs.core.async.t52516.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t52516.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t52516.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t52516.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__52506_SHARP_){return f1.call(null,(((p1__52506_SHARP_ == null))?null:self__.f.call(null,p1__52506_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t52516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52518){var self__ = this;
var _52518__$1 = this;return self__.meta52517;
});
cljs.core.async.t52516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52518,meta52517__$1){var self__ = this;
var _52518__$1 = this;return (new cljs.core.async.t52516(self__.fn1,self__._,self__.meta52514,self__.ch,self__.f,self__.map_LT_,meta52517__$1));
});
cljs.core.async.__GT_t52516 = (function __GT_t52516(fn1__$1,___$2,meta52514__$1,ch__$2,f__$2,map_LT___$2,meta52517){return (new cljs.core.async.t52516(fn1__$1,___$2,meta52514__$1,ch__$2,f__$2,map_LT___$2,meta52517));
});
}
return (new cljs.core.async.t52516(fn1,___$1,self__.meta52514,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t52513.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t52513.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t52513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52515){var self__ = this;
var _52515__$1 = this;return self__.meta52514;
});
cljs.core.async.t52513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52515,meta52514__$1){var self__ = this;
var _52515__$1 = this;return (new cljs.core.async.t52513(self__.ch,self__.f,self__.map_LT_,meta52514__$1));
});
cljs.core.async.__GT_t52513 = (function __GT_t52513(ch__$1,f__$1,map_LT___$1,meta52514){return (new cljs.core.async.t52513(ch__$1,f__$1,map_LT___$1,meta52514));
});
}
return (new cljs.core.async.t52513(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t52522 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52522 = (function (ch,f,map_GT_,meta52523){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta52523 = meta52523;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52522.cljs$lang$type = true;
cljs.core.async.t52522.cljs$lang$ctorStr = "cljs.core.async/t52522";
cljs.core.async.t52522.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t52522");
});
cljs.core.async.t52522.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t52522.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t52522.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t52522.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t52522.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t52522.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t52522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52524){var self__ = this;
var _52524__$1 = this;return self__.meta52523;
});
cljs.core.async.t52522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52524,meta52523__$1){var self__ = this;
var _52524__$1 = this;return (new cljs.core.async.t52522(self__.ch,self__.f,self__.map_GT_,meta52523__$1));
});
cljs.core.async.__GT_t52522 = (function __GT_t52522(ch__$1,f__$1,map_GT___$1,meta52523){return (new cljs.core.async.t52522(ch__$1,f__$1,map_GT___$1,meta52523));
});
}
return (new cljs.core.async.t52522(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t52528 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52528 = (function (ch,p,filter_GT_,meta52529){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta52529 = meta52529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52528.cljs$lang$type = true;
cljs.core.async.t52528.cljs$lang$ctorStr = "cljs.core.async/t52528";
cljs.core.async.t52528.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t52528");
});
cljs.core.async.t52528.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t52528.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t52528.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t52528.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t52528.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t52528.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t52528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52530){var self__ = this;
var _52530__$1 = this;return self__.meta52529;
});
cljs.core.async.t52528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52530,meta52529__$1){var self__ = this;
var _52530__$1 = this;return (new cljs.core.async.t52528(self__.ch,self__.p,self__.filter_GT_,meta52529__$1));
});
cljs.core.async.__GT_t52528 = (function __GT_t52528(ch__$1,p__$1,filter_GT___$1,meta52529){return (new cljs.core.async.t52528(ch__$1,p__$1,filter_GT___$1,meta52529));
});
}
return (new cljs.core.async.t52528(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5525__auto___52613 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_52592){var state_val_52593 = (state_52592[1]);if((state_val_52593 === 1))
{var state_52592__$1 = state_52592;var statearr_52594_52614 = state_52592__$1;(statearr_52594_52614[2] = null);
(statearr_52594_52614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52593 === 2))
{var state_52592__$1 = state_52592;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52592__$1,4,ch);
} else
{if((state_val_52593 === 3))
{var inst_52590 = (state_52592[2]);var state_52592__$1 = state_52592;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52592__$1,inst_52590);
} else
{if((state_val_52593 === 4))
{var inst_52574 = (state_52592[7]);var inst_52574__$1 = (state_52592[2]);var inst_52575 = (inst_52574__$1 == null);var state_52592__$1 = (function (){var statearr_52595 = state_52592;(statearr_52595[7] = inst_52574__$1);
return statearr_52595;
})();if(cljs.core.truth_(inst_52575))
{var statearr_52596_52615 = state_52592__$1;(statearr_52596_52615[1] = 5);
} else
{var statearr_52597_52616 = state_52592__$1;(statearr_52597_52616[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52593 === 5))
{var inst_52577 = cljs.core.async.close_BANG_.call(null,out);var state_52592__$1 = state_52592;var statearr_52598_52617 = state_52592__$1;(statearr_52598_52617[2] = inst_52577);
(statearr_52598_52617[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52593 === 6))
{var inst_52574 = (state_52592[7]);var inst_52579 = p.call(null,inst_52574);var state_52592__$1 = state_52592;if(cljs.core.truth_(inst_52579))
{var statearr_52599_52618 = state_52592__$1;(statearr_52599_52618[1] = 8);
} else
{var statearr_52600_52619 = state_52592__$1;(statearr_52600_52619[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52593 === 7))
{var inst_52588 = (state_52592[2]);var state_52592__$1 = state_52592;var statearr_52601_52620 = state_52592__$1;(statearr_52601_52620[2] = inst_52588);
(statearr_52601_52620[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52593 === 8))
{var inst_52574 = (state_52592[7]);var state_52592__$1 = state_52592;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52592__$1,11,out,inst_52574);
} else
{if((state_val_52593 === 9))
{var state_52592__$1 = state_52592;var statearr_52602_52621 = state_52592__$1;(statearr_52602_52621[2] = null);
(statearr_52602_52621[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52593 === 10))
{var inst_52585 = (state_52592[2]);var state_52592__$1 = (function (){var statearr_52603 = state_52592;(statearr_52603[8] = inst_52585);
return statearr_52603;
})();var statearr_52604_52622 = state_52592__$1;(statearr_52604_52622[2] = null);
(statearr_52604_52622[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52593 === 11))
{var inst_52582 = (state_52592[2]);var state_52592__$1 = state_52592;var statearr_52605_52623 = state_52592__$1;(statearr_52605_52623[2] = inst_52582);
(statearr_52605_52623[1] = 10);
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
});return ((function (switch__5510__auto__){
return (function() {
var state_machine__5511__auto__ = null;
var state_machine__5511__auto____0 = (function (){var statearr_52609 = [null,null,null,null,null,null,null,null,null];(statearr_52609[0] = state_machine__5511__auto__);
(statearr_52609[1] = 1);
return statearr_52609;
});
var state_machine__5511__auto____1 = (function (state_52592){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_52592);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e52610){if((e52610 instanceof Object))
{var ex__5514__auto__ = e52610;var statearr_52611_52624 = state_52592;(statearr_52611_52624[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52592);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e52610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__52625 = state_52592;
state_52592 = G__52625;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_52592){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_52592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_52612 = f__5526__auto__.call(null);(statearr_52612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___52613);
return statearr_52612;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5525__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_52777){var state_val_52778 = (state_52777[1]);if((state_val_52778 === 1))
{var state_52777__$1 = state_52777;var statearr_52779_52816 = state_52777__$1;(statearr_52779_52816[2] = null);
(statearr_52779_52816[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52778 === 2))
{var state_52777__$1 = state_52777;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52777__$1,4,in$);
} else
{if((state_val_52778 === 3))
{var inst_52775 = (state_52777[2]);var state_52777__$1 = state_52777;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52777__$1,inst_52775);
} else
{if((state_val_52778 === 4))
{var inst_52723 = (state_52777[7]);var inst_52723__$1 = (state_52777[2]);var inst_52724 = (inst_52723__$1 == null);var state_52777__$1 = (function (){var statearr_52780 = state_52777;(statearr_52780[7] = inst_52723__$1);
return statearr_52780;
})();if(cljs.core.truth_(inst_52724))
{var statearr_52781_52817 = state_52777__$1;(statearr_52781_52817[1] = 5);
} else
{var statearr_52782_52818 = state_52777__$1;(statearr_52782_52818[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52778 === 5))
{var inst_52726 = cljs.core.async.close_BANG_.call(null,out);var state_52777__$1 = state_52777;var statearr_52783_52819 = state_52777__$1;(statearr_52783_52819[2] = inst_52726);
(statearr_52783_52819[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52778 === 6))
{var inst_52723 = (state_52777[7]);var inst_52728 = f.call(null,inst_52723);var inst_52733 = cljs.core.seq.call(null,inst_52728);var inst_52734 = inst_52733;var inst_52735 = null;var inst_52736 = 0;var inst_52737 = 0;var state_52777__$1 = (function (){var statearr_52784 = state_52777;(statearr_52784[8] = inst_52735);
(statearr_52784[9] = inst_52734);
(statearr_52784[10] = inst_52736);
(statearr_52784[11] = inst_52737);
return statearr_52784;
})();var statearr_52785_52820 = state_52777__$1;(statearr_52785_52820[2] = null);
(statearr_52785_52820[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52778 === 7))
{var inst_52773 = (state_52777[2]);var state_52777__$1 = state_52777;var statearr_52786_52821 = state_52777__$1;(statearr_52786_52821[2] = inst_52773);
(statearr_52786_52821[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52778 === 8))
{var inst_52736 = (state_52777[10]);var inst_52737 = (state_52777[11]);var inst_52739 = (inst_52737 < inst_52736);var inst_52740 = inst_52739;var state_52777__$1 = state_52777;if(cljs.core.truth_(inst_52740))
{var statearr_52787_52822 = state_52777__$1;(statearr_52787_52822[1] = 10);
} else
{var statearr_52788_52823 = state_52777__$1;(statearr_52788_52823[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52778 === 9))
{var inst_52770 = (state_52777[2]);var state_52777__$1 = (function (){var statearr_52789 = state_52777;(statearr_52789[12] = inst_52770);
return statearr_52789;
})();var statearr_52790_52824 = state_52777__$1;(statearr_52790_52824[2] = null);
(statearr_52790_52824[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52778 === 10))
{var inst_52735 = (state_52777[8]);var inst_52737 = (state_52777[11]);var inst_52742 = cljs.core._nth.call(null,inst_52735,inst_52737);var state_52777__$1 = state_52777;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52777__$1,13,out,inst_52742);
} else
{if((state_val_52778 === 11))
{var inst_52734 = (state_52777[9]);var inst_52748 = (state_52777[13]);var inst_52748__$1 = cljs.core.seq.call(null,inst_52734);var state_52777__$1 = (function (){var statearr_52794 = state_52777;(statearr_52794[13] = inst_52748__$1);
return statearr_52794;
})();if(inst_52748__$1)
{var statearr_52795_52825 = state_52777__$1;(statearr_52795_52825[1] = 14);
} else
{var statearr_52796_52826 = state_52777__$1;(statearr_52796_52826[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52778 === 12))
{var inst_52768 = (state_52777[2]);var state_52777__$1 = state_52777;var statearr_52797_52827 = state_52777__$1;(statearr_52797_52827[2] = inst_52768);
(statearr_52797_52827[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52778 === 13))
{var inst_52735 = (state_52777[8]);var inst_52734 = (state_52777[9]);var inst_52736 = (state_52777[10]);var inst_52737 = (state_52777[11]);var inst_52744 = (state_52777[2]);var inst_52745 = (inst_52737 + 1);var tmp52791 = inst_52735;var tmp52792 = inst_52734;var tmp52793 = inst_52736;var inst_52734__$1 = tmp52792;var inst_52735__$1 = tmp52791;var inst_52736__$1 = tmp52793;var inst_52737__$1 = inst_52745;var state_52777__$1 = (function (){var statearr_52798 = state_52777;(statearr_52798[8] = inst_52735__$1);
(statearr_52798[9] = inst_52734__$1);
(statearr_52798[10] = inst_52736__$1);
(statearr_52798[11] = inst_52737__$1);
(statearr_52798[14] = inst_52744);
return statearr_52798;
})();var statearr_52799_52828 = state_52777__$1;(statearr_52799_52828[2] = null);
(statearr_52799_52828[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52778 === 14))
{var inst_52748 = (state_52777[13]);var inst_52750 = cljs.core.chunked_seq_QMARK_.call(null,inst_52748);var state_52777__$1 = state_52777;if(inst_52750)
{var statearr_52800_52829 = state_52777__$1;(statearr_52800_52829[1] = 17);
} else
{var statearr_52801_52830 = state_52777__$1;(statearr_52801_52830[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52778 === 15))
{var state_52777__$1 = state_52777;var statearr_52802_52831 = state_52777__$1;(statearr_52802_52831[2] = null);
(statearr_52802_52831[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52778 === 16))
{var inst_52766 = (state_52777[2]);var state_52777__$1 = state_52777;var statearr_52803_52832 = state_52777__$1;(statearr_52803_52832[2] = inst_52766);
(statearr_52803_52832[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52778 === 17))
{var inst_52748 = (state_52777[13]);var inst_52752 = cljs.core.chunk_first.call(null,inst_52748);var inst_52753 = cljs.core.chunk_rest.call(null,inst_52748);var inst_52754 = cljs.core.count.call(null,inst_52752);var inst_52734 = inst_52753;var inst_52735 = inst_52752;var inst_52736 = inst_52754;var inst_52737 = 0;var state_52777__$1 = (function (){var statearr_52804 = state_52777;(statearr_52804[8] = inst_52735);
(statearr_52804[9] = inst_52734);
(statearr_52804[10] = inst_52736);
(statearr_52804[11] = inst_52737);
return statearr_52804;
})();var statearr_52805_52833 = state_52777__$1;(statearr_52805_52833[2] = null);
(statearr_52805_52833[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52778 === 18))
{var inst_52748 = (state_52777[13]);var inst_52757 = cljs.core.first.call(null,inst_52748);var state_52777__$1 = state_52777;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52777__$1,20,out,inst_52757);
} else
{if((state_val_52778 === 19))
{var inst_52763 = (state_52777[2]);var state_52777__$1 = state_52777;var statearr_52806_52834 = state_52777__$1;(statearr_52806_52834[2] = inst_52763);
(statearr_52806_52834[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52778 === 20))
{var inst_52748 = (state_52777[13]);var inst_52759 = (state_52777[2]);var inst_52760 = cljs.core.next.call(null,inst_52748);var inst_52734 = inst_52760;var inst_52735 = null;var inst_52736 = 0;var inst_52737 = 0;var state_52777__$1 = (function (){var statearr_52807 = state_52777;(statearr_52807[15] = inst_52759);
(statearr_52807[8] = inst_52735);
(statearr_52807[9] = inst_52734);
(statearr_52807[10] = inst_52736);
(statearr_52807[11] = inst_52737);
return statearr_52807;
})();var statearr_52808_52835 = state_52777__$1;(statearr_52808_52835[2] = null);
(statearr_52808_52835[1] = 8);
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
});return ((function (switch__5510__auto__){
return (function() {
var state_machine__5511__auto__ = null;
var state_machine__5511__auto____0 = (function (){var statearr_52812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52812[0] = state_machine__5511__auto__);
(statearr_52812[1] = 1);
return statearr_52812;
});
var state_machine__5511__auto____1 = (function (state_52777){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_52777);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e52813){if((e52813 instanceof Object))
{var ex__5514__auto__ = e52813;var statearr_52814_52836 = state_52777;(statearr_52814_52836[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52777);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e52813;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__52837 = state_52777;
state_52777 = G__52837;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_52777){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_52777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_52815 = f__5526__auto__.call(null);(statearr_52815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto__);
return statearr_52815;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return c__5525__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5525__auto___52918 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_52897){var state_val_52898 = (state_52897[1]);if((state_val_52898 === 1))
{var state_52897__$1 = state_52897;var statearr_52899_52919 = state_52897__$1;(statearr_52899_52919[2] = null);
(statearr_52899_52919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52898 === 2))
{var state_52897__$1 = state_52897;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52897__$1,4,from);
} else
{if((state_val_52898 === 3))
{var inst_52895 = (state_52897[2]);var state_52897__$1 = state_52897;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52897__$1,inst_52895);
} else
{if((state_val_52898 === 4))
{var inst_52880 = (state_52897[7]);var inst_52880__$1 = (state_52897[2]);var inst_52881 = (inst_52880__$1 == null);var state_52897__$1 = (function (){var statearr_52900 = state_52897;(statearr_52900[7] = inst_52880__$1);
return statearr_52900;
})();if(cljs.core.truth_(inst_52881))
{var statearr_52901_52920 = state_52897__$1;(statearr_52901_52920[1] = 5);
} else
{var statearr_52902_52921 = state_52897__$1;(statearr_52902_52921[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52898 === 5))
{var state_52897__$1 = state_52897;if(cljs.core.truth_(close_QMARK_))
{var statearr_52903_52922 = state_52897__$1;(statearr_52903_52922[1] = 8);
} else
{var statearr_52904_52923 = state_52897__$1;(statearr_52904_52923[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52898 === 6))
{var inst_52880 = (state_52897[7]);var state_52897__$1 = state_52897;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52897__$1,11,to,inst_52880);
} else
{if((state_val_52898 === 7))
{var inst_52893 = (state_52897[2]);var state_52897__$1 = state_52897;var statearr_52905_52924 = state_52897__$1;(statearr_52905_52924[2] = inst_52893);
(statearr_52905_52924[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52898 === 8))
{var inst_52884 = cljs.core.async.close_BANG_.call(null,to);var state_52897__$1 = state_52897;var statearr_52906_52925 = state_52897__$1;(statearr_52906_52925[2] = inst_52884);
(statearr_52906_52925[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52898 === 9))
{var state_52897__$1 = state_52897;var statearr_52907_52926 = state_52897__$1;(statearr_52907_52926[2] = null);
(statearr_52907_52926[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52898 === 10))
{var inst_52887 = (state_52897[2]);var state_52897__$1 = state_52897;var statearr_52908_52927 = state_52897__$1;(statearr_52908_52927[2] = inst_52887);
(statearr_52908_52927[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52898 === 11))
{var inst_52890 = (state_52897[2]);var state_52897__$1 = (function (){var statearr_52909 = state_52897;(statearr_52909[8] = inst_52890);
return statearr_52909;
})();var statearr_52910_52928 = state_52897__$1;(statearr_52910_52928[2] = null);
(statearr_52910_52928[1] = 2);
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
});return ((function (switch__5510__auto__){
return (function() {
var state_machine__5511__auto__ = null;
var state_machine__5511__auto____0 = (function (){var statearr_52914 = [null,null,null,null,null,null,null,null,null];(statearr_52914[0] = state_machine__5511__auto__);
(statearr_52914[1] = 1);
return statearr_52914;
});
var state_machine__5511__auto____1 = (function (state_52897){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_52897);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e52915){if((e52915 instanceof Object))
{var ex__5514__auto__ = e52915;var statearr_52916_52929 = state_52897;(statearr_52916_52929[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52897);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e52915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__52930 = state_52897;
state_52897 = G__52930;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_52897){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_52897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_52917 = f__5526__auto__.call(null);(statearr_52917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___52918);
return statearr_52917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5525__auto___53017 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_52995){var state_val_52996 = (state_52995[1]);if((state_val_52996 === 1))
{var state_52995__$1 = state_52995;var statearr_52997_53018 = state_52995__$1;(statearr_52997_53018[2] = null);
(statearr_52997_53018[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52996 === 2))
{var state_52995__$1 = state_52995;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52995__$1,4,ch);
} else
{if((state_val_52996 === 3))
{var inst_52993 = (state_52995[2]);var state_52995__$1 = state_52995;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52995__$1,inst_52993);
} else
{if((state_val_52996 === 4))
{var inst_52976 = (state_52995[7]);var inst_52976__$1 = (state_52995[2]);var inst_52977 = (inst_52976__$1 == null);var state_52995__$1 = (function (){var statearr_52998 = state_52995;(statearr_52998[7] = inst_52976__$1);
return statearr_52998;
})();if(cljs.core.truth_(inst_52977))
{var statearr_52999_53019 = state_52995__$1;(statearr_52999_53019[1] = 5);
} else
{var statearr_53000_53020 = state_52995__$1;(statearr_53000_53020[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52996 === 5))
{var inst_52979 = cljs.core.async.close_BANG_.call(null,tc);var inst_52980 = cljs.core.async.close_BANG_.call(null,fc);var state_52995__$1 = (function (){var statearr_53001 = state_52995;(statearr_53001[8] = inst_52979);
return statearr_53001;
})();var statearr_53002_53021 = state_52995__$1;(statearr_53002_53021[2] = inst_52980);
(statearr_53002_53021[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52996 === 6))
{var inst_52976 = (state_52995[7]);var inst_52982 = p.call(null,inst_52976);var state_52995__$1 = state_52995;if(cljs.core.truth_(inst_52982))
{var statearr_53003_53022 = state_52995__$1;(statearr_53003_53022[1] = 9);
} else
{var statearr_53004_53023 = state_52995__$1;(statearr_53004_53023[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52996 === 7))
{var inst_52991 = (state_52995[2]);var state_52995__$1 = state_52995;var statearr_53005_53024 = state_52995__$1;(statearr_53005_53024[2] = inst_52991);
(statearr_53005_53024[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52996 === 8))
{var inst_52988 = (state_52995[2]);var state_52995__$1 = (function (){var statearr_53006 = state_52995;(statearr_53006[9] = inst_52988);
return statearr_53006;
})();var statearr_53007_53025 = state_52995__$1;(statearr_53007_53025[2] = null);
(statearr_53007_53025[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52996 === 9))
{var state_52995__$1 = state_52995;var statearr_53008_53026 = state_52995__$1;(statearr_53008_53026[2] = tc);
(statearr_53008_53026[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52996 === 10))
{var state_52995__$1 = state_52995;var statearr_53009_53027 = state_52995__$1;(statearr_53009_53027[2] = fc);
(statearr_53009_53027[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52996 === 11))
{var inst_52976 = (state_52995[7]);var inst_52986 = (state_52995[2]);var state_52995__$1 = state_52995;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52995__$1,8,inst_52986,inst_52976);
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
});return ((function (switch__5510__auto__){
return (function() {
var state_machine__5511__auto__ = null;
var state_machine__5511__auto____0 = (function (){var statearr_53013 = [null,null,null,null,null,null,null,null,null,null];(statearr_53013[0] = state_machine__5511__auto__);
(statearr_53013[1] = 1);
return statearr_53013;
});
var state_machine__5511__auto____1 = (function (state_52995){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_52995);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e53014){if((e53014 instanceof Object))
{var ex__5514__auto__ = e53014;var statearr_53015_53028 = state_52995;(statearr_53015_53028[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52995);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e53014;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__53029 = state_52995;
state_52995 = G__53029;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_52995){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_52995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_53016 = f__5526__auto__.call(null);(statearr_53016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___53017);
return statearr_53016;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5525__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_53076){var state_val_53077 = (state_53076[1]);if((state_val_53077 === 7))
{var inst_53072 = (state_53076[2]);var state_53076__$1 = state_53076;var statearr_53078_53094 = state_53076__$1;(statearr_53078_53094[2] = inst_53072);
(statearr_53078_53094[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53077 === 6))
{var inst_53065 = (state_53076[7]);var inst_53062 = (state_53076[8]);var inst_53069 = f.call(null,inst_53062,inst_53065);var inst_53062__$1 = inst_53069;var state_53076__$1 = (function (){var statearr_53079 = state_53076;(statearr_53079[8] = inst_53062__$1);
return statearr_53079;
})();var statearr_53080_53095 = state_53076__$1;(statearr_53080_53095[2] = null);
(statearr_53080_53095[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53077 === 5))
{var inst_53062 = (state_53076[8]);var state_53076__$1 = state_53076;var statearr_53081_53096 = state_53076__$1;(statearr_53081_53096[2] = inst_53062);
(statearr_53081_53096[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53077 === 4))
{var inst_53065 = (state_53076[7]);var inst_53065__$1 = (state_53076[2]);var inst_53066 = (inst_53065__$1 == null);var state_53076__$1 = (function (){var statearr_53082 = state_53076;(statearr_53082[7] = inst_53065__$1);
return statearr_53082;
})();if(cljs.core.truth_(inst_53066))
{var statearr_53083_53097 = state_53076__$1;(statearr_53083_53097[1] = 5);
} else
{var statearr_53084_53098 = state_53076__$1;(statearr_53084_53098[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53077 === 3))
{var inst_53074 = (state_53076[2]);var state_53076__$1 = state_53076;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53076__$1,inst_53074);
} else
{if((state_val_53077 === 2))
{var state_53076__$1 = state_53076;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53076__$1,4,ch);
} else
{if((state_val_53077 === 1))
{var inst_53062 = init;var state_53076__$1 = (function (){var statearr_53085 = state_53076;(statearr_53085[8] = inst_53062);
return statearr_53085;
})();var statearr_53086_53099 = state_53076__$1;(statearr_53086_53099[2] = null);
(statearr_53086_53099[1] = 2);
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
});return ((function (switch__5510__auto__){
return (function() {
var state_machine__5511__auto__ = null;
var state_machine__5511__auto____0 = (function (){var statearr_53090 = [null,null,null,null,null,null,null,null,null];(statearr_53090[0] = state_machine__5511__auto__);
(statearr_53090[1] = 1);
return statearr_53090;
});
var state_machine__5511__auto____1 = (function (state_53076){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_53076);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e53091){if((e53091 instanceof Object))
{var ex__5514__auto__ = e53091;var statearr_53092_53100 = state_53076;(statearr_53092_53100[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53076);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e53091;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__53101 = state_53076;
state_53076 = G__53101;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_53076){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_53076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_53093 = f__5526__auto__.call(null);(statearr_53093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto__);
return statearr_53093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return c__5525__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5525__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_53163){var state_val_53164 = (state_53163[1]);if((state_val_53164 === 1))
{var inst_53143 = cljs.core.seq.call(null,coll);var inst_53144 = inst_53143;var state_53163__$1 = (function (){var statearr_53165 = state_53163;(statearr_53165[7] = inst_53144);
return statearr_53165;
})();var statearr_53166_53184 = state_53163__$1;(statearr_53166_53184[2] = null);
(statearr_53166_53184[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53164 === 2))
{var inst_53144 = (state_53163[7]);var state_53163__$1 = state_53163;if(cljs.core.truth_(inst_53144))
{var statearr_53167_53185 = state_53163__$1;(statearr_53167_53185[1] = 4);
} else
{var statearr_53168_53186 = state_53163__$1;(statearr_53168_53186[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53164 === 3))
{var inst_53161 = (state_53163[2]);var state_53163__$1 = state_53163;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53163__$1,inst_53161);
} else
{if((state_val_53164 === 4))
{var inst_53144 = (state_53163[7]);var inst_53147 = cljs.core.first.call(null,inst_53144);var state_53163__$1 = state_53163;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53163__$1,7,ch,inst_53147);
} else
{if((state_val_53164 === 5))
{var state_53163__$1 = state_53163;if(cljs.core.truth_(close_QMARK_))
{var statearr_53169_53187 = state_53163__$1;(statearr_53169_53187[1] = 8);
} else
{var statearr_53170_53188 = state_53163__$1;(statearr_53170_53188[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53164 === 6))
{var inst_53159 = (state_53163[2]);var state_53163__$1 = state_53163;var statearr_53171_53189 = state_53163__$1;(statearr_53171_53189[2] = inst_53159);
(statearr_53171_53189[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53164 === 7))
{var inst_53144 = (state_53163[7]);var inst_53149 = (state_53163[2]);var inst_53150 = cljs.core.next.call(null,inst_53144);var inst_53144__$1 = inst_53150;var state_53163__$1 = (function (){var statearr_53172 = state_53163;(statearr_53172[8] = inst_53149);
(statearr_53172[7] = inst_53144__$1);
return statearr_53172;
})();var statearr_53173_53190 = state_53163__$1;(statearr_53173_53190[2] = null);
(statearr_53173_53190[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53164 === 8))
{var inst_53154 = cljs.core.async.close_BANG_.call(null,ch);var state_53163__$1 = state_53163;var statearr_53174_53191 = state_53163__$1;(statearr_53174_53191[2] = inst_53154);
(statearr_53174_53191[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53164 === 9))
{var state_53163__$1 = state_53163;var statearr_53175_53192 = state_53163__$1;(statearr_53175_53192[2] = null);
(statearr_53175_53192[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53164 === 10))
{var inst_53157 = (state_53163[2]);var state_53163__$1 = state_53163;var statearr_53176_53193 = state_53163__$1;(statearr_53176_53193[2] = inst_53157);
(statearr_53176_53193[1] = 6);
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
});return ((function (switch__5510__auto__){
return (function() {
var state_machine__5511__auto__ = null;
var state_machine__5511__auto____0 = (function (){var statearr_53180 = [null,null,null,null,null,null,null,null,null];(statearr_53180[0] = state_machine__5511__auto__);
(statearr_53180[1] = 1);
return statearr_53180;
});
var state_machine__5511__auto____1 = (function (state_53163){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_53163);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e53181){if((e53181 instanceof Object))
{var ex__5514__auto__ = e53181;var statearr_53182_53194 = state_53163;(statearr_53182_53194[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53163);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e53181;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__53195 = state_53163;
state_53163 = G__53195;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_53163){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_53163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_53183 = f__5526__auto__.call(null);(statearr_53183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto__);
return statearr_53183;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return c__5525__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj53197 = {};return obj53197;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj53199 = {};return obj53199;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t53414 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53414 = (function (cs,ch,mult,meta53415){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta53415 = meta53415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53414.cljs$lang$type = true;
cljs.core.async.t53414.cljs$lang$ctorStr = "cljs.core.async/t53414";
cljs.core.async.t53414.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t53414");
});})(cs))
;
cljs.core.async.t53414.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t53414.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t53414.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t53414.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t53414.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t53414.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t53414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_53416){var self__ = this;
var _53416__$1 = this;return self__.meta53415;
});})(cs))
;
cljs.core.async.t53414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_53416,meta53415__$1){var self__ = this;
var _53416__$1 = this;return (new cljs.core.async.t53414(self__.cs,self__.ch,self__.mult,meta53415__$1));
});})(cs))
;
cljs.core.async.__GT_t53414 = ((function (cs){
return (function __GT_t53414(cs__$1,ch__$1,mult__$1,meta53415){return (new cljs.core.async.t53414(cs__$1,ch__$1,mult__$1,meta53415));
});})(cs))
;
}
return (new cljs.core.async.t53414(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5525__auto___53628 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_53546){var state_val_53547 = (state_53546[1]);if((state_val_53547 === 32))
{var inst_53419 = (state_53546[7]);var inst_53495 = (state_53546[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_53546,31,Object,null,30);var inst_53502 = cljs.core.async.put_BANG_.call(null,inst_53495,inst_53419,done);var state_53546__$1 = state_53546;var statearr_53548_53629 = state_53546__$1;(statearr_53548_53629[2] = inst_53502);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53546__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 1))
{var state_53546__$1 = state_53546;var statearr_53549_53630 = state_53546__$1;(statearr_53549_53630[2] = null);
(statearr_53549_53630[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 33))
{var inst_53508 = (state_53546[9]);var inst_53510 = cljs.core.chunked_seq_QMARK_.call(null,inst_53508);var state_53546__$1 = state_53546;if(inst_53510)
{var statearr_53550_53631 = state_53546__$1;(statearr_53550_53631[1] = 36);
} else
{var statearr_53551_53632 = state_53546__$1;(statearr_53551_53632[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 2))
{var state_53546__$1 = state_53546;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53546__$1,4,ch);
} else
{if((state_val_53547 === 34))
{var state_53546__$1 = state_53546;var statearr_53552_53633 = state_53546__$1;(statearr_53552_53633[2] = null);
(statearr_53552_53633[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 3))
{var inst_53544 = (state_53546[2]);var state_53546__$1 = state_53546;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53546__$1,inst_53544);
} else
{if((state_val_53547 === 35))
{var inst_53533 = (state_53546[2]);var state_53546__$1 = state_53546;var statearr_53553_53634 = state_53546__$1;(statearr_53553_53634[2] = inst_53533);
(statearr_53553_53634[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 4))
{var inst_53419 = (state_53546[7]);var inst_53419__$1 = (state_53546[2]);var inst_53420 = (inst_53419__$1 == null);var state_53546__$1 = (function (){var statearr_53554 = state_53546;(statearr_53554[7] = inst_53419__$1);
return statearr_53554;
})();if(cljs.core.truth_(inst_53420))
{var statearr_53555_53635 = state_53546__$1;(statearr_53555_53635[1] = 5);
} else
{var statearr_53556_53636 = state_53546__$1;(statearr_53556_53636[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 36))
{var inst_53508 = (state_53546[9]);var inst_53512 = cljs.core.chunk_first.call(null,inst_53508);var inst_53513 = cljs.core.chunk_rest.call(null,inst_53508);var inst_53514 = cljs.core.count.call(null,inst_53512);var inst_53487 = inst_53513;var inst_53488 = inst_53512;var inst_53489 = inst_53514;var inst_53490 = 0;var state_53546__$1 = (function (){var statearr_53557 = state_53546;(statearr_53557[10] = inst_53490);
(statearr_53557[11] = inst_53487);
(statearr_53557[12] = inst_53488);
(statearr_53557[13] = inst_53489);
return statearr_53557;
})();var statearr_53558_53637 = state_53546__$1;(statearr_53558_53637[2] = null);
(statearr_53558_53637[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 5))
{var inst_53426 = cljs.core.deref.call(null,cs);var inst_53427 = cljs.core.seq.call(null,inst_53426);var inst_53428 = inst_53427;var inst_53429 = null;var inst_53430 = 0;var inst_53431 = 0;var state_53546__$1 = (function (){var statearr_53559 = state_53546;(statearr_53559[14] = inst_53431);
(statearr_53559[15] = inst_53430);
(statearr_53559[16] = inst_53428);
(statearr_53559[17] = inst_53429);
return statearr_53559;
})();var statearr_53560_53638 = state_53546__$1;(statearr_53560_53638[2] = null);
(statearr_53560_53638[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 37))
{var inst_53508 = (state_53546[9]);var inst_53517 = cljs.core.first.call(null,inst_53508);var state_53546__$1 = (function (){var statearr_53561 = state_53546;(statearr_53561[18] = inst_53517);
return statearr_53561;
})();var statearr_53562_53639 = state_53546__$1;(statearr_53562_53639[2] = null);
(statearr_53562_53639[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 6))
{var inst_53478 = cljs.core.deref.call(null,cs);var inst_53479 = cljs.core.keys.call(null,inst_53478);var inst_53480 = cljs.core.count.call(null,inst_53479);var inst_53481 = cljs.core.reset_BANG_.call(null,dctr,inst_53480);var inst_53486 = cljs.core.seq.call(null,inst_53479);var inst_53487 = inst_53486;var inst_53488 = null;var inst_53489 = 0;var inst_53490 = 0;var state_53546__$1 = (function (){var statearr_53563 = state_53546;(statearr_53563[19] = inst_53481);
(statearr_53563[10] = inst_53490);
(statearr_53563[11] = inst_53487);
(statearr_53563[12] = inst_53488);
(statearr_53563[13] = inst_53489);
return statearr_53563;
})();var statearr_53564_53640 = state_53546__$1;(statearr_53564_53640[2] = null);
(statearr_53564_53640[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 38))
{var inst_53530 = (state_53546[2]);var state_53546__$1 = state_53546;var statearr_53565_53641 = state_53546__$1;(statearr_53565_53641[2] = inst_53530);
(statearr_53565_53641[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 7))
{var inst_53542 = (state_53546[2]);var state_53546__$1 = state_53546;var statearr_53566_53642 = state_53546__$1;(statearr_53566_53642[2] = inst_53542);
(statearr_53566_53642[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 39))
{var inst_53508 = (state_53546[9]);var inst_53526 = (state_53546[2]);var inst_53527 = cljs.core.next.call(null,inst_53508);var inst_53487 = inst_53527;var inst_53488 = null;var inst_53489 = 0;var inst_53490 = 0;var state_53546__$1 = (function (){var statearr_53567 = state_53546;(statearr_53567[20] = inst_53526);
(statearr_53567[10] = inst_53490);
(statearr_53567[11] = inst_53487);
(statearr_53567[12] = inst_53488);
(statearr_53567[13] = inst_53489);
return statearr_53567;
})();var statearr_53568_53643 = state_53546__$1;(statearr_53568_53643[2] = null);
(statearr_53568_53643[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 8))
{var inst_53431 = (state_53546[14]);var inst_53430 = (state_53546[15]);var inst_53433 = (inst_53431 < inst_53430);var inst_53434 = inst_53433;var state_53546__$1 = state_53546;if(cljs.core.truth_(inst_53434))
{var statearr_53569_53644 = state_53546__$1;(statearr_53569_53644[1] = 10);
} else
{var statearr_53570_53645 = state_53546__$1;(statearr_53570_53645[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 40))
{var inst_53517 = (state_53546[18]);var inst_53518 = (state_53546[2]);var inst_53519 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_53520 = cljs.core.async.untap_STAR_.call(null,m,inst_53517);var state_53546__$1 = (function (){var statearr_53571 = state_53546;(statearr_53571[21] = inst_53519);
(statearr_53571[22] = inst_53518);
return statearr_53571;
})();var statearr_53572_53646 = state_53546__$1;(statearr_53572_53646[2] = inst_53520);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53546__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 9))
{var inst_53476 = (state_53546[2]);var state_53546__$1 = state_53546;var statearr_53573_53647 = state_53546__$1;(statearr_53573_53647[2] = inst_53476);
(statearr_53573_53647[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 41))
{var inst_53419 = (state_53546[7]);var inst_53517 = (state_53546[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_53546,40,Object,null,39);var inst_53524 = cljs.core.async.put_BANG_.call(null,inst_53517,inst_53419,done);var state_53546__$1 = state_53546;var statearr_53574_53648 = state_53546__$1;(statearr_53574_53648[2] = inst_53524);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53546__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 10))
{var inst_53431 = (state_53546[14]);var inst_53429 = (state_53546[17]);var inst_53437 = cljs.core._nth.call(null,inst_53429,inst_53431);var inst_53438 = cljs.core.nth.call(null,inst_53437,0,null);var inst_53439 = cljs.core.nth.call(null,inst_53437,1,null);var state_53546__$1 = (function (){var statearr_53575 = state_53546;(statearr_53575[23] = inst_53438);
return statearr_53575;
})();if(cljs.core.truth_(inst_53439))
{var statearr_53576_53649 = state_53546__$1;(statearr_53576_53649[1] = 13);
} else
{var statearr_53577_53650 = state_53546__$1;(statearr_53577_53650[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 42))
{var inst_53539 = (state_53546[2]);var state_53546__$1 = (function (){var statearr_53578 = state_53546;(statearr_53578[24] = inst_53539);
return statearr_53578;
})();var statearr_53579_53651 = state_53546__$1;(statearr_53579_53651[2] = null);
(statearr_53579_53651[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 11))
{var inst_53448 = (state_53546[25]);var inst_53428 = (state_53546[16]);var inst_53448__$1 = cljs.core.seq.call(null,inst_53428);var state_53546__$1 = (function (){var statearr_53580 = state_53546;(statearr_53580[25] = inst_53448__$1);
return statearr_53580;
})();if(inst_53448__$1)
{var statearr_53581_53652 = state_53546__$1;(statearr_53581_53652[1] = 16);
} else
{var statearr_53582_53653 = state_53546__$1;(statearr_53582_53653[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 12))
{var inst_53474 = (state_53546[2]);var state_53546__$1 = state_53546;var statearr_53583_53654 = state_53546__$1;(statearr_53583_53654[2] = inst_53474);
(statearr_53583_53654[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 13))
{var inst_53438 = (state_53546[23]);var inst_53441 = cljs.core.async.close_BANG_.call(null,inst_53438);var state_53546__$1 = state_53546;var statearr_53587_53655 = state_53546__$1;(statearr_53587_53655[2] = inst_53441);
(statearr_53587_53655[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 14))
{var state_53546__$1 = state_53546;var statearr_53588_53656 = state_53546__$1;(statearr_53588_53656[2] = null);
(statearr_53588_53656[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 15))
{var inst_53431 = (state_53546[14]);var inst_53430 = (state_53546[15]);var inst_53428 = (state_53546[16]);var inst_53429 = (state_53546[17]);var inst_53444 = (state_53546[2]);var inst_53445 = (inst_53431 + 1);var tmp53584 = inst_53430;var tmp53585 = inst_53428;var tmp53586 = inst_53429;var inst_53428__$1 = tmp53585;var inst_53429__$1 = tmp53586;var inst_53430__$1 = tmp53584;var inst_53431__$1 = inst_53445;var state_53546__$1 = (function (){var statearr_53589 = state_53546;(statearr_53589[14] = inst_53431__$1);
(statearr_53589[15] = inst_53430__$1);
(statearr_53589[16] = inst_53428__$1);
(statearr_53589[17] = inst_53429__$1);
(statearr_53589[26] = inst_53444);
return statearr_53589;
})();var statearr_53590_53657 = state_53546__$1;(statearr_53590_53657[2] = null);
(statearr_53590_53657[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 16))
{var inst_53448 = (state_53546[25]);var inst_53450 = cljs.core.chunked_seq_QMARK_.call(null,inst_53448);var state_53546__$1 = state_53546;if(inst_53450)
{var statearr_53591_53658 = state_53546__$1;(statearr_53591_53658[1] = 19);
} else
{var statearr_53592_53659 = state_53546__$1;(statearr_53592_53659[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 17))
{var state_53546__$1 = state_53546;var statearr_53593_53660 = state_53546__$1;(statearr_53593_53660[2] = null);
(statearr_53593_53660[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 18))
{var inst_53472 = (state_53546[2]);var state_53546__$1 = state_53546;var statearr_53594_53661 = state_53546__$1;(statearr_53594_53661[2] = inst_53472);
(statearr_53594_53661[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 19))
{var inst_53448 = (state_53546[25]);var inst_53452 = cljs.core.chunk_first.call(null,inst_53448);var inst_53453 = cljs.core.chunk_rest.call(null,inst_53448);var inst_53454 = cljs.core.count.call(null,inst_53452);var inst_53428 = inst_53453;var inst_53429 = inst_53452;var inst_53430 = inst_53454;var inst_53431 = 0;var state_53546__$1 = (function (){var statearr_53595 = state_53546;(statearr_53595[14] = inst_53431);
(statearr_53595[15] = inst_53430);
(statearr_53595[16] = inst_53428);
(statearr_53595[17] = inst_53429);
return statearr_53595;
})();var statearr_53596_53662 = state_53546__$1;(statearr_53596_53662[2] = null);
(statearr_53596_53662[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 20))
{var inst_53448 = (state_53546[25]);var inst_53458 = cljs.core.first.call(null,inst_53448);var inst_53459 = cljs.core.nth.call(null,inst_53458,0,null);var inst_53460 = cljs.core.nth.call(null,inst_53458,1,null);var state_53546__$1 = (function (){var statearr_53597 = state_53546;(statearr_53597[27] = inst_53459);
return statearr_53597;
})();if(cljs.core.truth_(inst_53460))
{var statearr_53598_53663 = state_53546__$1;(statearr_53598_53663[1] = 22);
} else
{var statearr_53599_53664 = state_53546__$1;(statearr_53599_53664[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 21))
{var inst_53469 = (state_53546[2]);var state_53546__$1 = state_53546;var statearr_53600_53665 = state_53546__$1;(statearr_53600_53665[2] = inst_53469);
(statearr_53600_53665[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 22))
{var inst_53459 = (state_53546[27]);var inst_53462 = cljs.core.async.close_BANG_.call(null,inst_53459);var state_53546__$1 = state_53546;var statearr_53601_53666 = state_53546__$1;(statearr_53601_53666[2] = inst_53462);
(statearr_53601_53666[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 23))
{var state_53546__$1 = state_53546;var statearr_53602_53667 = state_53546__$1;(statearr_53602_53667[2] = null);
(statearr_53602_53667[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 24))
{var inst_53448 = (state_53546[25]);var inst_53465 = (state_53546[2]);var inst_53466 = cljs.core.next.call(null,inst_53448);var inst_53428 = inst_53466;var inst_53429 = null;var inst_53430 = 0;var inst_53431 = 0;var state_53546__$1 = (function (){var statearr_53603 = state_53546;(statearr_53603[28] = inst_53465);
(statearr_53603[14] = inst_53431);
(statearr_53603[15] = inst_53430);
(statearr_53603[16] = inst_53428);
(statearr_53603[17] = inst_53429);
return statearr_53603;
})();var statearr_53604_53668 = state_53546__$1;(statearr_53604_53668[2] = null);
(statearr_53604_53668[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 25))
{var inst_53490 = (state_53546[10]);var inst_53489 = (state_53546[13]);var inst_53492 = (inst_53490 < inst_53489);var inst_53493 = inst_53492;var state_53546__$1 = state_53546;if(cljs.core.truth_(inst_53493))
{var statearr_53605_53669 = state_53546__$1;(statearr_53605_53669[1] = 27);
} else
{var statearr_53606_53670 = state_53546__$1;(statearr_53606_53670[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 26))
{var inst_53537 = (state_53546[2]);var state_53546__$1 = (function (){var statearr_53607 = state_53546;(statearr_53607[29] = inst_53537);
return statearr_53607;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53546__$1,42,dchan);
} else
{if((state_val_53547 === 27))
{var inst_53490 = (state_53546[10]);var inst_53488 = (state_53546[12]);var inst_53495 = cljs.core._nth.call(null,inst_53488,inst_53490);var state_53546__$1 = (function (){var statearr_53608 = state_53546;(statearr_53608[8] = inst_53495);
return statearr_53608;
})();var statearr_53609_53671 = state_53546__$1;(statearr_53609_53671[2] = null);
(statearr_53609_53671[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 28))
{var inst_53508 = (state_53546[9]);var inst_53487 = (state_53546[11]);var inst_53508__$1 = cljs.core.seq.call(null,inst_53487);var state_53546__$1 = (function (){var statearr_53613 = state_53546;(statearr_53613[9] = inst_53508__$1);
return statearr_53613;
})();if(inst_53508__$1)
{var statearr_53614_53672 = state_53546__$1;(statearr_53614_53672[1] = 33);
} else
{var statearr_53615_53673 = state_53546__$1;(statearr_53615_53673[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 29))
{var inst_53535 = (state_53546[2]);var state_53546__$1 = state_53546;var statearr_53616_53674 = state_53546__$1;(statearr_53616_53674[2] = inst_53535);
(statearr_53616_53674[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 30))
{var inst_53490 = (state_53546[10]);var inst_53487 = (state_53546[11]);var inst_53488 = (state_53546[12]);var inst_53489 = (state_53546[13]);var inst_53504 = (state_53546[2]);var inst_53505 = (inst_53490 + 1);var tmp53610 = inst_53487;var tmp53611 = inst_53488;var tmp53612 = inst_53489;var inst_53487__$1 = tmp53610;var inst_53488__$1 = tmp53611;var inst_53489__$1 = tmp53612;var inst_53490__$1 = inst_53505;var state_53546__$1 = (function (){var statearr_53617 = state_53546;(statearr_53617[10] = inst_53490__$1);
(statearr_53617[30] = inst_53504);
(statearr_53617[11] = inst_53487__$1);
(statearr_53617[12] = inst_53488__$1);
(statearr_53617[13] = inst_53489__$1);
return statearr_53617;
})();var statearr_53618_53675 = state_53546__$1;(statearr_53618_53675[2] = null);
(statearr_53618_53675[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53547 === 31))
{var inst_53495 = (state_53546[8]);var inst_53496 = (state_53546[2]);var inst_53497 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_53498 = cljs.core.async.untap_STAR_.call(null,m,inst_53495);var state_53546__$1 = (function (){var statearr_53619 = state_53546;(statearr_53619[31] = inst_53497);
(statearr_53619[32] = inst_53496);
return statearr_53619;
})();var statearr_53620_53676 = state_53546__$1;(statearr_53620_53676[2] = inst_53498);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53546__$1);
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
}
}
}
}
}
}
});return ((function (switch__5510__auto__){
return (function() {
var state_machine__5511__auto__ = null;
var state_machine__5511__auto____0 = (function (){var statearr_53624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53624[0] = state_machine__5511__auto__);
(statearr_53624[1] = 1);
return statearr_53624;
});
var state_machine__5511__auto____1 = (function (state_53546){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_53546);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e53625){if((e53625 instanceof Object))
{var ex__5514__auto__ = e53625;var statearr_53626_53677 = state_53546;(statearr_53626_53677[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53546);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e53625;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__53678 = state_53546;
state_53546 = G__53678;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_53546){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_53546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_53627 = f__5526__auto__.call(null);(statearr_53627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___53628);
return statearr_53627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj53680 = {};return obj53680;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t53790 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53790 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta53791){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta53791 = meta53791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53790.cljs$lang$type = true;
cljs.core.async.t53790.cljs$lang$ctorStr = "cljs.core.async/t53790";
cljs.core.async.t53790.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t53790");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53790.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t53790.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53790.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53790.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53790.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53790.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53790.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t53790.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53790.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53792){var self__ = this;
var _53792__$1 = this;return self__.meta53791;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53792,meta53791__$1){var self__ = this;
var _53792__$1 = this;return (new cljs.core.async.t53790(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta53791__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t53790 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t53790(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta53791){return (new cljs.core.async.t53790(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta53791));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t53790(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5525__auto___53899 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_53857){var state_val_53858 = (state_53857[1]);if((state_val_53858 === 1))
{var inst_53796 = (state_53857[7]);var inst_53796__$1 = calc_state.call(null);var inst_53797 = cljs.core.seq_QMARK_.call(null,inst_53796__$1);var state_53857__$1 = (function (){var statearr_53859 = state_53857;(statearr_53859[7] = inst_53796__$1);
return statearr_53859;
})();if(inst_53797)
{var statearr_53860_53900 = state_53857__$1;(statearr_53860_53900[1] = 2);
} else
{var statearr_53861_53901 = state_53857__$1;(statearr_53861_53901[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 2))
{var inst_53796 = (state_53857[7]);var inst_53799 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53796);var state_53857__$1 = state_53857;var statearr_53862_53902 = state_53857__$1;(statearr_53862_53902[2] = inst_53799);
(statearr_53862_53902[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 3))
{var inst_53796 = (state_53857[7]);var state_53857__$1 = state_53857;var statearr_53863_53903 = state_53857__$1;(statearr_53863_53903[2] = inst_53796);
(statearr_53863_53903[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 4))
{var inst_53796 = (state_53857[7]);var inst_53802 = (state_53857[2]);var inst_53803 = cljs.core.get.call(null,inst_53802,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_53804 = cljs.core.get.call(null,inst_53802,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_53805 = cljs.core.get.call(null,inst_53802,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_53806 = inst_53796;var state_53857__$1 = (function (){var statearr_53864 = state_53857;(statearr_53864[8] = inst_53805);
(statearr_53864[9] = inst_53806);
(statearr_53864[10] = inst_53803);
(statearr_53864[11] = inst_53804);
return statearr_53864;
})();var statearr_53865_53904 = state_53857__$1;(statearr_53865_53904[2] = null);
(statearr_53865_53904[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 5))
{var inst_53806 = (state_53857[9]);var inst_53809 = cljs.core.seq_QMARK_.call(null,inst_53806);var state_53857__$1 = state_53857;if(inst_53809)
{var statearr_53866_53905 = state_53857__$1;(statearr_53866_53905[1] = 7);
} else
{var statearr_53867_53906 = state_53857__$1;(statearr_53867_53906[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 6))
{var inst_53855 = (state_53857[2]);var state_53857__$1 = state_53857;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53857__$1,inst_53855);
} else
{if((state_val_53858 === 7))
{var inst_53806 = (state_53857[9]);var inst_53811 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53806);var state_53857__$1 = state_53857;var statearr_53868_53907 = state_53857__$1;(statearr_53868_53907[2] = inst_53811);
(statearr_53868_53907[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 8))
{var inst_53806 = (state_53857[9]);var state_53857__$1 = state_53857;var statearr_53869_53908 = state_53857__$1;(statearr_53869_53908[2] = inst_53806);
(statearr_53869_53908[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 9))
{var inst_53814 = (state_53857[12]);var inst_53814__$1 = (state_53857[2]);var inst_53815 = cljs.core.get.call(null,inst_53814__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_53816 = cljs.core.get.call(null,inst_53814__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_53817 = cljs.core.get.call(null,inst_53814__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_53857__$1 = (function (){var statearr_53870 = state_53857;(statearr_53870[13] = inst_53816);
(statearr_53870[14] = inst_53817);
(statearr_53870[12] = inst_53814__$1);
return statearr_53870;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_53857__$1,10,inst_53815);
} else
{if((state_val_53858 === 10))
{var inst_53822 = (state_53857[15]);var inst_53821 = (state_53857[16]);var inst_53820 = (state_53857[2]);var inst_53821__$1 = cljs.core.nth.call(null,inst_53820,0,null);var inst_53822__$1 = cljs.core.nth.call(null,inst_53820,1,null);var inst_53823 = (inst_53821__$1 == null);var inst_53824 = cljs.core._EQ_.call(null,inst_53822__$1,change);var inst_53825 = (inst_53823) || (inst_53824);var state_53857__$1 = (function (){var statearr_53871 = state_53857;(statearr_53871[15] = inst_53822__$1);
(statearr_53871[16] = inst_53821__$1);
return statearr_53871;
})();if(cljs.core.truth_(inst_53825))
{var statearr_53872_53909 = state_53857__$1;(statearr_53872_53909[1] = 11);
} else
{var statearr_53873_53910 = state_53857__$1;(statearr_53873_53910[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 11))
{var inst_53821 = (state_53857[16]);var inst_53827 = (inst_53821 == null);var state_53857__$1 = state_53857;if(cljs.core.truth_(inst_53827))
{var statearr_53874_53911 = state_53857__$1;(statearr_53874_53911[1] = 14);
} else
{var statearr_53875_53912 = state_53857__$1;(statearr_53875_53912[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 12))
{var inst_53817 = (state_53857[14]);var inst_53822 = (state_53857[15]);var inst_53836 = (state_53857[17]);var inst_53836__$1 = inst_53817.call(null,inst_53822);var state_53857__$1 = (function (){var statearr_53876 = state_53857;(statearr_53876[17] = inst_53836__$1);
return statearr_53876;
})();if(cljs.core.truth_(inst_53836__$1))
{var statearr_53877_53913 = state_53857__$1;(statearr_53877_53913[1] = 17);
} else
{var statearr_53878_53914 = state_53857__$1;(statearr_53878_53914[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 13))
{var inst_53853 = (state_53857[2]);var state_53857__$1 = state_53857;var statearr_53879_53915 = state_53857__$1;(statearr_53879_53915[2] = inst_53853);
(statearr_53879_53915[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 14))
{var inst_53822 = (state_53857[15]);var inst_53829 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_53822);var state_53857__$1 = state_53857;var statearr_53880_53916 = state_53857__$1;(statearr_53880_53916[2] = inst_53829);
(statearr_53880_53916[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 15))
{var state_53857__$1 = state_53857;var statearr_53881_53917 = state_53857__$1;(statearr_53881_53917[2] = null);
(statearr_53881_53917[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 16))
{var inst_53832 = (state_53857[2]);var inst_53833 = calc_state.call(null);var inst_53806 = inst_53833;var state_53857__$1 = (function (){var statearr_53882 = state_53857;(statearr_53882[9] = inst_53806);
(statearr_53882[18] = inst_53832);
return statearr_53882;
})();var statearr_53883_53918 = state_53857__$1;(statearr_53883_53918[2] = null);
(statearr_53883_53918[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 17))
{var inst_53836 = (state_53857[17]);var state_53857__$1 = state_53857;var statearr_53884_53919 = state_53857__$1;(statearr_53884_53919[2] = inst_53836);
(statearr_53884_53919[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 18))
{var inst_53816 = (state_53857[13]);var inst_53817 = (state_53857[14]);var inst_53822 = (state_53857[15]);var inst_53839 = cljs.core.empty_QMARK_.call(null,inst_53817);var inst_53840 = inst_53816.call(null,inst_53822);var inst_53841 = cljs.core.not.call(null,inst_53840);var inst_53842 = (inst_53839) && (inst_53841);var state_53857__$1 = state_53857;var statearr_53885_53920 = state_53857__$1;(statearr_53885_53920[2] = inst_53842);
(statearr_53885_53920[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 19))
{var inst_53844 = (state_53857[2]);var state_53857__$1 = state_53857;if(cljs.core.truth_(inst_53844))
{var statearr_53886_53921 = state_53857__$1;(statearr_53886_53921[1] = 20);
} else
{var statearr_53887_53922 = state_53857__$1;(statearr_53887_53922[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 20))
{var inst_53821 = (state_53857[16]);var state_53857__$1 = state_53857;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53857__$1,23,out,inst_53821);
} else
{if((state_val_53858 === 21))
{var state_53857__$1 = state_53857;var statearr_53888_53923 = state_53857__$1;(statearr_53888_53923[2] = null);
(statearr_53888_53923[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 22))
{var inst_53814 = (state_53857[12]);var inst_53850 = (state_53857[2]);var inst_53806 = inst_53814;var state_53857__$1 = (function (){var statearr_53889 = state_53857;(statearr_53889[9] = inst_53806);
(statearr_53889[19] = inst_53850);
return statearr_53889;
})();var statearr_53890_53924 = state_53857__$1;(statearr_53890_53924[2] = null);
(statearr_53890_53924[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53858 === 23))
{var inst_53847 = (state_53857[2]);var state_53857__$1 = state_53857;var statearr_53891_53925 = state_53857__$1;(statearr_53891_53925[2] = inst_53847);
(statearr_53891_53925[1] = 22);
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
});return ((function (switch__5510__auto__){
return (function() {
var state_machine__5511__auto__ = null;
var state_machine__5511__auto____0 = (function (){var statearr_53895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53895[0] = state_machine__5511__auto__);
(statearr_53895[1] = 1);
return statearr_53895;
});
var state_machine__5511__auto____1 = (function (state_53857){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_53857);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e53896){if((e53896 instanceof Object))
{var ex__5514__auto__ = e53896;var statearr_53897_53926 = state_53857;(statearr_53897_53926[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53857);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e53896;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__53927 = state_53857;
state_53857 = G__53927;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_53857){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_53857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_53898 = f__5526__auto__.call(null);(statearr_53898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___53899);
return statearr_53898;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj53929 = {};return obj53929;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__53930_SHARP_){if(cljs.core.truth_(p1__53930_SHARP_.call(null,topic)))
{return p1__53930_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__53930_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t54055 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t54055 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta54056){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta54056 = meta54056;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t54055.cljs$lang$type = true;
cljs.core.async.t54055.cljs$lang$ctorStr = "cljs.core.async/t54055";
cljs.core.async.t54055.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t54055");
});})(mults,ensure_mult))
;
cljs.core.async.t54055.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t54055.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t54055.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t54055.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t54055.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t54055.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t54055.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t54055.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_54057){var self__ = this;
var _54057__$1 = this;return self__.meta54056;
});})(mults,ensure_mult))
;
cljs.core.async.t54055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_54057,meta54056__$1){var self__ = this;
var _54057__$1 = this;return (new cljs.core.async.t54055(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta54056__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t54055 = ((function (mults,ensure_mult){
return (function __GT_t54055(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta54056){return (new cljs.core.async.t54055(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta54056));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t54055(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5525__auto___54179 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_54131){var state_val_54132 = (state_54131[1]);if((state_val_54132 === 1))
{var state_54131__$1 = state_54131;var statearr_54133_54180 = state_54131__$1;(statearr_54133_54180[2] = null);
(statearr_54133_54180[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 2))
{var state_54131__$1 = state_54131;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54131__$1,4,ch);
} else
{if((state_val_54132 === 3))
{var inst_54129 = (state_54131[2]);var state_54131__$1 = state_54131;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54131__$1,inst_54129);
} else
{if((state_val_54132 === 4))
{var inst_54060 = (state_54131[7]);var inst_54060__$1 = (state_54131[2]);var inst_54061 = (inst_54060__$1 == null);var state_54131__$1 = (function (){var statearr_54134 = state_54131;(statearr_54134[7] = inst_54060__$1);
return statearr_54134;
})();if(cljs.core.truth_(inst_54061))
{var statearr_54135_54181 = state_54131__$1;(statearr_54135_54181[1] = 5);
} else
{var statearr_54136_54182 = state_54131__$1;(statearr_54136_54182[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 5))
{var inst_54067 = cljs.core.deref.call(null,mults);var inst_54068 = cljs.core.vals.call(null,inst_54067);var inst_54069 = cljs.core.seq.call(null,inst_54068);var inst_54070 = inst_54069;var inst_54071 = null;var inst_54072 = 0;var inst_54073 = 0;var state_54131__$1 = (function (){var statearr_54137 = state_54131;(statearr_54137[8] = inst_54073);
(statearr_54137[9] = inst_54070);
(statearr_54137[10] = inst_54072);
(statearr_54137[11] = inst_54071);
return statearr_54137;
})();var statearr_54138_54183 = state_54131__$1;(statearr_54138_54183[2] = null);
(statearr_54138_54183[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 6))
{var inst_54108 = (state_54131[12]);var inst_54060 = (state_54131[7]);var inst_54110 = (state_54131[13]);var inst_54108__$1 = topic_fn.call(null,inst_54060);var inst_54109 = cljs.core.deref.call(null,mults);var inst_54110__$1 = cljs.core.get.call(null,inst_54109,inst_54108__$1);var state_54131__$1 = (function (){var statearr_54139 = state_54131;(statearr_54139[12] = inst_54108__$1);
(statearr_54139[13] = inst_54110__$1);
return statearr_54139;
})();if(cljs.core.truth_(inst_54110__$1))
{var statearr_54140_54184 = state_54131__$1;(statearr_54140_54184[1] = 19);
} else
{var statearr_54141_54185 = state_54131__$1;(statearr_54141_54185[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 7))
{var inst_54127 = (state_54131[2]);var state_54131__$1 = state_54131;var statearr_54142_54186 = state_54131__$1;(statearr_54142_54186[2] = inst_54127);
(statearr_54142_54186[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 8))
{var inst_54073 = (state_54131[8]);var inst_54072 = (state_54131[10]);var inst_54075 = (inst_54073 < inst_54072);var inst_54076 = inst_54075;var state_54131__$1 = state_54131;if(cljs.core.truth_(inst_54076))
{var statearr_54146_54187 = state_54131__$1;(statearr_54146_54187[1] = 10);
} else
{var statearr_54147_54188 = state_54131__$1;(statearr_54147_54188[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 9))
{var inst_54106 = (state_54131[2]);var state_54131__$1 = state_54131;var statearr_54148_54189 = state_54131__$1;(statearr_54148_54189[2] = inst_54106);
(statearr_54148_54189[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 10))
{var inst_54073 = (state_54131[8]);var inst_54070 = (state_54131[9]);var inst_54072 = (state_54131[10]);var inst_54071 = (state_54131[11]);var inst_54078 = cljs.core._nth.call(null,inst_54071,inst_54073);var inst_54079 = cljs.core.async.muxch_STAR_.call(null,inst_54078);var inst_54080 = cljs.core.async.close_BANG_.call(null,inst_54079);var inst_54081 = (inst_54073 + 1);var tmp54143 = inst_54070;var tmp54144 = inst_54072;var tmp54145 = inst_54071;var inst_54070__$1 = tmp54143;var inst_54071__$1 = tmp54145;var inst_54072__$1 = tmp54144;var inst_54073__$1 = inst_54081;var state_54131__$1 = (function (){var statearr_54149 = state_54131;(statearr_54149[14] = inst_54080);
(statearr_54149[8] = inst_54073__$1);
(statearr_54149[9] = inst_54070__$1);
(statearr_54149[10] = inst_54072__$1);
(statearr_54149[11] = inst_54071__$1);
return statearr_54149;
})();var statearr_54150_54190 = state_54131__$1;(statearr_54150_54190[2] = null);
(statearr_54150_54190[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 11))
{var inst_54084 = (state_54131[15]);var inst_54070 = (state_54131[9]);var inst_54084__$1 = cljs.core.seq.call(null,inst_54070);var state_54131__$1 = (function (){var statearr_54151 = state_54131;(statearr_54151[15] = inst_54084__$1);
return statearr_54151;
})();if(inst_54084__$1)
{var statearr_54152_54191 = state_54131__$1;(statearr_54152_54191[1] = 13);
} else
{var statearr_54153_54192 = state_54131__$1;(statearr_54153_54192[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 12))
{var inst_54104 = (state_54131[2]);var state_54131__$1 = state_54131;var statearr_54154_54193 = state_54131__$1;(statearr_54154_54193[2] = inst_54104);
(statearr_54154_54193[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 13))
{var inst_54084 = (state_54131[15]);var inst_54086 = cljs.core.chunked_seq_QMARK_.call(null,inst_54084);var state_54131__$1 = state_54131;if(inst_54086)
{var statearr_54155_54194 = state_54131__$1;(statearr_54155_54194[1] = 16);
} else
{var statearr_54156_54195 = state_54131__$1;(statearr_54156_54195[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 14))
{var state_54131__$1 = state_54131;var statearr_54157_54196 = state_54131__$1;(statearr_54157_54196[2] = null);
(statearr_54157_54196[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 15))
{var inst_54102 = (state_54131[2]);var state_54131__$1 = state_54131;var statearr_54158_54197 = state_54131__$1;(statearr_54158_54197[2] = inst_54102);
(statearr_54158_54197[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 16))
{var inst_54084 = (state_54131[15]);var inst_54088 = cljs.core.chunk_first.call(null,inst_54084);var inst_54089 = cljs.core.chunk_rest.call(null,inst_54084);var inst_54090 = cljs.core.count.call(null,inst_54088);var inst_54070 = inst_54089;var inst_54071 = inst_54088;var inst_54072 = inst_54090;var inst_54073 = 0;var state_54131__$1 = (function (){var statearr_54159 = state_54131;(statearr_54159[8] = inst_54073);
(statearr_54159[9] = inst_54070);
(statearr_54159[10] = inst_54072);
(statearr_54159[11] = inst_54071);
return statearr_54159;
})();var statearr_54160_54198 = state_54131__$1;(statearr_54160_54198[2] = null);
(statearr_54160_54198[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 17))
{var inst_54084 = (state_54131[15]);var inst_54093 = cljs.core.first.call(null,inst_54084);var inst_54094 = cljs.core.async.muxch_STAR_.call(null,inst_54093);var inst_54095 = cljs.core.async.close_BANG_.call(null,inst_54094);var inst_54096 = cljs.core.next.call(null,inst_54084);var inst_54070 = inst_54096;var inst_54071 = null;var inst_54072 = 0;var inst_54073 = 0;var state_54131__$1 = (function (){var statearr_54161 = state_54131;(statearr_54161[16] = inst_54095);
(statearr_54161[8] = inst_54073);
(statearr_54161[9] = inst_54070);
(statearr_54161[10] = inst_54072);
(statearr_54161[11] = inst_54071);
return statearr_54161;
})();var statearr_54162_54199 = state_54131__$1;(statearr_54162_54199[2] = null);
(statearr_54162_54199[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 18))
{var inst_54099 = (state_54131[2]);var state_54131__$1 = state_54131;var statearr_54163_54200 = state_54131__$1;(statearr_54163_54200[2] = inst_54099);
(statearr_54163_54200[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 19))
{var state_54131__$1 = state_54131;var statearr_54164_54201 = state_54131__$1;(statearr_54164_54201[2] = null);
(statearr_54164_54201[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 20))
{var state_54131__$1 = state_54131;var statearr_54165_54202 = state_54131__$1;(statearr_54165_54202[2] = null);
(statearr_54165_54202[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 21))
{var inst_54124 = (state_54131[2]);var state_54131__$1 = (function (){var statearr_54166 = state_54131;(statearr_54166[17] = inst_54124);
return statearr_54166;
})();var statearr_54167_54203 = state_54131__$1;(statearr_54167_54203[2] = null);
(statearr_54167_54203[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 22))
{var inst_54121 = (state_54131[2]);var state_54131__$1 = state_54131;var statearr_54168_54204 = state_54131__$1;(statearr_54168_54204[2] = inst_54121);
(statearr_54168_54204[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 23))
{var inst_54108 = (state_54131[12]);var inst_54112 = (state_54131[2]);var inst_54113 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_54108);var state_54131__$1 = (function (){var statearr_54169 = state_54131;(statearr_54169[18] = inst_54112);
return statearr_54169;
})();var statearr_54170_54205 = state_54131__$1;(statearr_54170_54205[2] = inst_54113);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54131__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54132 === 24))
{var inst_54060 = (state_54131[7]);var inst_54110 = (state_54131[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54131,23,Object,null,22);var inst_54117 = cljs.core.async.muxch_STAR_.call(null,inst_54110);var state_54131__$1 = state_54131;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54131__$1,25,inst_54117,inst_54060);
} else
{if((state_val_54132 === 25))
{var inst_54119 = (state_54131[2]);var state_54131__$1 = state_54131;var statearr_54171_54206 = state_54131__$1;(statearr_54171_54206[2] = inst_54119);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54131__$1);
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
});return ((function (switch__5510__auto__){
return (function() {
var state_machine__5511__auto__ = null;
var state_machine__5511__auto____0 = (function (){var statearr_54175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54175[0] = state_machine__5511__auto__);
(statearr_54175[1] = 1);
return statearr_54175;
});
var state_machine__5511__auto____1 = (function (state_54131){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_54131);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e54176){if((e54176 instanceof Object))
{var ex__5514__auto__ = e54176;var statearr_54177_54207 = state_54131;(statearr_54177_54207[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54131);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e54176;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__54208 = state_54131;
state_54131 = G__54208;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_54131){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_54131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_54178 = f__5526__auto__.call(null);(statearr_54178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___54179);
return statearr_54178;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5525__auto___54345 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_54315){var state_val_54316 = (state_54315[1]);if((state_val_54316 === 1))
{var state_54315__$1 = state_54315;var statearr_54317_54346 = state_54315__$1;(statearr_54317_54346[2] = null);
(statearr_54317_54346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54316 === 2))
{var inst_54278 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_54279 = 0;var state_54315__$1 = (function (){var statearr_54318 = state_54315;(statearr_54318[7] = inst_54279);
(statearr_54318[8] = inst_54278);
return statearr_54318;
})();var statearr_54319_54347 = state_54315__$1;(statearr_54319_54347[2] = null);
(statearr_54319_54347[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54316 === 3))
{var inst_54313 = (state_54315[2]);var state_54315__$1 = state_54315;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54315__$1,inst_54313);
} else
{if((state_val_54316 === 4))
{var inst_54279 = (state_54315[7]);var inst_54281 = (inst_54279 < cnt);var state_54315__$1 = state_54315;if(cljs.core.truth_(inst_54281))
{var statearr_54320_54348 = state_54315__$1;(statearr_54320_54348[1] = 6);
} else
{var statearr_54321_54349 = state_54315__$1;(statearr_54321_54349[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54316 === 5))
{var inst_54299 = (state_54315[2]);var state_54315__$1 = (function (){var statearr_54322 = state_54315;(statearr_54322[9] = inst_54299);
return statearr_54322;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54315__$1,12,dchan);
} else
{if((state_val_54316 === 6))
{var state_54315__$1 = state_54315;var statearr_54323_54350 = state_54315__$1;(statearr_54323_54350[2] = null);
(statearr_54323_54350[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54316 === 7))
{var state_54315__$1 = state_54315;var statearr_54324_54351 = state_54315__$1;(statearr_54324_54351[2] = null);
(statearr_54324_54351[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54316 === 8))
{var inst_54297 = (state_54315[2]);var state_54315__$1 = state_54315;var statearr_54325_54352 = state_54315__$1;(statearr_54325_54352[2] = inst_54297);
(statearr_54325_54352[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54316 === 9))
{var inst_54279 = (state_54315[7]);var inst_54292 = (state_54315[2]);var inst_54293 = (inst_54279 + 1);var inst_54279__$1 = inst_54293;var state_54315__$1 = (function (){var statearr_54326 = state_54315;(statearr_54326[7] = inst_54279__$1);
(statearr_54326[10] = inst_54292);
return statearr_54326;
})();var statearr_54327_54353 = state_54315__$1;(statearr_54327_54353[2] = null);
(statearr_54327_54353[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54316 === 10))
{var inst_54283 = (state_54315[2]);var inst_54284 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_54315__$1 = (function (){var statearr_54328 = state_54315;(statearr_54328[11] = inst_54283);
return statearr_54328;
})();var statearr_54329_54354 = state_54315__$1;(statearr_54329_54354[2] = inst_54284);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54315__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54316 === 11))
{var inst_54279 = (state_54315[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54315,10,Object,null,9);var inst_54288 = chs__$1.call(null,inst_54279);var inst_54289 = done.call(null,inst_54279);var inst_54290 = cljs.core.async.take_BANG_.call(null,inst_54288,inst_54289);var state_54315__$1 = state_54315;var statearr_54330_54355 = state_54315__$1;(statearr_54330_54355[2] = inst_54290);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54315__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54316 === 12))
{var inst_54301 = (state_54315[12]);var inst_54301__$1 = (state_54315[2]);var inst_54302 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_54301__$1);var state_54315__$1 = (function (){var statearr_54331 = state_54315;(statearr_54331[12] = inst_54301__$1);
return statearr_54331;
})();if(cljs.core.truth_(inst_54302))
{var statearr_54332_54356 = state_54315__$1;(statearr_54332_54356[1] = 13);
} else
{var statearr_54333_54357 = state_54315__$1;(statearr_54333_54357[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54316 === 13))
{var inst_54304 = cljs.core.async.close_BANG_.call(null,out);var state_54315__$1 = state_54315;var statearr_54334_54358 = state_54315__$1;(statearr_54334_54358[2] = inst_54304);
(statearr_54334_54358[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54316 === 14))
{var inst_54301 = (state_54315[12]);var inst_54306 = cljs.core.apply.call(null,f,inst_54301);var state_54315__$1 = state_54315;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54315__$1,16,out,inst_54306);
} else
{if((state_val_54316 === 15))
{var inst_54311 = (state_54315[2]);var state_54315__$1 = state_54315;var statearr_54335_54359 = state_54315__$1;(statearr_54335_54359[2] = inst_54311);
(statearr_54335_54359[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54316 === 16))
{var inst_54308 = (state_54315[2]);var state_54315__$1 = (function (){var statearr_54336 = state_54315;(statearr_54336[13] = inst_54308);
return statearr_54336;
})();var statearr_54337_54360 = state_54315__$1;(statearr_54337_54360[2] = null);
(statearr_54337_54360[1] = 2);
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
});return ((function (switch__5510__auto__){
return (function() {
var state_machine__5511__auto__ = null;
var state_machine__5511__auto____0 = (function (){var statearr_54341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54341[0] = state_machine__5511__auto__);
(statearr_54341[1] = 1);
return statearr_54341;
});
var state_machine__5511__auto____1 = (function (state_54315){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_54315);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e54342){if((e54342 instanceof Object))
{var ex__5514__auto__ = e54342;var statearr_54343_54361 = state_54315;(statearr_54343_54361[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54315);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e54342;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__54362 = state_54315;
state_54315 = G__54362;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_54315){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_54315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_54344 = f__5526__auto__.call(null);(statearr_54344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___54345);
return statearr_54344;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5525__auto___54470 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_54446){var state_val_54447 = (state_54446[1]);if((state_val_54447 === 1))
{var inst_54417 = cljs.core.vec.call(null,chs);var inst_54418 = inst_54417;var state_54446__$1 = (function (){var statearr_54448 = state_54446;(statearr_54448[7] = inst_54418);
return statearr_54448;
})();var statearr_54449_54471 = state_54446__$1;(statearr_54449_54471[2] = null);
(statearr_54449_54471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54447 === 2))
{var inst_54418 = (state_54446[7]);var inst_54420 = cljs.core.count.call(null,inst_54418);var inst_54421 = (inst_54420 > 0);var state_54446__$1 = state_54446;if(cljs.core.truth_(inst_54421))
{var statearr_54450_54472 = state_54446__$1;(statearr_54450_54472[1] = 4);
} else
{var statearr_54451_54473 = state_54446__$1;(statearr_54451_54473[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54447 === 3))
{var inst_54444 = (state_54446[2]);var state_54446__$1 = state_54446;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54446__$1,inst_54444);
} else
{if((state_val_54447 === 4))
{var inst_54418 = (state_54446[7]);var state_54446__$1 = state_54446;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_54446__$1,7,inst_54418);
} else
{if((state_val_54447 === 5))
{var inst_54440 = cljs.core.async.close_BANG_.call(null,out);var state_54446__$1 = state_54446;var statearr_54452_54474 = state_54446__$1;(statearr_54452_54474[2] = inst_54440);
(statearr_54452_54474[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54447 === 6))
{var inst_54442 = (state_54446[2]);var state_54446__$1 = state_54446;var statearr_54453_54475 = state_54446__$1;(statearr_54453_54475[2] = inst_54442);
(statearr_54453_54475[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54447 === 7))
{var inst_54426 = (state_54446[8]);var inst_54425 = (state_54446[9]);var inst_54425__$1 = (state_54446[2]);var inst_54426__$1 = cljs.core.nth.call(null,inst_54425__$1,0,null);var inst_54427 = cljs.core.nth.call(null,inst_54425__$1,1,null);var inst_54428 = (inst_54426__$1 == null);var state_54446__$1 = (function (){var statearr_54454 = state_54446;(statearr_54454[10] = inst_54427);
(statearr_54454[8] = inst_54426__$1);
(statearr_54454[9] = inst_54425__$1);
return statearr_54454;
})();if(cljs.core.truth_(inst_54428))
{var statearr_54455_54476 = state_54446__$1;(statearr_54455_54476[1] = 8);
} else
{var statearr_54456_54477 = state_54446__$1;(statearr_54456_54477[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54447 === 8))
{var inst_54418 = (state_54446[7]);var inst_54427 = (state_54446[10]);var inst_54426 = (state_54446[8]);var inst_54425 = (state_54446[9]);var inst_54430 = (function (){var c = inst_54427;var v = inst_54426;var vec__54423 = inst_54425;var cs = inst_54418;return ((function (c,v,vec__54423,cs,inst_54418,inst_54427,inst_54426,inst_54425,state_val_54447){
return (function (p1__54363_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__54363_SHARP_);
});
;})(c,v,vec__54423,cs,inst_54418,inst_54427,inst_54426,inst_54425,state_val_54447))
})();var inst_54431 = cljs.core.filterv.call(null,inst_54430,inst_54418);var inst_54418__$1 = inst_54431;var state_54446__$1 = (function (){var statearr_54457 = state_54446;(statearr_54457[7] = inst_54418__$1);
return statearr_54457;
})();var statearr_54458_54478 = state_54446__$1;(statearr_54458_54478[2] = null);
(statearr_54458_54478[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54447 === 9))
{var inst_54426 = (state_54446[8]);var state_54446__$1 = state_54446;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54446__$1,11,out,inst_54426);
} else
{if((state_val_54447 === 10))
{var inst_54438 = (state_54446[2]);var state_54446__$1 = state_54446;var statearr_54460_54479 = state_54446__$1;(statearr_54460_54479[2] = inst_54438);
(statearr_54460_54479[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54447 === 11))
{var inst_54418 = (state_54446[7]);var inst_54435 = (state_54446[2]);var tmp54459 = inst_54418;var inst_54418__$1 = tmp54459;var state_54446__$1 = (function (){var statearr_54461 = state_54446;(statearr_54461[7] = inst_54418__$1);
(statearr_54461[11] = inst_54435);
return statearr_54461;
})();var statearr_54462_54480 = state_54446__$1;(statearr_54462_54480[2] = null);
(statearr_54462_54480[1] = 2);
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
});return ((function (switch__5510__auto__){
return (function() {
var state_machine__5511__auto__ = null;
var state_machine__5511__auto____0 = (function (){var statearr_54466 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54466[0] = state_machine__5511__auto__);
(statearr_54466[1] = 1);
return statearr_54466;
});
var state_machine__5511__auto____1 = (function (state_54446){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_54446);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e54467){if((e54467 instanceof Object))
{var ex__5514__auto__ = e54467;var statearr_54468_54481 = state_54446;(statearr_54468_54481[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54446);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e54467;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__54482 = state_54446;
state_54446 = G__54482;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_54446){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_54446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_54469 = f__5526__auto__.call(null);(statearr_54469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___54470);
return statearr_54469;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5525__auto___54575 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_54552){var state_val_54553 = (state_54552[1]);if((state_val_54553 === 1))
{var inst_54529 = 0;var state_54552__$1 = (function (){var statearr_54554 = state_54552;(statearr_54554[7] = inst_54529);
return statearr_54554;
})();var statearr_54555_54576 = state_54552__$1;(statearr_54555_54576[2] = null);
(statearr_54555_54576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54553 === 2))
{var inst_54529 = (state_54552[7]);var inst_54531 = (inst_54529 < n);var state_54552__$1 = state_54552;if(cljs.core.truth_(inst_54531))
{var statearr_54556_54577 = state_54552__$1;(statearr_54556_54577[1] = 4);
} else
{var statearr_54557_54578 = state_54552__$1;(statearr_54557_54578[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54553 === 3))
{var inst_54549 = (state_54552[2]);var inst_54550 = cljs.core.async.close_BANG_.call(null,out);var state_54552__$1 = (function (){var statearr_54558 = state_54552;(statearr_54558[8] = inst_54549);
return statearr_54558;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54552__$1,inst_54550);
} else
{if((state_val_54553 === 4))
{var state_54552__$1 = state_54552;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54552__$1,7,ch);
} else
{if((state_val_54553 === 5))
{var state_54552__$1 = state_54552;var statearr_54559_54579 = state_54552__$1;(statearr_54559_54579[2] = null);
(statearr_54559_54579[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54553 === 6))
{var inst_54547 = (state_54552[2]);var state_54552__$1 = state_54552;var statearr_54560_54580 = state_54552__$1;(statearr_54560_54580[2] = inst_54547);
(statearr_54560_54580[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54553 === 7))
{var inst_54534 = (state_54552[9]);var inst_54534__$1 = (state_54552[2]);var inst_54535 = (inst_54534__$1 == null);var inst_54536 = cljs.core.not.call(null,inst_54535);var state_54552__$1 = (function (){var statearr_54561 = state_54552;(statearr_54561[9] = inst_54534__$1);
return statearr_54561;
})();if(inst_54536)
{var statearr_54562_54581 = state_54552__$1;(statearr_54562_54581[1] = 8);
} else
{var statearr_54563_54582 = state_54552__$1;(statearr_54563_54582[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54553 === 8))
{var inst_54534 = (state_54552[9]);var state_54552__$1 = state_54552;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54552__$1,11,out,inst_54534);
} else
{if((state_val_54553 === 9))
{var state_54552__$1 = state_54552;var statearr_54564_54583 = state_54552__$1;(statearr_54564_54583[2] = null);
(statearr_54564_54583[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54553 === 10))
{var inst_54544 = (state_54552[2]);var state_54552__$1 = state_54552;var statearr_54565_54584 = state_54552__$1;(statearr_54565_54584[2] = inst_54544);
(statearr_54565_54584[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54553 === 11))
{var inst_54529 = (state_54552[7]);var inst_54539 = (state_54552[2]);var inst_54540 = (inst_54529 + 1);var inst_54529__$1 = inst_54540;var state_54552__$1 = (function (){var statearr_54566 = state_54552;(statearr_54566[10] = inst_54539);
(statearr_54566[7] = inst_54529__$1);
return statearr_54566;
})();var statearr_54567_54585 = state_54552__$1;(statearr_54567_54585[2] = null);
(statearr_54567_54585[1] = 2);
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
});return ((function (switch__5510__auto__){
return (function() {
var state_machine__5511__auto__ = null;
var state_machine__5511__auto____0 = (function (){var statearr_54571 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_54571[0] = state_machine__5511__auto__);
(statearr_54571[1] = 1);
return statearr_54571;
});
var state_machine__5511__auto____1 = (function (state_54552){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_54552);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e54572){if((e54572 instanceof Object))
{var ex__5514__auto__ = e54572;var statearr_54573_54586 = state_54552;(statearr_54573_54586[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54552);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e54572;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__54587 = state_54552;
state_54552 = G__54587;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_54552){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_54552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_54574 = f__5526__auto__.call(null);(statearr_54574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___54575);
return statearr_54574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5525__auto___54684 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_54659){var state_val_54660 = (state_54659[1]);if((state_val_54660 === 1))
{var inst_54636 = null;var state_54659__$1 = (function (){var statearr_54661 = state_54659;(statearr_54661[7] = inst_54636);
return statearr_54661;
})();var statearr_54662_54685 = state_54659__$1;(statearr_54662_54685[2] = null);
(statearr_54662_54685[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54660 === 2))
{var state_54659__$1 = state_54659;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54659__$1,4,ch);
} else
{if((state_val_54660 === 3))
{var inst_54656 = (state_54659[2]);var inst_54657 = cljs.core.async.close_BANG_.call(null,out);var state_54659__$1 = (function (){var statearr_54663 = state_54659;(statearr_54663[8] = inst_54656);
return statearr_54663;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54659__$1,inst_54657);
} else
{if((state_val_54660 === 4))
{var inst_54639 = (state_54659[9]);var inst_54639__$1 = (state_54659[2]);var inst_54640 = (inst_54639__$1 == null);var inst_54641 = cljs.core.not.call(null,inst_54640);var state_54659__$1 = (function (){var statearr_54664 = state_54659;(statearr_54664[9] = inst_54639__$1);
return statearr_54664;
})();if(inst_54641)
{var statearr_54665_54686 = state_54659__$1;(statearr_54665_54686[1] = 5);
} else
{var statearr_54666_54687 = state_54659__$1;(statearr_54666_54687[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54660 === 5))
{var inst_54636 = (state_54659[7]);var inst_54639 = (state_54659[9]);var inst_54643 = cljs.core._EQ_.call(null,inst_54639,inst_54636);var state_54659__$1 = state_54659;if(inst_54643)
{var statearr_54667_54688 = state_54659__$1;(statearr_54667_54688[1] = 8);
} else
{var statearr_54668_54689 = state_54659__$1;(statearr_54668_54689[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54660 === 6))
{var state_54659__$1 = state_54659;var statearr_54670_54690 = state_54659__$1;(statearr_54670_54690[2] = null);
(statearr_54670_54690[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54660 === 7))
{var inst_54654 = (state_54659[2]);var state_54659__$1 = state_54659;var statearr_54671_54691 = state_54659__$1;(statearr_54671_54691[2] = inst_54654);
(statearr_54671_54691[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54660 === 8))
{var inst_54636 = (state_54659[7]);var tmp54669 = inst_54636;var inst_54636__$1 = tmp54669;var state_54659__$1 = (function (){var statearr_54672 = state_54659;(statearr_54672[7] = inst_54636__$1);
return statearr_54672;
})();var statearr_54673_54692 = state_54659__$1;(statearr_54673_54692[2] = null);
(statearr_54673_54692[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54660 === 9))
{var inst_54639 = (state_54659[9]);var state_54659__$1 = state_54659;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54659__$1,11,out,inst_54639);
} else
{if((state_val_54660 === 10))
{var inst_54651 = (state_54659[2]);var state_54659__$1 = state_54659;var statearr_54674_54693 = state_54659__$1;(statearr_54674_54693[2] = inst_54651);
(statearr_54674_54693[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54660 === 11))
{var inst_54639 = (state_54659[9]);var inst_54648 = (state_54659[2]);var inst_54636 = inst_54639;var state_54659__$1 = (function (){var statearr_54675 = state_54659;(statearr_54675[7] = inst_54636);
(statearr_54675[10] = inst_54648);
return statearr_54675;
})();var statearr_54676_54694 = state_54659__$1;(statearr_54676_54694[2] = null);
(statearr_54676_54694[1] = 2);
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
});return ((function (switch__5510__auto__){
return (function() {
var state_machine__5511__auto__ = null;
var state_machine__5511__auto____0 = (function (){var statearr_54680 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_54680[0] = state_machine__5511__auto__);
(statearr_54680[1] = 1);
return statearr_54680;
});
var state_machine__5511__auto____1 = (function (state_54659){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_54659);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e54681){if((e54681 instanceof Object))
{var ex__5514__auto__ = e54681;var statearr_54682_54695 = state_54659;(statearr_54682_54695[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54659);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e54681;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__54696 = state_54659;
state_54659 = G__54696;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_54659){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_54659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_54683 = f__5526__auto__.call(null);(statearr_54683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___54684);
return statearr_54683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5525__auto___54831 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_54801){var state_val_54802 = (state_54801[1]);if((state_val_54802 === 1))
{var inst_54764 = (new Array(n));var inst_54765 = inst_54764;var inst_54766 = 0;var state_54801__$1 = (function (){var statearr_54803 = state_54801;(statearr_54803[7] = inst_54765);
(statearr_54803[8] = inst_54766);
return statearr_54803;
})();var statearr_54804_54832 = state_54801__$1;(statearr_54804_54832[2] = null);
(statearr_54804_54832[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54802 === 2))
{var state_54801__$1 = state_54801;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54801__$1,4,ch);
} else
{if((state_val_54802 === 3))
{var inst_54799 = (state_54801[2]);var state_54801__$1 = state_54801;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54801__$1,inst_54799);
} else
{if((state_val_54802 === 4))
{var inst_54769 = (state_54801[9]);var inst_54769__$1 = (state_54801[2]);var inst_54770 = (inst_54769__$1 == null);var inst_54771 = cljs.core.not.call(null,inst_54770);var state_54801__$1 = (function (){var statearr_54805 = state_54801;(statearr_54805[9] = inst_54769__$1);
return statearr_54805;
})();if(inst_54771)
{var statearr_54806_54833 = state_54801__$1;(statearr_54806_54833[1] = 5);
} else
{var statearr_54807_54834 = state_54801__$1;(statearr_54807_54834[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54802 === 5))
{var inst_54765 = (state_54801[7]);var inst_54766 = (state_54801[8]);var inst_54769 = (state_54801[9]);var inst_54774 = (state_54801[10]);var inst_54773 = (inst_54765[inst_54766] = inst_54769);var inst_54774__$1 = (inst_54766 + 1);var inst_54775 = (inst_54774__$1 < n);var state_54801__$1 = (function (){var statearr_54808 = state_54801;(statearr_54808[11] = inst_54773);
(statearr_54808[10] = inst_54774__$1);
return statearr_54808;
})();if(cljs.core.truth_(inst_54775))
{var statearr_54809_54835 = state_54801__$1;(statearr_54809_54835[1] = 8);
} else
{var statearr_54810_54836 = state_54801__$1;(statearr_54810_54836[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54802 === 6))
{var inst_54766 = (state_54801[8]);var inst_54787 = (inst_54766 > 0);var state_54801__$1 = state_54801;if(cljs.core.truth_(inst_54787))
{var statearr_54812_54837 = state_54801__$1;(statearr_54812_54837[1] = 12);
} else
{var statearr_54813_54838 = state_54801__$1;(statearr_54813_54838[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54802 === 7))
{var inst_54797 = (state_54801[2]);var state_54801__$1 = state_54801;var statearr_54814_54839 = state_54801__$1;(statearr_54814_54839[2] = inst_54797);
(statearr_54814_54839[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54802 === 8))
{var inst_54765 = (state_54801[7]);var inst_54774 = (state_54801[10]);var tmp54811 = inst_54765;var inst_54765__$1 = tmp54811;var inst_54766 = inst_54774;var state_54801__$1 = (function (){var statearr_54815 = state_54801;(statearr_54815[7] = inst_54765__$1);
(statearr_54815[8] = inst_54766);
return statearr_54815;
})();var statearr_54816_54840 = state_54801__$1;(statearr_54816_54840[2] = null);
(statearr_54816_54840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54802 === 9))
{var inst_54765 = (state_54801[7]);var inst_54779 = cljs.core.vec.call(null,inst_54765);var state_54801__$1 = state_54801;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54801__$1,11,out,inst_54779);
} else
{if((state_val_54802 === 10))
{var inst_54785 = (state_54801[2]);var state_54801__$1 = state_54801;var statearr_54817_54841 = state_54801__$1;(statearr_54817_54841[2] = inst_54785);
(statearr_54817_54841[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54802 === 11))
{var inst_54781 = (state_54801[2]);var inst_54782 = (new Array(n));var inst_54765 = inst_54782;var inst_54766 = 0;var state_54801__$1 = (function (){var statearr_54818 = state_54801;(statearr_54818[7] = inst_54765);
(statearr_54818[8] = inst_54766);
(statearr_54818[12] = inst_54781);
return statearr_54818;
})();var statearr_54819_54842 = state_54801__$1;(statearr_54819_54842[2] = null);
(statearr_54819_54842[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54802 === 12))
{var inst_54765 = (state_54801[7]);var inst_54789 = cljs.core.vec.call(null,inst_54765);var state_54801__$1 = state_54801;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54801__$1,15,out,inst_54789);
} else
{if((state_val_54802 === 13))
{var state_54801__$1 = state_54801;var statearr_54820_54843 = state_54801__$1;(statearr_54820_54843[2] = null);
(statearr_54820_54843[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54802 === 14))
{var inst_54794 = (state_54801[2]);var inst_54795 = cljs.core.async.close_BANG_.call(null,out);var state_54801__$1 = (function (){var statearr_54821 = state_54801;(statearr_54821[13] = inst_54794);
return statearr_54821;
})();var statearr_54822_54844 = state_54801__$1;(statearr_54822_54844[2] = inst_54795);
(statearr_54822_54844[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54802 === 15))
{var inst_54791 = (state_54801[2]);var state_54801__$1 = state_54801;var statearr_54823_54845 = state_54801__$1;(statearr_54823_54845[2] = inst_54791);
(statearr_54823_54845[1] = 14);
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
});return ((function (switch__5510__auto__){
return (function() {
var state_machine__5511__auto__ = null;
var state_machine__5511__auto____0 = (function (){var statearr_54827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54827[0] = state_machine__5511__auto__);
(statearr_54827[1] = 1);
return statearr_54827;
});
var state_machine__5511__auto____1 = (function (state_54801){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_54801);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e54828){if((e54828 instanceof Object))
{var ex__5514__auto__ = e54828;var statearr_54829_54846 = state_54801;(statearr_54829_54846[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54801);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e54828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__54847 = state_54801;
state_54801 = G__54847;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_54801){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_54801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_54830 = f__5526__auto__.call(null);(statearr_54830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___54831);
return statearr_54830;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5525__auto___54990 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_54960){var state_val_54961 = (state_54960[1]);if((state_val_54961 === 1))
{var inst_54919 = [];var inst_54920 = inst_54919;var inst_54921 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_54960__$1 = (function (){var statearr_54962 = state_54960;(statearr_54962[7] = inst_54920);
(statearr_54962[8] = inst_54921);
return statearr_54962;
})();var statearr_54963_54991 = state_54960__$1;(statearr_54963_54991[2] = null);
(statearr_54963_54991[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54961 === 2))
{var state_54960__$1 = state_54960;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54960__$1,4,ch);
} else
{if((state_val_54961 === 3))
{var inst_54958 = (state_54960[2]);var state_54960__$1 = state_54960;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54960__$1,inst_54958);
} else
{if((state_val_54961 === 4))
{var inst_54924 = (state_54960[9]);var inst_54924__$1 = (state_54960[2]);var inst_54925 = (inst_54924__$1 == null);var inst_54926 = cljs.core.not.call(null,inst_54925);var state_54960__$1 = (function (){var statearr_54964 = state_54960;(statearr_54964[9] = inst_54924__$1);
return statearr_54964;
})();if(inst_54926)
{var statearr_54965_54992 = state_54960__$1;(statearr_54965_54992[1] = 5);
} else
{var statearr_54966_54993 = state_54960__$1;(statearr_54966_54993[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54961 === 5))
{var inst_54921 = (state_54960[8]);var inst_54924 = (state_54960[9]);var inst_54928 = (state_54960[10]);var inst_54928__$1 = f.call(null,inst_54924);var inst_54929 = cljs.core._EQ_.call(null,inst_54928__$1,inst_54921);var inst_54930 = cljs.core.keyword_identical_QMARK_.call(null,inst_54921,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_54931 = (inst_54929) || (inst_54930);var state_54960__$1 = (function (){var statearr_54967 = state_54960;(statearr_54967[10] = inst_54928__$1);
return statearr_54967;
})();if(cljs.core.truth_(inst_54931))
{var statearr_54968_54994 = state_54960__$1;(statearr_54968_54994[1] = 8);
} else
{var statearr_54969_54995 = state_54960__$1;(statearr_54969_54995[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54961 === 6))
{var inst_54920 = (state_54960[7]);var inst_54945 = inst_54920.length;var inst_54946 = (inst_54945 > 0);var state_54960__$1 = state_54960;if(cljs.core.truth_(inst_54946))
{var statearr_54971_54996 = state_54960__$1;(statearr_54971_54996[1] = 12);
} else
{var statearr_54972_54997 = state_54960__$1;(statearr_54972_54997[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54961 === 7))
{var inst_54956 = (state_54960[2]);var state_54960__$1 = state_54960;var statearr_54973_54998 = state_54960__$1;(statearr_54973_54998[2] = inst_54956);
(statearr_54973_54998[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54961 === 8))
{var inst_54920 = (state_54960[7]);var inst_54924 = (state_54960[9]);var inst_54928 = (state_54960[10]);var inst_54933 = inst_54920.push(inst_54924);var tmp54970 = inst_54920;var inst_54920__$1 = tmp54970;var inst_54921 = inst_54928;var state_54960__$1 = (function (){var statearr_54974 = state_54960;(statearr_54974[11] = inst_54933);
(statearr_54974[7] = inst_54920__$1);
(statearr_54974[8] = inst_54921);
return statearr_54974;
})();var statearr_54975_54999 = state_54960__$1;(statearr_54975_54999[2] = null);
(statearr_54975_54999[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54961 === 9))
{var inst_54920 = (state_54960[7]);var inst_54936 = cljs.core.vec.call(null,inst_54920);var state_54960__$1 = state_54960;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54960__$1,11,out,inst_54936);
} else
{if((state_val_54961 === 10))
{var inst_54943 = (state_54960[2]);var state_54960__$1 = state_54960;var statearr_54976_55000 = state_54960__$1;(statearr_54976_55000[2] = inst_54943);
(statearr_54976_55000[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54961 === 11))
{var inst_54924 = (state_54960[9]);var inst_54928 = (state_54960[10]);var inst_54938 = (state_54960[2]);var inst_54939 = [];var inst_54940 = inst_54939.push(inst_54924);var inst_54920 = inst_54939;var inst_54921 = inst_54928;var state_54960__$1 = (function (){var statearr_54977 = state_54960;(statearr_54977[12] = inst_54938);
(statearr_54977[7] = inst_54920);
(statearr_54977[13] = inst_54940);
(statearr_54977[8] = inst_54921);
return statearr_54977;
})();var statearr_54978_55001 = state_54960__$1;(statearr_54978_55001[2] = null);
(statearr_54978_55001[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54961 === 12))
{var inst_54920 = (state_54960[7]);var inst_54948 = cljs.core.vec.call(null,inst_54920);var state_54960__$1 = state_54960;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54960__$1,15,out,inst_54948);
} else
{if((state_val_54961 === 13))
{var state_54960__$1 = state_54960;var statearr_54979_55002 = state_54960__$1;(statearr_54979_55002[2] = null);
(statearr_54979_55002[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54961 === 14))
{var inst_54953 = (state_54960[2]);var inst_54954 = cljs.core.async.close_BANG_.call(null,out);var state_54960__$1 = (function (){var statearr_54980 = state_54960;(statearr_54980[14] = inst_54953);
return statearr_54980;
})();var statearr_54981_55003 = state_54960__$1;(statearr_54981_55003[2] = inst_54954);
(statearr_54981_55003[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54961 === 15))
{var inst_54950 = (state_54960[2]);var state_54960__$1 = state_54960;var statearr_54982_55004 = state_54960__$1;(statearr_54982_55004[2] = inst_54950);
(statearr_54982_55004[1] = 14);
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
});return ((function (switch__5510__auto__){
return (function() {
var state_machine__5511__auto__ = null;
var state_machine__5511__auto____0 = (function (){var statearr_54986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54986[0] = state_machine__5511__auto__);
(statearr_54986[1] = 1);
return statearr_54986;
});
var state_machine__5511__auto____1 = (function (state_54960){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_54960);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e54987){if((e54987 instanceof Object))
{var ex__5514__auto__ = e54987;var statearr_54988_55005 = state_54960;(statearr_54988_55005[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54960);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e54987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__55006 = state_54960;
state_54960 = G__55006;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_54960){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_54960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_54989 = f__5526__auto__.call(null);(statearr_54989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___54990);
return statearr_54989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5527__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map