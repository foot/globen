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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t57180 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t57180 = (function (f,fn_handler,meta57181){
this.f = f;
this.fn_handler = fn_handler;
this.meta57181 = meta57181;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t57180.cljs$lang$type = true;
cljs.core.async.t57180.cljs$lang$ctorStr = "cljs.core.async/t57180";
cljs.core.async.t57180.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t57180");
});
cljs.core.async.t57180.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t57180.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t57180.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t57180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57182){var self__ = this;
var _57182__$1 = this;return self__.meta57181;
});
cljs.core.async.t57180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57182,meta57181__$1){var self__ = this;
var _57182__$1 = this;return (new cljs.core.async.t57180(self__.f,self__.fn_handler,meta57181__$1));
});
cljs.core.async.__GT_t57180 = (function __GT_t57180(f__$1,fn_handler__$1,meta57181){return (new cljs.core.async.t57180(f__$1,fn_handler__$1,meta57181));
});
}
return (new cljs.core.async.t57180(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__57184 = buff;if(G__57184)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__57184.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__57184.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__57184);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__57184);
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
{var val_57185 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_57185);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_57185);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___57186 = n;var x_57187 = 0;while(true){
if((x_57187 < n__4291__auto___57186))
{(a[x_57187] = 0);
{
var G__57188 = (x_57187 + 1);
x_57187 = G__57188;
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
var G__57189 = (i + 1);
i = G__57189;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t57193 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t57193 = (function (flag,alt_flag,meta57194){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta57194 = meta57194;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t57193.cljs$lang$type = true;
cljs.core.async.t57193.cljs$lang$ctorStr = "cljs.core.async/t57193";
cljs.core.async.t57193.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t57193");
});
cljs.core.async.t57193.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t57193.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t57193.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t57193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57195){var self__ = this;
var _57195__$1 = this;return self__.meta57194;
});
cljs.core.async.t57193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57195,meta57194__$1){var self__ = this;
var _57195__$1 = this;return (new cljs.core.async.t57193(self__.flag,self__.alt_flag,meta57194__$1));
});
cljs.core.async.__GT_t57193 = (function __GT_t57193(flag__$1,alt_flag__$1,meta57194){return (new cljs.core.async.t57193(flag__$1,alt_flag__$1,meta57194));
});
}
return (new cljs.core.async.t57193(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t57199 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t57199 = (function (cb,flag,alt_handler,meta57200){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta57200 = meta57200;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t57199.cljs$lang$type = true;
cljs.core.async.t57199.cljs$lang$ctorStr = "cljs.core.async/t57199";
cljs.core.async.t57199.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t57199");
});
cljs.core.async.t57199.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t57199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t57199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t57199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57201){var self__ = this;
var _57201__$1 = this;return self__.meta57200;
});
cljs.core.async.t57199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57201,meta57200__$1){var self__ = this;
var _57201__$1 = this;return (new cljs.core.async.t57199(self__.cb,self__.flag,self__.alt_handler,meta57200__$1));
});
cljs.core.async.__GT_t57199 = (function __GT_t57199(cb__$1,flag__$1,alt_handler__$1,meta57200){return (new cljs.core.async.t57199(cb__$1,flag__$1,alt_handler__$1,meta57200));
});
}
return (new cljs.core.async.t57199(cb,flag,alt_handler,null));
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
return (function (p1__57202_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57202_SHARP_,port], null));
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
var G__57203 = (i + 1);
i = G__57203;
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
var alts_BANG___delegate = function (ports,p__57204){var map__57206 = p__57204;var map__57206__$1 = ((cljs.core.seq_QMARK_.call(null,map__57206))?cljs.core.apply.call(null,cljs.core.hash_map,map__57206):map__57206);var opts = map__57206__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__57204 = null;if (arguments.length > 1) {
  p__57204 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__57204);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__57207){
var ports = cljs.core.first(arglist__57207);
var p__57204 = cljs.core.rest(arglist__57207);
return alts_BANG___delegate(ports,p__57204);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t57215 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t57215 = (function (ch,f,map_LT_,meta57216){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta57216 = meta57216;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t57215.cljs$lang$type = true;
cljs.core.async.t57215.cljs$lang$ctorStr = "cljs.core.async/t57215";
cljs.core.async.t57215.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t57215");
});
cljs.core.async.t57215.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t57215.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t57215.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t57215.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t57218 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t57218 = (function (fn1,_,meta57216,ch,f,map_LT_,meta57219){
this.fn1 = fn1;
this._ = _;
this.meta57216 = meta57216;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta57219 = meta57219;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t57218.cljs$lang$type = true;
cljs.core.async.t57218.cljs$lang$ctorStr = "cljs.core.async/t57218";
cljs.core.async.t57218.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t57218");
});
cljs.core.async.t57218.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t57218.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t57218.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t57218.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__57208_SHARP_){return f1.call(null,(((p1__57208_SHARP_ == null))?null:self__.f.call(null,p1__57208_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t57218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57220){var self__ = this;
var _57220__$1 = this;return self__.meta57219;
});
cljs.core.async.t57218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57220,meta57219__$1){var self__ = this;
var _57220__$1 = this;return (new cljs.core.async.t57218(self__.fn1,self__._,self__.meta57216,self__.ch,self__.f,self__.map_LT_,meta57219__$1));
});
cljs.core.async.__GT_t57218 = (function __GT_t57218(fn1__$1,___$2,meta57216__$1,ch__$2,f__$2,map_LT___$2,meta57219){return (new cljs.core.async.t57218(fn1__$1,___$2,meta57216__$1,ch__$2,f__$2,map_LT___$2,meta57219));
});
}
return (new cljs.core.async.t57218(fn1,___$1,self__.meta57216,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t57215.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t57215.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t57215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57217){var self__ = this;
var _57217__$1 = this;return self__.meta57216;
});
cljs.core.async.t57215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57217,meta57216__$1){var self__ = this;
var _57217__$1 = this;return (new cljs.core.async.t57215(self__.ch,self__.f,self__.map_LT_,meta57216__$1));
});
cljs.core.async.__GT_t57215 = (function __GT_t57215(ch__$1,f__$1,map_LT___$1,meta57216){return (new cljs.core.async.t57215(ch__$1,f__$1,map_LT___$1,meta57216));
});
}
return (new cljs.core.async.t57215(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t57224 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t57224 = (function (ch,f,map_GT_,meta57225){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta57225 = meta57225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t57224.cljs$lang$type = true;
cljs.core.async.t57224.cljs$lang$ctorStr = "cljs.core.async/t57224";
cljs.core.async.t57224.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t57224");
});
cljs.core.async.t57224.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t57224.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t57224.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t57224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t57224.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t57224.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t57224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57226){var self__ = this;
var _57226__$1 = this;return self__.meta57225;
});
cljs.core.async.t57224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57226,meta57225__$1){var self__ = this;
var _57226__$1 = this;return (new cljs.core.async.t57224(self__.ch,self__.f,self__.map_GT_,meta57225__$1));
});
cljs.core.async.__GT_t57224 = (function __GT_t57224(ch__$1,f__$1,map_GT___$1,meta57225){return (new cljs.core.async.t57224(ch__$1,f__$1,map_GT___$1,meta57225));
});
}
return (new cljs.core.async.t57224(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t57230 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t57230 = (function (ch,p,filter_GT_,meta57231){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta57231 = meta57231;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t57230.cljs$lang$type = true;
cljs.core.async.t57230.cljs$lang$ctorStr = "cljs.core.async/t57230";
cljs.core.async.t57230.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t57230");
});
cljs.core.async.t57230.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t57230.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t57230.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t57230.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t57230.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t57230.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t57230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57232){var self__ = this;
var _57232__$1 = this;return self__.meta57231;
});
cljs.core.async.t57230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57232,meta57231__$1){var self__ = this;
var _57232__$1 = this;return (new cljs.core.async.t57230(self__.ch,self__.p,self__.filter_GT_,meta57231__$1));
});
cljs.core.async.__GT_t57230 = (function __GT_t57230(ch__$1,p__$1,filter_GT___$1,meta57231){return (new cljs.core.async.t57230(ch__$1,p__$1,filter_GT___$1,meta57231));
});
}
return (new cljs.core.async.t57230(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5525__auto___57315 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_57294){var state_val_57295 = (state_57294[1]);if((state_val_57295 === 1))
{var state_57294__$1 = state_57294;var statearr_57296_57316 = state_57294__$1;(statearr_57296_57316[2] = null);
(statearr_57296_57316[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57295 === 2))
{var state_57294__$1 = state_57294;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57294__$1,4,ch);
} else
{if((state_val_57295 === 3))
{var inst_57292 = (state_57294[2]);var state_57294__$1 = state_57294;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57294__$1,inst_57292);
} else
{if((state_val_57295 === 4))
{var inst_57276 = (state_57294[7]);var inst_57276__$1 = (state_57294[2]);var inst_57277 = (inst_57276__$1 == null);var state_57294__$1 = (function (){var statearr_57297 = state_57294;(statearr_57297[7] = inst_57276__$1);
return statearr_57297;
})();if(cljs.core.truth_(inst_57277))
{var statearr_57298_57317 = state_57294__$1;(statearr_57298_57317[1] = 5);
} else
{var statearr_57299_57318 = state_57294__$1;(statearr_57299_57318[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57295 === 5))
{var inst_57279 = cljs.core.async.close_BANG_.call(null,out);var state_57294__$1 = state_57294;var statearr_57300_57319 = state_57294__$1;(statearr_57300_57319[2] = inst_57279);
(statearr_57300_57319[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57295 === 6))
{var inst_57276 = (state_57294[7]);var inst_57281 = p.call(null,inst_57276);var state_57294__$1 = state_57294;if(cljs.core.truth_(inst_57281))
{var statearr_57301_57320 = state_57294__$1;(statearr_57301_57320[1] = 8);
} else
{var statearr_57302_57321 = state_57294__$1;(statearr_57302_57321[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57295 === 7))
{var inst_57290 = (state_57294[2]);var state_57294__$1 = state_57294;var statearr_57303_57322 = state_57294__$1;(statearr_57303_57322[2] = inst_57290);
(statearr_57303_57322[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57295 === 8))
{var inst_57276 = (state_57294[7]);var state_57294__$1 = state_57294;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57294__$1,11,out,inst_57276);
} else
{if((state_val_57295 === 9))
{var state_57294__$1 = state_57294;var statearr_57304_57323 = state_57294__$1;(statearr_57304_57323[2] = null);
(statearr_57304_57323[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57295 === 10))
{var inst_57287 = (state_57294[2]);var state_57294__$1 = (function (){var statearr_57305 = state_57294;(statearr_57305[8] = inst_57287);
return statearr_57305;
})();var statearr_57306_57324 = state_57294__$1;(statearr_57306_57324[2] = null);
(statearr_57306_57324[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57295 === 11))
{var inst_57284 = (state_57294[2]);var state_57294__$1 = state_57294;var statearr_57307_57325 = state_57294__$1;(statearr_57307_57325[2] = inst_57284);
(statearr_57307_57325[1] = 10);
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
var state_machine__5511__auto____0 = (function (){var statearr_57311 = [null,null,null,null,null,null,null,null,null];(statearr_57311[0] = state_machine__5511__auto__);
(statearr_57311[1] = 1);
return statearr_57311;
});
var state_machine__5511__auto____1 = (function (state_57294){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_57294);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e57312){if((e57312 instanceof Object))
{var ex__5514__auto__ = e57312;var statearr_57313_57326 = state_57294;(statearr_57313_57326[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57294);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e57312;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__57327 = state_57294;
state_57294 = G__57327;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_57294){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_57294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_57314 = f__5526__auto__.call(null);(statearr_57314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___57315);
return statearr_57314;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5525__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_57479){var state_val_57480 = (state_57479[1]);if((state_val_57480 === 1))
{var state_57479__$1 = state_57479;var statearr_57481_57518 = state_57479__$1;(statearr_57481_57518[2] = null);
(statearr_57481_57518[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57480 === 2))
{var state_57479__$1 = state_57479;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57479__$1,4,in$);
} else
{if((state_val_57480 === 3))
{var inst_57477 = (state_57479[2]);var state_57479__$1 = state_57479;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57479__$1,inst_57477);
} else
{if((state_val_57480 === 4))
{var inst_57425 = (state_57479[7]);var inst_57425__$1 = (state_57479[2]);var inst_57426 = (inst_57425__$1 == null);var state_57479__$1 = (function (){var statearr_57482 = state_57479;(statearr_57482[7] = inst_57425__$1);
return statearr_57482;
})();if(cljs.core.truth_(inst_57426))
{var statearr_57483_57519 = state_57479__$1;(statearr_57483_57519[1] = 5);
} else
{var statearr_57484_57520 = state_57479__$1;(statearr_57484_57520[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57480 === 5))
{var inst_57428 = cljs.core.async.close_BANG_.call(null,out);var state_57479__$1 = state_57479;var statearr_57485_57521 = state_57479__$1;(statearr_57485_57521[2] = inst_57428);
(statearr_57485_57521[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57480 === 6))
{var inst_57425 = (state_57479[7]);var inst_57430 = f.call(null,inst_57425);var inst_57435 = cljs.core.seq.call(null,inst_57430);var inst_57436 = inst_57435;var inst_57437 = null;var inst_57438 = 0;var inst_57439 = 0;var state_57479__$1 = (function (){var statearr_57486 = state_57479;(statearr_57486[8] = inst_57436);
(statearr_57486[9] = inst_57437);
(statearr_57486[10] = inst_57438);
(statearr_57486[11] = inst_57439);
return statearr_57486;
})();var statearr_57487_57522 = state_57479__$1;(statearr_57487_57522[2] = null);
(statearr_57487_57522[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57480 === 7))
{var inst_57475 = (state_57479[2]);var state_57479__$1 = state_57479;var statearr_57488_57523 = state_57479__$1;(statearr_57488_57523[2] = inst_57475);
(statearr_57488_57523[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57480 === 8))
{var inst_57438 = (state_57479[10]);var inst_57439 = (state_57479[11]);var inst_57441 = (inst_57439 < inst_57438);var inst_57442 = inst_57441;var state_57479__$1 = state_57479;if(cljs.core.truth_(inst_57442))
{var statearr_57489_57524 = state_57479__$1;(statearr_57489_57524[1] = 10);
} else
{var statearr_57490_57525 = state_57479__$1;(statearr_57490_57525[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57480 === 9))
{var inst_57472 = (state_57479[2]);var state_57479__$1 = (function (){var statearr_57491 = state_57479;(statearr_57491[12] = inst_57472);
return statearr_57491;
})();var statearr_57492_57526 = state_57479__$1;(statearr_57492_57526[2] = null);
(statearr_57492_57526[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57480 === 10))
{var inst_57437 = (state_57479[9]);var inst_57439 = (state_57479[11]);var inst_57444 = cljs.core._nth.call(null,inst_57437,inst_57439);var state_57479__$1 = state_57479;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57479__$1,13,out,inst_57444);
} else
{if((state_val_57480 === 11))
{var inst_57436 = (state_57479[8]);var inst_57450 = (state_57479[13]);var inst_57450__$1 = cljs.core.seq.call(null,inst_57436);var state_57479__$1 = (function (){var statearr_57496 = state_57479;(statearr_57496[13] = inst_57450__$1);
return statearr_57496;
})();if(inst_57450__$1)
{var statearr_57497_57527 = state_57479__$1;(statearr_57497_57527[1] = 14);
} else
{var statearr_57498_57528 = state_57479__$1;(statearr_57498_57528[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57480 === 12))
{var inst_57470 = (state_57479[2]);var state_57479__$1 = state_57479;var statearr_57499_57529 = state_57479__$1;(statearr_57499_57529[2] = inst_57470);
(statearr_57499_57529[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57480 === 13))
{var inst_57436 = (state_57479[8]);var inst_57437 = (state_57479[9]);var inst_57438 = (state_57479[10]);var inst_57439 = (state_57479[11]);var inst_57446 = (state_57479[2]);var inst_57447 = (inst_57439 + 1);var tmp57493 = inst_57436;var tmp57494 = inst_57437;var tmp57495 = inst_57438;var inst_57436__$1 = tmp57493;var inst_57437__$1 = tmp57494;var inst_57438__$1 = tmp57495;var inst_57439__$1 = inst_57447;var state_57479__$1 = (function (){var statearr_57500 = state_57479;(statearr_57500[14] = inst_57446);
(statearr_57500[8] = inst_57436__$1);
(statearr_57500[9] = inst_57437__$1);
(statearr_57500[10] = inst_57438__$1);
(statearr_57500[11] = inst_57439__$1);
return statearr_57500;
})();var statearr_57501_57530 = state_57479__$1;(statearr_57501_57530[2] = null);
(statearr_57501_57530[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57480 === 14))
{var inst_57450 = (state_57479[13]);var inst_57452 = cljs.core.chunked_seq_QMARK_.call(null,inst_57450);var state_57479__$1 = state_57479;if(inst_57452)
{var statearr_57502_57531 = state_57479__$1;(statearr_57502_57531[1] = 17);
} else
{var statearr_57503_57532 = state_57479__$1;(statearr_57503_57532[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57480 === 15))
{var state_57479__$1 = state_57479;var statearr_57504_57533 = state_57479__$1;(statearr_57504_57533[2] = null);
(statearr_57504_57533[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57480 === 16))
{var inst_57468 = (state_57479[2]);var state_57479__$1 = state_57479;var statearr_57505_57534 = state_57479__$1;(statearr_57505_57534[2] = inst_57468);
(statearr_57505_57534[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57480 === 17))
{var inst_57450 = (state_57479[13]);var inst_57454 = cljs.core.chunk_first.call(null,inst_57450);var inst_57455 = cljs.core.chunk_rest.call(null,inst_57450);var inst_57456 = cljs.core.count.call(null,inst_57454);var inst_57436 = inst_57455;var inst_57437 = inst_57454;var inst_57438 = inst_57456;var inst_57439 = 0;var state_57479__$1 = (function (){var statearr_57506 = state_57479;(statearr_57506[8] = inst_57436);
(statearr_57506[9] = inst_57437);
(statearr_57506[10] = inst_57438);
(statearr_57506[11] = inst_57439);
return statearr_57506;
})();var statearr_57507_57535 = state_57479__$1;(statearr_57507_57535[2] = null);
(statearr_57507_57535[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57480 === 18))
{var inst_57450 = (state_57479[13]);var inst_57459 = cljs.core.first.call(null,inst_57450);var state_57479__$1 = state_57479;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57479__$1,20,out,inst_57459);
} else
{if((state_val_57480 === 19))
{var inst_57465 = (state_57479[2]);var state_57479__$1 = state_57479;var statearr_57508_57536 = state_57479__$1;(statearr_57508_57536[2] = inst_57465);
(statearr_57508_57536[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57480 === 20))
{var inst_57450 = (state_57479[13]);var inst_57461 = (state_57479[2]);var inst_57462 = cljs.core.next.call(null,inst_57450);var inst_57436 = inst_57462;var inst_57437 = null;var inst_57438 = 0;var inst_57439 = 0;var state_57479__$1 = (function (){var statearr_57509 = state_57479;(statearr_57509[8] = inst_57436);
(statearr_57509[9] = inst_57437);
(statearr_57509[10] = inst_57438);
(statearr_57509[11] = inst_57439);
(statearr_57509[15] = inst_57461);
return statearr_57509;
})();var statearr_57510_57537 = state_57479__$1;(statearr_57510_57537[2] = null);
(statearr_57510_57537[1] = 8);
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
var state_machine__5511__auto____0 = (function (){var statearr_57514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_57514[0] = state_machine__5511__auto__);
(statearr_57514[1] = 1);
return statearr_57514;
});
var state_machine__5511__auto____1 = (function (state_57479){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_57479);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e57515){if((e57515 instanceof Object))
{var ex__5514__auto__ = e57515;var statearr_57516_57538 = state_57479;(statearr_57516_57538[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57479);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e57515;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__57539 = state_57479;
state_57479 = G__57539;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_57479){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_57479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_57517 = f__5526__auto__.call(null);(statearr_57517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto__);
return statearr_57517;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5525__auto___57620 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_57599){var state_val_57600 = (state_57599[1]);if((state_val_57600 === 1))
{var state_57599__$1 = state_57599;var statearr_57601_57621 = state_57599__$1;(statearr_57601_57621[2] = null);
(statearr_57601_57621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57600 === 2))
{var state_57599__$1 = state_57599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57599__$1,4,from);
} else
{if((state_val_57600 === 3))
{var inst_57597 = (state_57599[2]);var state_57599__$1 = state_57599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57599__$1,inst_57597);
} else
{if((state_val_57600 === 4))
{var inst_57582 = (state_57599[7]);var inst_57582__$1 = (state_57599[2]);var inst_57583 = (inst_57582__$1 == null);var state_57599__$1 = (function (){var statearr_57602 = state_57599;(statearr_57602[7] = inst_57582__$1);
return statearr_57602;
})();if(cljs.core.truth_(inst_57583))
{var statearr_57603_57622 = state_57599__$1;(statearr_57603_57622[1] = 5);
} else
{var statearr_57604_57623 = state_57599__$1;(statearr_57604_57623[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57600 === 5))
{var state_57599__$1 = state_57599;if(cljs.core.truth_(close_QMARK_))
{var statearr_57605_57624 = state_57599__$1;(statearr_57605_57624[1] = 8);
} else
{var statearr_57606_57625 = state_57599__$1;(statearr_57606_57625[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57600 === 6))
{var inst_57582 = (state_57599[7]);var state_57599__$1 = state_57599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57599__$1,11,to,inst_57582);
} else
{if((state_val_57600 === 7))
{var inst_57595 = (state_57599[2]);var state_57599__$1 = state_57599;var statearr_57607_57626 = state_57599__$1;(statearr_57607_57626[2] = inst_57595);
(statearr_57607_57626[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57600 === 8))
{var inst_57586 = cljs.core.async.close_BANG_.call(null,to);var state_57599__$1 = state_57599;var statearr_57608_57627 = state_57599__$1;(statearr_57608_57627[2] = inst_57586);
(statearr_57608_57627[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57600 === 9))
{var state_57599__$1 = state_57599;var statearr_57609_57628 = state_57599__$1;(statearr_57609_57628[2] = null);
(statearr_57609_57628[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57600 === 10))
{var inst_57589 = (state_57599[2]);var state_57599__$1 = state_57599;var statearr_57610_57629 = state_57599__$1;(statearr_57610_57629[2] = inst_57589);
(statearr_57610_57629[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57600 === 11))
{var inst_57592 = (state_57599[2]);var state_57599__$1 = (function (){var statearr_57611 = state_57599;(statearr_57611[8] = inst_57592);
return statearr_57611;
})();var statearr_57612_57630 = state_57599__$1;(statearr_57612_57630[2] = null);
(statearr_57612_57630[1] = 2);
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
var state_machine__5511__auto____0 = (function (){var statearr_57616 = [null,null,null,null,null,null,null,null,null];(statearr_57616[0] = state_machine__5511__auto__);
(statearr_57616[1] = 1);
return statearr_57616;
});
var state_machine__5511__auto____1 = (function (state_57599){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_57599);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e57617){if((e57617 instanceof Object))
{var ex__5514__auto__ = e57617;var statearr_57618_57631 = state_57599;(statearr_57618_57631[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57599);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e57617;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__57632 = state_57599;
state_57599 = G__57632;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_57599){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_57599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_57619 = f__5526__auto__.call(null);(statearr_57619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___57620);
return statearr_57619;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5525__auto___57719 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_57697){var state_val_57698 = (state_57697[1]);if((state_val_57698 === 1))
{var state_57697__$1 = state_57697;var statearr_57699_57720 = state_57697__$1;(statearr_57699_57720[2] = null);
(statearr_57699_57720[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57698 === 2))
{var state_57697__$1 = state_57697;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57697__$1,4,ch);
} else
{if((state_val_57698 === 3))
{var inst_57695 = (state_57697[2]);var state_57697__$1 = state_57697;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57697__$1,inst_57695);
} else
{if((state_val_57698 === 4))
{var inst_57678 = (state_57697[7]);var inst_57678__$1 = (state_57697[2]);var inst_57679 = (inst_57678__$1 == null);var state_57697__$1 = (function (){var statearr_57700 = state_57697;(statearr_57700[7] = inst_57678__$1);
return statearr_57700;
})();if(cljs.core.truth_(inst_57679))
{var statearr_57701_57721 = state_57697__$1;(statearr_57701_57721[1] = 5);
} else
{var statearr_57702_57722 = state_57697__$1;(statearr_57702_57722[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57698 === 5))
{var inst_57681 = cljs.core.async.close_BANG_.call(null,tc);var inst_57682 = cljs.core.async.close_BANG_.call(null,fc);var state_57697__$1 = (function (){var statearr_57703 = state_57697;(statearr_57703[8] = inst_57681);
return statearr_57703;
})();var statearr_57704_57723 = state_57697__$1;(statearr_57704_57723[2] = inst_57682);
(statearr_57704_57723[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57698 === 6))
{var inst_57678 = (state_57697[7]);var inst_57684 = p.call(null,inst_57678);var state_57697__$1 = state_57697;if(cljs.core.truth_(inst_57684))
{var statearr_57705_57724 = state_57697__$1;(statearr_57705_57724[1] = 9);
} else
{var statearr_57706_57725 = state_57697__$1;(statearr_57706_57725[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57698 === 7))
{var inst_57693 = (state_57697[2]);var state_57697__$1 = state_57697;var statearr_57707_57726 = state_57697__$1;(statearr_57707_57726[2] = inst_57693);
(statearr_57707_57726[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57698 === 8))
{var inst_57690 = (state_57697[2]);var state_57697__$1 = (function (){var statearr_57708 = state_57697;(statearr_57708[9] = inst_57690);
return statearr_57708;
})();var statearr_57709_57727 = state_57697__$1;(statearr_57709_57727[2] = null);
(statearr_57709_57727[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57698 === 9))
{var state_57697__$1 = state_57697;var statearr_57710_57728 = state_57697__$1;(statearr_57710_57728[2] = tc);
(statearr_57710_57728[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57698 === 10))
{var state_57697__$1 = state_57697;var statearr_57711_57729 = state_57697__$1;(statearr_57711_57729[2] = fc);
(statearr_57711_57729[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57698 === 11))
{var inst_57678 = (state_57697[7]);var inst_57688 = (state_57697[2]);var state_57697__$1 = state_57697;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57697__$1,8,inst_57688,inst_57678);
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
var state_machine__5511__auto____0 = (function (){var statearr_57715 = [null,null,null,null,null,null,null,null,null,null];(statearr_57715[0] = state_machine__5511__auto__);
(statearr_57715[1] = 1);
return statearr_57715;
});
var state_machine__5511__auto____1 = (function (state_57697){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_57697);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e57716){if((e57716 instanceof Object))
{var ex__5514__auto__ = e57716;var statearr_57717_57730 = state_57697;(statearr_57717_57730[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57697);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e57716;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__57731 = state_57697;
state_57697 = G__57731;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_57697){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_57697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_57718 = f__5526__auto__.call(null);(statearr_57718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___57719);
return statearr_57718;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5525__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_57778){var state_val_57779 = (state_57778[1]);if((state_val_57779 === 7))
{var inst_57774 = (state_57778[2]);var state_57778__$1 = state_57778;var statearr_57780_57796 = state_57778__$1;(statearr_57780_57796[2] = inst_57774);
(statearr_57780_57796[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57779 === 6))
{var inst_57764 = (state_57778[7]);var inst_57767 = (state_57778[8]);var inst_57771 = f.call(null,inst_57764,inst_57767);var inst_57764__$1 = inst_57771;var state_57778__$1 = (function (){var statearr_57781 = state_57778;(statearr_57781[7] = inst_57764__$1);
return statearr_57781;
})();var statearr_57782_57797 = state_57778__$1;(statearr_57782_57797[2] = null);
(statearr_57782_57797[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57779 === 5))
{var inst_57764 = (state_57778[7]);var state_57778__$1 = state_57778;var statearr_57783_57798 = state_57778__$1;(statearr_57783_57798[2] = inst_57764);
(statearr_57783_57798[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57779 === 4))
{var inst_57767 = (state_57778[8]);var inst_57767__$1 = (state_57778[2]);var inst_57768 = (inst_57767__$1 == null);var state_57778__$1 = (function (){var statearr_57784 = state_57778;(statearr_57784[8] = inst_57767__$1);
return statearr_57784;
})();if(cljs.core.truth_(inst_57768))
{var statearr_57785_57799 = state_57778__$1;(statearr_57785_57799[1] = 5);
} else
{var statearr_57786_57800 = state_57778__$1;(statearr_57786_57800[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57779 === 3))
{var inst_57776 = (state_57778[2]);var state_57778__$1 = state_57778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57778__$1,inst_57776);
} else
{if((state_val_57779 === 2))
{var state_57778__$1 = state_57778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57778__$1,4,ch);
} else
{if((state_val_57779 === 1))
{var inst_57764 = init;var state_57778__$1 = (function (){var statearr_57787 = state_57778;(statearr_57787[7] = inst_57764);
return statearr_57787;
})();var statearr_57788_57801 = state_57778__$1;(statearr_57788_57801[2] = null);
(statearr_57788_57801[1] = 2);
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
var state_machine__5511__auto____0 = (function (){var statearr_57792 = [null,null,null,null,null,null,null,null,null];(statearr_57792[0] = state_machine__5511__auto__);
(statearr_57792[1] = 1);
return statearr_57792;
});
var state_machine__5511__auto____1 = (function (state_57778){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_57778);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e57793){if((e57793 instanceof Object))
{var ex__5514__auto__ = e57793;var statearr_57794_57802 = state_57778;(statearr_57794_57802[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57778);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e57793;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__57803 = state_57778;
state_57778 = G__57803;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_57778){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_57778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_57795 = f__5526__auto__.call(null);(statearr_57795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto__);
return statearr_57795;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5525__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_57865){var state_val_57866 = (state_57865[1]);if((state_val_57866 === 1))
{var inst_57845 = cljs.core.seq.call(null,coll);var inst_57846 = inst_57845;var state_57865__$1 = (function (){var statearr_57867 = state_57865;(statearr_57867[7] = inst_57846);
return statearr_57867;
})();var statearr_57868_57886 = state_57865__$1;(statearr_57868_57886[2] = null);
(statearr_57868_57886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57866 === 2))
{var inst_57846 = (state_57865[7]);var state_57865__$1 = state_57865;if(cljs.core.truth_(inst_57846))
{var statearr_57869_57887 = state_57865__$1;(statearr_57869_57887[1] = 4);
} else
{var statearr_57870_57888 = state_57865__$1;(statearr_57870_57888[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57866 === 3))
{var inst_57863 = (state_57865[2]);var state_57865__$1 = state_57865;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57865__$1,inst_57863);
} else
{if((state_val_57866 === 4))
{var inst_57846 = (state_57865[7]);var inst_57849 = cljs.core.first.call(null,inst_57846);var state_57865__$1 = state_57865;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57865__$1,7,ch,inst_57849);
} else
{if((state_val_57866 === 5))
{var state_57865__$1 = state_57865;if(cljs.core.truth_(close_QMARK_))
{var statearr_57871_57889 = state_57865__$1;(statearr_57871_57889[1] = 8);
} else
{var statearr_57872_57890 = state_57865__$1;(statearr_57872_57890[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57866 === 6))
{var inst_57861 = (state_57865[2]);var state_57865__$1 = state_57865;var statearr_57873_57891 = state_57865__$1;(statearr_57873_57891[2] = inst_57861);
(statearr_57873_57891[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57866 === 7))
{var inst_57846 = (state_57865[7]);var inst_57851 = (state_57865[2]);var inst_57852 = cljs.core.next.call(null,inst_57846);var inst_57846__$1 = inst_57852;var state_57865__$1 = (function (){var statearr_57874 = state_57865;(statearr_57874[8] = inst_57851);
(statearr_57874[7] = inst_57846__$1);
return statearr_57874;
})();var statearr_57875_57892 = state_57865__$1;(statearr_57875_57892[2] = null);
(statearr_57875_57892[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57866 === 8))
{var inst_57856 = cljs.core.async.close_BANG_.call(null,ch);var state_57865__$1 = state_57865;var statearr_57876_57893 = state_57865__$1;(statearr_57876_57893[2] = inst_57856);
(statearr_57876_57893[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57866 === 9))
{var state_57865__$1 = state_57865;var statearr_57877_57894 = state_57865__$1;(statearr_57877_57894[2] = null);
(statearr_57877_57894[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_57866 === 10))
{var inst_57859 = (state_57865[2]);var state_57865__$1 = state_57865;var statearr_57878_57895 = state_57865__$1;(statearr_57878_57895[2] = inst_57859);
(statearr_57878_57895[1] = 6);
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
var state_machine__5511__auto____0 = (function (){var statearr_57882 = [null,null,null,null,null,null,null,null,null];(statearr_57882[0] = state_machine__5511__auto__);
(statearr_57882[1] = 1);
return statearr_57882;
});
var state_machine__5511__auto____1 = (function (state_57865){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_57865);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e57883){if((e57883 instanceof Object))
{var ex__5514__auto__ = e57883;var statearr_57884_57896 = state_57865;(statearr_57884_57896[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57865);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e57883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__57897 = state_57865;
state_57865 = G__57897;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_57865){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_57865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_57885 = f__5526__auto__.call(null);(statearr_57885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto__);
return statearr_57885;
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
cljs.core.async.Mux = (function (){var obj57899 = {};return obj57899;
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
cljs.core.async.Mult = (function (){var obj57901 = {};return obj57901;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t58116 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t58116 = (function (cs,ch,mult,meta58117){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta58117 = meta58117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t58116.cljs$lang$type = true;
cljs.core.async.t58116.cljs$lang$ctorStr = "cljs.core.async/t58116";
cljs.core.async.t58116.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t58116");
});})(cs))
;
cljs.core.async.t58116.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t58116.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t58116.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t58116.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t58116.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t58116.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t58116.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_58118){var self__ = this;
var _58118__$1 = this;return self__.meta58117;
});})(cs))
;
cljs.core.async.t58116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_58118,meta58117__$1){var self__ = this;
var _58118__$1 = this;return (new cljs.core.async.t58116(self__.cs,self__.ch,self__.mult,meta58117__$1));
});})(cs))
;
cljs.core.async.__GT_t58116 = ((function (cs){
return (function __GT_t58116(cs__$1,ch__$1,mult__$1,meta58117){return (new cljs.core.async.t58116(cs__$1,ch__$1,mult__$1,meta58117));
});})(cs))
;
}
return (new cljs.core.async.t58116(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5525__auto___58330 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_58248){var state_val_58249 = (state_58248[1]);if((state_val_58249 === 32))
{var inst_58121 = (state_58248[7]);var inst_58197 = (state_58248[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_58248,31,Object,null,30);var inst_58204 = cljs.core.async.put_BANG_.call(null,inst_58197,inst_58121,done);var state_58248__$1 = state_58248;var statearr_58250_58331 = state_58248__$1;(statearr_58250_58331[2] = inst_58204);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58248__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 1))
{var state_58248__$1 = state_58248;var statearr_58251_58332 = state_58248__$1;(statearr_58251_58332[2] = null);
(statearr_58251_58332[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 33))
{var inst_58210 = (state_58248[9]);var inst_58212 = cljs.core.chunked_seq_QMARK_.call(null,inst_58210);var state_58248__$1 = state_58248;if(inst_58212)
{var statearr_58252_58333 = state_58248__$1;(statearr_58252_58333[1] = 36);
} else
{var statearr_58253_58334 = state_58248__$1;(statearr_58253_58334[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 2))
{var state_58248__$1 = state_58248;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58248__$1,4,ch);
} else
{if((state_val_58249 === 34))
{var state_58248__$1 = state_58248;var statearr_58254_58335 = state_58248__$1;(statearr_58254_58335[2] = null);
(statearr_58254_58335[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 3))
{var inst_58246 = (state_58248[2]);var state_58248__$1 = state_58248;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58248__$1,inst_58246);
} else
{if((state_val_58249 === 35))
{var inst_58235 = (state_58248[2]);var state_58248__$1 = state_58248;var statearr_58255_58336 = state_58248__$1;(statearr_58255_58336[2] = inst_58235);
(statearr_58255_58336[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 4))
{var inst_58121 = (state_58248[7]);var inst_58121__$1 = (state_58248[2]);var inst_58122 = (inst_58121__$1 == null);var state_58248__$1 = (function (){var statearr_58256 = state_58248;(statearr_58256[7] = inst_58121__$1);
return statearr_58256;
})();if(cljs.core.truth_(inst_58122))
{var statearr_58257_58337 = state_58248__$1;(statearr_58257_58337[1] = 5);
} else
{var statearr_58258_58338 = state_58248__$1;(statearr_58258_58338[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 36))
{var inst_58210 = (state_58248[9]);var inst_58214 = cljs.core.chunk_first.call(null,inst_58210);var inst_58215 = cljs.core.chunk_rest.call(null,inst_58210);var inst_58216 = cljs.core.count.call(null,inst_58214);var inst_58189 = inst_58215;var inst_58190 = inst_58214;var inst_58191 = inst_58216;var inst_58192 = 0;var state_58248__$1 = (function (){var statearr_58259 = state_58248;(statearr_58259[10] = inst_58190);
(statearr_58259[11] = inst_58191);
(statearr_58259[12] = inst_58192);
(statearr_58259[13] = inst_58189);
return statearr_58259;
})();var statearr_58260_58339 = state_58248__$1;(statearr_58260_58339[2] = null);
(statearr_58260_58339[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 5))
{var inst_58128 = cljs.core.deref.call(null,cs);var inst_58129 = cljs.core.seq.call(null,inst_58128);var inst_58130 = inst_58129;var inst_58131 = null;var inst_58132 = 0;var inst_58133 = 0;var state_58248__$1 = (function (){var statearr_58261 = state_58248;(statearr_58261[14] = inst_58132);
(statearr_58261[15] = inst_58133);
(statearr_58261[16] = inst_58131);
(statearr_58261[17] = inst_58130);
return statearr_58261;
})();var statearr_58262_58340 = state_58248__$1;(statearr_58262_58340[2] = null);
(statearr_58262_58340[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 37))
{var inst_58210 = (state_58248[9]);var inst_58219 = cljs.core.first.call(null,inst_58210);var state_58248__$1 = (function (){var statearr_58263 = state_58248;(statearr_58263[18] = inst_58219);
return statearr_58263;
})();var statearr_58264_58341 = state_58248__$1;(statearr_58264_58341[2] = null);
(statearr_58264_58341[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 6))
{var inst_58180 = cljs.core.deref.call(null,cs);var inst_58181 = cljs.core.keys.call(null,inst_58180);var inst_58182 = cljs.core.count.call(null,inst_58181);var inst_58183 = cljs.core.reset_BANG_.call(null,dctr,inst_58182);var inst_58188 = cljs.core.seq.call(null,inst_58181);var inst_58189 = inst_58188;var inst_58190 = null;var inst_58191 = 0;var inst_58192 = 0;var state_58248__$1 = (function (){var statearr_58265 = state_58248;(statearr_58265[10] = inst_58190);
(statearr_58265[11] = inst_58191);
(statearr_58265[12] = inst_58192);
(statearr_58265[13] = inst_58189);
(statearr_58265[19] = inst_58183);
return statearr_58265;
})();var statearr_58266_58342 = state_58248__$1;(statearr_58266_58342[2] = null);
(statearr_58266_58342[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 38))
{var inst_58232 = (state_58248[2]);var state_58248__$1 = state_58248;var statearr_58267_58343 = state_58248__$1;(statearr_58267_58343[2] = inst_58232);
(statearr_58267_58343[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 7))
{var inst_58244 = (state_58248[2]);var state_58248__$1 = state_58248;var statearr_58268_58344 = state_58248__$1;(statearr_58268_58344[2] = inst_58244);
(statearr_58268_58344[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 39))
{var inst_58210 = (state_58248[9]);var inst_58228 = (state_58248[2]);var inst_58229 = cljs.core.next.call(null,inst_58210);var inst_58189 = inst_58229;var inst_58190 = null;var inst_58191 = 0;var inst_58192 = 0;var state_58248__$1 = (function (){var statearr_58269 = state_58248;(statearr_58269[10] = inst_58190);
(statearr_58269[11] = inst_58191);
(statearr_58269[12] = inst_58192);
(statearr_58269[13] = inst_58189);
(statearr_58269[20] = inst_58228);
return statearr_58269;
})();var statearr_58270_58345 = state_58248__$1;(statearr_58270_58345[2] = null);
(statearr_58270_58345[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 8))
{var inst_58132 = (state_58248[14]);var inst_58133 = (state_58248[15]);var inst_58135 = (inst_58133 < inst_58132);var inst_58136 = inst_58135;var state_58248__$1 = state_58248;if(cljs.core.truth_(inst_58136))
{var statearr_58271_58346 = state_58248__$1;(statearr_58271_58346[1] = 10);
} else
{var statearr_58272_58347 = state_58248__$1;(statearr_58272_58347[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 40))
{var inst_58219 = (state_58248[18]);var inst_58220 = (state_58248[2]);var inst_58221 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_58222 = cljs.core.async.untap_STAR_.call(null,m,inst_58219);var state_58248__$1 = (function (){var statearr_58273 = state_58248;(statearr_58273[21] = inst_58220);
(statearr_58273[22] = inst_58221);
return statearr_58273;
})();var statearr_58274_58348 = state_58248__$1;(statearr_58274_58348[2] = inst_58222);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58248__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 9))
{var inst_58178 = (state_58248[2]);var state_58248__$1 = state_58248;var statearr_58275_58349 = state_58248__$1;(statearr_58275_58349[2] = inst_58178);
(statearr_58275_58349[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 41))
{var inst_58121 = (state_58248[7]);var inst_58219 = (state_58248[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_58248,40,Object,null,39);var inst_58226 = cljs.core.async.put_BANG_.call(null,inst_58219,inst_58121,done);var state_58248__$1 = state_58248;var statearr_58276_58350 = state_58248__$1;(statearr_58276_58350[2] = inst_58226);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58248__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 10))
{var inst_58133 = (state_58248[15]);var inst_58131 = (state_58248[16]);var inst_58139 = cljs.core._nth.call(null,inst_58131,inst_58133);var inst_58140 = cljs.core.nth.call(null,inst_58139,0,null);var inst_58141 = cljs.core.nth.call(null,inst_58139,1,null);var state_58248__$1 = (function (){var statearr_58277 = state_58248;(statearr_58277[23] = inst_58140);
return statearr_58277;
})();if(cljs.core.truth_(inst_58141))
{var statearr_58278_58351 = state_58248__$1;(statearr_58278_58351[1] = 13);
} else
{var statearr_58279_58352 = state_58248__$1;(statearr_58279_58352[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 42))
{var inst_58241 = (state_58248[2]);var state_58248__$1 = (function (){var statearr_58280 = state_58248;(statearr_58280[24] = inst_58241);
return statearr_58280;
})();var statearr_58281_58353 = state_58248__$1;(statearr_58281_58353[2] = null);
(statearr_58281_58353[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 11))
{var inst_58130 = (state_58248[17]);var inst_58150 = (state_58248[25]);var inst_58150__$1 = cljs.core.seq.call(null,inst_58130);var state_58248__$1 = (function (){var statearr_58282 = state_58248;(statearr_58282[25] = inst_58150__$1);
return statearr_58282;
})();if(inst_58150__$1)
{var statearr_58283_58354 = state_58248__$1;(statearr_58283_58354[1] = 16);
} else
{var statearr_58284_58355 = state_58248__$1;(statearr_58284_58355[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 12))
{var inst_58176 = (state_58248[2]);var state_58248__$1 = state_58248;var statearr_58285_58356 = state_58248__$1;(statearr_58285_58356[2] = inst_58176);
(statearr_58285_58356[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 13))
{var inst_58140 = (state_58248[23]);var inst_58143 = cljs.core.async.close_BANG_.call(null,inst_58140);var state_58248__$1 = state_58248;var statearr_58289_58357 = state_58248__$1;(statearr_58289_58357[2] = inst_58143);
(statearr_58289_58357[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 14))
{var state_58248__$1 = state_58248;var statearr_58290_58358 = state_58248__$1;(statearr_58290_58358[2] = null);
(statearr_58290_58358[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 15))
{var inst_58132 = (state_58248[14]);var inst_58133 = (state_58248[15]);var inst_58131 = (state_58248[16]);var inst_58130 = (state_58248[17]);var inst_58146 = (state_58248[2]);var inst_58147 = (inst_58133 + 1);var tmp58286 = inst_58132;var tmp58287 = inst_58131;var tmp58288 = inst_58130;var inst_58130__$1 = tmp58288;var inst_58131__$1 = tmp58287;var inst_58132__$1 = tmp58286;var inst_58133__$1 = inst_58147;var state_58248__$1 = (function (){var statearr_58291 = state_58248;(statearr_58291[14] = inst_58132__$1);
(statearr_58291[15] = inst_58133__$1);
(statearr_58291[16] = inst_58131__$1);
(statearr_58291[17] = inst_58130__$1);
(statearr_58291[26] = inst_58146);
return statearr_58291;
})();var statearr_58292_58359 = state_58248__$1;(statearr_58292_58359[2] = null);
(statearr_58292_58359[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 16))
{var inst_58150 = (state_58248[25]);var inst_58152 = cljs.core.chunked_seq_QMARK_.call(null,inst_58150);var state_58248__$1 = state_58248;if(inst_58152)
{var statearr_58293_58360 = state_58248__$1;(statearr_58293_58360[1] = 19);
} else
{var statearr_58294_58361 = state_58248__$1;(statearr_58294_58361[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 17))
{var state_58248__$1 = state_58248;var statearr_58295_58362 = state_58248__$1;(statearr_58295_58362[2] = null);
(statearr_58295_58362[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 18))
{var inst_58174 = (state_58248[2]);var state_58248__$1 = state_58248;var statearr_58296_58363 = state_58248__$1;(statearr_58296_58363[2] = inst_58174);
(statearr_58296_58363[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 19))
{var inst_58150 = (state_58248[25]);var inst_58154 = cljs.core.chunk_first.call(null,inst_58150);var inst_58155 = cljs.core.chunk_rest.call(null,inst_58150);var inst_58156 = cljs.core.count.call(null,inst_58154);var inst_58130 = inst_58155;var inst_58131 = inst_58154;var inst_58132 = inst_58156;var inst_58133 = 0;var state_58248__$1 = (function (){var statearr_58297 = state_58248;(statearr_58297[14] = inst_58132);
(statearr_58297[15] = inst_58133);
(statearr_58297[16] = inst_58131);
(statearr_58297[17] = inst_58130);
return statearr_58297;
})();var statearr_58298_58364 = state_58248__$1;(statearr_58298_58364[2] = null);
(statearr_58298_58364[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 20))
{var inst_58150 = (state_58248[25]);var inst_58160 = cljs.core.first.call(null,inst_58150);var inst_58161 = cljs.core.nth.call(null,inst_58160,0,null);var inst_58162 = cljs.core.nth.call(null,inst_58160,1,null);var state_58248__$1 = (function (){var statearr_58299 = state_58248;(statearr_58299[27] = inst_58161);
return statearr_58299;
})();if(cljs.core.truth_(inst_58162))
{var statearr_58300_58365 = state_58248__$1;(statearr_58300_58365[1] = 22);
} else
{var statearr_58301_58366 = state_58248__$1;(statearr_58301_58366[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 21))
{var inst_58171 = (state_58248[2]);var state_58248__$1 = state_58248;var statearr_58302_58367 = state_58248__$1;(statearr_58302_58367[2] = inst_58171);
(statearr_58302_58367[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 22))
{var inst_58161 = (state_58248[27]);var inst_58164 = cljs.core.async.close_BANG_.call(null,inst_58161);var state_58248__$1 = state_58248;var statearr_58303_58368 = state_58248__$1;(statearr_58303_58368[2] = inst_58164);
(statearr_58303_58368[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 23))
{var state_58248__$1 = state_58248;var statearr_58304_58369 = state_58248__$1;(statearr_58304_58369[2] = null);
(statearr_58304_58369[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 24))
{var inst_58150 = (state_58248[25]);var inst_58167 = (state_58248[2]);var inst_58168 = cljs.core.next.call(null,inst_58150);var inst_58130 = inst_58168;var inst_58131 = null;var inst_58132 = 0;var inst_58133 = 0;var state_58248__$1 = (function (){var statearr_58305 = state_58248;(statearr_58305[28] = inst_58167);
(statearr_58305[14] = inst_58132);
(statearr_58305[15] = inst_58133);
(statearr_58305[16] = inst_58131);
(statearr_58305[17] = inst_58130);
return statearr_58305;
})();var statearr_58306_58370 = state_58248__$1;(statearr_58306_58370[2] = null);
(statearr_58306_58370[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 25))
{var inst_58191 = (state_58248[11]);var inst_58192 = (state_58248[12]);var inst_58194 = (inst_58192 < inst_58191);var inst_58195 = inst_58194;var state_58248__$1 = state_58248;if(cljs.core.truth_(inst_58195))
{var statearr_58307_58371 = state_58248__$1;(statearr_58307_58371[1] = 27);
} else
{var statearr_58308_58372 = state_58248__$1;(statearr_58308_58372[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 26))
{var inst_58239 = (state_58248[2]);var state_58248__$1 = (function (){var statearr_58309 = state_58248;(statearr_58309[29] = inst_58239);
return statearr_58309;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58248__$1,42,dchan);
} else
{if((state_val_58249 === 27))
{var inst_58190 = (state_58248[10]);var inst_58192 = (state_58248[12]);var inst_58197 = cljs.core._nth.call(null,inst_58190,inst_58192);var state_58248__$1 = (function (){var statearr_58310 = state_58248;(statearr_58310[8] = inst_58197);
return statearr_58310;
})();var statearr_58311_58373 = state_58248__$1;(statearr_58311_58373[2] = null);
(statearr_58311_58373[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 28))
{var inst_58210 = (state_58248[9]);var inst_58189 = (state_58248[13]);var inst_58210__$1 = cljs.core.seq.call(null,inst_58189);var state_58248__$1 = (function (){var statearr_58315 = state_58248;(statearr_58315[9] = inst_58210__$1);
return statearr_58315;
})();if(inst_58210__$1)
{var statearr_58316_58374 = state_58248__$1;(statearr_58316_58374[1] = 33);
} else
{var statearr_58317_58375 = state_58248__$1;(statearr_58317_58375[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 29))
{var inst_58237 = (state_58248[2]);var state_58248__$1 = state_58248;var statearr_58318_58376 = state_58248__$1;(statearr_58318_58376[2] = inst_58237);
(statearr_58318_58376[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 30))
{var inst_58190 = (state_58248[10]);var inst_58191 = (state_58248[11]);var inst_58192 = (state_58248[12]);var inst_58189 = (state_58248[13]);var inst_58206 = (state_58248[2]);var inst_58207 = (inst_58192 + 1);var tmp58312 = inst_58190;var tmp58313 = inst_58191;var tmp58314 = inst_58189;var inst_58189__$1 = tmp58314;var inst_58190__$1 = tmp58312;var inst_58191__$1 = tmp58313;var inst_58192__$1 = inst_58207;var state_58248__$1 = (function (){var statearr_58319 = state_58248;(statearr_58319[10] = inst_58190__$1);
(statearr_58319[11] = inst_58191__$1);
(statearr_58319[12] = inst_58192__$1);
(statearr_58319[30] = inst_58206);
(statearr_58319[13] = inst_58189__$1);
return statearr_58319;
})();var statearr_58320_58377 = state_58248__$1;(statearr_58320_58377[2] = null);
(statearr_58320_58377[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58249 === 31))
{var inst_58197 = (state_58248[8]);var inst_58198 = (state_58248[2]);var inst_58199 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_58200 = cljs.core.async.untap_STAR_.call(null,m,inst_58197);var state_58248__$1 = (function (){var statearr_58321 = state_58248;(statearr_58321[31] = inst_58198);
(statearr_58321[32] = inst_58199);
return statearr_58321;
})();var statearr_58322_58378 = state_58248__$1;(statearr_58322_58378[2] = inst_58200);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58248__$1);
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
var state_machine__5511__auto____0 = (function (){var statearr_58326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_58326[0] = state_machine__5511__auto__);
(statearr_58326[1] = 1);
return statearr_58326;
});
var state_machine__5511__auto____1 = (function (state_58248){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_58248);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e58327){if((e58327 instanceof Object))
{var ex__5514__auto__ = e58327;var statearr_58328_58379 = state_58248;(statearr_58328_58379[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58248);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e58327;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__58380 = state_58248;
state_58248 = G__58380;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_58248){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_58248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_58329 = f__5526__auto__.call(null);(statearr_58329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___58330);
return statearr_58329;
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
cljs.core.async.Mix = (function (){var obj58382 = {};return obj58382;
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
;var m = (function (){if(typeof cljs.core.async.t58492 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t58492 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta58493){
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
this.meta58493 = meta58493;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t58492.cljs$lang$type = true;
cljs.core.async.t58492.cljs$lang$ctorStr = "cljs.core.async/t58492";
cljs.core.async.t58492.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t58492");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t58492.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t58492.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t58492.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t58492.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t58492.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t58492.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t58492.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t58492.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t58492.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_58494){var self__ = this;
var _58494__$1 = this;return self__.meta58493;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t58492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_58494,meta58493__$1){var self__ = this;
var _58494__$1 = this;return (new cljs.core.async.t58492(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta58493__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t58492 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t58492(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta58493){return (new cljs.core.async.t58492(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta58493));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t58492(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5525__auto___58601 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_58559){var state_val_58560 = (state_58559[1]);if((state_val_58560 === 1))
{var inst_58498 = (state_58559[7]);var inst_58498__$1 = calc_state.call(null);var inst_58499 = cljs.core.seq_QMARK_.call(null,inst_58498__$1);var state_58559__$1 = (function (){var statearr_58561 = state_58559;(statearr_58561[7] = inst_58498__$1);
return statearr_58561;
})();if(inst_58499)
{var statearr_58562_58602 = state_58559__$1;(statearr_58562_58602[1] = 2);
} else
{var statearr_58563_58603 = state_58559__$1;(statearr_58563_58603[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 2))
{var inst_58498 = (state_58559[7]);var inst_58501 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58498);var state_58559__$1 = state_58559;var statearr_58564_58604 = state_58559__$1;(statearr_58564_58604[2] = inst_58501);
(statearr_58564_58604[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 3))
{var inst_58498 = (state_58559[7]);var state_58559__$1 = state_58559;var statearr_58565_58605 = state_58559__$1;(statearr_58565_58605[2] = inst_58498);
(statearr_58565_58605[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 4))
{var inst_58498 = (state_58559[7]);var inst_58504 = (state_58559[2]);var inst_58505 = cljs.core.get.call(null,inst_58504,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_58506 = cljs.core.get.call(null,inst_58504,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_58507 = cljs.core.get.call(null,inst_58504,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_58508 = inst_58498;var state_58559__$1 = (function (){var statearr_58566 = state_58559;(statearr_58566[8] = inst_58508);
(statearr_58566[9] = inst_58507);
(statearr_58566[10] = inst_58505);
(statearr_58566[11] = inst_58506);
return statearr_58566;
})();var statearr_58567_58606 = state_58559__$1;(statearr_58567_58606[2] = null);
(statearr_58567_58606[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 5))
{var inst_58508 = (state_58559[8]);var inst_58511 = cljs.core.seq_QMARK_.call(null,inst_58508);var state_58559__$1 = state_58559;if(inst_58511)
{var statearr_58568_58607 = state_58559__$1;(statearr_58568_58607[1] = 7);
} else
{var statearr_58569_58608 = state_58559__$1;(statearr_58569_58608[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 6))
{var inst_58557 = (state_58559[2]);var state_58559__$1 = state_58559;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58559__$1,inst_58557);
} else
{if((state_val_58560 === 7))
{var inst_58508 = (state_58559[8]);var inst_58513 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58508);var state_58559__$1 = state_58559;var statearr_58570_58609 = state_58559__$1;(statearr_58570_58609[2] = inst_58513);
(statearr_58570_58609[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 8))
{var inst_58508 = (state_58559[8]);var state_58559__$1 = state_58559;var statearr_58571_58610 = state_58559__$1;(statearr_58571_58610[2] = inst_58508);
(statearr_58571_58610[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 9))
{var inst_58516 = (state_58559[12]);var inst_58516__$1 = (state_58559[2]);var inst_58517 = cljs.core.get.call(null,inst_58516__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_58518 = cljs.core.get.call(null,inst_58516__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_58519 = cljs.core.get.call(null,inst_58516__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_58559__$1 = (function (){var statearr_58572 = state_58559;(statearr_58572[12] = inst_58516__$1);
(statearr_58572[13] = inst_58519);
(statearr_58572[14] = inst_58518);
return statearr_58572;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_58559__$1,10,inst_58517);
} else
{if((state_val_58560 === 10))
{var inst_58524 = (state_58559[15]);var inst_58523 = (state_58559[16]);var inst_58522 = (state_58559[2]);var inst_58523__$1 = cljs.core.nth.call(null,inst_58522,0,null);var inst_58524__$1 = cljs.core.nth.call(null,inst_58522,1,null);var inst_58525 = (inst_58523__$1 == null);var inst_58526 = cljs.core._EQ_.call(null,inst_58524__$1,change);var inst_58527 = (inst_58525) || (inst_58526);var state_58559__$1 = (function (){var statearr_58573 = state_58559;(statearr_58573[15] = inst_58524__$1);
(statearr_58573[16] = inst_58523__$1);
return statearr_58573;
})();if(cljs.core.truth_(inst_58527))
{var statearr_58574_58611 = state_58559__$1;(statearr_58574_58611[1] = 11);
} else
{var statearr_58575_58612 = state_58559__$1;(statearr_58575_58612[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 11))
{var inst_58523 = (state_58559[16]);var inst_58529 = (inst_58523 == null);var state_58559__$1 = state_58559;if(cljs.core.truth_(inst_58529))
{var statearr_58576_58613 = state_58559__$1;(statearr_58576_58613[1] = 14);
} else
{var statearr_58577_58614 = state_58559__$1;(statearr_58577_58614[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 12))
{var inst_58524 = (state_58559[15]);var inst_58519 = (state_58559[13]);var inst_58538 = (state_58559[17]);var inst_58538__$1 = inst_58519.call(null,inst_58524);var state_58559__$1 = (function (){var statearr_58578 = state_58559;(statearr_58578[17] = inst_58538__$1);
return statearr_58578;
})();if(cljs.core.truth_(inst_58538__$1))
{var statearr_58579_58615 = state_58559__$1;(statearr_58579_58615[1] = 17);
} else
{var statearr_58580_58616 = state_58559__$1;(statearr_58580_58616[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 13))
{var inst_58555 = (state_58559[2]);var state_58559__$1 = state_58559;var statearr_58581_58617 = state_58559__$1;(statearr_58581_58617[2] = inst_58555);
(statearr_58581_58617[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 14))
{var inst_58524 = (state_58559[15]);var inst_58531 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_58524);var state_58559__$1 = state_58559;var statearr_58582_58618 = state_58559__$1;(statearr_58582_58618[2] = inst_58531);
(statearr_58582_58618[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 15))
{var state_58559__$1 = state_58559;var statearr_58583_58619 = state_58559__$1;(statearr_58583_58619[2] = null);
(statearr_58583_58619[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 16))
{var inst_58534 = (state_58559[2]);var inst_58535 = calc_state.call(null);var inst_58508 = inst_58535;var state_58559__$1 = (function (){var statearr_58584 = state_58559;(statearr_58584[18] = inst_58534);
(statearr_58584[8] = inst_58508);
return statearr_58584;
})();var statearr_58585_58620 = state_58559__$1;(statearr_58585_58620[2] = null);
(statearr_58585_58620[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 17))
{var inst_58538 = (state_58559[17]);var state_58559__$1 = state_58559;var statearr_58586_58621 = state_58559__$1;(statearr_58586_58621[2] = inst_58538);
(statearr_58586_58621[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 18))
{var inst_58524 = (state_58559[15]);var inst_58519 = (state_58559[13]);var inst_58518 = (state_58559[14]);var inst_58541 = cljs.core.empty_QMARK_.call(null,inst_58519);var inst_58542 = inst_58518.call(null,inst_58524);var inst_58543 = cljs.core.not.call(null,inst_58542);var inst_58544 = (inst_58541) && (inst_58543);var state_58559__$1 = state_58559;var statearr_58587_58622 = state_58559__$1;(statearr_58587_58622[2] = inst_58544);
(statearr_58587_58622[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 19))
{var inst_58546 = (state_58559[2]);var state_58559__$1 = state_58559;if(cljs.core.truth_(inst_58546))
{var statearr_58588_58623 = state_58559__$1;(statearr_58588_58623[1] = 20);
} else
{var statearr_58589_58624 = state_58559__$1;(statearr_58589_58624[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 20))
{var inst_58523 = (state_58559[16]);var state_58559__$1 = state_58559;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58559__$1,23,out,inst_58523);
} else
{if((state_val_58560 === 21))
{var state_58559__$1 = state_58559;var statearr_58590_58625 = state_58559__$1;(statearr_58590_58625[2] = null);
(statearr_58590_58625[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 22))
{var inst_58516 = (state_58559[12]);var inst_58552 = (state_58559[2]);var inst_58508 = inst_58516;var state_58559__$1 = (function (){var statearr_58591 = state_58559;(statearr_58591[8] = inst_58508);
(statearr_58591[19] = inst_58552);
return statearr_58591;
})();var statearr_58592_58626 = state_58559__$1;(statearr_58592_58626[2] = null);
(statearr_58592_58626[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58560 === 23))
{var inst_58549 = (state_58559[2]);var state_58559__$1 = state_58559;var statearr_58593_58627 = state_58559__$1;(statearr_58593_58627[2] = inst_58549);
(statearr_58593_58627[1] = 22);
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
var state_machine__5511__auto____0 = (function (){var statearr_58597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_58597[0] = state_machine__5511__auto__);
(statearr_58597[1] = 1);
return statearr_58597;
});
var state_machine__5511__auto____1 = (function (state_58559){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_58559);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e58598){if((e58598 instanceof Object))
{var ex__5514__auto__ = e58598;var statearr_58599_58628 = state_58559;(statearr_58599_58628[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58559);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e58598;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__58629 = state_58559;
state_58559 = G__58629;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_58559){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_58559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_58600 = f__5526__auto__.call(null);(statearr_58600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___58601);
return statearr_58600;
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
cljs.core.async.Pub = (function (){var obj58631 = {};return obj58631;
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
return (function (p1__58632_SHARP_){if(cljs.core.truth_(p1__58632_SHARP_.call(null,topic)))
{return p1__58632_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__58632_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t58757 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t58757 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta58758){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta58758 = meta58758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t58757.cljs$lang$type = true;
cljs.core.async.t58757.cljs$lang$ctorStr = "cljs.core.async/t58757";
cljs.core.async.t58757.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t58757");
});})(mults,ensure_mult))
;
cljs.core.async.t58757.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t58757.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t58757.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t58757.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t58757.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t58757.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t58757.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t58757.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_58759){var self__ = this;
var _58759__$1 = this;return self__.meta58758;
});})(mults,ensure_mult))
;
cljs.core.async.t58757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_58759,meta58758__$1){var self__ = this;
var _58759__$1 = this;return (new cljs.core.async.t58757(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta58758__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t58757 = ((function (mults,ensure_mult){
return (function __GT_t58757(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta58758){return (new cljs.core.async.t58757(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta58758));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t58757(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5525__auto___58881 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_58833){var state_val_58834 = (state_58833[1]);if((state_val_58834 === 1))
{var state_58833__$1 = state_58833;var statearr_58835_58882 = state_58833__$1;(statearr_58835_58882[2] = null);
(statearr_58835_58882[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 2))
{var state_58833__$1 = state_58833;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58833__$1,4,ch);
} else
{if((state_val_58834 === 3))
{var inst_58831 = (state_58833[2]);var state_58833__$1 = state_58833;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58833__$1,inst_58831);
} else
{if((state_val_58834 === 4))
{var inst_58762 = (state_58833[7]);var inst_58762__$1 = (state_58833[2]);var inst_58763 = (inst_58762__$1 == null);var state_58833__$1 = (function (){var statearr_58836 = state_58833;(statearr_58836[7] = inst_58762__$1);
return statearr_58836;
})();if(cljs.core.truth_(inst_58763))
{var statearr_58837_58883 = state_58833__$1;(statearr_58837_58883[1] = 5);
} else
{var statearr_58838_58884 = state_58833__$1;(statearr_58838_58884[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 5))
{var inst_58769 = cljs.core.deref.call(null,mults);var inst_58770 = cljs.core.vals.call(null,inst_58769);var inst_58771 = cljs.core.seq.call(null,inst_58770);var inst_58772 = inst_58771;var inst_58773 = null;var inst_58774 = 0;var inst_58775 = 0;var state_58833__$1 = (function (){var statearr_58839 = state_58833;(statearr_58839[8] = inst_58775);
(statearr_58839[9] = inst_58774);
(statearr_58839[10] = inst_58772);
(statearr_58839[11] = inst_58773);
return statearr_58839;
})();var statearr_58840_58885 = state_58833__$1;(statearr_58840_58885[2] = null);
(statearr_58840_58885[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 6))
{var inst_58762 = (state_58833[7]);var inst_58810 = (state_58833[12]);var inst_58812 = (state_58833[13]);var inst_58810__$1 = topic_fn.call(null,inst_58762);var inst_58811 = cljs.core.deref.call(null,mults);var inst_58812__$1 = cljs.core.get.call(null,inst_58811,inst_58810__$1);var state_58833__$1 = (function (){var statearr_58841 = state_58833;(statearr_58841[12] = inst_58810__$1);
(statearr_58841[13] = inst_58812__$1);
return statearr_58841;
})();if(cljs.core.truth_(inst_58812__$1))
{var statearr_58842_58886 = state_58833__$1;(statearr_58842_58886[1] = 19);
} else
{var statearr_58843_58887 = state_58833__$1;(statearr_58843_58887[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 7))
{var inst_58829 = (state_58833[2]);var state_58833__$1 = state_58833;var statearr_58844_58888 = state_58833__$1;(statearr_58844_58888[2] = inst_58829);
(statearr_58844_58888[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 8))
{var inst_58775 = (state_58833[8]);var inst_58774 = (state_58833[9]);var inst_58777 = (inst_58775 < inst_58774);var inst_58778 = inst_58777;var state_58833__$1 = state_58833;if(cljs.core.truth_(inst_58778))
{var statearr_58848_58889 = state_58833__$1;(statearr_58848_58889[1] = 10);
} else
{var statearr_58849_58890 = state_58833__$1;(statearr_58849_58890[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 9))
{var inst_58808 = (state_58833[2]);var state_58833__$1 = state_58833;var statearr_58850_58891 = state_58833__$1;(statearr_58850_58891[2] = inst_58808);
(statearr_58850_58891[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 10))
{var inst_58775 = (state_58833[8]);var inst_58774 = (state_58833[9]);var inst_58772 = (state_58833[10]);var inst_58773 = (state_58833[11]);var inst_58780 = cljs.core._nth.call(null,inst_58773,inst_58775);var inst_58781 = cljs.core.async.muxch_STAR_.call(null,inst_58780);var inst_58782 = cljs.core.async.close_BANG_.call(null,inst_58781);var inst_58783 = (inst_58775 + 1);var tmp58845 = inst_58774;var tmp58846 = inst_58772;var tmp58847 = inst_58773;var inst_58772__$1 = tmp58846;var inst_58773__$1 = tmp58847;var inst_58774__$1 = tmp58845;var inst_58775__$1 = inst_58783;var state_58833__$1 = (function (){var statearr_58851 = state_58833;(statearr_58851[8] = inst_58775__$1);
(statearr_58851[9] = inst_58774__$1);
(statearr_58851[10] = inst_58772__$1);
(statearr_58851[11] = inst_58773__$1);
(statearr_58851[14] = inst_58782);
return statearr_58851;
})();var statearr_58852_58892 = state_58833__$1;(statearr_58852_58892[2] = null);
(statearr_58852_58892[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 11))
{var inst_58772 = (state_58833[10]);var inst_58786 = (state_58833[15]);var inst_58786__$1 = cljs.core.seq.call(null,inst_58772);var state_58833__$1 = (function (){var statearr_58853 = state_58833;(statearr_58853[15] = inst_58786__$1);
return statearr_58853;
})();if(inst_58786__$1)
{var statearr_58854_58893 = state_58833__$1;(statearr_58854_58893[1] = 13);
} else
{var statearr_58855_58894 = state_58833__$1;(statearr_58855_58894[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 12))
{var inst_58806 = (state_58833[2]);var state_58833__$1 = state_58833;var statearr_58856_58895 = state_58833__$1;(statearr_58856_58895[2] = inst_58806);
(statearr_58856_58895[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 13))
{var inst_58786 = (state_58833[15]);var inst_58788 = cljs.core.chunked_seq_QMARK_.call(null,inst_58786);var state_58833__$1 = state_58833;if(inst_58788)
{var statearr_58857_58896 = state_58833__$1;(statearr_58857_58896[1] = 16);
} else
{var statearr_58858_58897 = state_58833__$1;(statearr_58858_58897[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 14))
{var state_58833__$1 = state_58833;var statearr_58859_58898 = state_58833__$1;(statearr_58859_58898[2] = null);
(statearr_58859_58898[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 15))
{var inst_58804 = (state_58833[2]);var state_58833__$1 = state_58833;var statearr_58860_58899 = state_58833__$1;(statearr_58860_58899[2] = inst_58804);
(statearr_58860_58899[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 16))
{var inst_58786 = (state_58833[15]);var inst_58790 = cljs.core.chunk_first.call(null,inst_58786);var inst_58791 = cljs.core.chunk_rest.call(null,inst_58786);var inst_58792 = cljs.core.count.call(null,inst_58790);var inst_58772 = inst_58791;var inst_58773 = inst_58790;var inst_58774 = inst_58792;var inst_58775 = 0;var state_58833__$1 = (function (){var statearr_58861 = state_58833;(statearr_58861[8] = inst_58775);
(statearr_58861[9] = inst_58774);
(statearr_58861[10] = inst_58772);
(statearr_58861[11] = inst_58773);
return statearr_58861;
})();var statearr_58862_58900 = state_58833__$1;(statearr_58862_58900[2] = null);
(statearr_58862_58900[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 17))
{var inst_58786 = (state_58833[15]);var inst_58795 = cljs.core.first.call(null,inst_58786);var inst_58796 = cljs.core.async.muxch_STAR_.call(null,inst_58795);var inst_58797 = cljs.core.async.close_BANG_.call(null,inst_58796);var inst_58798 = cljs.core.next.call(null,inst_58786);var inst_58772 = inst_58798;var inst_58773 = null;var inst_58774 = 0;var inst_58775 = 0;var state_58833__$1 = (function (){var statearr_58863 = state_58833;(statearr_58863[8] = inst_58775);
(statearr_58863[9] = inst_58774);
(statearr_58863[10] = inst_58772);
(statearr_58863[11] = inst_58773);
(statearr_58863[16] = inst_58797);
return statearr_58863;
})();var statearr_58864_58901 = state_58833__$1;(statearr_58864_58901[2] = null);
(statearr_58864_58901[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 18))
{var inst_58801 = (state_58833[2]);var state_58833__$1 = state_58833;var statearr_58865_58902 = state_58833__$1;(statearr_58865_58902[2] = inst_58801);
(statearr_58865_58902[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 19))
{var state_58833__$1 = state_58833;var statearr_58866_58903 = state_58833__$1;(statearr_58866_58903[2] = null);
(statearr_58866_58903[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 20))
{var state_58833__$1 = state_58833;var statearr_58867_58904 = state_58833__$1;(statearr_58867_58904[2] = null);
(statearr_58867_58904[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 21))
{var inst_58826 = (state_58833[2]);var state_58833__$1 = (function (){var statearr_58868 = state_58833;(statearr_58868[17] = inst_58826);
return statearr_58868;
})();var statearr_58869_58905 = state_58833__$1;(statearr_58869_58905[2] = null);
(statearr_58869_58905[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 22))
{var inst_58823 = (state_58833[2]);var state_58833__$1 = state_58833;var statearr_58870_58906 = state_58833__$1;(statearr_58870_58906[2] = inst_58823);
(statearr_58870_58906[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 23))
{var inst_58810 = (state_58833[12]);var inst_58814 = (state_58833[2]);var inst_58815 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_58810);var state_58833__$1 = (function (){var statearr_58871 = state_58833;(statearr_58871[18] = inst_58814);
return statearr_58871;
})();var statearr_58872_58907 = state_58833__$1;(statearr_58872_58907[2] = inst_58815);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58833__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58834 === 24))
{var inst_58762 = (state_58833[7]);var inst_58812 = (state_58833[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_58833,23,Object,null,22);var inst_58819 = cljs.core.async.muxch_STAR_.call(null,inst_58812);var state_58833__$1 = state_58833;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58833__$1,25,inst_58819,inst_58762);
} else
{if((state_val_58834 === 25))
{var inst_58821 = (state_58833[2]);var state_58833__$1 = state_58833;var statearr_58873_58908 = state_58833__$1;(statearr_58873_58908[2] = inst_58821);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58833__$1);
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
var state_machine__5511__auto____0 = (function (){var statearr_58877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_58877[0] = state_machine__5511__auto__);
(statearr_58877[1] = 1);
return statearr_58877;
});
var state_machine__5511__auto____1 = (function (state_58833){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_58833);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e58878){if((e58878 instanceof Object))
{var ex__5514__auto__ = e58878;var statearr_58879_58909 = state_58833;(statearr_58879_58909[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58833);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e58878;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__58910 = state_58833;
state_58833 = G__58910;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_58833){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_58833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_58880 = f__5526__auto__.call(null);(statearr_58880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___58881);
return statearr_58880;
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
,cljs.core.range.call(null,cnt));var c__5525__auto___59047 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_59017){var state_val_59018 = (state_59017[1]);if((state_val_59018 === 1))
{var state_59017__$1 = state_59017;var statearr_59019_59048 = state_59017__$1;(statearr_59019_59048[2] = null);
(statearr_59019_59048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59018 === 2))
{var inst_58980 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_58981 = 0;var state_59017__$1 = (function (){var statearr_59020 = state_59017;(statearr_59020[7] = inst_58981);
(statearr_59020[8] = inst_58980);
return statearr_59020;
})();var statearr_59021_59049 = state_59017__$1;(statearr_59021_59049[2] = null);
(statearr_59021_59049[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59018 === 3))
{var inst_59015 = (state_59017[2]);var state_59017__$1 = state_59017;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59017__$1,inst_59015);
} else
{if((state_val_59018 === 4))
{var inst_58981 = (state_59017[7]);var inst_58983 = (inst_58981 < cnt);var state_59017__$1 = state_59017;if(cljs.core.truth_(inst_58983))
{var statearr_59022_59050 = state_59017__$1;(statearr_59022_59050[1] = 6);
} else
{var statearr_59023_59051 = state_59017__$1;(statearr_59023_59051[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59018 === 5))
{var inst_59001 = (state_59017[2]);var state_59017__$1 = (function (){var statearr_59024 = state_59017;(statearr_59024[9] = inst_59001);
return statearr_59024;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59017__$1,12,dchan);
} else
{if((state_val_59018 === 6))
{var state_59017__$1 = state_59017;var statearr_59025_59052 = state_59017__$1;(statearr_59025_59052[2] = null);
(statearr_59025_59052[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59018 === 7))
{var state_59017__$1 = state_59017;var statearr_59026_59053 = state_59017__$1;(statearr_59026_59053[2] = null);
(statearr_59026_59053[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59018 === 8))
{var inst_58999 = (state_59017[2]);var state_59017__$1 = state_59017;var statearr_59027_59054 = state_59017__$1;(statearr_59027_59054[2] = inst_58999);
(statearr_59027_59054[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59018 === 9))
{var inst_58981 = (state_59017[7]);var inst_58994 = (state_59017[2]);var inst_58995 = (inst_58981 + 1);var inst_58981__$1 = inst_58995;var state_59017__$1 = (function (){var statearr_59028 = state_59017;(statearr_59028[7] = inst_58981__$1);
(statearr_59028[10] = inst_58994);
return statearr_59028;
})();var statearr_59029_59055 = state_59017__$1;(statearr_59029_59055[2] = null);
(statearr_59029_59055[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59018 === 10))
{var inst_58985 = (state_59017[2]);var inst_58986 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_59017__$1 = (function (){var statearr_59030 = state_59017;(statearr_59030[11] = inst_58985);
return statearr_59030;
})();var statearr_59031_59056 = state_59017__$1;(statearr_59031_59056[2] = inst_58986);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59017__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59018 === 11))
{var inst_58981 = (state_59017[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_59017,10,Object,null,9);var inst_58990 = chs__$1.call(null,inst_58981);var inst_58991 = done.call(null,inst_58981);var inst_58992 = cljs.core.async.take_BANG_.call(null,inst_58990,inst_58991);var state_59017__$1 = state_59017;var statearr_59032_59057 = state_59017__$1;(statearr_59032_59057[2] = inst_58992);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59017__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59018 === 12))
{var inst_59003 = (state_59017[12]);var inst_59003__$1 = (state_59017[2]);var inst_59004 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_59003__$1);var state_59017__$1 = (function (){var statearr_59033 = state_59017;(statearr_59033[12] = inst_59003__$1);
return statearr_59033;
})();if(cljs.core.truth_(inst_59004))
{var statearr_59034_59058 = state_59017__$1;(statearr_59034_59058[1] = 13);
} else
{var statearr_59035_59059 = state_59017__$1;(statearr_59035_59059[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59018 === 13))
{var inst_59006 = cljs.core.async.close_BANG_.call(null,out);var state_59017__$1 = state_59017;var statearr_59036_59060 = state_59017__$1;(statearr_59036_59060[2] = inst_59006);
(statearr_59036_59060[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59018 === 14))
{var inst_59003 = (state_59017[12]);var inst_59008 = cljs.core.apply.call(null,f,inst_59003);var state_59017__$1 = state_59017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59017__$1,16,out,inst_59008);
} else
{if((state_val_59018 === 15))
{var inst_59013 = (state_59017[2]);var state_59017__$1 = state_59017;var statearr_59037_59061 = state_59017__$1;(statearr_59037_59061[2] = inst_59013);
(statearr_59037_59061[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59018 === 16))
{var inst_59010 = (state_59017[2]);var state_59017__$1 = (function (){var statearr_59038 = state_59017;(statearr_59038[13] = inst_59010);
return statearr_59038;
})();var statearr_59039_59062 = state_59017__$1;(statearr_59039_59062[2] = null);
(statearr_59039_59062[1] = 2);
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
var state_machine__5511__auto____0 = (function (){var statearr_59043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_59043[0] = state_machine__5511__auto__);
(statearr_59043[1] = 1);
return statearr_59043;
});
var state_machine__5511__auto____1 = (function (state_59017){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_59017);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e59044){if((e59044 instanceof Object))
{var ex__5514__auto__ = e59044;var statearr_59045_59063 = state_59017;(statearr_59045_59063[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59017);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e59044;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__59064 = state_59017;
state_59017 = G__59064;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_59017){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_59017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_59046 = f__5526__auto__.call(null);(statearr_59046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___59047);
return statearr_59046;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5525__auto___59172 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_59148){var state_val_59149 = (state_59148[1]);if((state_val_59149 === 1))
{var inst_59119 = cljs.core.vec.call(null,chs);var inst_59120 = inst_59119;var state_59148__$1 = (function (){var statearr_59150 = state_59148;(statearr_59150[7] = inst_59120);
return statearr_59150;
})();var statearr_59151_59173 = state_59148__$1;(statearr_59151_59173[2] = null);
(statearr_59151_59173[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59149 === 2))
{var inst_59120 = (state_59148[7]);var inst_59122 = cljs.core.count.call(null,inst_59120);var inst_59123 = (inst_59122 > 0);var state_59148__$1 = state_59148;if(cljs.core.truth_(inst_59123))
{var statearr_59152_59174 = state_59148__$1;(statearr_59152_59174[1] = 4);
} else
{var statearr_59153_59175 = state_59148__$1;(statearr_59153_59175[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59149 === 3))
{var inst_59146 = (state_59148[2]);var state_59148__$1 = state_59148;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59148__$1,inst_59146);
} else
{if((state_val_59149 === 4))
{var inst_59120 = (state_59148[7]);var state_59148__$1 = state_59148;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_59148__$1,7,inst_59120);
} else
{if((state_val_59149 === 5))
{var inst_59142 = cljs.core.async.close_BANG_.call(null,out);var state_59148__$1 = state_59148;var statearr_59154_59176 = state_59148__$1;(statearr_59154_59176[2] = inst_59142);
(statearr_59154_59176[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59149 === 6))
{var inst_59144 = (state_59148[2]);var state_59148__$1 = state_59148;var statearr_59155_59177 = state_59148__$1;(statearr_59155_59177[2] = inst_59144);
(statearr_59155_59177[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59149 === 7))
{var inst_59128 = (state_59148[8]);var inst_59127 = (state_59148[9]);var inst_59127__$1 = (state_59148[2]);var inst_59128__$1 = cljs.core.nth.call(null,inst_59127__$1,0,null);var inst_59129 = cljs.core.nth.call(null,inst_59127__$1,1,null);var inst_59130 = (inst_59128__$1 == null);var state_59148__$1 = (function (){var statearr_59156 = state_59148;(statearr_59156[10] = inst_59129);
(statearr_59156[8] = inst_59128__$1);
(statearr_59156[9] = inst_59127__$1);
return statearr_59156;
})();if(cljs.core.truth_(inst_59130))
{var statearr_59157_59178 = state_59148__$1;(statearr_59157_59178[1] = 8);
} else
{var statearr_59158_59179 = state_59148__$1;(statearr_59158_59179[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59149 === 8))
{var inst_59129 = (state_59148[10]);var inst_59128 = (state_59148[8]);var inst_59127 = (state_59148[9]);var inst_59120 = (state_59148[7]);var inst_59132 = (function (){var c = inst_59129;var v = inst_59128;var vec__59125 = inst_59127;var cs = inst_59120;return ((function (c,v,vec__59125,cs,inst_59129,inst_59128,inst_59127,inst_59120,state_val_59149){
return (function (p1__59065_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__59065_SHARP_);
});
;})(c,v,vec__59125,cs,inst_59129,inst_59128,inst_59127,inst_59120,state_val_59149))
})();var inst_59133 = cljs.core.filterv.call(null,inst_59132,inst_59120);var inst_59120__$1 = inst_59133;var state_59148__$1 = (function (){var statearr_59159 = state_59148;(statearr_59159[7] = inst_59120__$1);
return statearr_59159;
})();var statearr_59160_59180 = state_59148__$1;(statearr_59160_59180[2] = null);
(statearr_59160_59180[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59149 === 9))
{var inst_59128 = (state_59148[8]);var state_59148__$1 = state_59148;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59148__$1,11,out,inst_59128);
} else
{if((state_val_59149 === 10))
{var inst_59140 = (state_59148[2]);var state_59148__$1 = state_59148;var statearr_59162_59181 = state_59148__$1;(statearr_59162_59181[2] = inst_59140);
(statearr_59162_59181[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59149 === 11))
{var inst_59120 = (state_59148[7]);var inst_59137 = (state_59148[2]);var tmp59161 = inst_59120;var inst_59120__$1 = tmp59161;var state_59148__$1 = (function (){var statearr_59163 = state_59148;(statearr_59163[11] = inst_59137);
(statearr_59163[7] = inst_59120__$1);
return statearr_59163;
})();var statearr_59164_59182 = state_59148__$1;(statearr_59164_59182[2] = null);
(statearr_59164_59182[1] = 2);
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
var state_machine__5511__auto____0 = (function (){var statearr_59168 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_59168[0] = state_machine__5511__auto__);
(statearr_59168[1] = 1);
return statearr_59168;
});
var state_machine__5511__auto____1 = (function (state_59148){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_59148);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e59169){if((e59169 instanceof Object))
{var ex__5514__auto__ = e59169;var statearr_59170_59183 = state_59148;(statearr_59170_59183[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59148);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e59169;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__59184 = state_59148;
state_59148 = G__59184;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_59148){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_59148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_59171 = f__5526__auto__.call(null);(statearr_59171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___59172);
return statearr_59171;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5525__auto___59277 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_59254){var state_val_59255 = (state_59254[1]);if((state_val_59255 === 1))
{var inst_59231 = 0;var state_59254__$1 = (function (){var statearr_59256 = state_59254;(statearr_59256[7] = inst_59231);
return statearr_59256;
})();var statearr_59257_59278 = state_59254__$1;(statearr_59257_59278[2] = null);
(statearr_59257_59278[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59255 === 2))
{var inst_59231 = (state_59254[7]);var inst_59233 = (inst_59231 < n);var state_59254__$1 = state_59254;if(cljs.core.truth_(inst_59233))
{var statearr_59258_59279 = state_59254__$1;(statearr_59258_59279[1] = 4);
} else
{var statearr_59259_59280 = state_59254__$1;(statearr_59259_59280[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59255 === 3))
{var inst_59251 = (state_59254[2]);var inst_59252 = cljs.core.async.close_BANG_.call(null,out);var state_59254__$1 = (function (){var statearr_59260 = state_59254;(statearr_59260[8] = inst_59251);
return statearr_59260;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59254__$1,inst_59252);
} else
{if((state_val_59255 === 4))
{var state_59254__$1 = state_59254;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59254__$1,7,ch);
} else
{if((state_val_59255 === 5))
{var state_59254__$1 = state_59254;var statearr_59261_59281 = state_59254__$1;(statearr_59261_59281[2] = null);
(statearr_59261_59281[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59255 === 6))
{var inst_59249 = (state_59254[2]);var state_59254__$1 = state_59254;var statearr_59262_59282 = state_59254__$1;(statearr_59262_59282[2] = inst_59249);
(statearr_59262_59282[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59255 === 7))
{var inst_59236 = (state_59254[9]);var inst_59236__$1 = (state_59254[2]);var inst_59237 = (inst_59236__$1 == null);var inst_59238 = cljs.core.not.call(null,inst_59237);var state_59254__$1 = (function (){var statearr_59263 = state_59254;(statearr_59263[9] = inst_59236__$1);
return statearr_59263;
})();if(inst_59238)
{var statearr_59264_59283 = state_59254__$1;(statearr_59264_59283[1] = 8);
} else
{var statearr_59265_59284 = state_59254__$1;(statearr_59265_59284[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59255 === 8))
{var inst_59236 = (state_59254[9]);var state_59254__$1 = state_59254;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59254__$1,11,out,inst_59236);
} else
{if((state_val_59255 === 9))
{var state_59254__$1 = state_59254;var statearr_59266_59285 = state_59254__$1;(statearr_59266_59285[2] = null);
(statearr_59266_59285[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59255 === 10))
{var inst_59246 = (state_59254[2]);var state_59254__$1 = state_59254;var statearr_59267_59286 = state_59254__$1;(statearr_59267_59286[2] = inst_59246);
(statearr_59267_59286[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59255 === 11))
{var inst_59231 = (state_59254[7]);var inst_59241 = (state_59254[2]);var inst_59242 = (inst_59231 + 1);var inst_59231__$1 = inst_59242;var state_59254__$1 = (function (){var statearr_59268 = state_59254;(statearr_59268[7] = inst_59231__$1);
(statearr_59268[10] = inst_59241);
return statearr_59268;
})();var statearr_59269_59287 = state_59254__$1;(statearr_59269_59287[2] = null);
(statearr_59269_59287[1] = 2);
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
var state_machine__5511__auto____0 = (function (){var statearr_59273 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_59273[0] = state_machine__5511__auto__);
(statearr_59273[1] = 1);
return statearr_59273;
});
var state_machine__5511__auto____1 = (function (state_59254){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_59254);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e59274){if((e59274 instanceof Object))
{var ex__5514__auto__ = e59274;var statearr_59275_59288 = state_59254;(statearr_59275_59288[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59254);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e59274;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__59289 = state_59254;
state_59254 = G__59289;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_59254){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_59254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_59276 = f__5526__auto__.call(null);(statearr_59276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___59277);
return statearr_59276;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5525__auto___59386 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_59361){var state_val_59362 = (state_59361[1]);if((state_val_59362 === 1))
{var inst_59338 = null;var state_59361__$1 = (function (){var statearr_59363 = state_59361;(statearr_59363[7] = inst_59338);
return statearr_59363;
})();var statearr_59364_59387 = state_59361__$1;(statearr_59364_59387[2] = null);
(statearr_59364_59387[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59362 === 2))
{var state_59361__$1 = state_59361;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59361__$1,4,ch);
} else
{if((state_val_59362 === 3))
{var inst_59358 = (state_59361[2]);var inst_59359 = cljs.core.async.close_BANG_.call(null,out);var state_59361__$1 = (function (){var statearr_59365 = state_59361;(statearr_59365[8] = inst_59358);
return statearr_59365;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59361__$1,inst_59359);
} else
{if((state_val_59362 === 4))
{var inst_59341 = (state_59361[9]);var inst_59341__$1 = (state_59361[2]);var inst_59342 = (inst_59341__$1 == null);var inst_59343 = cljs.core.not.call(null,inst_59342);var state_59361__$1 = (function (){var statearr_59366 = state_59361;(statearr_59366[9] = inst_59341__$1);
return statearr_59366;
})();if(inst_59343)
{var statearr_59367_59388 = state_59361__$1;(statearr_59367_59388[1] = 5);
} else
{var statearr_59368_59389 = state_59361__$1;(statearr_59368_59389[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59362 === 5))
{var inst_59338 = (state_59361[7]);var inst_59341 = (state_59361[9]);var inst_59345 = cljs.core._EQ_.call(null,inst_59341,inst_59338);var state_59361__$1 = state_59361;if(inst_59345)
{var statearr_59369_59390 = state_59361__$1;(statearr_59369_59390[1] = 8);
} else
{var statearr_59370_59391 = state_59361__$1;(statearr_59370_59391[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59362 === 6))
{var state_59361__$1 = state_59361;var statearr_59372_59392 = state_59361__$1;(statearr_59372_59392[2] = null);
(statearr_59372_59392[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59362 === 7))
{var inst_59356 = (state_59361[2]);var state_59361__$1 = state_59361;var statearr_59373_59393 = state_59361__$1;(statearr_59373_59393[2] = inst_59356);
(statearr_59373_59393[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59362 === 8))
{var inst_59338 = (state_59361[7]);var tmp59371 = inst_59338;var inst_59338__$1 = tmp59371;var state_59361__$1 = (function (){var statearr_59374 = state_59361;(statearr_59374[7] = inst_59338__$1);
return statearr_59374;
})();var statearr_59375_59394 = state_59361__$1;(statearr_59375_59394[2] = null);
(statearr_59375_59394[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59362 === 9))
{var inst_59341 = (state_59361[9]);var state_59361__$1 = state_59361;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59361__$1,11,out,inst_59341);
} else
{if((state_val_59362 === 10))
{var inst_59353 = (state_59361[2]);var state_59361__$1 = state_59361;var statearr_59376_59395 = state_59361__$1;(statearr_59376_59395[2] = inst_59353);
(statearr_59376_59395[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59362 === 11))
{var inst_59341 = (state_59361[9]);var inst_59350 = (state_59361[2]);var inst_59338 = inst_59341;var state_59361__$1 = (function (){var statearr_59377 = state_59361;(statearr_59377[7] = inst_59338);
(statearr_59377[10] = inst_59350);
return statearr_59377;
})();var statearr_59378_59396 = state_59361__$1;(statearr_59378_59396[2] = null);
(statearr_59378_59396[1] = 2);
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
var state_machine__5511__auto____0 = (function (){var statearr_59382 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_59382[0] = state_machine__5511__auto__);
(statearr_59382[1] = 1);
return statearr_59382;
});
var state_machine__5511__auto____1 = (function (state_59361){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_59361);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e59383){if((e59383 instanceof Object))
{var ex__5514__auto__ = e59383;var statearr_59384_59397 = state_59361;(statearr_59384_59397[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59361);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e59383;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__59398 = state_59361;
state_59361 = G__59398;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_59361){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_59361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_59385 = f__5526__auto__.call(null);(statearr_59385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___59386);
return statearr_59385;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5525__auto___59533 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_59503){var state_val_59504 = (state_59503[1]);if((state_val_59504 === 1))
{var inst_59466 = (new Array(n));var inst_59467 = inst_59466;var inst_59468 = 0;var state_59503__$1 = (function (){var statearr_59505 = state_59503;(statearr_59505[7] = inst_59468);
(statearr_59505[8] = inst_59467);
return statearr_59505;
})();var statearr_59506_59534 = state_59503__$1;(statearr_59506_59534[2] = null);
(statearr_59506_59534[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59504 === 2))
{var state_59503__$1 = state_59503;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59503__$1,4,ch);
} else
{if((state_val_59504 === 3))
{var inst_59501 = (state_59503[2]);var state_59503__$1 = state_59503;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59503__$1,inst_59501);
} else
{if((state_val_59504 === 4))
{var inst_59471 = (state_59503[9]);var inst_59471__$1 = (state_59503[2]);var inst_59472 = (inst_59471__$1 == null);var inst_59473 = cljs.core.not.call(null,inst_59472);var state_59503__$1 = (function (){var statearr_59507 = state_59503;(statearr_59507[9] = inst_59471__$1);
return statearr_59507;
})();if(inst_59473)
{var statearr_59508_59535 = state_59503__$1;(statearr_59508_59535[1] = 5);
} else
{var statearr_59509_59536 = state_59503__$1;(statearr_59509_59536[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59504 === 5))
{var inst_59468 = (state_59503[7]);var inst_59467 = (state_59503[8]);var inst_59476 = (state_59503[10]);var inst_59471 = (state_59503[9]);var inst_59475 = (inst_59467[inst_59468] = inst_59471);var inst_59476__$1 = (inst_59468 + 1);var inst_59477 = (inst_59476__$1 < n);var state_59503__$1 = (function (){var statearr_59510 = state_59503;(statearr_59510[10] = inst_59476__$1);
(statearr_59510[11] = inst_59475);
return statearr_59510;
})();if(cljs.core.truth_(inst_59477))
{var statearr_59511_59537 = state_59503__$1;(statearr_59511_59537[1] = 8);
} else
{var statearr_59512_59538 = state_59503__$1;(statearr_59512_59538[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59504 === 6))
{var inst_59468 = (state_59503[7]);var inst_59489 = (inst_59468 > 0);var state_59503__$1 = state_59503;if(cljs.core.truth_(inst_59489))
{var statearr_59514_59539 = state_59503__$1;(statearr_59514_59539[1] = 12);
} else
{var statearr_59515_59540 = state_59503__$1;(statearr_59515_59540[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59504 === 7))
{var inst_59499 = (state_59503[2]);var state_59503__$1 = state_59503;var statearr_59516_59541 = state_59503__$1;(statearr_59516_59541[2] = inst_59499);
(statearr_59516_59541[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59504 === 8))
{var inst_59467 = (state_59503[8]);var inst_59476 = (state_59503[10]);var tmp59513 = inst_59467;var inst_59467__$1 = tmp59513;var inst_59468 = inst_59476;var state_59503__$1 = (function (){var statearr_59517 = state_59503;(statearr_59517[7] = inst_59468);
(statearr_59517[8] = inst_59467__$1);
return statearr_59517;
})();var statearr_59518_59542 = state_59503__$1;(statearr_59518_59542[2] = null);
(statearr_59518_59542[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59504 === 9))
{var inst_59467 = (state_59503[8]);var inst_59481 = cljs.core.vec.call(null,inst_59467);var state_59503__$1 = state_59503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59503__$1,11,out,inst_59481);
} else
{if((state_val_59504 === 10))
{var inst_59487 = (state_59503[2]);var state_59503__$1 = state_59503;var statearr_59519_59543 = state_59503__$1;(statearr_59519_59543[2] = inst_59487);
(statearr_59519_59543[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59504 === 11))
{var inst_59483 = (state_59503[2]);var inst_59484 = (new Array(n));var inst_59467 = inst_59484;var inst_59468 = 0;var state_59503__$1 = (function (){var statearr_59520 = state_59503;(statearr_59520[7] = inst_59468);
(statearr_59520[8] = inst_59467);
(statearr_59520[12] = inst_59483);
return statearr_59520;
})();var statearr_59521_59544 = state_59503__$1;(statearr_59521_59544[2] = null);
(statearr_59521_59544[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59504 === 12))
{var inst_59467 = (state_59503[8]);var inst_59491 = cljs.core.vec.call(null,inst_59467);var state_59503__$1 = state_59503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59503__$1,15,out,inst_59491);
} else
{if((state_val_59504 === 13))
{var state_59503__$1 = state_59503;var statearr_59522_59545 = state_59503__$1;(statearr_59522_59545[2] = null);
(statearr_59522_59545[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59504 === 14))
{var inst_59496 = (state_59503[2]);var inst_59497 = cljs.core.async.close_BANG_.call(null,out);var state_59503__$1 = (function (){var statearr_59523 = state_59503;(statearr_59523[13] = inst_59496);
return statearr_59523;
})();var statearr_59524_59546 = state_59503__$1;(statearr_59524_59546[2] = inst_59497);
(statearr_59524_59546[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59504 === 15))
{var inst_59493 = (state_59503[2]);var state_59503__$1 = state_59503;var statearr_59525_59547 = state_59503__$1;(statearr_59525_59547[2] = inst_59493);
(statearr_59525_59547[1] = 14);
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
var state_machine__5511__auto____0 = (function (){var statearr_59529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_59529[0] = state_machine__5511__auto__);
(statearr_59529[1] = 1);
return statearr_59529;
});
var state_machine__5511__auto____1 = (function (state_59503){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_59503);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e59530){if((e59530 instanceof Object))
{var ex__5514__auto__ = e59530;var statearr_59531_59548 = state_59503;(statearr_59531_59548[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59503);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e59530;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__59549 = state_59503;
state_59503 = G__59549;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_59503){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_59503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_59532 = f__5526__auto__.call(null);(statearr_59532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___59533);
return statearr_59532;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5525__auto___59692 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5526__auto__ = (function (){var switch__5510__auto__ = (function (state_59662){var state_val_59663 = (state_59662[1]);if((state_val_59663 === 1))
{var inst_59621 = [];var inst_59622 = inst_59621;var inst_59623 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_59662__$1 = (function (){var statearr_59664 = state_59662;(statearr_59664[7] = inst_59623);
(statearr_59664[8] = inst_59622);
return statearr_59664;
})();var statearr_59665_59693 = state_59662__$1;(statearr_59665_59693[2] = null);
(statearr_59665_59693[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59663 === 2))
{var state_59662__$1 = state_59662;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59662__$1,4,ch);
} else
{if((state_val_59663 === 3))
{var inst_59660 = (state_59662[2]);var state_59662__$1 = state_59662;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59662__$1,inst_59660);
} else
{if((state_val_59663 === 4))
{var inst_59626 = (state_59662[9]);var inst_59626__$1 = (state_59662[2]);var inst_59627 = (inst_59626__$1 == null);var inst_59628 = cljs.core.not.call(null,inst_59627);var state_59662__$1 = (function (){var statearr_59666 = state_59662;(statearr_59666[9] = inst_59626__$1);
return statearr_59666;
})();if(inst_59628)
{var statearr_59667_59694 = state_59662__$1;(statearr_59667_59694[1] = 5);
} else
{var statearr_59668_59695 = state_59662__$1;(statearr_59668_59695[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59663 === 5))
{var inst_59623 = (state_59662[7]);var inst_59630 = (state_59662[10]);var inst_59626 = (state_59662[9]);var inst_59630__$1 = f.call(null,inst_59626);var inst_59631 = cljs.core._EQ_.call(null,inst_59630__$1,inst_59623);var inst_59632 = cljs.core.keyword_identical_QMARK_.call(null,inst_59623,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_59633 = (inst_59631) || (inst_59632);var state_59662__$1 = (function (){var statearr_59669 = state_59662;(statearr_59669[10] = inst_59630__$1);
return statearr_59669;
})();if(cljs.core.truth_(inst_59633))
{var statearr_59670_59696 = state_59662__$1;(statearr_59670_59696[1] = 8);
} else
{var statearr_59671_59697 = state_59662__$1;(statearr_59671_59697[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59663 === 6))
{var inst_59622 = (state_59662[8]);var inst_59647 = inst_59622.length;var inst_59648 = (inst_59647 > 0);var state_59662__$1 = state_59662;if(cljs.core.truth_(inst_59648))
{var statearr_59673_59698 = state_59662__$1;(statearr_59673_59698[1] = 12);
} else
{var statearr_59674_59699 = state_59662__$1;(statearr_59674_59699[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59663 === 7))
{var inst_59658 = (state_59662[2]);var state_59662__$1 = state_59662;var statearr_59675_59700 = state_59662__$1;(statearr_59675_59700[2] = inst_59658);
(statearr_59675_59700[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59663 === 8))
{var inst_59622 = (state_59662[8]);var inst_59630 = (state_59662[10]);var inst_59626 = (state_59662[9]);var inst_59635 = inst_59622.push(inst_59626);var tmp59672 = inst_59622;var inst_59622__$1 = tmp59672;var inst_59623 = inst_59630;var state_59662__$1 = (function (){var statearr_59676 = state_59662;(statearr_59676[7] = inst_59623);
(statearr_59676[8] = inst_59622__$1);
(statearr_59676[11] = inst_59635);
return statearr_59676;
})();var statearr_59677_59701 = state_59662__$1;(statearr_59677_59701[2] = null);
(statearr_59677_59701[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59663 === 9))
{var inst_59622 = (state_59662[8]);var inst_59638 = cljs.core.vec.call(null,inst_59622);var state_59662__$1 = state_59662;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59662__$1,11,out,inst_59638);
} else
{if((state_val_59663 === 10))
{var inst_59645 = (state_59662[2]);var state_59662__$1 = state_59662;var statearr_59678_59702 = state_59662__$1;(statearr_59678_59702[2] = inst_59645);
(statearr_59678_59702[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59663 === 11))
{var inst_59630 = (state_59662[10]);var inst_59626 = (state_59662[9]);var inst_59640 = (state_59662[2]);var inst_59641 = [];var inst_59642 = inst_59641.push(inst_59626);var inst_59622 = inst_59641;var inst_59623 = inst_59630;var state_59662__$1 = (function (){var statearr_59679 = state_59662;(statearr_59679[7] = inst_59623);
(statearr_59679[8] = inst_59622);
(statearr_59679[12] = inst_59642);
(statearr_59679[13] = inst_59640);
return statearr_59679;
})();var statearr_59680_59703 = state_59662__$1;(statearr_59680_59703[2] = null);
(statearr_59680_59703[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59663 === 12))
{var inst_59622 = (state_59662[8]);var inst_59650 = cljs.core.vec.call(null,inst_59622);var state_59662__$1 = state_59662;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59662__$1,15,out,inst_59650);
} else
{if((state_val_59663 === 13))
{var state_59662__$1 = state_59662;var statearr_59681_59704 = state_59662__$1;(statearr_59681_59704[2] = null);
(statearr_59681_59704[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59663 === 14))
{var inst_59655 = (state_59662[2]);var inst_59656 = cljs.core.async.close_BANG_.call(null,out);var state_59662__$1 = (function (){var statearr_59682 = state_59662;(statearr_59682[14] = inst_59655);
return statearr_59682;
})();var statearr_59683_59705 = state_59662__$1;(statearr_59683_59705[2] = inst_59656);
(statearr_59683_59705[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59663 === 15))
{var inst_59652 = (state_59662[2]);var state_59662__$1 = state_59662;var statearr_59684_59706 = state_59662__$1;(statearr_59684_59706[2] = inst_59652);
(statearr_59684_59706[1] = 14);
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
var state_machine__5511__auto____0 = (function (){var statearr_59688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_59688[0] = state_machine__5511__auto__);
(statearr_59688[1] = 1);
return statearr_59688;
});
var state_machine__5511__auto____1 = (function (state_59662){while(true){
var ret_value__5512__auto__ = (function (){try{while(true){
var result__5513__auto__ = switch__5510__auto__.call(null,state_59662);if(cljs.core.keyword_identical_QMARK_.call(null,result__5513__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5513__auto__;
}
break;
}
}catch (e59689){if((e59689 instanceof Object))
{var ex__5514__auto__ = e59689;var statearr_59690_59707 = state_59662;(statearr_59690_59707[5] = ex__5514__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59662);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e59689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__59708 = state_59662;
state_59662 = G__59708;
continue;
}
} else
{return ret_value__5512__auto__;
}
break;
}
});
state_machine__5511__auto__ = function(state_59662){
switch(arguments.length){
case 0:
return state_machine__5511__auto____0.call(this);
case 1:
return state_machine__5511__auto____1.call(this,state_59662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5511__auto____0;
state_machine__5511__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5511__auto____1;
return state_machine__5511__auto__;
})()
;})(switch__5510__auto__))
})();var state__5527__auto__ = (function (){var statearr_59691 = f__5526__auto__.call(null);(statearr_59691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5525__auto___59692);
return statearr_59691;
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