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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t8393 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8393 = (function (f,fn_handler,meta8394){
this.f = f;
this.fn_handler = fn_handler;
this.meta8394 = meta8394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8393.cljs$lang$type = true;
cljs.core.async.t8393.cljs$lang$ctorStr = "cljs.core.async/t8393";
cljs.core.async.t8393.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t8393");
});
cljs.core.async.t8393.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t8393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t8393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8395){var self__ = this;
var _8395__$1 = this;return self__.meta8394;
});
cljs.core.async.t8393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8395,meta8394__$1){var self__ = this;
var _8395__$1 = this;return (new cljs.core.async.t8393(self__.f,self__.fn_handler,meta8394__$1));
});
cljs.core.async.__GT_t8393 = (function __GT_t8393(f__$1,fn_handler__$1,meta8394){return (new cljs.core.async.t8393(f__$1,fn_handler__$1,meta8394));
});
}
return (new cljs.core.async.t8393(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__8397 = buff;if(G__8397)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__8397.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__8397.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__8397);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__8397);
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
{var val_8398 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_8398);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_8398);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___8399 = n;var x_8400 = 0;while(true){
if((x_8400 < n__4291__auto___8399))
{(a[x_8400] = 0);
{
var G__8401 = (x_8400 + 1);
x_8400 = G__8401;
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
var G__8402 = (i + 1);
i = G__8402;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t8406 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8406 = (function (flag,alt_flag,meta8407){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta8407 = meta8407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8406.cljs$lang$type = true;
cljs.core.async.t8406.cljs$lang$ctorStr = "cljs.core.async/t8406";
cljs.core.async.t8406.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t8406");
});
cljs.core.async.t8406.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8406.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t8406.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t8406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8408){var self__ = this;
var _8408__$1 = this;return self__.meta8407;
});
cljs.core.async.t8406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8408,meta8407__$1){var self__ = this;
var _8408__$1 = this;return (new cljs.core.async.t8406(self__.flag,self__.alt_flag,meta8407__$1));
});
cljs.core.async.__GT_t8406 = (function __GT_t8406(flag__$1,alt_flag__$1,meta8407){return (new cljs.core.async.t8406(flag__$1,alt_flag__$1,meta8407));
});
}
return (new cljs.core.async.t8406(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t8412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8412 = (function (cb,flag,alt_handler,meta8413){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta8413 = meta8413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8412.cljs$lang$type = true;
cljs.core.async.t8412.cljs$lang$ctorStr = "cljs.core.async/t8412";
cljs.core.async.t8412.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t8412");
});
cljs.core.async.t8412.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t8412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t8412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8414){var self__ = this;
var _8414__$1 = this;return self__.meta8413;
});
cljs.core.async.t8412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8414,meta8413__$1){var self__ = this;
var _8414__$1 = this;return (new cljs.core.async.t8412(self__.cb,self__.flag,self__.alt_handler,meta8413__$1));
});
cljs.core.async.__GT_t8412 = (function __GT_t8412(cb__$1,flag__$1,alt_handler__$1,meta8413){return (new cljs.core.async.t8412(cb__$1,flag__$1,alt_handler__$1,meta8413));
});
}
return (new cljs.core.async.t8412(cb,flag,alt_handler,null));
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
return (function (p1__8415_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8415_SHARP_,port], null));
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
var G__8416 = (i + 1);
i = G__8416;
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
var alts_BANG___delegate = function (ports,p__8417){var map__8419 = p__8417;var map__8419__$1 = ((cljs.core.seq_QMARK_.call(null,map__8419))?cljs.core.apply.call(null,cljs.core.hash_map,map__8419):map__8419);var opts = map__8419__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__8417 = null;if (arguments.length > 1) {
  p__8417 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__8417);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__8420){
var ports = cljs.core.first(arglist__8420);
var p__8417 = cljs.core.rest(arglist__8420);
return alts_BANG___delegate(ports,p__8417);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t8428 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8428 = (function (ch,f,map_LT_,meta8429){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta8429 = meta8429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8428.cljs$lang$type = true;
cljs.core.async.t8428.cljs$lang$ctorStr = "cljs.core.async/t8428";
cljs.core.async.t8428.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t8428");
});
cljs.core.async.t8428.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t8428.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t8431 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8431 = (function (fn1,_,meta8429,ch,f,map_LT_,meta8432){
this.fn1 = fn1;
this._ = _;
this.meta8429 = meta8429;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta8432 = meta8432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8431.cljs$lang$type = true;
cljs.core.async.t8431.cljs$lang$ctorStr = "cljs.core.async/t8431";
cljs.core.async.t8431.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t8431");
});
cljs.core.async.t8431.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t8431.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t8431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__8421_SHARP_){return f1.call(null,(((p1__8421_SHARP_ == null))?null:self__.f.call(null,p1__8421_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t8431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8433){var self__ = this;
var _8433__$1 = this;return self__.meta8432;
});
cljs.core.async.t8431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8433,meta8432__$1){var self__ = this;
var _8433__$1 = this;return (new cljs.core.async.t8431(self__.fn1,self__._,self__.meta8429,self__.ch,self__.f,self__.map_LT_,meta8432__$1));
});
cljs.core.async.__GT_t8431 = (function __GT_t8431(fn1__$1,___$2,meta8429__$1,ch__$2,f__$2,map_LT___$2,meta8432){return (new cljs.core.async.t8431(fn1__$1,___$2,meta8429__$1,ch__$2,f__$2,map_LT___$2,meta8432));
});
}
return (new cljs.core.async.t8431(fn1,___$1,self__.meta8429,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t8428.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8430){var self__ = this;
var _8430__$1 = this;return self__.meta8429;
});
cljs.core.async.t8428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8430,meta8429__$1){var self__ = this;
var _8430__$1 = this;return (new cljs.core.async.t8428(self__.ch,self__.f,self__.map_LT_,meta8429__$1));
});
cljs.core.async.__GT_t8428 = (function __GT_t8428(ch__$1,f__$1,map_LT___$1,meta8429){return (new cljs.core.async.t8428(ch__$1,f__$1,map_LT___$1,meta8429));
});
}
return (new cljs.core.async.t8428(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t8437 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8437 = (function (ch,f,map_GT_,meta8438){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta8438 = meta8438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8437.cljs$lang$type = true;
cljs.core.async.t8437.cljs$lang$ctorStr = "cljs.core.async/t8437";
cljs.core.async.t8437.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t8437");
});
cljs.core.async.t8437.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8437.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t8437.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8437.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t8437.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8437.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8439){var self__ = this;
var _8439__$1 = this;return self__.meta8438;
});
cljs.core.async.t8437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8439,meta8438__$1){var self__ = this;
var _8439__$1 = this;return (new cljs.core.async.t8437(self__.ch,self__.f,self__.map_GT_,meta8438__$1));
});
cljs.core.async.__GT_t8437 = (function __GT_t8437(ch__$1,f__$1,map_GT___$1,meta8438){return (new cljs.core.async.t8437(ch__$1,f__$1,map_GT___$1,meta8438));
});
}
return (new cljs.core.async.t8437(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t8443 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8443 = (function (ch,p,filter_GT_,meta8444){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta8444 = meta8444;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8443.cljs$lang$type = true;
cljs.core.async.t8443.cljs$lang$ctorStr = "cljs.core.async/t8443";
cljs.core.async.t8443.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t8443");
});
cljs.core.async.t8443.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t8443.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t8443.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8445){var self__ = this;
var _8445__$1 = this;return self__.meta8444;
});
cljs.core.async.t8443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8445,meta8444__$1){var self__ = this;
var _8445__$1 = this;return (new cljs.core.async.t8443(self__.ch,self__.p,self__.filter_GT_,meta8444__$1));
});
cljs.core.async.__GT_t8443 = (function __GT_t8443(ch__$1,p__$1,filter_GT___$1,meta8444){return (new cljs.core.async.t8443(ch__$1,p__$1,filter_GT___$1,meta8444));
});
}
return (new cljs.core.async.t8443(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5525__auto___8528 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_8507){var state_val_8508 = (state_8507[1]);if((state_val_8508 === 1))
{var state_8507__$1 = state_8507;var statearr_8509_8529 = state_8507__$1;(statearr_8509_8529[2] = null);
(statearr_8509_8529[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8508 === 2))
{var state_8507__$1 = state_8507;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8507__$1,4,ch);
} else
{if((state_val_8508 === 3))
{var inst_8505 = (state_8507[2]);var state_8507__$1 = state_8507;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8507__$1,inst_8505);
} else
{if((state_val_8508 === 4))
{var inst_8489 = (state_8507[7]);var inst_8489__$1 = (state_8507[2]);var inst_8490 = (inst_8489__$1 == null);var state_8507__$1 = (function (){var statearr_8510 = state_8507;(statearr_8510[7] = inst_8489__$1);
return statearr_8510;
})();if(cljs.core.truth_(inst_8490))
{var statearr_8511_8530 = state_8507__$1;(statearr_8511_8530[1] = 5);
} else
{var statearr_8512_8531 = state_8507__$1;(statearr_8512_8531[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8508 === 5))
{var inst_8492 = cljs.core.async.close_BANG_.call(null,out);var state_8507__$1 = state_8507;var statearr_8513_8532 = state_8507__$1;(statearr_8513_8532[2] = inst_8492);
(statearr_8513_8532[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8508 === 6))
{var inst_8489 = (state_8507[7]);var inst_8494 = p.call(null,inst_8489);var state_8507__$1 = state_8507;if(cljs.core.truth_(inst_8494))
{var statearr_8514_8533 = state_8507__$1;(statearr_8514_8533[1] = 8);
} else
{var statearr_8515_8534 = state_8507__$1;(statearr_8515_8534[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8508 === 7))
{var inst_8503 = (state_8507[2]);var state_8507__$1 = state_8507;var statearr_8516_8535 = state_8507__$1;(statearr_8516_8535[2] = inst_8503);
(statearr_8516_8535[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8508 === 8))
{var inst_8489 = (state_8507[7]);var state_8507__$1 = state_8507;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8507__$1,11,out,inst_8489);
} else
{if((state_val_8508 === 9))
{var state_8507__$1 = state_8507;var statearr_8517_8536 = state_8507__$1;(statearr_8517_8536[2] = null);
(statearr_8517_8536[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8508 === 10))
{var inst_8500 = (state_8507[2]);var state_8507__$1 = (function (){var statearr_8518 = state_8507;(statearr_8518[8] = inst_8500);
return statearr_8518;
})();var statearr_8519_8537 = state_8507__$1;(statearr_8519_8537[2] = null);
(statearr_8519_8537[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8508 === 11))
{var inst_8497 = (state_8507[2]);var state_8507__$1 = state_8507;var statearr_8520_8538 = state_8507__$1;(statearr_8520_8538[2] = inst_8497);
(statearr_8520_8538[1] = 10);
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
var state_machine__5511__auto____0 = (function (){var statearr_8524 = [null,null,null,null,null,null,null,null,null];(statearr_8524[0] = state_machine__5511__auto__);
(statearr_8524[1] = 1);
return statearr_8524;
});
var state_machine__5511__auto____1 = (function (state_8507){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_8507);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e8525){if((e8525 instanceof Object))
{var ex__5514__auto__ = e8525;var statearr_8526_8539 = state_8507;(statearr_8526_8539[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8507);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8525;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8540 = state_8507;
state_8507 = G__8540;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_8507){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_8507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_8527 = f__5526__auto__.call(null);(statearr_8527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___8528);
return statearr_8527;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5525__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_8692){var state_val_8693 = (state_8692[1]);if((state_val_8693 === 1))
{var state_8692__$1 = state_8692;var statearr_8694_8731 = state_8692__$1;(statearr_8694_8731[2] = null);
(statearr_8694_8731[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8693 === 2))
{var state_8692__$1 = state_8692;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8692__$1,4,in$);
} else
{if((state_val_8693 === 3))
{var inst_8690 = (state_8692[2]);var state_8692__$1 = state_8692;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8692__$1,inst_8690);
} else
{if((state_val_8693 === 4))
{var inst_8638 = (state_8692[7]);var inst_8638__$1 = (state_8692[2]);var inst_8639 = (inst_8638__$1 == null);var state_8692__$1 = (function (){var statearr_8695 = state_8692;(statearr_8695[7] = inst_8638__$1);
return statearr_8695;
})();if(cljs.core.truth_(inst_8639))
{var statearr_8696_8732 = state_8692__$1;(statearr_8696_8732[1] = 5);
} else
{var statearr_8697_8733 = state_8692__$1;(statearr_8697_8733[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8693 === 5))
{var inst_8641 = cljs.core.async.close_BANG_.call(null,out);var state_8692__$1 = state_8692;var statearr_8698_8734 = state_8692__$1;(statearr_8698_8734[2] = inst_8641);
(statearr_8698_8734[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8693 === 6))
{var inst_8638 = (state_8692[7]);var inst_8643 = f.call(null,inst_8638);var inst_8648 = cljs.core.seq.call(null,inst_8643);var inst_8649 = inst_8648;var inst_8650 = null;var inst_8651 = 0;var inst_8652 = 0;var state_8692__$1 = (function (){var statearr_8699 = state_8692;(statearr_8699[8] = inst_8652);
(statearr_8699[9] = inst_8651);
(statearr_8699[10] = inst_8650);
(statearr_8699[11] = inst_8649);
return statearr_8699;
})();var statearr_8700_8735 = state_8692__$1;(statearr_8700_8735[2] = null);
(statearr_8700_8735[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8693 === 7))
{var inst_8688 = (state_8692[2]);var state_8692__$1 = state_8692;var statearr_8701_8736 = state_8692__$1;(statearr_8701_8736[2] = inst_8688);
(statearr_8701_8736[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8693 === 8))
{var inst_8652 = (state_8692[8]);var inst_8651 = (state_8692[9]);var inst_8654 = (inst_8652 < inst_8651);var inst_8655 = inst_8654;var state_8692__$1 = state_8692;if(cljs.core.truth_(inst_8655))
{var statearr_8702_8737 = state_8692__$1;(statearr_8702_8737[1] = 10);
} else
{var statearr_8703_8738 = state_8692__$1;(statearr_8703_8738[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8693 === 9))
{var inst_8685 = (state_8692[2]);var state_8692__$1 = (function (){var statearr_8704 = state_8692;(statearr_8704[12] = inst_8685);
return statearr_8704;
})();var statearr_8705_8739 = state_8692__$1;(statearr_8705_8739[2] = null);
(statearr_8705_8739[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8693 === 10))
{var inst_8652 = (state_8692[8]);var inst_8650 = (state_8692[10]);var inst_8657 = cljs.core._nth.call(null,inst_8650,inst_8652);var state_8692__$1 = state_8692;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8692__$1,13,out,inst_8657);
} else
{if((state_val_8693 === 11))
{var inst_8663 = (state_8692[13]);var inst_8649 = (state_8692[11]);var inst_8663__$1 = cljs.core.seq.call(null,inst_8649);var state_8692__$1 = (function (){var statearr_8709 = state_8692;(statearr_8709[13] = inst_8663__$1);
return statearr_8709;
})();if(inst_8663__$1)
{var statearr_8710_8740 = state_8692__$1;(statearr_8710_8740[1] = 14);
} else
{var statearr_8711_8741 = state_8692__$1;(statearr_8711_8741[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8693 === 12))
{var inst_8683 = (state_8692[2]);var state_8692__$1 = state_8692;var statearr_8712_8742 = state_8692__$1;(statearr_8712_8742[2] = inst_8683);
(statearr_8712_8742[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8693 === 13))
{var inst_8652 = (state_8692[8]);var inst_8651 = (state_8692[9]);var inst_8650 = (state_8692[10]);var inst_8649 = (state_8692[11]);var inst_8659 = (state_8692[2]);var inst_8660 = (inst_8652 + 1);var tmp8706 = inst_8651;var tmp8707 = inst_8650;var tmp8708 = inst_8649;var inst_8649__$1 = tmp8708;var inst_8650__$1 = tmp8707;var inst_8651__$1 = tmp8706;var inst_8652__$1 = inst_8660;var state_8692__$1 = (function (){var statearr_8713 = state_8692;(statearr_8713[8] = inst_8652__$1);
(statearr_8713[9] = inst_8651__$1);
(statearr_8713[10] = inst_8650__$1);
(statearr_8713[11] = inst_8649__$1);
(statearr_8713[14] = inst_8659);
return statearr_8713;
})();var statearr_8714_8743 = state_8692__$1;(statearr_8714_8743[2] = null);
(statearr_8714_8743[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8693 === 14))
{var inst_8663 = (state_8692[13]);var inst_8665 = cljs.core.chunked_seq_QMARK_.call(null,inst_8663);var state_8692__$1 = state_8692;if(inst_8665)
{var statearr_8715_8744 = state_8692__$1;(statearr_8715_8744[1] = 17);
} else
{var statearr_8716_8745 = state_8692__$1;(statearr_8716_8745[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8693 === 15))
{var state_8692__$1 = state_8692;var statearr_8717_8746 = state_8692__$1;(statearr_8717_8746[2] = null);
(statearr_8717_8746[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8693 === 16))
{var inst_8681 = (state_8692[2]);var state_8692__$1 = state_8692;var statearr_8718_8747 = state_8692__$1;(statearr_8718_8747[2] = inst_8681);
(statearr_8718_8747[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8693 === 17))
{var inst_8663 = (state_8692[13]);var inst_8667 = cljs.core.chunk_first.call(null,inst_8663);var inst_8668 = cljs.core.chunk_rest.call(null,inst_8663);var inst_8669 = cljs.core.count.call(null,inst_8667);var inst_8649 = inst_8668;var inst_8650 = inst_8667;var inst_8651 = inst_8669;var inst_8652 = 0;var state_8692__$1 = (function (){var statearr_8719 = state_8692;(statearr_8719[8] = inst_8652);
(statearr_8719[9] = inst_8651);
(statearr_8719[10] = inst_8650);
(statearr_8719[11] = inst_8649);
return statearr_8719;
})();var statearr_8720_8748 = state_8692__$1;(statearr_8720_8748[2] = null);
(statearr_8720_8748[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8693 === 18))
{var inst_8663 = (state_8692[13]);var inst_8672 = cljs.core.first.call(null,inst_8663);var state_8692__$1 = state_8692;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8692__$1,20,out,inst_8672);
} else
{if((state_val_8693 === 19))
{var inst_8678 = (state_8692[2]);var state_8692__$1 = state_8692;var statearr_8721_8749 = state_8692__$1;(statearr_8721_8749[2] = inst_8678);
(statearr_8721_8749[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8693 === 20))
{var inst_8663 = (state_8692[13]);var inst_8674 = (state_8692[2]);var inst_8675 = cljs.core.next.call(null,inst_8663);var inst_8649 = inst_8675;var inst_8650 = null;var inst_8651 = 0;var inst_8652 = 0;var state_8692__$1 = (function (){var statearr_8722 = state_8692;(statearr_8722[8] = inst_8652);
(statearr_8722[9] = inst_8651);
(statearr_8722[10] = inst_8650);
(statearr_8722[11] = inst_8649);
(statearr_8722[15] = inst_8674);
return statearr_8722;
})();var statearr_8723_8750 = state_8692__$1;(statearr_8723_8750[2] = null);
(statearr_8723_8750[1] = 8);
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
var state_machine__5511__auto____0 = (function (){var statearr_8727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8727[0] = state_machine__5511__auto__);
(statearr_8727[1] = 1);
return statearr_8727;
});
var state_machine__5511__auto____1 = (function (state_8692){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_8692);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e8728){if((e8728 instanceof Object))
{var ex__5514__auto__ = e8728;var statearr_8729_8751 = state_8692;(statearr_8729_8751[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8692);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8728;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8752 = state_8692;
state_8692 = G__8752;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_8692){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_8692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_8730 = f__5526__auto__.call(null);(statearr_8730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto__);
return statearr_8730;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5525__auto___8833 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_8812){var state_val_8813 = (state_8812[1]);if((state_val_8813 === 1))
{var state_8812__$1 = state_8812;var statearr_8814_8834 = state_8812__$1;(statearr_8814_8834[2] = null);
(statearr_8814_8834[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8813 === 2))
{var state_8812__$1 = state_8812;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8812__$1,4,from);
} else
{if((state_val_8813 === 3))
{var inst_8810 = (state_8812[2]);var state_8812__$1 = state_8812;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8812__$1,inst_8810);
} else
{if((state_val_8813 === 4))
{var inst_8795 = (state_8812[7]);var inst_8795__$1 = (state_8812[2]);var inst_8796 = (inst_8795__$1 == null);var state_8812__$1 = (function (){var statearr_8815 = state_8812;(statearr_8815[7] = inst_8795__$1);
return statearr_8815;
})();if(cljs.core.truth_(inst_8796))
{var statearr_8816_8835 = state_8812__$1;(statearr_8816_8835[1] = 5);
} else
{var statearr_8817_8836 = state_8812__$1;(statearr_8817_8836[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8813 === 5))
{var state_8812__$1 = state_8812;if(cljs.core.truth_(close_QMARK_))
{var statearr_8818_8837 = state_8812__$1;(statearr_8818_8837[1] = 8);
} else
{var statearr_8819_8838 = state_8812__$1;(statearr_8819_8838[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8813 === 6))
{var inst_8795 = (state_8812[7]);var state_8812__$1 = state_8812;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8812__$1,11,to,inst_8795);
} else
{if((state_val_8813 === 7))
{var inst_8808 = (state_8812[2]);var state_8812__$1 = state_8812;var statearr_8820_8839 = state_8812__$1;(statearr_8820_8839[2] = inst_8808);
(statearr_8820_8839[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8813 === 8))
{var inst_8799 = cljs.core.async.close_BANG_.call(null,to);var state_8812__$1 = state_8812;var statearr_8821_8840 = state_8812__$1;(statearr_8821_8840[2] = inst_8799);
(statearr_8821_8840[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8813 === 9))
{var state_8812__$1 = state_8812;var statearr_8822_8841 = state_8812__$1;(statearr_8822_8841[2] = null);
(statearr_8822_8841[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8813 === 10))
{var inst_8802 = (state_8812[2]);var state_8812__$1 = state_8812;var statearr_8823_8842 = state_8812__$1;(statearr_8823_8842[2] = inst_8802);
(statearr_8823_8842[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8813 === 11))
{var inst_8805 = (state_8812[2]);var state_8812__$1 = (function (){var statearr_8824 = state_8812;(statearr_8824[8] = inst_8805);
return statearr_8824;
})();var statearr_8825_8843 = state_8812__$1;(statearr_8825_8843[2] = null);
(statearr_8825_8843[1] = 2);
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
var state_machine__5511__auto____0 = (function (){var statearr_8829 = [null,null,null,null,null,null,null,null,null];(statearr_8829[0] = state_machine__5511__auto__);
(statearr_8829[1] = 1);
return statearr_8829;
});
var state_machine__5511__auto____1 = (function (state_8812){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_8812);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e8830){if((e8830 instanceof Object))
{var ex__5514__auto__ = e8830;var statearr_8831_8844 = state_8812;(statearr_8831_8844[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8812);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8845 = state_8812;
state_8812 = G__8845;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_8812){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_8812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_8832 = f__5526__auto__.call(null);(statearr_8832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___8833);
return statearr_8832;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5525__auto___8932 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_8910){var state_val_8911 = (state_8910[1]);if((state_val_8911 === 1))
{var state_8910__$1 = state_8910;var statearr_8912_8933 = state_8910__$1;(statearr_8912_8933[2] = null);
(statearr_8912_8933[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8911 === 2))
{var state_8910__$1 = state_8910;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8910__$1,4,ch);
} else
{if((state_val_8911 === 3))
{var inst_8908 = (state_8910[2]);var state_8910__$1 = state_8910;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8910__$1,inst_8908);
} else
{if((state_val_8911 === 4))
{var inst_8891 = (state_8910[7]);var inst_8891__$1 = (state_8910[2]);var inst_8892 = (inst_8891__$1 == null);var state_8910__$1 = (function (){var statearr_8913 = state_8910;(statearr_8913[7] = inst_8891__$1);
return statearr_8913;
})();if(cljs.core.truth_(inst_8892))
{var statearr_8914_8934 = state_8910__$1;(statearr_8914_8934[1] = 5);
} else
{var statearr_8915_8935 = state_8910__$1;(statearr_8915_8935[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8911 === 5))
{var inst_8894 = cljs.core.async.close_BANG_.call(null,tc);var inst_8895 = cljs.core.async.close_BANG_.call(null,fc);var state_8910__$1 = (function (){var statearr_8916 = state_8910;(statearr_8916[8] = inst_8894);
return statearr_8916;
})();var statearr_8917_8936 = state_8910__$1;(statearr_8917_8936[2] = inst_8895);
(statearr_8917_8936[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8911 === 6))
{var inst_8891 = (state_8910[7]);var inst_8897 = p.call(null,inst_8891);var state_8910__$1 = state_8910;if(cljs.core.truth_(inst_8897))
{var statearr_8918_8937 = state_8910__$1;(statearr_8918_8937[1] = 9);
} else
{var statearr_8919_8938 = state_8910__$1;(statearr_8919_8938[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8911 === 7))
{var inst_8906 = (state_8910[2]);var state_8910__$1 = state_8910;var statearr_8920_8939 = state_8910__$1;(statearr_8920_8939[2] = inst_8906);
(statearr_8920_8939[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8911 === 8))
{var inst_8903 = (state_8910[2]);var state_8910__$1 = (function (){var statearr_8921 = state_8910;(statearr_8921[9] = inst_8903);
return statearr_8921;
})();var statearr_8922_8940 = state_8910__$1;(statearr_8922_8940[2] = null);
(statearr_8922_8940[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8911 === 9))
{var state_8910__$1 = state_8910;var statearr_8923_8941 = state_8910__$1;(statearr_8923_8941[2] = tc);
(statearr_8923_8941[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8911 === 10))
{var state_8910__$1 = state_8910;var statearr_8924_8942 = state_8910__$1;(statearr_8924_8942[2] = fc);
(statearr_8924_8942[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8911 === 11))
{var inst_8891 = (state_8910[7]);var inst_8901 = (state_8910[2]);var state_8910__$1 = state_8910;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8910__$1,8,inst_8901,inst_8891);
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
var state_machine__5511__auto____0 = (function (){var statearr_8928 = [null,null,null,null,null,null,null,null,null,null];(statearr_8928[0] = state_machine__5511__auto__);
(statearr_8928[1] = 1);
return statearr_8928;
});
var state_machine__5511__auto____1 = (function (state_8910){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_8910);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e8929){if((e8929 instanceof Object))
{var ex__5514__auto__ = e8929;var statearr_8930_8943 = state_8910;(statearr_8930_8943[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8910);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8929;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8944 = state_8910;
state_8910 = G__8944;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_8910){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_8910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_8931 = f__5526__auto__.call(null);(statearr_8931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___8932);
return statearr_8931;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5525__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_8991){var state_val_8992 = (state_8991[1]);if((state_val_8992 === 7))
{var inst_8987 = (state_8991[2]);var state_8991__$1 = state_8991;var statearr_8993_9009 = state_8991__$1;(statearr_8993_9009[2] = inst_8987);
(statearr_8993_9009[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8992 === 6))
{var inst_8977 = (state_8991[7]);var inst_8980 = (state_8991[8]);var inst_8984 = f.call(null,inst_8977,inst_8980);var inst_8977__$1 = inst_8984;var state_8991__$1 = (function (){var statearr_8994 = state_8991;(statearr_8994[7] = inst_8977__$1);
return statearr_8994;
})();var statearr_8995_9010 = state_8991__$1;(statearr_8995_9010[2] = null);
(statearr_8995_9010[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8992 === 5))
{var inst_8977 = (state_8991[7]);var state_8991__$1 = state_8991;var statearr_8996_9011 = state_8991__$1;(statearr_8996_9011[2] = inst_8977);
(statearr_8996_9011[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8992 === 4))
{var inst_8980 = (state_8991[8]);var inst_8980__$1 = (state_8991[2]);var inst_8981 = (inst_8980__$1 == null);var state_8991__$1 = (function (){var statearr_8997 = state_8991;(statearr_8997[8] = inst_8980__$1);
return statearr_8997;
})();if(cljs.core.truth_(inst_8981))
{var statearr_8998_9012 = state_8991__$1;(statearr_8998_9012[1] = 5);
} else
{var statearr_8999_9013 = state_8991__$1;(statearr_8999_9013[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_8992 === 3))
{var inst_8989 = (state_8991[2]);var state_8991__$1 = state_8991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8991__$1,inst_8989);
} else
{if((state_val_8992 === 2))
{var state_8991__$1 = state_8991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8991__$1,4,ch);
} else
{if((state_val_8992 === 1))
{var inst_8977 = init;var state_8991__$1 = (function (){var statearr_9000 = state_8991;(statearr_9000[7] = inst_8977);
return statearr_9000;
})();var statearr_9001_9014 = state_8991__$1;(statearr_9001_9014[2] = null);
(statearr_9001_9014[1] = 2);
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
var state_machine__5511__auto____0 = (function (){var statearr_9005 = [null,null,null,null,null,null,null,null,null];(statearr_9005[0] = state_machine__5511__auto__);
(statearr_9005[1] = 1);
return statearr_9005;
});
var state_machine__5511__auto____1 = (function (state_8991){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_8991);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e9006){if((e9006 instanceof Object))
{var ex__5514__auto__ = e9006;var statearr_9007_9015 = state_8991;(statearr_9007_9015[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8991);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9006;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9016 = state_8991;
state_8991 = G__9016;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_8991){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_8991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_9008 = f__5526__auto__.call(null);(statearr_9008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto__);
return statearr_9008;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5525__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_9078){var state_val_9079 = (state_9078[1]);if((state_val_9079 === 1))
{var inst_9058 = cljs.core.seq.call(null,coll);var inst_9059 = inst_9058;var state_9078__$1 = (function (){var statearr_9080 = state_9078;(statearr_9080[7] = inst_9059);
return statearr_9080;
})();var statearr_9081_9099 = state_9078__$1;(statearr_9081_9099[2] = null);
(statearr_9081_9099[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9079 === 2))
{var inst_9059 = (state_9078[7]);var state_9078__$1 = state_9078;if(cljs.core.truth_(inst_9059))
{var statearr_9082_9100 = state_9078__$1;(statearr_9082_9100[1] = 4);
} else
{var statearr_9083_9101 = state_9078__$1;(statearr_9083_9101[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9079 === 3))
{var inst_9076 = (state_9078[2]);var state_9078__$1 = state_9078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9078__$1,inst_9076);
} else
{if((state_val_9079 === 4))
{var inst_9059 = (state_9078[7]);var inst_9062 = cljs.core.first.call(null,inst_9059);var state_9078__$1 = state_9078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9078__$1,7,ch,inst_9062);
} else
{if((state_val_9079 === 5))
{var state_9078__$1 = state_9078;if(cljs.core.truth_(close_QMARK_))
{var statearr_9084_9102 = state_9078__$1;(statearr_9084_9102[1] = 8);
} else
{var statearr_9085_9103 = state_9078__$1;(statearr_9085_9103[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9079 === 6))
{var inst_9074 = (state_9078[2]);var state_9078__$1 = state_9078;var statearr_9086_9104 = state_9078__$1;(statearr_9086_9104[2] = inst_9074);
(statearr_9086_9104[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9079 === 7))
{var inst_9059 = (state_9078[7]);var inst_9064 = (state_9078[2]);var inst_9065 = cljs.core.next.call(null,inst_9059);var inst_9059__$1 = inst_9065;var state_9078__$1 = (function (){var statearr_9087 = state_9078;(statearr_9087[7] = inst_9059__$1);
(statearr_9087[8] = inst_9064);
return statearr_9087;
})();var statearr_9088_9105 = state_9078__$1;(statearr_9088_9105[2] = null);
(statearr_9088_9105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9079 === 8))
{var inst_9069 = cljs.core.async.close_BANG_.call(null,ch);var state_9078__$1 = state_9078;var statearr_9089_9106 = state_9078__$1;(statearr_9089_9106[2] = inst_9069);
(statearr_9089_9106[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9079 === 9))
{var state_9078__$1 = state_9078;var statearr_9090_9107 = state_9078__$1;(statearr_9090_9107[2] = null);
(statearr_9090_9107[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9079 === 10))
{var inst_9072 = (state_9078[2]);var state_9078__$1 = state_9078;var statearr_9091_9108 = state_9078__$1;(statearr_9091_9108[2] = inst_9072);
(statearr_9091_9108[1] = 6);
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
var state_machine__5511__auto____0 = (function (){var statearr_9095 = [null,null,null,null,null,null,null,null,null];(statearr_9095[0] = state_machine__5511__auto__);
(statearr_9095[1] = 1);
return statearr_9095;
});
var state_machine__5511__auto____1 = (function (state_9078){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_9078);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e9096){if((e9096 instanceof Object))
{var ex__5514__auto__ = e9096;var statearr_9097_9109 = state_9078;(statearr_9097_9109[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9078);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9096;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9110 = state_9078;
state_9078 = G__9110;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_9078){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_9078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_9098 = f__5526__auto__.call(null);(statearr_9098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto__);
return statearr_9098;
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
cljs.core.async.Mux = (function (){var obj9112 = {};return obj9112;
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
cljs.core.async.Mult = (function (){var obj9114 = {};return obj9114;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t9329 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9329 = (function (cs,ch,mult,meta9330){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta9330 = meta9330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9329.cljs$lang$type = true;
cljs.core.async.t9329.cljs$lang$ctorStr = "cljs.core.async/t9329";
cljs.core.async.t9329.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9329");
});})(cs))
;
cljs.core.async.t9329.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t9329.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t9329.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t9329.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t9329.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t9329.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t9329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9331){var self__ = this;
var _9331__$1 = this;return self__.meta9330;
});})(cs))
;
cljs.core.async.t9329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9331,meta9330__$1){var self__ = this;
var _9331__$1 = this;return (new cljs.core.async.t9329(self__.cs,self__.ch,self__.mult,meta9330__$1));
});})(cs))
;
cljs.core.async.__GT_t9329 = ((function (cs){
return (function __GT_t9329(cs__$1,ch__$1,mult__$1,meta9330){return (new cljs.core.async.t9329(cs__$1,ch__$1,mult__$1,meta9330));
});})(cs))
;
}
return (new cljs.core.async.t9329(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5525__auto___9543 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_9461){var state_val_9462 = (state_9461[1]);if((state_val_9462 === 32))
{var inst_9334 = (state_9461[7]);var inst_9410 = (state_9461[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9461,31,Object,null,30);var inst_9417 = cljs.core.async.put_BANG_.call(null,inst_9410,inst_9334,done);var state_9461__$1 = state_9461;var statearr_9463_9544 = state_9461__$1;(statearr_9463_9544[2] = inst_9417);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9461__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 1))
{var state_9461__$1 = state_9461;var statearr_9464_9545 = state_9461__$1;(statearr_9464_9545[2] = null);
(statearr_9464_9545[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 33))
{var inst_9423 = (state_9461[9]);var inst_9425 = cljs.core.chunked_seq_QMARK_.call(null,inst_9423);var state_9461__$1 = state_9461;if(inst_9425)
{var statearr_9465_9546 = state_9461__$1;(statearr_9465_9546[1] = 36);
} else
{var statearr_9466_9547 = state_9461__$1;(statearr_9466_9547[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 2))
{var state_9461__$1 = state_9461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9461__$1,4,ch);
} else
{if((state_val_9462 === 34))
{var state_9461__$1 = state_9461;var statearr_9467_9548 = state_9461__$1;(statearr_9467_9548[2] = null);
(statearr_9467_9548[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 3))
{var inst_9459 = (state_9461[2]);var state_9461__$1 = state_9461;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9461__$1,inst_9459);
} else
{if((state_val_9462 === 35))
{var inst_9448 = (state_9461[2]);var state_9461__$1 = state_9461;var statearr_9468_9549 = state_9461__$1;(statearr_9468_9549[2] = inst_9448);
(statearr_9468_9549[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 4))
{var inst_9334 = (state_9461[7]);var inst_9334__$1 = (state_9461[2]);var inst_9335 = (inst_9334__$1 == null);var state_9461__$1 = (function (){var statearr_9469 = state_9461;(statearr_9469[7] = inst_9334__$1);
return statearr_9469;
})();if(cljs.core.truth_(inst_9335))
{var statearr_9470_9550 = state_9461__$1;(statearr_9470_9550[1] = 5);
} else
{var statearr_9471_9551 = state_9461__$1;(statearr_9471_9551[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 36))
{var inst_9423 = (state_9461[9]);var inst_9427 = cljs.core.chunk_first.call(null,inst_9423);var inst_9428 = cljs.core.chunk_rest.call(null,inst_9423);var inst_9429 = cljs.core.count.call(null,inst_9427);var inst_9402 = inst_9428;var inst_9403 = inst_9427;var inst_9404 = inst_9429;var inst_9405 = 0;var state_9461__$1 = (function (){var statearr_9472 = state_9461;(statearr_9472[10] = inst_9402);
(statearr_9472[11] = inst_9403);
(statearr_9472[12] = inst_9405);
(statearr_9472[13] = inst_9404);
return statearr_9472;
})();var statearr_9473_9552 = state_9461__$1;(statearr_9473_9552[2] = null);
(statearr_9473_9552[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 5))
{var inst_9341 = cljs.core.deref.call(null,cs);var inst_9342 = cljs.core.seq.call(null,inst_9341);var inst_9343 = inst_9342;var inst_9344 = null;var inst_9345 = 0;var inst_9346 = 0;var state_9461__$1 = (function (){var statearr_9474 = state_9461;(statearr_9474[14] = inst_9345);
(statearr_9474[15] = inst_9346);
(statearr_9474[16] = inst_9344);
(statearr_9474[17] = inst_9343);
return statearr_9474;
})();var statearr_9475_9553 = state_9461__$1;(statearr_9475_9553[2] = null);
(statearr_9475_9553[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 37))
{var inst_9423 = (state_9461[9]);var inst_9432 = cljs.core.first.call(null,inst_9423);var state_9461__$1 = (function (){var statearr_9476 = state_9461;(statearr_9476[18] = inst_9432);
return statearr_9476;
})();var statearr_9477_9554 = state_9461__$1;(statearr_9477_9554[2] = null);
(statearr_9477_9554[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 6))
{var inst_9393 = cljs.core.deref.call(null,cs);var inst_9394 = cljs.core.keys.call(null,inst_9393);var inst_9395 = cljs.core.count.call(null,inst_9394);var inst_9396 = cljs.core.reset_BANG_.call(null,dctr,inst_9395);var inst_9401 = cljs.core.seq.call(null,inst_9394);var inst_9402 = inst_9401;var inst_9403 = null;var inst_9404 = 0;var inst_9405 = 0;var state_9461__$1 = (function (){var statearr_9478 = state_9461;(statearr_9478[19] = inst_9396);
(statearr_9478[10] = inst_9402);
(statearr_9478[11] = inst_9403);
(statearr_9478[12] = inst_9405);
(statearr_9478[13] = inst_9404);
return statearr_9478;
})();var statearr_9479_9555 = state_9461__$1;(statearr_9479_9555[2] = null);
(statearr_9479_9555[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 38))
{var inst_9445 = (state_9461[2]);var state_9461__$1 = state_9461;var statearr_9480_9556 = state_9461__$1;(statearr_9480_9556[2] = inst_9445);
(statearr_9480_9556[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 7))
{var inst_9457 = (state_9461[2]);var state_9461__$1 = state_9461;var statearr_9481_9557 = state_9461__$1;(statearr_9481_9557[2] = inst_9457);
(statearr_9481_9557[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 39))
{var inst_9423 = (state_9461[9]);var inst_9441 = (state_9461[2]);var inst_9442 = cljs.core.next.call(null,inst_9423);var inst_9402 = inst_9442;var inst_9403 = null;var inst_9404 = 0;var inst_9405 = 0;var state_9461__$1 = (function (){var statearr_9482 = state_9461;(statearr_9482[10] = inst_9402);
(statearr_9482[11] = inst_9403);
(statearr_9482[20] = inst_9441);
(statearr_9482[12] = inst_9405);
(statearr_9482[13] = inst_9404);
return statearr_9482;
})();var statearr_9483_9558 = state_9461__$1;(statearr_9483_9558[2] = null);
(statearr_9483_9558[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 8))
{var inst_9345 = (state_9461[14]);var inst_9346 = (state_9461[15]);var inst_9348 = (inst_9346 < inst_9345);var inst_9349 = inst_9348;var state_9461__$1 = state_9461;if(cljs.core.truth_(inst_9349))
{var statearr_9484_9559 = state_9461__$1;(statearr_9484_9559[1] = 10);
} else
{var statearr_9485_9560 = state_9461__$1;(statearr_9485_9560[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 40))
{var inst_9432 = (state_9461[18]);var inst_9433 = (state_9461[2]);var inst_9434 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_9435 = cljs.core.async.untap_STAR_.call(null,m,inst_9432);var state_9461__$1 = (function (){var statearr_9486 = state_9461;(statearr_9486[21] = inst_9433);
(statearr_9486[22] = inst_9434);
return statearr_9486;
})();var statearr_9487_9561 = state_9461__$1;(statearr_9487_9561[2] = inst_9435);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9461__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 9))
{var inst_9391 = (state_9461[2]);var state_9461__$1 = state_9461;var statearr_9488_9562 = state_9461__$1;(statearr_9488_9562[2] = inst_9391);
(statearr_9488_9562[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 41))
{var inst_9432 = (state_9461[18]);var inst_9334 = (state_9461[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9461,40,Object,null,39);var inst_9439 = cljs.core.async.put_BANG_.call(null,inst_9432,inst_9334,done);var state_9461__$1 = state_9461;var statearr_9489_9563 = state_9461__$1;(statearr_9489_9563[2] = inst_9439);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9461__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 10))
{var inst_9346 = (state_9461[15]);var inst_9344 = (state_9461[16]);var inst_9352 = cljs.core._nth.call(null,inst_9344,inst_9346);var inst_9353 = cljs.core.nth.call(null,inst_9352,0,null);var inst_9354 = cljs.core.nth.call(null,inst_9352,1,null);var state_9461__$1 = (function (){var statearr_9490 = state_9461;(statearr_9490[23] = inst_9353);
return statearr_9490;
})();if(cljs.core.truth_(inst_9354))
{var statearr_9491_9564 = state_9461__$1;(statearr_9491_9564[1] = 13);
} else
{var statearr_9492_9565 = state_9461__$1;(statearr_9492_9565[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 42))
{var inst_9454 = (state_9461[2]);var state_9461__$1 = (function (){var statearr_9493 = state_9461;(statearr_9493[24] = inst_9454);
return statearr_9493;
})();var statearr_9494_9566 = state_9461__$1;(statearr_9494_9566[2] = null);
(statearr_9494_9566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 11))
{var inst_9343 = (state_9461[17]);var inst_9363 = (state_9461[25]);var inst_9363__$1 = cljs.core.seq.call(null,inst_9343);var state_9461__$1 = (function (){var statearr_9495 = state_9461;(statearr_9495[25] = inst_9363__$1);
return statearr_9495;
})();if(inst_9363__$1)
{var statearr_9496_9567 = state_9461__$1;(statearr_9496_9567[1] = 16);
} else
{var statearr_9497_9568 = state_9461__$1;(statearr_9497_9568[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 12))
{var inst_9389 = (state_9461[2]);var state_9461__$1 = state_9461;var statearr_9498_9569 = state_9461__$1;(statearr_9498_9569[2] = inst_9389);
(statearr_9498_9569[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 13))
{var inst_9353 = (state_9461[23]);var inst_9356 = cljs.core.async.close_BANG_.call(null,inst_9353);var state_9461__$1 = state_9461;var statearr_9502_9570 = state_9461__$1;(statearr_9502_9570[2] = inst_9356);
(statearr_9502_9570[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 14))
{var state_9461__$1 = state_9461;var statearr_9503_9571 = state_9461__$1;(statearr_9503_9571[2] = null);
(statearr_9503_9571[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 15))
{var inst_9345 = (state_9461[14]);var inst_9346 = (state_9461[15]);var inst_9344 = (state_9461[16]);var inst_9343 = (state_9461[17]);var inst_9359 = (state_9461[2]);var inst_9360 = (inst_9346 + 1);var tmp9499 = inst_9345;var tmp9500 = inst_9344;var tmp9501 = inst_9343;var inst_9343__$1 = tmp9501;var inst_9344__$1 = tmp9500;var inst_9345__$1 = tmp9499;var inst_9346__$1 = inst_9360;var state_9461__$1 = (function (){var statearr_9504 = state_9461;(statearr_9504[14] = inst_9345__$1);
(statearr_9504[15] = inst_9346__$1);
(statearr_9504[16] = inst_9344__$1);
(statearr_9504[17] = inst_9343__$1);
(statearr_9504[26] = inst_9359);
return statearr_9504;
})();var statearr_9505_9572 = state_9461__$1;(statearr_9505_9572[2] = null);
(statearr_9505_9572[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 16))
{var inst_9363 = (state_9461[25]);var inst_9365 = cljs.core.chunked_seq_QMARK_.call(null,inst_9363);var state_9461__$1 = state_9461;if(inst_9365)
{var statearr_9506_9573 = state_9461__$1;(statearr_9506_9573[1] = 19);
} else
{var statearr_9507_9574 = state_9461__$1;(statearr_9507_9574[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 17))
{var state_9461__$1 = state_9461;var statearr_9508_9575 = state_9461__$1;(statearr_9508_9575[2] = null);
(statearr_9508_9575[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 18))
{var inst_9387 = (state_9461[2]);var state_9461__$1 = state_9461;var statearr_9509_9576 = state_9461__$1;(statearr_9509_9576[2] = inst_9387);
(statearr_9509_9576[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 19))
{var inst_9363 = (state_9461[25]);var inst_9367 = cljs.core.chunk_first.call(null,inst_9363);var inst_9368 = cljs.core.chunk_rest.call(null,inst_9363);var inst_9369 = cljs.core.count.call(null,inst_9367);var inst_9343 = inst_9368;var inst_9344 = inst_9367;var inst_9345 = inst_9369;var inst_9346 = 0;var state_9461__$1 = (function (){var statearr_9510 = state_9461;(statearr_9510[14] = inst_9345);
(statearr_9510[15] = inst_9346);
(statearr_9510[16] = inst_9344);
(statearr_9510[17] = inst_9343);
return statearr_9510;
})();var statearr_9511_9577 = state_9461__$1;(statearr_9511_9577[2] = null);
(statearr_9511_9577[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 20))
{var inst_9363 = (state_9461[25]);var inst_9373 = cljs.core.first.call(null,inst_9363);var inst_9374 = cljs.core.nth.call(null,inst_9373,0,null);var inst_9375 = cljs.core.nth.call(null,inst_9373,1,null);var state_9461__$1 = (function (){var statearr_9512 = state_9461;(statearr_9512[27] = inst_9374);
return statearr_9512;
})();if(cljs.core.truth_(inst_9375))
{var statearr_9513_9578 = state_9461__$1;(statearr_9513_9578[1] = 22);
} else
{var statearr_9514_9579 = state_9461__$1;(statearr_9514_9579[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 21))
{var inst_9384 = (state_9461[2]);var state_9461__$1 = state_9461;var statearr_9515_9580 = state_9461__$1;(statearr_9515_9580[2] = inst_9384);
(statearr_9515_9580[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 22))
{var inst_9374 = (state_9461[27]);var inst_9377 = cljs.core.async.close_BANG_.call(null,inst_9374);var state_9461__$1 = state_9461;var statearr_9516_9581 = state_9461__$1;(statearr_9516_9581[2] = inst_9377);
(statearr_9516_9581[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 23))
{var state_9461__$1 = state_9461;var statearr_9517_9582 = state_9461__$1;(statearr_9517_9582[2] = null);
(statearr_9517_9582[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 24))
{var inst_9363 = (state_9461[25]);var inst_9380 = (state_9461[2]);var inst_9381 = cljs.core.next.call(null,inst_9363);var inst_9343 = inst_9381;var inst_9344 = null;var inst_9345 = 0;var inst_9346 = 0;var state_9461__$1 = (function (){var statearr_9518 = state_9461;(statearr_9518[14] = inst_9345);
(statearr_9518[15] = inst_9346);
(statearr_9518[16] = inst_9344);
(statearr_9518[17] = inst_9343);
(statearr_9518[28] = inst_9380);
return statearr_9518;
})();var statearr_9519_9583 = state_9461__$1;(statearr_9519_9583[2] = null);
(statearr_9519_9583[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 25))
{var inst_9405 = (state_9461[12]);var inst_9404 = (state_9461[13]);var inst_9407 = (inst_9405 < inst_9404);var inst_9408 = inst_9407;var state_9461__$1 = state_9461;if(cljs.core.truth_(inst_9408))
{var statearr_9520_9584 = state_9461__$1;(statearr_9520_9584[1] = 27);
} else
{var statearr_9521_9585 = state_9461__$1;(statearr_9521_9585[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 26))
{var inst_9452 = (state_9461[2]);var state_9461__$1 = (function (){var statearr_9522 = state_9461;(statearr_9522[29] = inst_9452);
return statearr_9522;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9461__$1,42,dchan);
} else
{if((state_val_9462 === 27))
{var inst_9403 = (state_9461[11]);var inst_9405 = (state_9461[12]);var inst_9410 = cljs.core._nth.call(null,inst_9403,inst_9405);var state_9461__$1 = (function (){var statearr_9523 = state_9461;(statearr_9523[8] = inst_9410);
return statearr_9523;
})();var statearr_9524_9586 = state_9461__$1;(statearr_9524_9586[2] = null);
(statearr_9524_9586[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 28))
{var inst_9423 = (state_9461[9]);var inst_9402 = (state_9461[10]);var inst_9423__$1 = cljs.core.seq.call(null,inst_9402);var state_9461__$1 = (function (){var statearr_9528 = state_9461;(statearr_9528[9] = inst_9423__$1);
return statearr_9528;
})();if(inst_9423__$1)
{var statearr_9529_9587 = state_9461__$1;(statearr_9529_9587[1] = 33);
} else
{var statearr_9530_9588 = state_9461__$1;(statearr_9530_9588[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 29))
{var inst_9450 = (state_9461[2]);var state_9461__$1 = state_9461;var statearr_9531_9589 = state_9461__$1;(statearr_9531_9589[2] = inst_9450);
(statearr_9531_9589[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 30))
{var inst_9402 = (state_9461[10]);var inst_9403 = (state_9461[11]);var inst_9405 = (state_9461[12]);var inst_9404 = (state_9461[13]);var inst_9419 = (state_9461[2]);var inst_9420 = (inst_9405 + 1);var tmp9525 = inst_9402;var tmp9526 = inst_9403;var tmp9527 = inst_9404;var inst_9402__$1 = tmp9525;var inst_9403__$1 = tmp9526;var inst_9404__$1 = tmp9527;var inst_9405__$1 = inst_9420;var state_9461__$1 = (function (){var statearr_9532 = state_9461;(statearr_9532[30] = inst_9419);
(statearr_9532[10] = inst_9402__$1);
(statearr_9532[11] = inst_9403__$1);
(statearr_9532[12] = inst_9405__$1);
(statearr_9532[13] = inst_9404__$1);
return statearr_9532;
})();var statearr_9533_9590 = state_9461__$1;(statearr_9533_9590[2] = null);
(statearr_9533_9590[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9462 === 31))
{var inst_9410 = (state_9461[8]);var inst_9411 = (state_9461[2]);var inst_9412 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_9413 = cljs.core.async.untap_STAR_.call(null,m,inst_9410);var state_9461__$1 = (function (){var statearr_9534 = state_9461;(statearr_9534[31] = inst_9411);
(statearr_9534[32] = inst_9412);
return statearr_9534;
})();var statearr_9535_9591 = state_9461__$1;(statearr_9535_9591[2] = inst_9413);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9461__$1);
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
var state_machine__5511__auto____0 = (function (){var statearr_9539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9539[0] = state_machine__5511__auto__);
(statearr_9539[1] = 1);
return statearr_9539;
});
var state_machine__5511__auto____1 = (function (state_9461){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_9461);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e9540){if((e9540 instanceof Object))
{var ex__5514__auto__ = e9540;var statearr_9541_9592 = state_9461;(statearr_9541_9592[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9461);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9540;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9593 = state_9461;
state_9461 = G__9593;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_9461){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_9461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_9542 = f__5526__auto__.call(null);(statearr_9542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___9543);
return statearr_9542;
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
cljs.core.async.Mix = (function (){var obj9595 = {};return obj9595;
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
;var m = (function (){if(typeof cljs.core.async.t9705 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9705 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta9706){
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
this.meta9706 = meta9706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9705.cljs$lang$type = true;
cljs.core.async.t9705.cljs$lang$ctorStr = "cljs.core.async/t9705";
cljs.core.async.t9705.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9705");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9705.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t9705.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9705.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9705.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9705.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9705.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9705.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t9705.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9705.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9707){var self__ = this;
var _9707__$1 = this;return self__.meta9706;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9707,meta9706__$1){var self__ = this;
var _9707__$1 = this;return (new cljs.core.async.t9705(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta9706__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t9705 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t9705(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta9706){return (new cljs.core.async.t9705(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta9706));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t9705(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5525__auto___9814 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_9772){var state_val_9773 = (state_9772[1]);if((state_val_9773 === 1))
{var inst_9711 = (state_9772[7]);var inst_9711__$1 = calc_state.call(null);var inst_9712 = cljs.core.seq_QMARK_.call(null,inst_9711__$1);var state_9772__$1 = (function (){var statearr_9774 = state_9772;(statearr_9774[7] = inst_9711__$1);
return statearr_9774;
})();if(inst_9712)
{var statearr_9775_9815 = state_9772__$1;(statearr_9775_9815[1] = 2);
} else
{var statearr_9776_9816 = state_9772__$1;(statearr_9776_9816[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 2))
{var inst_9711 = (state_9772[7]);var inst_9714 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9711);var state_9772__$1 = state_9772;var statearr_9777_9817 = state_9772__$1;(statearr_9777_9817[2] = inst_9714);
(statearr_9777_9817[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 3))
{var inst_9711 = (state_9772[7]);var state_9772__$1 = state_9772;var statearr_9778_9818 = state_9772__$1;(statearr_9778_9818[2] = inst_9711);
(statearr_9778_9818[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 4))
{var inst_9711 = (state_9772[7]);var inst_9717 = (state_9772[2]);var inst_9718 = cljs.core.get.call(null,inst_9717,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_9719 = cljs.core.get.call(null,inst_9717,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_9720 = cljs.core.get.call(null,inst_9717,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_9721 = inst_9711;var state_9772__$1 = (function (){var statearr_9779 = state_9772;(statearr_9779[8] = inst_9721);
(statearr_9779[9] = inst_9720);
(statearr_9779[10] = inst_9718);
(statearr_9779[11] = inst_9719);
return statearr_9779;
})();var statearr_9780_9819 = state_9772__$1;(statearr_9780_9819[2] = null);
(statearr_9780_9819[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 5))
{var inst_9721 = (state_9772[8]);var inst_9724 = cljs.core.seq_QMARK_.call(null,inst_9721);var state_9772__$1 = state_9772;if(inst_9724)
{var statearr_9781_9820 = state_9772__$1;(statearr_9781_9820[1] = 7);
} else
{var statearr_9782_9821 = state_9772__$1;(statearr_9782_9821[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 6))
{var inst_9770 = (state_9772[2]);var state_9772__$1 = state_9772;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9772__$1,inst_9770);
} else
{if((state_val_9773 === 7))
{var inst_9721 = (state_9772[8]);var inst_9726 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9721);var state_9772__$1 = state_9772;var statearr_9783_9822 = state_9772__$1;(statearr_9783_9822[2] = inst_9726);
(statearr_9783_9822[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 8))
{var inst_9721 = (state_9772[8]);var state_9772__$1 = state_9772;var statearr_9784_9823 = state_9772__$1;(statearr_9784_9823[2] = inst_9721);
(statearr_9784_9823[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 9))
{var inst_9729 = (state_9772[12]);var inst_9729__$1 = (state_9772[2]);var inst_9730 = cljs.core.get.call(null,inst_9729__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_9731 = cljs.core.get.call(null,inst_9729__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_9732 = cljs.core.get.call(null,inst_9729__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_9772__$1 = (function (){var statearr_9785 = state_9772;(statearr_9785[12] = inst_9729__$1);
(statearr_9785[13] = inst_9732);
(statearr_9785[14] = inst_9731);
return statearr_9785;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_9772__$1,10,inst_9730);
} else
{if((state_val_9773 === 10))
{var inst_9737 = (state_9772[15]);var inst_9736 = (state_9772[16]);var inst_9735 = (state_9772[2]);var inst_9736__$1 = cljs.core.nth.call(null,inst_9735,0,null);var inst_9737__$1 = cljs.core.nth.call(null,inst_9735,1,null);var inst_9738 = (inst_9736__$1 == null);var inst_9739 = cljs.core._EQ_.call(null,inst_9737__$1,change);var inst_9740 = (inst_9738) || (inst_9739);var state_9772__$1 = (function (){var statearr_9786 = state_9772;(statearr_9786[15] = inst_9737__$1);
(statearr_9786[16] = inst_9736__$1);
return statearr_9786;
})();if(cljs.core.truth_(inst_9740))
{var statearr_9787_9824 = state_9772__$1;(statearr_9787_9824[1] = 11);
} else
{var statearr_9788_9825 = state_9772__$1;(statearr_9788_9825[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 11))
{var inst_9736 = (state_9772[16]);var inst_9742 = (inst_9736 == null);var state_9772__$1 = state_9772;if(cljs.core.truth_(inst_9742))
{var statearr_9789_9826 = state_9772__$1;(statearr_9789_9826[1] = 14);
} else
{var statearr_9790_9827 = state_9772__$1;(statearr_9790_9827[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 12))
{var inst_9751 = (state_9772[17]);var inst_9737 = (state_9772[15]);var inst_9732 = (state_9772[13]);var inst_9751__$1 = inst_9732.call(null,inst_9737);var state_9772__$1 = (function (){var statearr_9791 = state_9772;(statearr_9791[17] = inst_9751__$1);
return statearr_9791;
})();if(cljs.core.truth_(inst_9751__$1))
{var statearr_9792_9828 = state_9772__$1;(statearr_9792_9828[1] = 17);
} else
{var statearr_9793_9829 = state_9772__$1;(statearr_9793_9829[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 13))
{var inst_9768 = (state_9772[2]);var state_9772__$1 = state_9772;var statearr_9794_9830 = state_9772__$1;(statearr_9794_9830[2] = inst_9768);
(statearr_9794_9830[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 14))
{var inst_9737 = (state_9772[15]);var inst_9744 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_9737);var state_9772__$1 = state_9772;var statearr_9795_9831 = state_9772__$1;(statearr_9795_9831[2] = inst_9744);
(statearr_9795_9831[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 15))
{var state_9772__$1 = state_9772;var statearr_9796_9832 = state_9772__$1;(statearr_9796_9832[2] = null);
(statearr_9796_9832[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 16))
{var inst_9747 = (state_9772[2]);var inst_9748 = calc_state.call(null);var inst_9721 = inst_9748;var state_9772__$1 = (function (){var statearr_9797 = state_9772;(statearr_9797[18] = inst_9747);
(statearr_9797[8] = inst_9721);
return statearr_9797;
})();var statearr_9798_9833 = state_9772__$1;(statearr_9798_9833[2] = null);
(statearr_9798_9833[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 17))
{var inst_9751 = (state_9772[17]);var state_9772__$1 = state_9772;var statearr_9799_9834 = state_9772__$1;(statearr_9799_9834[2] = inst_9751);
(statearr_9799_9834[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 18))
{var inst_9737 = (state_9772[15]);var inst_9732 = (state_9772[13]);var inst_9731 = (state_9772[14]);var inst_9754 = cljs.core.empty_QMARK_.call(null,inst_9732);var inst_9755 = inst_9731.call(null,inst_9737);var inst_9756 = cljs.core.not.call(null,inst_9755);var inst_9757 = (inst_9754) && (inst_9756);var state_9772__$1 = state_9772;var statearr_9800_9835 = state_9772__$1;(statearr_9800_9835[2] = inst_9757);
(statearr_9800_9835[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 19))
{var inst_9759 = (state_9772[2]);var state_9772__$1 = state_9772;if(cljs.core.truth_(inst_9759))
{var statearr_9801_9836 = state_9772__$1;(statearr_9801_9836[1] = 20);
} else
{var statearr_9802_9837 = state_9772__$1;(statearr_9802_9837[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 20))
{var inst_9736 = (state_9772[16]);var state_9772__$1 = state_9772;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9772__$1,23,out,inst_9736);
} else
{if((state_val_9773 === 21))
{var state_9772__$1 = state_9772;var statearr_9803_9838 = state_9772__$1;(statearr_9803_9838[2] = null);
(statearr_9803_9838[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 22))
{var inst_9729 = (state_9772[12]);var inst_9765 = (state_9772[2]);var inst_9721 = inst_9729;var state_9772__$1 = (function (){var statearr_9804 = state_9772;(statearr_9804[8] = inst_9721);
(statearr_9804[19] = inst_9765);
return statearr_9804;
})();var statearr_9805_9839 = state_9772__$1;(statearr_9805_9839[2] = null);
(statearr_9805_9839[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9773 === 23))
{var inst_9762 = (state_9772[2]);var state_9772__$1 = state_9772;var statearr_9806_9840 = state_9772__$1;(statearr_9806_9840[2] = inst_9762);
(statearr_9806_9840[1] = 22);
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
var state_machine__5511__auto____0 = (function (){var statearr_9810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9810[0] = state_machine__5511__auto__);
(statearr_9810[1] = 1);
return statearr_9810;
});
var state_machine__5511__auto____1 = (function (state_9772){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_9772);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e9811){if((e9811 instanceof Object))
{var ex__5514__auto__ = e9811;var statearr_9812_9841 = state_9772;(statearr_9812_9841[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9772);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9811;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9842 = state_9772;
state_9772 = G__9842;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_9772){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_9772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_9813 = f__5526__auto__.call(null);(statearr_9813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___9814);
return statearr_9813;
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
cljs.core.async.Pub = (function (){var obj9844 = {};return obj9844;
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
return (function (p1__9845_SHARP_){if(cljs.core.truth_(p1__9845_SHARP_.call(null,topic)))
{return p1__9845_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__9845_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t9970 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9970 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta9971){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta9971 = meta9971;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9970.cljs$lang$type = true;
cljs.core.async.t9970.cljs$lang$ctorStr = "cljs.core.async/t9970";
cljs.core.async.t9970.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9970");
});})(mults,ensure_mult))
;
cljs.core.async.t9970.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t9970.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t9970.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t9970.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t9970.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t9970.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t9970.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t9970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_9972){var self__ = this;
var _9972__$1 = this;return self__.meta9971;
});})(mults,ensure_mult))
;
cljs.core.async.t9970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_9972,meta9971__$1){var self__ = this;
var _9972__$1 = this;return (new cljs.core.async.t9970(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta9971__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t9970 = ((function (mults,ensure_mult){
return (function __GT_t9970(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta9971){return (new cljs.core.async.t9970(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta9971));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t9970(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5525__auto___10094 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_10046){var state_val_10047 = (state_10046[1]);if((state_val_10047 === 1))
{var state_10046__$1 = state_10046;var statearr_10048_10095 = state_10046__$1;(statearr_10048_10095[2] = null);
(statearr_10048_10095[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 2))
{var state_10046__$1 = state_10046;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10046__$1,4,ch);
} else
{if((state_val_10047 === 3))
{var inst_10044 = (state_10046[2]);var state_10046__$1 = state_10046;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10046__$1,inst_10044);
} else
{if((state_val_10047 === 4))
{var inst_9975 = (state_10046[7]);var inst_9975__$1 = (state_10046[2]);var inst_9976 = (inst_9975__$1 == null);var state_10046__$1 = (function (){var statearr_10049 = state_10046;(statearr_10049[7] = inst_9975__$1);
return statearr_10049;
})();if(cljs.core.truth_(inst_9976))
{var statearr_10050_10096 = state_10046__$1;(statearr_10050_10096[1] = 5);
} else
{var statearr_10051_10097 = state_10046__$1;(statearr_10051_10097[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 5))
{var inst_9982 = cljs.core.deref.call(null,mults);var inst_9983 = cljs.core.vals.call(null,inst_9982);var inst_9984 = cljs.core.seq.call(null,inst_9983);var inst_9985 = inst_9984;var inst_9986 = null;var inst_9987 = 0;var inst_9988 = 0;var state_10046__$1 = (function (){var statearr_10052 = state_10046;(statearr_10052[8] = inst_9985);
(statearr_10052[9] = inst_9986);
(statearr_10052[10] = inst_9988);
(statearr_10052[11] = inst_9987);
return statearr_10052;
})();var statearr_10053_10098 = state_10046__$1;(statearr_10053_10098[2] = null);
(statearr_10053_10098[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 6))
{var inst_9975 = (state_10046[7]);var inst_10025 = (state_10046[12]);var inst_10023 = (state_10046[13]);var inst_10023__$1 = topic_fn.call(null,inst_9975);var inst_10024 = cljs.core.deref.call(null,mults);var inst_10025__$1 = cljs.core.get.call(null,inst_10024,inst_10023__$1);var state_10046__$1 = (function (){var statearr_10054 = state_10046;(statearr_10054[12] = inst_10025__$1);
(statearr_10054[13] = inst_10023__$1);
return statearr_10054;
})();if(cljs.core.truth_(inst_10025__$1))
{var statearr_10055_10099 = state_10046__$1;(statearr_10055_10099[1] = 19);
} else
{var statearr_10056_10100 = state_10046__$1;(statearr_10056_10100[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 7))
{var inst_10042 = (state_10046[2]);var state_10046__$1 = state_10046;var statearr_10057_10101 = state_10046__$1;(statearr_10057_10101[2] = inst_10042);
(statearr_10057_10101[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 8))
{var inst_9988 = (state_10046[10]);var inst_9987 = (state_10046[11]);var inst_9990 = (inst_9988 < inst_9987);var inst_9991 = inst_9990;var state_10046__$1 = state_10046;if(cljs.core.truth_(inst_9991))
{var statearr_10061_10102 = state_10046__$1;(statearr_10061_10102[1] = 10);
} else
{var statearr_10062_10103 = state_10046__$1;(statearr_10062_10103[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 9))
{var inst_10021 = (state_10046[2]);var state_10046__$1 = state_10046;var statearr_10063_10104 = state_10046__$1;(statearr_10063_10104[2] = inst_10021);
(statearr_10063_10104[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 10))
{var inst_9985 = (state_10046[8]);var inst_9986 = (state_10046[9]);var inst_9988 = (state_10046[10]);var inst_9987 = (state_10046[11]);var inst_9993 = cljs.core._nth.call(null,inst_9986,inst_9988);var inst_9994 = cljs.core.async.muxch_STAR_.call(null,inst_9993);var inst_9995 = cljs.core.async.close_BANG_.call(null,inst_9994);var inst_9996 = (inst_9988 + 1);var tmp10058 = inst_9985;var tmp10059 = inst_9986;var tmp10060 = inst_9987;var inst_9985__$1 = tmp10058;var inst_9986__$1 = tmp10059;var inst_9987__$1 = tmp10060;var inst_9988__$1 = inst_9996;var state_10046__$1 = (function (){var statearr_10064 = state_10046;(statearr_10064[8] = inst_9985__$1);
(statearr_10064[9] = inst_9986__$1);
(statearr_10064[14] = inst_9995);
(statearr_10064[10] = inst_9988__$1);
(statearr_10064[11] = inst_9987__$1);
return statearr_10064;
})();var statearr_10065_10105 = state_10046__$1;(statearr_10065_10105[2] = null);
(statearr_10065_10105[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 11))
{var inst_9985 = (state_10046[8]);var inst_9999 = (state_10046[15]);var inst_9999__$1 = cljs.core.seq.call(null,inst_9985);var state_10046__$1 = (function (){var statearr_10066 = state_10046;(statearr_10066[15] = inst_9999__$1);
return statearr_10066;
})();if(inst_9999__$1)
{var statearr_10067_10106 = state_10046__$1;(statearr_10067_10106[1] = 13);
} else
{var statearr_10068_10107 = state_10046__$1;(statearr_10068_10107[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 12))
{var inst_10019 = (state_10046[2]);var state_10046__$1 = state_10046;var statearr_10069_10108 = state_10046__$1;(statearr_10069_10108[2] = inst_10019);
(statearr_10069_10108[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 13))
{var inst_9999 = (state_10046[15]);var inst_10001 = cljs.core.chunked_seq_QMARK_.call(null,inst_9999);var state_10046__$1 = state_10046;if(inst_10001)
{var statearr_10070_10109 = state_10046__$1;(statearr_10070_10109[1] = 16);
} else
{var statearr_10071_10110 = state_10046__$1;(statearr_10071_10110[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 14))
{var state_10046__$1 = state_10046;var statearr_10072_10111 = state_10046__$1;(statearr_10072_10111[2] = null);
(statearr_10072_10111[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 15))
{var inst_10017 = (state_10046[2]);var state_10046__$1 = state_10046;var statearr_10073_10112 = state_10046__$1;(statearr_10073_10112[2] = inst_10017);
(statearr_10073_10112[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 16))
{var inst_9999 = (state_10046[15]);var inst_10003 = cljs.core.chunk_first.call(null,inst_9999);var inst_10004 = cljs.core.chunk_rest.call(null,inst_9999);var inst_10005 = cljs.core.count.call(null,inst_10003);var inst_9985 = inst_10004;var inst_9986 = inst_10003;var inst_9987 = inst_10005;var inst_9988 = 0;var state_10046__$1 = (function (){var statearr_10074 = state_10046;(statearr_10074[8] = inst_9985);
(statearr_10074[9] = inst_9986);
(statearr_10074[10] = inst_9988);
(statearr_10074[11] = inst_9987);
return statearr_10074;
})();var statearr_10075_10113 = state_10046__$1;(statearr_10075_10113[2] = null);
(statearr_10075_10113[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 17))
{var inst_9999 = (state_10046[15]);var inst_10008 = cljs.core.first.call(null,inst_9999);var inst_10009 = cljs.core.async.muxch_STAR_.call(null,inst_10008);var inst_10010 = cljs.core.async.close_BANG_.call(null,inst_10009);var inst_10011 = cljs.core.next.call(null,inst_9999);var inst_9985 = inst_10011;var inst_9986 = null;var inst_9987 = 0;var inst_9988 = 0;var state_10046__$1 = (function (){var statearr_10076 = state_10046;(statearr_10076[8] = inst_9985);
(statearr_10076[9] = inst_9986);
(statearr_10076[16] = inst_10010);
(statearr_10076[10] = inst_9988);
(statearr_10076[11] = inst_9987);
return statearr_10076;
})();var statearr_10077_10114 = state_10046__$1;(statearr_10077_10114[2] = null);
(statearr_10077_10114[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 18))
{var inst_10014 = (state_10046[2]);var state_10046__$1 = state_10046;var statearr_10078_10115 = state_10046__$1;(statearr_10078_10115[2] = inst_10014);
(statearr_10078_10115[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 19))
{var state_10046__$1 = state_10046;var statearr_10079_10116 = state_10046__$1;(statearr_10079_10116[2] = null);
(statearr_10079_10116[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 20))
{var state_10046__$1 = state_10046;var statearr_10080_10117 = state_10046__$1;(statearr_10080_10117[2] = null);
(statearr_10080_10117[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 21))
{var inst_10039 = (state_10046[2]);var state_10046__$1 = (function (){var statearr_10081 = state_10046;(statearr_10081[17] = inst_10039);
return statearr_10081;
})();var statearr_10082_10118 = state_10046__$1;(statearr_10082_10118[2] = null);
(statearr_10082_10118[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 22))
{var inst_10036 = (state_10046[2]);var state_10046__$1 = state_10046;var statearr_10083_10119 = state_10046__$1;(statearr_10083_10119[2] = inst_10036);
(statearr_10083_10119[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 23))
{var inst_10023 = (state_10046[13]);var inst_10027 = (state_10046[2]);var inst_10028 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10023);var state_10046__$1 = (function (){var statearr_10084 = state_10046;(statearr_10084[18] = inst_10027);
return statearr_10084;
})();var statearr_10085_10120 = state_10046__$1;(statearr_10085_10120[2] = inst_10028);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10046__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10047 === 24))
{var inst_9975 = (state_10046[7]);var inst_10025 = (state_10046[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10046,23,Object,null,22);var inst_10032 = cljs.core.async.muxch_STAR_.call(null,inst_10025);var state_10046__$1 = state_10046;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10046__$1,25,inst_10032,inst_9975);
} else
{if((state_val_10047 === 25))
{var inst_10034 = (state_10046[2]);var state_10046__$1 = state_10046;var statearr_10086_10121 = state_10046__$1;(statearr_10086_10121[2] = inst_10034);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10046__$1);
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
var state_machine__5511__auto____0 = (function (){var statearr_10090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10090[0] = state_machine__5511__auto__);
(statearr_10090[1] = 1);
return statearr_10090;
});
var state_machine__5511__auto____1 = (function (state_10046){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_10046);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e10091){if((e10091 instanceof Object))
{var ex__5514__auto__ = e10091;var statearr_10092_10122 = state_10046;(statearr_10092_10122[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10046);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10091;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10123 = state_10046;
state_10046 = G__10123;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_10046){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_10046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_10093 = f__5526__auto__.call(null);(statearr_10093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___10094);
return statearr_10093;
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
,cljs.core.range.call(null,cnt));var c__5525__auto___10260 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_10230){var state_val_10231 = (state_10230[1]);if((state_val_10231 === 1))
{var state_10230__$1 = state_10230;var statearr_10232_10261 = state_10230__$1;(statearr_10232_10261[2] = null);
(statearr_10232_10261[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10231 === 2))
{var inst_10193 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_10194 = 0;var state_10230__$1 = (function (){var statearr_10233 = state_10230;(statearr_10233[7] = inst_10194);
(statearr_10233[8] = inst_10193);
return statearr_10233;
})();var statearr_10234_10262 = state_10230__$1;(statearr_10234_10262[2] = null);
(statearr_10234_10262[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10231 === 3))
{var inst_10228 = (state_10230[2]);var state_10230__$1 = state_10230;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10230__$1,inst_10228);
} else
{if((state_val_10231 === 4))
{var inst_10194 = (state_10230[7]);var inst_10196 = (inst_10194 < cnt);var state_10230__$1 = state_10230;if(cljs.core.truth_(inst_10196))
{var statearr_10235_10263 = state_10230__$1;(statearr_10235_10263[1] = 6);
} else
{var statearr_10236_10264 = state_10230__$1;(statearr_10236_10264[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10231 === 5))
{var inst_10214 = (state_10230[2]);var state_10230__$1 = (function (){var statearr_10237 = state_10230;(statearr_10237[9] = inst_10214);
return statearr_10237;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10230__$1,12,dchan);
} else
{if((state_val_10231 === 6))
{var state_10230__$1 = state_10230;var statearr_10238_10265 = state_10230__$1;(statearr_10238_10265[2] = null);
(statearr_10238_10265[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10231 === 7))
{var state_10230__$1 = state_10230;var statearr_10239_10266 = state_10230__$1;(statearr_10239_10266[2] = null);
(statearr_10239_10266[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10231 === 8))
{var inst_10212 = (state_10230[2]);var state_10230__$1 = state_10230;var statearr_10240_10267 = state_10230__$1;(statearr_10240_10267[2] = inst_10212);
(statearr_10240_10267[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10231 === 9))
{var inst_10194 = (state_10230[7]);var inst_10207 = (state_10230[2]);var inst_10208 = (inst_10194 + 1);var inst_10194__$1 = inst_10208;var state_10230__$1 = (function (){var statearr_10241 = state_10230;(statearr_10241[10] = inst_10207);
(statearr_10241[7] = inst_10194__$1);
return statearr_10241;
})();var statearr_10242_10268 = state_10230__$1;(statearr_10242_10268[2] = null);
(statearr_10242_10268[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10231 === 10))
{var inst_10198 = (state_10230[2]);var inst_10199 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_10230__$1 = (function (){var statearr_10243 = state_10230;(statearr_10243[11] = inst_10198);
return statearr_10243;
})();var statearr_10244_10269 = state_10230__$1;(statearr_10244_10269[2] = inst_10199);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10230__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10231 === 11))
{var inst_10194 = (state_10230[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10230,10,Object,null,9);var inst_10203 = chs__$1.call(null,inst_10194);var inst_10204 = done.call(null,inst_10194);var inst_10205 = cljs.core.async.take_BANG_.call(null,inst_10203,inst_10204);var state_10230__$1 = state_10230;var statearr_10245_10270 = state_10230__$1;(statearr_10245_10270[2] = inst_10205);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10230__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10231 === 12))
{var inst_10216 = (state_10230[12]);var inst_10216__$1 = (state_10230[2]);var inst_10217 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10216__$1);var state_10230__$1 = (function (){var statearr_10246 = state_10230;(statearr_10246[12] = inst_10216__$1);
return statearr_10246;
})();if(cljs.core.truth_(inst_10217))
{var statearr_10247_10271 = state_10230__$1;(statearr_10247_10271[1] = 13);
} else
{var statearr_10248_10272 = state_10230__$1;(statearr_10248_10272[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10231 === 13))
{var inst_10219 = cljs.core.async.close_BANG_.call(null,out);var state_10230__$1 = state_10230;var statearr_10249_10273 = state_10230__$1;(statearr_10249_10273[2] = inst_10219);
(statearr_10249_10273[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10231 === 14))
{var inst_10216 = (state_10230[12]);var inst_10221 = cljs.core.apply.call(null,f,inst_10216);var state_10230__$1 = state_10230;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10230__$1,16,out,inst_10221);
} else
{if((state_val_10231 === 15))
{var inst_10226 = (state_10230[2]);var state_10230__$1 = state_10230;var statearr_10250_10274 = state_10230__$1;(statearr_10250_10274[2] = inst_10226);
(statearr_10250_10274[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10231 === 16))
{var inst_10223 = (state_10230[2]);var state_10230__$1 = (function (){var statearr_10251 = state_10230;(statearr_10251[13] = inst_10223);
return statearr_10251;
})();var statearr_10252_10275 = state_10230__$1;(statearr_10252_10275[2] = null);
(statearr_10252_10275[1] = 2);
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
var state_machine__5511__auto____0 = (function (){var statearr_10256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10256[0] = state_machine__5511__auto__);
(statearr_10256[1] = 1);
return statearr_10256;
});
var state_machine__5511__auto____1 = (function (state_10230){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_10230);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e10257){if((e10257 instanceof Object))
{var ex__5514__auto__ = e10257;var statearr_10258_10276 = state_10230;(statearr_10258_10276[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10230);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10257;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10277 = state_10230;
state_10230 = G__10277;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_10230){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_10230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_10259 = f__5526__auto__.call(null);(statearr_10259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___10260);
return statearr_10259;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5525__auto___10385 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_10361){var state_val_10362 = (state_10361[1]);if((state_val_10362 === 1))
{var inst_10332 = cljs.core.vec.call(null,chs);var inst_10333 = inst_10332;var state_10361__$1 = (function (){var statearr_10363 = state_10361;(statearr_10363[7] = inst_10333);
return statearr_10363;
})();var statearr_10364_10386 = state_10361__$1;(statearr_10364_10386[2] = null);
(statearr_10364_10386[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 2))
{var inst_10333 = (state_10361[7]);var inst_10335 = cljs.core.count.call(null,inst_10333);var inst_10336 = (inst_10335 > 0);var state_10361__$1 = state_10361;if(cljs.core.truth_(inst_10336))
{var statearr_10365_10387 = state_10361__$1;(statearr_10365_10387[1] = 4);
} else
{var statearr_10366_10388 = state_10361__$1;(statearr_10366_10388[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 3))
{var inst_10359 = (state_10361[2]);var state_10361__$1 = state_10361;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10361__$1,inst_10359);
} else
{if((state_val_10362 === 4))
{var inst_10333 = (state_10361[7]);var state_10361__$1 = state_10361;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10361__$1,7,inst_10333);
} else
{if((state_val_10362 === 5))
{var inst_10355 = cljs.core.async.close_BANG_.call(null,out);var state_10361__$1 = state_10361;var statearr_10367_10389 = state_10361__$1;(statearr_10367_10389[2] = inst_10355);
(statearr_10367_10389[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 6))
{var inst_10357 = (state_10361[2]);var state_10361__$1 = state_10361;var statearr_10368_10390 = state_10361__$1;(statearr_10368_10390[2] = inst_10357);
(statearr_10368_10390[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 7))
{var inst_10340 = (state_10361[8]);var inst_10341 = (state_10361[9]);var inst_10340__$1 = (state_10361[2]);var inst_10341__$1 = cljs.core.nth.call(null,inst_10340__$1,0,null);var inst_10342 = cljs.core.nth.call(null,inst_10340__$1,1,null);var inst_10343 = (inst_10341__$1 == null);var state_10361__$1 = (function (){var statearr_10369 = state_10361;(statearr_10369[8] = inst_10340__$1);
(statearr_10369[10] = inst_10342);
(statearr_10369[9] = inst_10341__$1);
return statearr_10369;
})();if(cljs.core.truth_(inst_10343))
{var statearr_10370_10391 = state_10361__$1;(statearr_10370_10391[1] = 8);
} else
{var statearr_10371_10392 = state_10361__$1;(statearr_10371_10392[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 8))
{var inst_10333 = (state_10361[7]);var inst_10340 = (state_10361[8]);var inst_10342 = (state_10361[10]);var inst_10341 = (state_10361[9]);var inst_10345 = (function (){var c = inst_10342;var v = inst_10341;var vec__10338 = inst_10340;var cs = inst_10333;return ((function (c,v,vec__10338,cs,inst_10333,inst_10340,inst_10342,inst_10341,state_val_10362){
return (function (p1__10278_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__10278_SHARP_);
});
;})(c,v,vec__10338,cs,inst_10333,inst_10340,inst_10342,inst_10341,state_val_10362))
})();var inst_10346 = cljs.core.filterv.call(null,inst_10345,inst_10333);var inst_10333__$1 = inst_10346;var state_10361__$1 = (function (){var statearr_10372 = state_10361;(statearr_10372[7] = inst_10333__$1);
return statearr_10372;
})();var statearr_10373_10393 = state_10361__$1;(statearr_10373_10393[2] = null);
(statearr_10373_10393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 9))
{var inst_10341 = (state_10361[9]);var state_10361__$1 = state_10361;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10361__$1,11,out,inst_10341);
} else
{if((state_val_10362 === 10))
{var inst_10353 = (state_10361[2]);var state_10361__$1 = state_10361;var statearr_10375_10394 = state_10361__$1;(statearr_10375_10394[2] = inst_10353);
(statearr_10375_10394[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10362 === 11))
{var inst_10333 = (state_10361[7]);var inst_10350 = (state_10361[2]);var tmp10374 = inst_10333;var inst_10333__$1 = tmp10374;var state_10361__$1 = (function (){var statearr_10376 = state_10361;(statearr_10376[7] = inst_10333__$1);
(statearr_10376[11] = inst_10350);
return statearr_10376;
})();var statearr_10377_10395 = state_10361__$1;(statearr_10377_10395[2] = null);
(statearr_10377_10395[1] = 2);
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
var state_machine__5511__auto____0 = (function (){var statearr_10381 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10381[0] = state_machine__5511__auto__);
(statearr_10381[1] = 1);
return statearr_10381;
});
var state_machine__5511__auto____1 = (function (state_10361){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_10361);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e10382){if((e10382 instanceof Object))
{var ex__5514__auto__ = e10382;var statearr_10383_10396 = state_10361;(statearr_10383_10396[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10361);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10382;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10397 = state_10361;
state_10361 = G__10397;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_10361){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_10361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_10384 = f__5526__auto__.call(null);(statearr_10384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___10385);
return statearr_10384;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5525__auto___10490 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_10467){var state_val_10468 = (state_10467[1]);if((state_val_10468 === 1))
{var inst_10444 = 0;var state_10467__$1 = (function (){var statearr_10469 = state_10467;(statearr_10469[7] = inst_10444);
return statearr_10469;
})();var statearr_10470_10491 = state_10467__$1;(statearr_10470_10491[2] = null);
(statearr_10470_10491[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10468 === 2))
{var inst_10444 = (state_10467[7]);var inst_10446 = (inst_10444 < n);var state_10467__$1 = state_10467;if(cljs.core.truth_(inst_10446))
{var statearr_10471_10492 = state_10467__$1;(statearr_10471_10492[1] = 4);
} else
{var statearr_10472_10493 = state_10467__$1;(statearr_10472_10493[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10468 === 3))
{var inst_10464 = (state_10467[2]);var inst_10465 = cljs.core.async.close_BANG_.call(null,out);var state_10467__$1 = (function (){var statearr_10473 = state_10467;(statearr_10473[8] = inst_10464);
return statearr_10473;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10467__$1,inst_10465);
} else
{if((state_val_10468 === 4))
{var state_10467__$1 = state_10467;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10467__$1,7,ch);
} else
{if((state_val_10468 === 5))
{var state_10467__$1 = state_10467;var statearr_10474_10494 = state_10467__$1;(statearr_10474_10494[2] = null);
(statearr_10474_10494[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10468 === 6))
{var inst_10462 = (state_10467[2]);var state_10467__$1 = state_10467;var statearr_10475_10495 = state_10467__$1;(statearr_10475_10495[2] = inst_10462);
(statearr_10475_10495[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10468 === 7))
{var inst_10449 = (state_10467[9]);var inst_10449__$1 = (state_10467[2]);var inst_10450 = (inst_10449__$1 == null);var inst_10451 = cljs.core.not.call(null,inst_10450);var state_10467__$1 = (function (){var statearr_10476 = state_10467;(statearr_10476[9] = inst_10449__$1);
return statearr_10476;
})();if(inst_10451)
{var statearr_10477_10496 = state_10467__$1;(statearr_10477_10496[1] = 8);
} else
{var statearr_10478_10497 = state_10467__$1;(statearr_10478_10497[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10468 === 8))
{var inst_10449 = (state_10467[9]);var state_10467__$1 = state_10467;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10467__$1,11,out,inst_10449);
} else
{if((state_val_10468 === 9))
{var state_10467__$1 = state_10467;var statearr_10479_10498 = state_10467__$1;(statearr_10479_10498[2] = null);
(statearr_10479_10498[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10468 === 10))
{var inst_10459 = (state_10467[2]);var state_10467__$1 = state_10467;var statearr_10480_10499 = state_10467__$1;(statearr_10480_10499[2] = inst_10459);
(statearr_10480_10499[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10468 === 11))
{var inst_10444 = (state_10467[7]);var inst_10454 = (state_10467[2]);var inst_10455 = (inst_10444 + 1);var inst_10444__$1 = inst_10455;var state_10467__$1 = (function (){var statearr_10481 = state_10467;(statearr_10481[7] = inst_10444__$1);
(statearr_10481[10] = inst_10454);
return statearr_10481;
})();var statearr_10482_10500 = state_10467__$1;(statearr_10482_10500[2] = null);
(statearr_10482_10500[1] = 2);
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
var state_machine__5511__auto____0 = (function (){var statearr_10486 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10486[0] = state_machine__5511__auto__);
(statearr_10486[1] = 1);
return statearr_10486;
});
var state_machine__5511__auto____1 = (function (state_10467){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_10467);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e10487){if((e10487 instanceof Object))
{var ex__5514__auto__ = e10487;var statearr_10488_10501 = state_10467;(statearr_10488_10501[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10467);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10487;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10502 = state_10467;
state_10467 = G__10502;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_10467){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_10467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_10489 = f__5526__auto__.call(null);(statearr_10489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___10490);
return statearr_10489;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5525__auto___10599 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_10574){var state_val_10575 = (state_10574[1]);if((state_val_10575 === 1))
{var inst_10551 = null;var state_10574__$1 = (function (){var statearr_10576 = state_10574;(statearr_10576[7] = inst_10551);
return statearr_10576;
})();var statearr_10577_10600 = state_10574__$1;(statearr_10577_10600[2] = null);
(statearr_10577_10600[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10575 === 2))
{var state_10574__$1 = state_10574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10574__$1,4,ch);
} else
{if((state_val_10575 === 3))
{var inst_10571 = (state_10574[2]);var inst_10572 = cljs.core.async.close_BANG_.call(null,out);var state_10574__$1 = (function (){var statearr_10578 = state_10574;(statearr_10578[8] = inst_10571);
return statearr_10578;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10574__$1,inst_10572);
} else
{if((state_val_10575 === 4))
{var inst_10554 = (state_10574[9]);var inst_10554__$1 = (state_10574[2]);var inst_10555 = (inst_10554__$1 == null);var inst_10556 = cljs.core.not.call(null,inst_10555);var state_10574__$1 = (function (){var statearr_10579 = state_10574;(statearr_10579[9] = inst_10554__$1);
return statearr_10579;
})();if(inst_10556)
{var statearr_10580_10601 = state_10574__$1;(statearr_10580_10601[1] = 5);
} else
{var statearr_10581_10602 = state_10574__$1;(statearr_10581_10602[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10575 === 5))
{var inst_10554 = (state_10574[9]);var inst_10551 = (state_10574[7]);var inst_10558 = cljs.core._EQ_.call(null,inst_10554,inst_10551);var state_10574__$1 = state_10574;if(inst_10558)
{var statearr_10582_10603 = state_10574__$1;(statearr_10582_10603[1] = 8);
} else
{var statearr_10583_10604 = state_10574__$1;(statearr_10583_10604[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10575 === 6))
{var state_10574__$1 = state_10574;var statearr_10585_10605 = state_10574__$1;(statearr_10585_10605[2] = null);
(statearr_10585_10605[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10575 === 7))
{var inst_10569 = (state_10574[2]);var state_10574__$1 = state_10574;var statearr_10586_10606 = state_10574__$1;(statearr_10586_10606[2] = inst_10569);
(statearr_10586_10606[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10575 === 8))
{var inst_10551 = (state_10574[7]);var tmp10584 = inst_10551;var inst_10551__$1 = tmp10584;var state_10574__$1 = (function (){var statearr_10587 = state_10574;(statearr_10587[7] = inst_10551__$1);
return statearr_10587;
})();var statearr_10588_10607 = state_10574__$1;(statearr_10588_10607[2] = null);
(statearr_10588_10607[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10575 === 9))
{var inst_10554 = (state_10574[9]);var state_10574__$1 = state_10574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10574__$1,11,out,inst_10554);
} else
{if((state_val_10575 === 10))
{var inst_10566 = (state_10574[2]);var state_10574__$1 = state_10574;var statearr_10589_10608 = state_10574__$1;(statearr_10589_10608[2] = inst_10566);
(statearr_10589_10608[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10575 === 11))
{var inst_10554 = (state_10574[9]);var inst_10563 = (state_10574[2]);var inst_10551 = inst_10554;var state_10574__$1 = (function (){var statearr_10590 = state_10574;(statearr_10590[10] = inst_10563);
(statearr_10590[7] = inst_10551);
return statearr_10590;
})();var statearr_10591_10609 = state_10574__$1;(statearr_10591_10609[2] = null);
(statearr_10591_10609[1] = 2);
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
var state_machine__5511__auto____0 = (function (){var statearr_10595 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10595[0] = state_machine__5511__auto__);
(statearr_10595[1] = 1);
return statearr_10595;
});
var state_machine__5511__auto____1 = (function (state_10574){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_10574);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e10596){if((e10596 instanceof Object))
{var ex__5514__auto__ = e10596;var statearr_10597_10610 = state_10574;(statearr_10597_10610[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10574);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10611 = state_10574;
state_10574 = G__10611;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_10574){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_10574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_10598 = f__5526__auto__.call(null);(statearr_10598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___10599);
return statearr_10598;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5525__auto___10746 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_10716){var state_val_10717 = (state_10716[1]);if((state_val_10717 === 1))
{var inst_10679 = (new Array(n));var inst_10680 = inst_10679;var inst_10681 = 0;var state_10716__$1 = (function (){var statearr_10718 = state_10716;(statearr_10718[7] = inst_10680);
(statearr_10718[8] = inst_10681);
return statearr_10718;
})();var statearr_10719_10747 = state_10716__$1;(statearr_10719_10747[2] = null);
(statearr_10719_10747[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10717 === 2))
{var state_10716__$1 = state_10716;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10716__$1,4,ch);
} else
{if((state_val_10717 === 3))
{var inst_10714 = (state_10716[2]);var state_10716__$1 = state_10716;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10716__$1,inst_10714);
} else
{if((state_val_10717 === 4))
{var inst_10684 = (state_10716[9]);var inst_10684__$1 = (state_10716[2]);var inst_10685 = (inst_10684__$1 == null);var inst_10686 = cljs.core.not.call(null,inst_10685);var state_10716__$1 = (function (){var statearr_10720 = state_10716;(statearr_10720[9] = inst_10684__$1);
return statearr_10720;
})();if(inst_10686)
{var statearr_10721_10748 = state_10716__$1;(statearr_10721_10748[1] = 5);
} else
{var statearr_10722_10749 = state_10716__$1;(statearr_10722_10749[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10717 === 5))
{var inst_10680 = (state_10716[7]);var inst_10681 = (state_10716[8]);var inst_10689 = (state_10716[10]);var inst_10684 = (state_10716[9]);var inst_10688 = (inst_10680[inst_10681] = inst_10684);var inst_10689__$1 = (inst_10681 + 1);var inst_10690 = (inst_10689__$1 < n);var state_10716__$1 = (function (){var statearr_10723 = state_10716;(statearr_10723[11] = inst_10688);
(statearr_10723[10] = inst_10689__$1);
return statearr_10723;
})();if(cljs.core.truth_(inst_10690))
{var statearr_10724_10750 = state_10716__$1;(statearr_10724_10750[1] = 8);
} else
{var statearr_10725_10751 = state_10716__$1;(statearr_10725_10751[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10717 === 6))
{var inst_10681 = (state_10716[8]);var inst_10702 = (inst_10681 > 0);var state_10716__$1 = state_10716;if(cljs.core.truth_(inst_10702))
{var statearr_10727_10752 = state_10716__$1;(statearr_10727_10752[1] = 12);
} else
{var statearr_10728_10753 = state_10716__$1;(statearr_10728_10753[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10717 === 7))
{var inst_10712 = (state_10716[2]);var state_10716__$1 = state_10716;var statearr_10729_10754 = state_10716__$1;(statearr_10729_10754[2] = inst_10712);
(statearr_10729_10754[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10717 === 8))
{var inst_10680 = (state_10716[7]);var inst_10689 = (state_10716[10]);var tmp10726 = inst_10680;var inst_10680__$1 = tmp10726;var inst_10681 = inst_10689;var state_10716__$1 = (function (){var statearr_10730 = state_10716;(statearr_10730[7] = inst_10680__$1);
(statearr_10730[8] = inst_10681);
return statearr_10730;
})();var statearr_10731_10755 = state_10716__$1;(statearr_10731_10755[2] = null);
(statearr_10731_10755[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10717 === 9))
{var inst_10680 = (state_10716[7]);var inst_10694 = cljs.core.vec.call(null,inst_10680);var state_10716__$1 = state_10716;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10716__$1,11,out,inst_10694);
} else
{if((state_val_10717 === 10))
{var inst_10700 = (state_10716[2]);var state_10716__$1 = state_10716;var statearr_10732_10756 = state_10716__$1;(statearr_10732_10756[2] = inst_10700);
(statearr_10732_10756[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10717 === 11))
{var inst_10696 = (state_10716[2]);var inst_10697 = (new Array(n));var inst_10680 = inst_10697;var inst_10681 = 0;var state_10716__$1 = (function (){var statearr_10733 = state_10716;(statearr_10733[7] = inst_10680);
(statearr_10733[8] = inst_10681);
(statearr_10733[12] = inst_10696);
return statearr_10733;
})();var statearr_10734_10757 = state_10716__$1;(statearr_10734_10757[2] = null);
(statearr_10734_10757[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10717 === 12))
{var inst_10680 = (state_10716[7]);var inst_10704 = cljs.core.vec.call(null,inst_10680);var state_10716__$1 = state_10716;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10716__$1,15,out,inst_10704);
} else
{if((state_val_10717 === 13))
{var state_10716__$1 = state_10716;var statearr_10735_10758 = state_10716__$1;(statearr_10735_10758[2] = null);
(statearr_10735_10758[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10717 === 14))
{var inst_10709 = (state_10716[2]);var inst_10710 = cljs.core.async.close_BANG_.call(null,out);var state_10716__$1 = (function (){var statearr_10736 = state_10716;(statearr_10736[13] = inst_10709);
return statearr_10736;
})();var statearr_10737_10759 = state_10716__$1;(statearr_10737_10759[2] = inst_10710);
(statearr_10737_10759[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10717 === 15))
{var inst_10706 = (state_10716[2]);var state_10716__$1 = state_10716;var statearr_10738_10760 = state_10716__$1;(statearr_10738_10760[2] = inst_10706);
(statearr_10738_10760[1] = 14);
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
var state_machine__5511__auto____0 = (function (){var statearr_10742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10742[0] = state_machine__5511__auto__);
(statearr_10742[1] = 1);
return statearr_10742;
});
var state_machine__5511__auto____1 = (function (state_10716){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_10716);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e10743){if((e10743 instanceof Object))
{var ex__5514__auto__ = e10743;var statearr_10744_10761 = state_10716;(statearr_10744_10761[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10716);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10743;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10762 = state_10716;
state_10716 = G__10762;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_10716){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_10716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_10745 = f__5526__auto__.call(null);(statearr_10745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___10746);
return statearr_10745;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5525__auto___10905 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_10875){var state_val_10876 = (state_10875[1]);if((state_val_10876 === 1))
{var inst_10834 = [];var inst_10835 = inst_10834;var inst_10836 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_10875__$1 = (function (){var statearr_10877 = state_10875;(statearr_10877[7] = inst_10836);
(statearr_10877[8] = inst_10835);
return statearr_10877;
})();var statearr_10878_10906 = state_10875__$1;(statearr_10878_10906[2] = null);
(statearr_10878_10906[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10876 === 2))
{var state_10875__$1 = state_10875;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10875__$1,4,ch);
} else
{if((state_val_10876 === 3))
{var inst_10873 = (state_10875[2]);var state_10875__$1 = state_10875;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10875__$1,inst_10873);
} else
{if((state_val_10876 === 4))
{var inst_10839 = (state_10875[9]);var inst_10839__$1 = (state_10875[2]);var inst_10840 = (inst_10839__$1 == null);var inst_10841 = cljs.core.not.call(null,inst_10840);var state_10875__$1 = (function (){var statearr_10879 = state_10875;(statearr_10879[9] = inst_10839__$1);
return statearr_10879;
})();if(inst_10841)
{var statearr_10880_10907 = state_10875__$1;(statearr_10880_10907[1] = 5);
} else
{var statearr_10881_10908 = state_10875__$1;(statearr_10881_10908[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10876 === 5))
{var inst_10843 = (state_10875[10]);var inst_10836 = (state_10875[7]);var inst_10839 = (state_10875[9]);var inst_10843__$1 = f.call(null,inst_10839);var inst_10844 = cljs.core._EQ_.call(null,inst_10843__$1,inst_10836);var inst_10845 = cljs.core.keyword_identical_QMARK_.call(null,inst_10836,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_10846 = (inst_10844) || (inst_10845);var state_10875__$1 = (function (){var statearr_10882 = state_10875;(statearr_10882[10] = inst_10843__$1);
return statearr_10882;
})();if(cljs.core.truth_(inst_10846))
{var statearr_10883_10909 = state_10875__$1;(statearr_10883_10909[1] = 8);
} else
{var statearr_10884_10910 = state_10875__$1;(statearr_10884_10910[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10876 === 6))
{var inst_10835 = (state_10875[8]);var inst_10860 = inst_10835.length;var inst_10861 = (inst_10860 > 0);var state_10875__$1 = state_10875;if(cljs.core.truth_(inst_10861))
{var statearr_10886_10911 = state_10875__$1;(statearr_10886_10911[1] = 12);
} else
{var statearr_10887_10912 = state_10875__$1;(statearr_10887_10912[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10876 === 7))
{var inst_10871 = (state_10875[2]);var state_10875__$1 = state_10875;var statearr_10888_10913 = state_10875__$1;(statearr_10888_10913[2] = inst_10871);
(statearr_10888_10913[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10876 === 8))
{var inst_10843 = (state_10875[10]);var inst_10835 = (state_10875[8]);var inst_10839 = (state_10875[9]);var inst_10848 = inst_10835.push(inst_10839);var tmp10885 = inst_10835;var inst_10835__$1 = tmp10885;var inst_10836 = inst_10843;var state_10875__$1 = (function (){var statearr_10889 = state_10875;(statearr_10889[7] = inst_10836);
(statearr_10889[8] = inst_10835__$1);
(statearr_10889[11] = inst_10848);
return statearr_10889;
})();var statearr_10890_10914 = state_10875__$1;(statearr_10890_10914[2] = null);
(statearr_10890_10914[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10876 === 9))
{var inst_10835 = (state_10875[8]);var inst_10851 = cljs.core.vec.call(null,inst_10835);var state_10875__$1 = state_10875;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10875__$1,11,out,inst_10851);
} else
{if((state_val_10876 === 10))
{var inst_10858 = (state_10875[2]);var state_10875__$1 = state_10875;var statearr_10891_10915 = state_10875__$1;(statearr_10891_10915[2] = inst_10858);
(statearr_10891_10915[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10876 === 11))
{var inst_10843 = (state_10875[10]);var inst_10839 = (state_10875[9]);var inst_10853 = (state_10875[2]);var inst_10854 = [];var inst_10855 = inst_10854.push(inst_10839);var inst_10835 = inst_10854;var inst_10836 = inst_10843;var state_10875__$1 = (function (){var statearr_10892 = state_10875;(statearr_10892[12] = inst_10855);
(statearr_10892[7] = inst_10836);
(statearr_10892[8] = inst_10835);
(statearr_10892[13] = inst_10853);
return statearr_10892;
})();var statearr_10893_10916 = state_10875__$1;(statearr_10893_10916[2] = null);
(statearr_10893_10916[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10876 === 12))
{var inst_10835 = (state_10875[8]);var inst_10863 = cljs.core.vec.call(null,inst_10835);var state_10875__$1 = state_10875;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10875__$1,15,out,inst_10863);
} else
{if((state_val_10876 === 13))
{var state_10875__$1 = state_10875;var statearr_10894_10917 = state_10875__$1;(statearr_10894_10917[2] = null);
(statearr_10894_10917[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10876 === 14))
{var inst_10868 = (state_10875[2]);var inst_10869 = cljs.core.async.close_BANG_.call(null,out);var state_10875__$1 = (function (){var statearr_10895 = state_10875;(statearr_10895[14] = inst_10868);
return statearr_10895;
})();var statearr_10896_10918 = state_10875__$1;(statearr_10896_10918[2] = inst_10869);
(statearr_10896_10918[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10876 === 15))
{var inst_10865 = (state_10875[2]);var state_10875__$1 = state_10875;var statearr_10897_10919 = state_10875__$1;(statearr_10897_10919[2] = inst_10865);
(statearr_10897_10919[1] = 14);
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
var state_machine__5511__auto____0 = (function (){var statearr_10901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10901[0] = state_machine__5511__auto__);
(statearr_10901[1] = 1);
return statearr_10901;
});
var state_machine__5511__auto____1 = (function (state_10875){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_10875);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e10902){if((e10902 instanceof Object))
{var ex__5514__auto__ = e10902;var statearr_10903_10920 = state_10875;(statearr_10903_10920[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10875);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10902;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10921 = state_10875;
state_10875 = G__10921;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_10875){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_10875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_10904 = f__5526__auto__.call(null);(statearr_10904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___10905);
return statearr_10904;
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