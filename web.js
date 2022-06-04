"use strict";
function require( path ){ return $node[ path ] };
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var globalThis = globalThis || ( typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this )
var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.ts
;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict";
//hyoo/hyoo.ts
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//mol/decor/decor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return new $mol_style_unit(value, '%'); }
        static px(value) { return new $mol_style_unit(value, 'px'); }
        static mm(value) { return new $mol_style_unit(value, 'mm'); }
        static cm(value) { return new $mol_style_unit(value, 'cm'); }
        static Q(value) { return new $mol_style_unit(value, 'Q'); }
        static in(value) { return new $mol_style_unit(value, 'in'); }
        static pc(value) { return new $mol_style_unit(value, 'pc'); }
        static pt(value) { return new $mol_style_unit(value, 'pt'); }
        static cap(value) { return new $mol_style_unit(value, 'cap'); }
        static ch(value) { return new $mol_style_unit(value, 'ch'); }
        static em(value) { return new $mol_style_unit(value, 'em'); }
        static rem(value) { return new $mol_style_unit(value, 'rem'); }
        static ex(value) { return new $mol_style_unit(value, 'ex'); }
        static ic(value) { return new $mol_style_unit(value, 'ic'); }
        static lh(value) { return new $mol_style_unit(value, 'lh'); }
        static rlh(value) { return new $mol_style_unit(value, 'rlh'); }
        static vh(value) { return new $mol_style_unit(value, 'vh'); }
        static vw(value) { return new $mol_style_unit(value, 'vw'); }
        static vi(value) { return new $mol_style_unit(value, 'vi'); }
        static vb(value) { return new $mol_style_unit(value, 'vb'); }
        static vmin(value) { return new $mol_style_unit(value, 'vmin'); }
        static vmax(value) { return new $mol_style_unit(value, 'vmax'); }
        static deg(value) { return new $mol_style_unit(value, 'deg'); }
        static rad(value) { return new $mol_style_unit(value, 'rad'); }
        static grad(value) { return new $mol_style_unit(value, 'grad'); }
        static turn(value) { return new $mol_style_unit(value, 'turn'); }
        static s(value) { return new $mol_style_unit(value, 's'); }
        static ms(value) { return new $mol_style_unit(value, 'ms'); }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//mol/style/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//mol/ambient/ambient.ts
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//mol/delegate/delegate.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//mol/owning/owning.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//mol/fail/fail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//mol/fail/hidden/hidden.ts
;
"use strict";
//mol/type/writable/writable.ts
;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//mol/object2/object2.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        promise;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//mol/after/tick/tick.ts
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//mol/dom/context/context.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//mol/dom/context/context.web.ts
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//mol/style/attach/attach.ts
;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name) {
            return new $mol_style_func('var', name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//mol/style/func/func.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 210deg;\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n\t\n:root, [mol_theme] {\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50% , calc( 54% + 44% * var(--mol_theme_luma) ) );\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0% , calc( 50% - 30% * var(--mol_theme_luma) ) );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 0%, calc( 50% + 50% * var(--mol_theme_luma) ), .2 );\n\t\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 0%, 50%, .05 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 50%, 1 );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 50%, calc( 50% - 5% * var(--mol_theme_luma) ) );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, calc( 50% - 15% * var(--mol_theme_luma) ) );\n\t\n}\n\n[mol_theme=\"$mol_theme_light\"] {\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50%, 40% );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 60%, 30% );\n\t--mol_theme_current: hsl( var(--mol_theme_hue), 100%, 20% );\n}\n\n[mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% + 25% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% + 25% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 40% );\n\t--mol_theme_hover: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 35% );\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n}\n");
})($ || ($ = {}));
//mol/theme/-css/theme.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        card: vary('--mol_theme_card'),
        current: vary('--mol_theme_current'),
        special: vary('--mol_theme_special'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//mol/theme/theme.ts
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//mol/object/object.ts
;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));
//mol/wire/cursor/cursor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.pop();
            this.data.pop();
            if (this.data.length === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));
//mol/wire/pub/pub.ts
;
"use strict";
//mol/wire/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    let auto = null;
    function $mol_wire_auto(next = auto) {
        return auto = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));
//mol/wire/wire.ts
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] = $['devtoolsFormatters'] || [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object' && typeof obj !== 'function')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//mol/dev/format/format.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
                this.data.pop();
                this.data.pop();
            }
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let tail = 0;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.data.length - 2, cursor);
                    this.data.pop();
                    this.data.pop();
                }
                else {
                    ++tail;
                }
            }
            for (; tail; --tail) {
                this.data.pop();
                this.data.pop();
            }
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/pub/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => {
                const complete = () => {
                    this._promise = null;
                    done();
                };
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(complete);
                }
                else {
                    setTimeout(complete, 16);
                }
            });
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//mol/after/frame/frame.web.ts
;
"use strict";
var $;
(function ($) {
    const handled = new WeakSet();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_frame(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if (this.cache instanceof Promise)
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super();
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
            this[Symbol.toStringTag] = id;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [-1]: '🔴',
                [-2]: '🟡',
                [-3]: '🟢',
                [-4]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(cursor + ' '), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if (result instanceof Promise) {
                    const put = (res) => {
                        if (this.cache === result)
                            this.put(res);
                        return res;
                    };
                    result = Object.assign(result.then(put, put), {
                        destructor: result['destructor']
                    });
                    handled.add(result);
                }
            }
            catch (error) {
                if (error instanceof Error || error instanceof Promise) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if (result instanceof Promise && !handled.has(result)) {
                    result = Object.assign(result.finally(() => {
                        if (this.cache === result)
                            this.absorb();
                    }), {
                        destructor: result['destructor']
                    });
                    handled.add(result);
                }
            }
            if (!(result instanceof Promise)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if (this.cache instanceof Promise) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!(this.cache instanceof Promise))
                    return this.cache;
                await this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));
//mol/wire/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));
//mol/guid/guid.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    function $mol_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));
//mol/key/key.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right['source'] && left.flags === right['flags'];
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap([[right, true]]);
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        let result;
        try {
            if (left_proto && !Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (left instanceof Error)
                result = left.stack === right.stack;
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right, compare) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!compare(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values(), $mol_compare_deep);
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys(), Object.is)
            && compare_iterator(left.values(), right.values(), $mol_compare_deep);
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (left_keys.length !== right_keys.length)
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], Reflect.get(right, key)))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));
//mol/compare/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const existen = $mol_wire_auto()?.track_next();
                reuse: if (existen) {
                    if (!(existen instanceof $mol_wire_task))
                        break reuse;
                    if (existen.host !== host)
                        break reuse;
                    if (existen.task !== task)
                        break reuse;
                    if (!$mol_compare_deep(existen.args, args))
                        break reuse;
                    return existen;
                }
                return new $mol_wire_task(`${host?.[Symbol.toStringTag] ?? host}.${task.name}(#)`, task, host, args);
            };
        }
        complete() {
            if (this.sub_empty)
                this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if (next instanceof Promise) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));
//mol/wire/task/task.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));
//mol/wire/method/method.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static getter(task, keys) {
            const field = task.name + '()';
            if (keys) {
                return function $mol_wire_atom_get(host, args) {
                    let dict, key, fiber;
                    key = `${host?.[Symbol.toStringTag] ?? host}.${task.name}(${args.map(v => $mol_key(v)).join(',')})`;
                    dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
                    if (dict) {
                        const existen = dict.get(key);
                        if (existen)
                            return existen;
                    }
                    else {
                        dict = (host ?? task)[field] = new Map();
                    }
                    fiber = new $mol_wire_atom(key, task, host, args);
                    dict.set(key, fiber);
                    return fiber;
                };
            }
            else {
                return function $mol_wire_atom_get(host, args) {
                    const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
                    if (existen)
                        return existen;
                    const key = `${host?.[Symbol.toStringTag] ?? host}.${field}`;
                    const fiber = new $mol_wire_atom(key, task, host, args);
                    (host ?? task)[field] = fiber;
                    return fiber;
                };
            }
        }
        static watching = new Set();
        static watch() {
            new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        destructor() {
            super.destructor();
            const prev = this.cache;
            if ($mol_owning_check(this, prev)) {
                prev.destructor();
            }
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete(this[Symbol.toStringTag]);
            }
        }
        put(next) {
            const prev = this.cache;
            if (next !== prev) {
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                this.cache = next;
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch { }
                }
                if (this.sub_from < this.data.length) {
                    if (!$mol_compare_deep(prev, next)) {
                        this.emit();
                    }
                }
            }
            this.cursor = $mol_wire_cursor.fresh;
            if (next instanceof Promise)
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
    $mol_wire_atom.watch();
})($ || ($ = {}));
//mol/wire/atom/atom.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_mem(keys) {
        const wrap = $mol_wire_mem_func(keys);
        return (host, field, descr) => {
            if (!descr)
                descr = Reflect.getOwnPropertyDescriptor(host, field);
            const orig = descr?.value ?? host[field];
            const sup = Reflect.getPrototypeOf(host);
            if (typeof sup[field] === 'function') {
                Object.defineProperty(orig, 'name', { value: sup[field].name });
            }
            const descr2 = {
                ...descr,
                value: wrap(orig)
            };
            Reflect.defineProperty(host, field, descr2);
            return descr2;
        };
    }
    $.$mol_wire_mem = $mol_wire_mem;
    function $mol_wire_mem_func(keys) {
        return (func) => {
            const persist = $mol_wire_atom.getter(func, keys);
            const wrapper = function (...args) {
                let atom = persist(this, args.slice(0, keys));
                if (args.length <= keys || args[keys] === undefined) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto() instanceof $mol_wire_task) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            };
            Object.defineProperty(wrapper, 'name', { value: func.name + ' ' });
            Object.assign(wrapper, { orig: func });
            return wrapper;
        };
    }
    $.$mol_wire_mem_func = $mol_wire_mem_func;
})($ || ($ = {}));
//mol/wire/mem/mem.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_mem(0);
    $.$mol_mem_key = $mol_wire_mem(1);
    $.$mol_mem_key2 = $mol_wire_mem(2);
    $.$mol_mem_key3 = $mol_wire_mem(3);
})($ || ($ = {}));
//mol/mem/mem.ts
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            this.resizes();
            return {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
        static resizes(next) { return next; }
    }
    __decorate([
        $mol_mem
    ], $mol_window, "size", null);
    __decorate([
        $mol_mem
    ], $mol_window, "resizes", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', event => $mol_window.resizes(event));
})($ || ($ = {}));
//mol/window/window.web.ts
;
"use strict";
var $;
(function ($) {
    const cacthed = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if (cacthed.get(error))
            return false;
        cacthed.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//mol/fail/catch/catch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if (error instanceof Promise)
            return false;
        if (!$mol_fail_catch(error))
            return false;
        console.error(error);
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));
//mol/fail/log/log.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//mol/view/selection/selection.ts
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//mol/maybe/maybe.ts
;
"use strict";
var $;
(function ($) {
    if ($mol_dom_context.document) {
        $mol_dom_context.document.documentElement.addEventListener('focus', (event) => {
            $mol_view_selection.focused($mol_maybe($mol_dom_context.document.activeElement));
        }, true);
    }
})($ || ($ = {}));
//mol/view/selection/selection.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//mol/wrapper/wrapper.ts
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//mol/memo/memo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//mol/dom/qname/qname.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is equired for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));
//mol/wire/watch/watch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//mol/const/const.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//mol/dom/render/attributes/attributes.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                const fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));
//mol/wire/async/async.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            if (typeof val === 'number') {
                style[name] = `${val}px`;
            }
            else {
                style[name] = val;
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//mol/dom/render/styles/styles.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//mol/dom/render/children/children.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//mol/dom/render/fields/fields.ts
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//mol/func/name/name.ts
;
"use strict";
//mol/type/keys/extract/extract.ts
;
"use strict";
//mol/type/pick/pick.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    const error_shower = new WeakMap();
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            $mol_wire_watch();
            const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
            return { width, height, left, right, top, bottom };
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            for (let event_name in events) {
                node.addEventListener(event_name, events[event_name], { passive: false });
            }
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
                $mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if (error instanceof Promise)
                    return node;
                if ((error_shower.get(error) ?? this) !== this)
                    return node;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
                error_shower.set(error, this);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (owner?.host instanceof $mol_view) {
                const suffix = owner.task.name.trim();
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.host.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push(this.$.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.host.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (!name)
                    continue;
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            try {
                for (const item of this.sub()) {
                    if (item instanceof $mol_view) {
                        yield* item.view_find(check, [...path, this]);
                    }
                }
            }
            catch (error) {
                if (error instanceof Promise)
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        async ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            $mol_wire_fiber.sync();
            view.dom_node().scrollIntoView({ block: align });
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//mol/view/view/view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tword-break: break-word;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\ttab-size: 4;\n}\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n    justify-content: center;\n}\n\n@keyframes mol_view_wait_move {\n\tfrom {\n\t\tbackground-position: 0 0;\n\t}\n\tto {\n\t\tbackground-position: 200vmax 0;\n\t}\n}\n\n@keyframes mol_view_wait_show {\n\tto {\n\t\tbackground-image: repeating-linear-gradient(\n\t\t\t45deg,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 0% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 5% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 45% ,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 50% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 55% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 95% ,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 100%\n\t\t);\n\t\tbackground-size: 200vmax 200vmax;\n\t}\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait_show .5s .5s linear forwards , mol_view_wait_move 1s linear infinite;\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//mol/view/view/-css/view.css.ts
;
"use strict";
var $;
(function ($) {
    if ($mol_dom_context.document) {
        setTimeout(() => $mol_view.autobind());
    }
})($ || ($ = {}));
//mol/view/view/view.web.ts
;
"use strict";
//mol/type/result/result.ts
;
"use strict";
//mol/type/error/error.ts
;
"use strict";
//mol/type/override/override.ts
;
"use strict";
//mol/style/properties/properties.ts
;
"use strict";
//mol/style/pseudo/class.ts
;
"use strict";
//mol/style/pseudo/element.ts
;
"use strict";
//mol/style/guard/guard.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//mol/style/sheet/sheet.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node(next) {
            const node = next || $mol_owning_get(this).host.dom_node();
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            for (let event_name in events) {
                node.addEventListener(event_name, events[event_name], { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//mol/plugin/plugin.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//mol/style/define/define.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));
//mol/gap/-css/gap.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
        round: vary('--mol_gap_round'),
        space: vary('--mol_gap_space'),
        blur: vary('--mol_gap_blur'),
    };
})($ || ($ = {}));
//mol/gap/gap.ts
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $mol_view {
        scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        scroll_left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//mol/scroll/-view.tree/scroll.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//mol/dom/listener/listener.ts
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//mol/print/print.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            overflow: 'auto',
        });
        $mol_style_define($mol_scroll, {
            display: 'flex',
            overflow: 'overlay',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
                basis: 0,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            scrollbar: {
                color: [$mol_theme.line, 'transparent'],
                width: 'thin',
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            ':hover': {
                '::-webkit-scrollbar': {
                    width: rem(.5),
                    height: rem(.5),
                },
            },
            '::-webkit-scrollbar-corner': {
                background: {
                    color: $mol_theme.line,
                },
            },
            '::-webkit-scrollbar-track': {
                background: {
                    color: 'transparent',
                },
            },
            '::-webkit-scrollbar-thumb': {
                background: {
                    color: $mol_theme.line,
                },
                border: {
                    radius: $mol_gap.round,
                },
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_book2 extends $mol_scroll {
        sub() {
            return this.pages();
        }
        minimal_width() {
            return 0;
        }
        Placeholder() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    $.$mol_book2 = $mol_book2;
})($ || ($ = {}));
//mol/book2/-view.tree/book2.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, next) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            return task();
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));
//mol/wire/probe/probe.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));
//mol/mem/cached/cached.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: overlay;\n\tscroll-snap-type: x mandatory;\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\t/* z-index: 0; */\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n}\n\n[mol_book2] > *:nth-child(odd):not([mol_book2_placeholder]) {\n\tbackground-color: var(--mol_theme_card);\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\t/* background: var(--mol_theme_back); */\n}\n");
})($ || ($ = {}));
//mol/book2/-css/book2.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => page?.title()).reverse().filter(Boolean).join(' | ');
            }
            sub() {
                const next = [...this.pages(), this.Placeholder()];
                const prev = $mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    new $mol_after_frame(() => n.dom_node().scrollIntoView({ behavior: 'smooth' }));
                    break;
                }
                return next;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/book2/book2.view.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                const fiber = temp(self, args);
                return fiber.sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));
//mol/wire/sync/sync.ts
;
"use strict";
//node/node.ts
;
"use strict";
var $node = $node || {};
//node/node.web.ts
;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//mol/charset/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    function $mol_charset_decode(value, code = 'utf8') {
        return new TextDecoder(code).decode(value);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//mol/charset/decode/decode.ts
;
"use strict";
var $;
(function ($) {
    const meta_size = 36;
    function $hyoo_crowd_chunk_pack(raw) {
        const data = $mol_charset_encode(JSON.stringify(raw.data));
        const pack = new Uint8Array(meta_size + data.length + (4 - data.length % 4));
        const pack2 = new Uint16Array(pack.buffer);
        const pack4 = new Uint32Array(pack.buffer);
        pack4[0] = raw.head;
        pack2[2] = raw.head / 2 ** 32;
        pack2[3] = raw.self;
        pack4[2] = raw.self / 2 ** 16;
        pack4[3] = raw.prev;
        pack2[8] = raw.prev / 2 ** 32;
        pack2[9] = raw.next;
        pack4[5] = raw.next / 2 ** 16;
        pack4[6] = raw.peer;
        pack2[14] = raw.peer / 2 ** 32;
        pack2[15] = data.length;
        pack4[8] = raw.time;
        pack.set(data, meta_size);
        return pack;
    }
    $.$hyoo_crowd_chunk_pack = $hyoo_crowd_chunk_pack;
    function $hyoo_crowd_chunk_unpack(pack) {
        const pack2 = new Uint16Array(pack.buffer, pack.byteOffset, pack.byteLength / 2);
        const pack4 = new Uint32Array(pack.buffer, pack.byteOffset, pack.byteLength / 4);
        const chunk = {
            head: pack4[0] + pack2[2] * 2 ** 32,
            self: pack2[3] + pack4[2] * 2 ** 16,
            prev: pack4[3] + pack2[8] * 2 ** 32,
            next: pack2[9] + pack4[5] * 2 ** 16,
            peer: pack4[6] + pack2[14] * 2 ** 32,
            time: pack4[8],
            data: JSON.parse($mol_charset_decode(new Uint8Array(pack.buffer, pack.byteOffset + meta_size, pack2[15]))),
        };
        return chunk;
    }
    $.$hyoo_crowd_chunk_unpack = $hyoo_crowd_chunk_unpack;
    function $hyoo_crowd_chunk_compare(left, right) {
        if (left.time > right.time)
            return 1;
        if (left.time < right.time)
            return -1;
        return left.peer - right.peer;
    }
    $.$hyoo_crowd_chunk_compare = $hyoo_crowd_chunk_compare;
})($ || ($ = {}));
//hyoo/crowd/chunk/chunk.ts
;
"use strict";
var $;
(function ($) {
    function $mol_db_response(request) {
        return new Promise((done, fail) => {
            request.onerror = () => fail(new Error(request.error.message));
            request.onsuccess = () => done(request.result);
        });
    }
    $.$mol_db_response = $mol_db_response;
})($ || ($ = {}));
//mol/db/response/response.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_store {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get path() {
            return this.native.keyPath;
        }
        get incremental() {
            return this.native.autoIncrement;
        }
        get indexes() {
            return new Proxy({}, {
                ownKeys: () => [...this.native.indexNames],
                has: (_, name) => this.native.indexNames.contains(name),
                get: (_, name) => new $mol_db_index(this.native.index(name))
            });
        }
        index_make(name, path = [], unique = false, multiEntry = false) {
            return this.native.createIndex(name, path, { multiEntry, unique });
        }
        index_drop(name) {
            this.native.deleteIndex(name);
            return this;
        }
        get transaction() {
            return new $mol_db_transaction(this.native.transaction);
        }
        get db() {
            return this.transaction.db;
        }
        clear() {
            return $mol_db_response(this.native.clear());
        }
        count(keys) {
            return $mol_db_response(this.native.count(keys));
        }
        put(doc, key) {
            return $mol_db_response(this.native.put(doc, key));
        }
        get(key) {
            return $mol_db_response(this.native.get(key));
        }
        select(key, count) {
            return $mol_db_response(this.native.getAll(key, count));
        }
        drop(keys) {
            return $mol_db_response(this.native.delete(keys));
        }
    }
    $.$mol_db_store = $mol_db_store;
})($ || ($ = {}));
//mol/db/store/store.ts
;
"use strict";
//mol/db/store/store_schema.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_index {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get paths() {
            return this.native.keyPath;
        }
        get unique() {
            return this.native.unique;
        }
        get multiple() {
            return this.native.multiEntry;
        }
        get store() {
            return new $mol_db_store(this.native.objectStore);
        }
        get transaction() {
            return this.store.transaction;
        }
        get db() {
            return this.store.db;
        }
        count(keys) {
            return $mol_db_response(this.native.count(keys));
        }
        get(key) {
            return $mol_db_response(this.native.get(key));
        }
        select(key, count) {
            return $mol_db_response(this.native.getAll(key, count));
        }
    }
    $.$mol_db_index = $mol_db_index;
})($ || ($ = {}));
//mol/db/index/index.ts
;
"use strict";
//mol/db/index/index_schema.ts
;
"use strict";
var $;
(function ($) {
    async function $mol_db(name, ...migrations) {
        const request = this.$mol_dom_context.indexedDB.open(name, migrations.length ? migrations.length + 1 : undefined);
        request.onupgradeneeded = event => {
            migrations.splice(0, event.oldVersion - 1);
            const transaction = new $mol_db_transaction(request.transaction);
            for (const migrate of migrations)
                migrate(transaction);
        };
        const db = await $mol_db_response(request);
        return new $mol_db_database(db);
    }
    $.$mol_db = $mol_db;
})($ || ($ = {}));
//mol/db/db.ts
;
"use strict";
//mol/db/db_schema.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_clock extends Map {
        now = 0;
        constructor(entries) {
            super(entries);
            if (entries) {
                for (const [peer, time] of entries) {
                    if (this.now < time)
                        this.now = time;
                }
            }
        }
        sync(right) {
            for (const [peer, time] of right) {
                this.see(peer, time);
            }
        }
        see(peer, time) {
            if (this.now < time)
                this.now = time;
            const peer_time = this.get(peer);
            if (!peer_time || peer_time < time) {
                this.set(peer, time);
            }
            return time;
        }
        fresh(peer, time) {
            return time > (this.get(peer) ?? 0);
        }
        ahead(clock) {
            for (const [peer, time] of this.entries()) {
                if (clock.fresh(peer, time))
                    return true;
            }
            return false;
        }
        tick(peer) {
            return this.see(peer, Math.max(Date.now(), this.now + 1));
        }
        clear() {
            super.clear();
            this.now = 0;
        }
    }
    $.$hyoo_crowd_clock = $hyoo_crowd_clock;
})($ || ($ = {}));
//hyoo/crowd/clock/clock.ts
;
"use strict";
var $;
(function ($) {
    function $mol_hash_string(str, seed = 0) {
        let h1 = 0xdeadbeef ^ seed;
        let h2 = 0x41c6ce57 ^ seed;
        for (let i = 0; i < str.length; i++) {
            const ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return 4294967296 * (((1 << 16) - 1) & h2) + (h1 >>> 0);
    }
    $.$mol_hash_string = $mol_hash_string;
})($ || ($ = {}));
//mol/hash/string/string.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//mol/state/local/local.ts
;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => $.$mol_state_local.changes(event));
})($ || ($ = {}));
//mol/state/local/local.web.ts
;
"use strict";
var $;
(function ($) {
    const algorithm = {
        name: "ECDSA",
        hash: { name: "SHA-256" },
        namedCurve: 'P-256',
    };
    async function $mol_crypto_auditor_pair() {
        const pair = await $.crypto.subtle.generateKey(algorithm, true, ['sign', 'verify']);
        return {
            public: new $mol_crypto_auditor_public(pair.publicKey),
            private: new $mol_crypto_auditor_private(pair.privateKey),
        };
    }
    $.$mol_crypto_auditor_pair = $mol_crypto_auditor_pair;
    class $mol_crypto_auditor_public extends Object {
        native;
        static size = 91;
        constructor(native) {
            super();
            this.native = native;
        }
        static async from(serial) {
            return new this(await crypto.subtle.importKey('spki', serial, algorithm, true, ['verify']));
        }
        async serial() {
            return await crypto.subtle.exportKey('spki', this.native);
        }
        async verify(data, sign) {
            return await crypto.subtle.verify(algorithm, this.native, sign, data);
        }
    }
    $.$mol_crypto_auditor_public = $mol_crypto_auditor_public;
    class $mol_crypto_auditor_private extends Object {
        native;
        static size = 138;
        constructor(native) {
            super();
            this.native = native;
        }
        static async from(serial) {
            return new this(await crypto.subtle.importKey('pkcs8', serial, algorithm, true, ['sign']));
        }
        async serial() {
            return await crypto.subtle.exportKey('pkcs8', this.native);
        }
        async sign(data) {
            return await crypto.subtle.sign(algorithm, this.native, data);
        }
    }
    $.$mol_crypto_auditor_private = $mol_crypto_auditor_private;
    $.$mol_crypto_auditor_sign_size = 64;
})($ || ($ = {}));
//mol/crypto/auditor/auditor.ts
;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode(src) {
        throw new Error('Not implemented');
    }
    $.$mol_base64_encode = $mol_base64_encode;
})($ || ($ = {}));
//mol/base64/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    function binary_string(bytes) {
        let binary = '';
        if (typeof bytes !== 'string') {
            for (const byte of bytes)
                binary += String.fromCharCode(byte);
        }
        else {
            binary = unescape(encodeURIComponent(bytes));
        }
        return binary;
    }
    function $mol_base64_encode_web(str) {
        return $mol_dom_context.btoa(binary_string(str));
    }
    $.$mol_base64_encode_web = $mol_base64_encode_web;
    $.$mol_base64_encode = $mol_base64_encode_web;
})($ || ($ = {}));
//mol/base64/encode/encode.web.ts
;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode(base64) {
        throw new Error('Not implemented');
    }
    $.$mol_base64_decode = $mol_base64_decode;
})($ || ($ = {}));
//mol/base64/decode/decode.ts
;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode_web(base64Str) {
        return new Uint8Array($mol_dom_context.atob(base64Str).split('').map(c => c.charCodeAt(0)));
    }
    $.$mol_base64_decode_web = $mol_base64_decode_web;
    $.$mol_base64_decode = $mol_base64_decode_web;
})($ || ($ = {}));
//mol/base64/decode/decode.web.ts
;
"use strict";
//mol/type/partial/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElementNS: (space, name) => $mol_dom_context.document.createElementNS(space, name),
        createDocumentFragment: () => $mol_dom_context.document.createDocumentFragment(),
    };
    $.$mol_jsx_frag = '';
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        if (Elem && $.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(id)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        const guid = $.$mol_jsx_prefix + id;
        let node = guid ? $.$mol_jsx_document.getElementById(guid) : null;
        if (typeof Elem !== 'string') {
            if ('prototype' in Elem) {
                const view = node && node[Elem] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                node = view.valueOf();
                node[Elem] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                }
            }
        }
        if (!node) {
            node = Elem
                ? $.$mol_jsx_document.createElementNS(props?.xmlns ?? 'http://www.w3.org/1999/xhtml', Elem)
                : $.$mol_jsx_document.createDocumentFragment();
        }
        $mol_dom_render_children(node, [].concat(...childNodes));
        if (!Elem)
            return node;
        for (const key in props) {
            if (typeof props[key] === 'string') {
                ;
                node.setAttribute(key, props[key]);
            }
            else if (props[key] &&
                typeof props[key] === 'object' &&
                Reflect.getPrototypeOf(props[key]) === Reflect.getPrototypeOf({})) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            else {
                node[key] = props[key];
            }
        }
        if (guid)
            node.id = guid;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));
//mol/jsx/jsx.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_node {
        doc;
        head;
        constructor(doc, head) {
            this.doc = doc;
            this.head = head;
        }
        static for(doc, head = 0) {
            return new this(doc, head);
        }
        as(Node) {
            return new Node(this.doc, this.head);
        }
        chunks() {
            return this.doc.chunk_alive(this.head);
        }
        nodes(Node) {
            return this.chunks().map(chunk => new Node(this.doc, chunk.self));
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), $mol_dev_format_shade('/'), $mol_dev_format_auto(this.as($hyoo_crowd_list).list()), $mol_dev_format_shade('/'), $mol_dev_format_auto(this.nodes($hyoo_crowd_node)));
        }
    }
    $.$hyoo_crowd_node = $hyoo_crowd_node;
})($ || ($ = {}));
//hyoo/crowd/node/node.tsx
;
"use strict";
var $;
(function ($) {
    function $mol_reconcile({ prev, from, to, next, equal, drop, insert, update, }) {
        let p = from;
        let n = 0;
        let lead = p ? prev[p - 1] : null;
        if (to > prev.length)
            $mol_fail(new RangeError(`To(${to}) greater then length(${prev.length})`));
        if (from > to)
            $mol_fail(new RangeError(`From(${to}) greater then to(${to})`));
        while (p < to || n < next.length) {
            if (p < to && n < next.length && equal(next[n], prev[p])) {
                lead = prev[p];
                ++p;
                ++n;
            }
            else if (next.length - n > to - p) {
                lead = insert(next[n], lead);
                ++n;
            }
            else if (next.length - n < to - p) {
                lead = drop(prev[p], lead);
                ++p;
            }
            else {
                lead = update(next[n], prev[p], lead);
                ++p;
                ++n;
            }
        }
    }
    $.$mol_reconcile = $mol_reconcile;
})($ || ($ = {}));
//mol/reconcile/reconcile.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_list extends $hyoo_crowd_node {
        list(next) {
            const chunks = this.chunks();
            if (next === undefined) {
                return chunks.map(chunk => chunk.data);
            }
            else {
                this.insert(next, 0, chunks.length);
                return next;
            }
        }
        insert(next, from = this.chunks().length, to = from) {
            $mol_reconcile({
                prev: this.chunks(),
                from,
                to,
                next,
                equal: (next, prev) => prev.data === next,
                drop: (prev, lead) => this.doc.wipe(prev),
                insert: (next, lead) => this.doc.put(this.head, this.doc.id_new(), lead?.self ?? 0, next),
                update: (next, prev, lead) => this.doc.put(prev.head, prev.self, lead?.self ?? 0, next),
            });
        }
        move(from, to) {
            const chunks = this.chunks();
            const lead = to ? chunks[to - 1].self : 0;
            return this.doc.move(chunks[from], this.head, lead);
        }
        cut(seat) {
            return this.doc.wipe(this.chunks()[seat]);
        }
    }
    $.$hyoo_crowd_list = $hyoo_crowd_list;
})($ || ($ = {}));
//hyoo/crowd/list/list.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_struct extends $hyoo_crowd_node {
        sub(key, Node) {
            return new Node(this.doc, $mol_hash_string(key, this.head));
        }
    }
    $.$hyoo_crowd_struct = $hyoo_crowd_struct;
})($ || ($ = {}));
//hyoo/crowd/struct/struct.ts
;
"use strict";
var $;
(function ($) {
    const desync = 60 * 60 * 1000;
    class $hyoo_crowd_doc {
        peer;
        constructor(peer = 0) {
            this.peer = peer;
            if (!peer)
                this.peer = this.id_new();
        }
        destructor() { }
        _clock = new $hyoo_crowd_clock;
        get clock() {
            this.pub.promote();
            return this._clock;
        }
        pub = new $mol_wire_pub;
        _chunk_all = new Map();
        _chunk_lists = new Map();
        _chunk_alive = new Map();
        size() {
            return this._chunk_all.size;
        }
        chunk(head, self) {
            return this._chunk_all.get(`${head}/${self}`) ?? null;
        }
        chunk_list(head) {
            let chunks = this._chunk_lists.get(head);
            if (!chunks)
                this._chunk_lists.set(head, chunks = Object.assign([], { dirty: false }));
            return chunks;
        }
        chunk_alive(head) {
            this.pub.promote();
            let chunks = this._chunk_alive.get(head);
            if (!chunks) {
                const all = this.chunk_list(head);
                if (all.dirty)
                    this.resort(head);
                chunks = all.filter(chunk => chunk.data !== null);
                this._chunk_alive.set(head, chunks);
            }
            return chunks;
        }
        root = new $hyoo_crowd_struct(this, 0);
        id_new() {
            return 1 + Math.floor(Math.random() * (2 ** (6 * 8) - 2));
        }
        fork(peer) {
            return new $hyoo_crowd_doc(peer).apply(this.delta());
        }
        delta(clock = new $hyoo_crowd_clock) {
            this.pub.promote();
            const delta = [];
            for (const chunk of this._chunk_all.values()) {
                const time = clock.get(chunk.peer);
                if (time && chunk.time <= time)
                    continue;
                delta.push(chunk);
            }
            delta.sort($hyoo_crowd_chunk_compare);
            return delta;
        }
        toJSON() {
            return this.delta();
        }
        resort(head) {
            const chunks = this._chunk_lists.get(head);
            const queue = chunks.splice(0).sort((left, right) => {
                return -$hyoo_crowd_chunk_compare(left, right);
            });
            for (let cursor = queue.length - 1; cursor >= 0; --cursor) {
                const kid = queue[cursor];
                let index = 0;
                if (kid.prev) {
                    let prev = this.chunk(head, kid.prev);
                    index = chunks.indexOf(prev) + 1;
                    if (!index) {
                        index = chunks.length;
                        if (kid.next) {
                            const next = this.chunk(head, kid.next);
                            index = chunks.indexOf(next);
                            if (index === -1)
                                continue;
                        }
                    }
                }
                chunks.splice(index, 0, kid);
                queue.splice(cursor, 1);
                cursor = queue.length;
            }
            this._chunk_lists.set(head, chunks);
            chunks.dirty = false;
            return chunks;
        }
        apply(delta) {
            const deadline = Date.now() + desync;
            for (const next of delta) {
                if (next.time > deadline) {
                    console.warn('Ignored chunk from far future', next);
                    continue;
                }
                this._clock.see(next.peer, next.time);
                const chunks = this.chunk_list(next.head);
                const guid = `${next.head}/${next.self}`;
                let prev = this._chunk_all.get(guid);
                if (prev) {
                    if ($hyoo_crowd_chunk_compare(prev, next) > 0)
                        continue;
                    chunks.splice(chunks.indexOf(prev), 1, next);
                }
                else {
                    chunks.push(next);
                }
                this._chunk_all.set(guid, next);
                chunks.dirty = true;
                this._chunk_alive.set(next.head, undefined);
            }
            this.pub.emit();
            return this;
        }
        put(head, self, prev, data) {
            let chunk_old = this.chunk(head, self);
            let chunk_prev = prev ? this.chunk(head, prev) : null;
            const chunk_list = this.chunk_list(head);
            if (chunk_old) {
                chunk_list.splice(chunk_list.indexOf(chunk_old), 1);
            }
            const seat = chunk_prev ? chunk_list.indexOf(chunk_prev) + 1 : 0;
            const next = chunk_list[seat]?.self ?? 0;
            const chunk_new = {
                head,
                self,
                prev: prev,
                next,
                peer: this.peer,
                time: this._clock.tick(this.peer),
                data,
            };
            this._chunk_all.set(`${chunk_new.head}/${chunk_new.self}`, chunk_new);
            chunk_list.splice(seat, 0, chunk_new);
            this._chunk_alive.set(head, undefined);
            this.pub.emit();
            return chunk_new;
        }
        wipe(chunk) {
            if (chunk.data === null)
                return chunk;
            for (const kid of this.chunk_list(chunk.self)) {
                this.wipe(kid);
            }
            return this.put(chunk.head, chunk.self, chunk.prev, null);
        }
        move(chunk, head, prev) {
            this.wipe(chunk);
            return this.put(head, chunk.self, prev, chunk.data);
        }
        insert(chunk, head, seat) {
            const prev = seat ? this.chunk_list(head)[seat - 1].self : 0;
            return this.move(chunk, head, prev);
        }
    }
    $.$hyoo_crowd_doc = $hyoo_crowd_doc;
})($ || ($ = {}));
//hyoo/crowd/doc/doc.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_reg extends $hyoo_crowd_node {
        value(next) {
            const chunks = this.chunks();
            let last;
            for (const chunk of chunks) {
                if (!last || $hyoo_crowd_chunk_compare(chunk, last) > 0)
                    last = chunk;
            }
            if (next === undefined) {
                return last?.data ?? null;
            }
            else {
                if (last?.data === next)
                    return next;
                for (const chunk of chunks) {
                    if (chunk === last)
                        continue;
                    this.doc.wipe(chunk);
                }
                this.doc.put(this.head, last?.self ?? this.doc.id_new(), 0, next);
                return next;
            }
        }
        str(next) {
            return String(this.value(next) ?? '');
        }
        numb(next) {
            return Number(this.value(next) ?? 0);
        }
        bool(next) {
            return Boolean(this.value(next) ?? false);
        }
    }
    $.$hyoo_crowd_reg = $hyoo_crowd_reg;
})($ || ($ = {}));
//hyoo/crowd/reg/reg.ts
;
"use strict";
//mol/type/equals/equals.ts
;
"use strict";
//mol/type/merge/merge.ts
;
"use strict";
//mol/type/intersect/intersect.ts
;
"use strict";
//mol/unicode/unicode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        groups;
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = params => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));
//mol/regexp/regexp.ts
;
"use strict";
var $;
(function ($) {
    const { unicode_only, line_end, tab, repeat_greedy, optional, forbid_after, char_only, char_except } = $mol_regexp;
    $.$hyoo_crowd_tokenizer = $mol_regexp.from({
        token: {
            'line-break': line_end,
            'indents': {
                tab,
                spaces: '  ',
            },
            'spaces': repeat_greedy([
                forbid_after(line_end),
                unicode_only('White_Space'),
            ], 1),
            'emoji': [
                unicode_only('Extended_Pictographic'),
                optional(unicode_only('Emoji_Modifier')),
                repeat_greedy([
                    unicode_only('Emoji_Component'),
                    unicode_only('Extended_Pictographic'),
                    optional(unicode_only('Emoji_Modifier')),
                ]),
            ],
            'Word': [
                repeat_greedy(char_only([
                    unicode_only('General_Category', 'Uppercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ]), 1),
                repeat_greedy(char_only([
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ])),
            ],
            'word': repeat_greedy(char_only([
                unicode_only('General_Category', 'Lowercase_Letter'),
                unicode_only('Diacritic'),
                unicode_only('General_Category', 'Number'),
            ]), 1),
            'others': [
                repeat_greedy(char_except([
                    unicode_only('General_Category', 'Uppercase_Letter'),
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                    unicode_only('White_Space'),
                ]), 1),
            ],
        },
    });
})($ || ($ = {}));
//hyoo/crowd/tokenizer/tokenizer.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_text extends $hyoo_crowd_node {
        text(next) {
            if (next === undefined) {
                return this.as($hyoo_crowd_list).list().filter(item => typeof item === 'string').join('');
            }
            else {
                this.write(next, 0, -1);
                return next;
            }
        }
        write(next, str_from = -1, str_to = str_from) {
            const list = this.chunks();
            let from = str_from < 0 ? list.length : 0;
            let word = '';
            while (from < list.length) {
                word = String(list[from].data);
                if (str_from <= word.length) {
                    next = word.slice(0, str_from) + next;
                    break;
                }
                str_from -= word.length;
                if (str_to > 0)
                    str_to -= word.length;
                from++;
            }
            let to = str_to < 0 ? list.length : from;
            while (to < list.length) {
                word = String(list[to].data);
                to++;
                if (str_to < word.length) {
                    next = next + word.slice(str_to);
                    break;
                }
                str_to -= word.length;
            }
            if (from && from === list.length) {
                --from;
                next = String(list[from].data) + next;
            }
            const words = [...next.matchAll($hyoo_crowd_tokenizer)].map(token => token[0]);
            this.as($hyoo_crowd_list).insert(words, from, to);
            return this;
        }
        point_by_offset(offset) {
            let off = offset;
            for (const chunk of this.chunks()) {
                const len = String(chunk.data).length;
                if (off < len)
                    return { chunk: chunk.self, offset: off };
                else
                    off -= len;
            }
            return { chunk: this.head, offset: offset };
        }
        offset_by_point(point) {
            let offset = 0;
            for (const chunk of this.chunks()) {
                if (chunk.self === point.chunk)
                    return offset + point.offset;
                offset += String(chunk.data).length;
            }
            return offset;
        }
    }
    $.$hyoo_crowd_text = $hyoo_crowd_text;
})($ || ($ = {}));
//hyoo/crowd/text/text.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));
//mol/action/action.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_database {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get version() {
            return this.native.version;
        }
        get stores() {
            return [...this.native.objectStoreNames];
        }
        read(...names) {
            return new $mol_db_transaction(this.native.transaction(names, 'readonly')).stores;
        }
        change(...names) {
            return new $mol_db_transaction(this.native.transaction(names, 'readwrite'));
        }
        kill() {
            this.native.close();
            const request = $mol_dom_context.indexedDB.deleteDatabase(this.name);
            request.onblocked = console.error;
            return $mol_db_response(request).then(() => { });
        }
        destructor() {
            this.native.close();
        }
    }
    $.$mol_db_database = $mol_db_database;
})($ || ($ = {}));
//mol/db/database/database.ts
;
"use strict";
var $;
(function ($) {
    class $mol_db_transaction {
        native;
        constructor(native) {
            this.native = native;
        }
        get stores() {
            return new Proxy({}, {
                ownKeys: () => [...this.native.objectStoreNames],
                has: (_, name) => this.native.objectStoreNames.contains(name),
                get: (_, name) => new $mol_db_store(this.native.objectStore(name)),
            });
        }
        store_make(name) {
            return this.native.db.createObjectStore(name, { autoIncrement: true });
        }
        store_drop(name) {
            this.native.db.deleteObjectStore(name);
            return this;
        }
        abort() {
            this.native.abort();
        }
        commit() {
            this.native.commit();
            return new Promise((done, fail) => {
                this.native.onerror = () => fail(new Error(this.native.error.message));
                this.native.oncomplete = () => done();
            });
        }
        get db() {
            return new $mol_db_database(this.native.db);
        }
    }
    $.$mol_db_transaction = $mol_db_transaction;
})($ || ($ = {}));
//mol/db/transaction/transaction.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_shared extends $mol_object2 {
        db() {
            return $mol_wire_sync(this).db_init();
        }
        db_init() {
            return this.$.$mol_db('$mol_state_shared_db', mig => mig.store_make('Chunks'), mig => null, mig => mig.store_drop('Chunks'), mig => mig.store_make('Docs'));
        }
        server() {
            return `wss://sync-hyoo-ru.herokuapp.com/`;
        }
        db_clock = new $hyoo_crowd_clock;
        peer() {
            return $mol_hash_string(this.keys_serial().public);
        }
        keys_serial() {
            const key = this + '.keys()';
            let serial = this.$.$mol_state_local.value(key);
            if (serial)
                return serial;
            const pair = $mol_wire_sync(this.$).$mol_crypto_auditor_pair();
            serial = {
                public: $mol_base64_encode(new Uint8Array($mol_wire_sync(pair.public).serial())),
                private: $mol_base64_encode(new Uint8Array($mol_wire_sync(pair.private).serial())),
            };
            this.$.$mol_state_local.value(key, serial);
            return serial;
        }
        keys() {
            const prev = this.keys_serial();
            return {
                public: $mol_wire_sync(this.$.$mol_crypto_auditor_public).from($mol_base64_decode(prev.public)),
                private: $mol_wire_sync(this.$.$mol_crypto_auditor_private).from($mol_base64_decode(prev.private)),
            };
        }
        store() {
            return new this.$.$hyoo_crowd_doc(this.peer());
        }
        path() {
            return '';
        }
        node() {
            return this.store().root;
        }
        doc(key) {
            if (!key)
                return this;
            const State = this.constructor;
            const state = new State;
            state.path = $mol_const(this.path() ? this.path() + '/' + key : key);
            state.doc = k => this.doc(key + '/' + k);
            state.socket = () => this.socket();
            state.peer = () => this.peer();
            state.keys_serial = () => this.keys_serial();
            state.keys = () => this.keys();
            state.db = () => this.db();
            return state;
        }
        sub(key) {
            const State = this.constructor;
            const state = new State;
            state.node = $mol_const(this.node().sub(key, $hyoo_crowd_struct));
            state.sync = () => this.sync();
            state.path = () => this.path();
            state.db = () => this.db();
            return state;
        }
        request_done(next) {
            return (res) => { };
        }
        sync() {
            try {
                this.db_sync();
                this.server_sync();
            }
            catch (error) {
                if (error instanceof Promise)
                    return null;
                $mol_fail_log(error);
            }
            return null;
        }
        db_sync() {
            this.db();
            const store = this.store();
            if (store.clock.now) {
                if (store.clock.ahead(this.db_clock)) {
                    $mol_wire_sync(this).db_save();
                }
            }
            else {
                $mol_wire_sync(this).db_load();
            }
            return null;
        }
        async db_load() {
            const db = this.db();
            const Docs = db.read('Docs').Docs;
            const path = this.path();
            const delta = await Docs.get([path]);
            if (!delta)
                return;
            const store = this.store();
            store.apply(delta);
            this.db_clock.sync(store.clock);
        }
        async db_save() {
            const path = this.path();
            const db = this.db();
            const store = this.store();
            const trans = db.change('Docs');
            const Docs = trans.stores.Docs;
            const stored = await Docs.get([path]) ?? [];
            store.apply(stored);
            Docs.put(store.delta(), [path]);
            trans.commit();
            this.db_clock.sync(store.clock);
            return null;
        }
        server_sync() {
            this.socket();
            const store = this.store();
            const server_clock = this.server_clock();
            const delta = store.delta(server_clock);
            if (delta.length || !server_clock.now) {
                this.send(this.path(), delta);
                server_clock.sync(store.clock);
            }
            return null;
        }
        value(next) {
            const res = this.node().as($hyoo_crowd_reg).value(next);
            this.sync();
            return res;
        }
        list(next) {
            const res = this.node().as($hyoo_crowd_list).list(next) ?? [];
            this.sync();
            return res;
        }
        text(next) {
            const res = this.node().as($hyoo_crowd_text).text(next) ?? '';
            this.sync();
            return res;
        }
        selection(next) {
            const node = this.node().as($hyoo_crowd_text);
            if (next) {
                this.selection_range(next.map(offset => node.point_by_offset(offset)));
                return next;
            }
            else {
                return this.selection_range().map(point => node.offset_by_point(point));
            }
        }
        selection_range(next) {
            return next ?? [{ chunk: 0, offset: 0 }, { chunk: 0, offset: 0 }];
        }
        server_clock() {
            this.socket();
            return new $hyoo_crowd_clock;
        }
        socket(reset) {
            this.heartbeat();
            const socket = new $mol_dom_context.WebSocket(this.server());
            socket.onmessage = event => {
                if (!event.data)
                    return;
                const message = JSON.parse(event.data);
                if (!Array.isArray(message))
                    return;
                let [path, ...delta] = message;
                if (typeof path !== 'string')
                    return;
                if (!delta)
                    return;
                const doc = this.doc(path);
                const store = doc.store();
                if (!delta.length) {
                }
                store.apply(delta);
                doc.server_clock().sync(store.clock);
            };
            socket.onclose = () => {
                setTimeout(() => this.socket(null), 5000);
            };
            return socket;
        }
        heartbeat() {
            const timer = setInterval(() => {
                const socket = this.socket();
                if (socket.readyState !== socket.OPEN)
                    return;
                socket.send('');
            }, 30000);
            return {
                destructor: () => clearInterval(timer)
            };
        }
        send(key, next) {
            const socket = this.socket();
            $mol_wire_sync(this).wait_connection();
            if (socket.readyState !== socket.OPEN)
                return;
            const message = next === undefined ? [key] : [key, ...next];
            socket.send(JSON.stringify(message));
        }
        wait_connection() {
            const socket = this.socket();
            if (socket.readyState !== socket.CONNECTING)
                return;
            return new Promise(done => socket.addEventListener('open', done));
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "db", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "peer", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "keys_serial", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "keys", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "store", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_shared.prototype, "doc", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_shared.prototype, "sub", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "request_done", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "sync", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "db_sync", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "server_sync", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "list", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "text", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "selection_range", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "server_clock", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "socket", null);
    __decorate([
        $mol_mem
    ], $mol_state_shared.prototype, "heartbeat", null);
    __decorate([
        $mol_action
    ], $mol_state_shared.prototype, "send", null);
    $.$mol_state_shared = $mol_state_shared;
})($ || ($ = {}));
//mol/state/shared/shared.ts
;
"use strict";
var $;
(function ($) {
    class $mol_store extends $mol_object2 {
        data_default;
        constructor(data_default) {
            super();
            this.data_default = data_default;
        }
        data(next) {
            return next === undefined ? this.data_default : next;
        }
        snapshot(next) {
            return JSON.stringify(this.data(next === undefined ? next : JSON.parse(next)));
        }
        value(key, next) {
            const data = this.data();
            if (next === undefined)
                return data && data[key];
            const Constr = Reflect.getPrototypeOf(data).constructor;
            this.data(Object.assign(new Constr, data, { [key]: next }));
            return next;
        }
        selection(key, next = [0, 0]) {
            return next;
        }
        sub(key, lens) {
            if (!lens)
                lens = new $mol_store();
            const data = lens.data;
            lens.data = next => {
                if (next == undefined) {
                    return this.value(key) ?? lens.data_default;
                }
                return this.value(key, next);
            };
            return lens;
        }
        reset() {
            this.data(this.data_default);
        }
        active() {
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_store.prototype, "data", null);
    __decorate([
        $mol_mem_key
    ], $mol_store.prototype, "selection", null);
    $.$mol_store = $mol_store;
})($ || ($ = {}));
//mol/store/store.ts
;
"use strict";
var $;
(function ($) {
    class $mol_mem_force extends Object {
        constructor() { super(); }
        $mol_mem_force = true;
        static $mol_mem_force = true;
        static toString() { return this.name; }
    }
    $.$mol_mem_force = $mol_mem_force;
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    $.$mol_mem_force_cache = $mol_mem_force_cache;
    class $mol_mem_force_update extends $mol_mem_force {
    }
    $.$mol_mem_force_update = $mol_mem_force_update;
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
    $.$mol_mem_force_fail = $mol_mem_force_fail;
})($ || ($ = {}));
//mol/mem/force/force.ts
;
"use strict";
var $;
(function ($) {
    class $mol_store_local_class extends $mol_store {
        native() {
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return native;
            }
            catch (error) {
                console.warn(error);
            }
            const dict = new Map();
            return {
                map: dict,
                getItem: (key) => dict.get(key),
                setItem: (key, value) => dict.set(key, value),
                removeItem: (key) => dict.delete(key),
            };
        }
        data() {
            return $mol_fail(new Error('Forbidden for local storage'));
        }
        value(key, next, force) {
            if (next === undefined)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_store_local_class.prototype, "native", null);
    __decorate([
        $mol_mem_key
    ], $mol_store_local_class.prototype, "value", null);
    $.$mol_store_local_class = $mol_store_local_class;
    $.$mol_store_local = new $mol_store_local_class;
})($ || ($ = {}));
//mol/store/local/local.ts
;
"use strict";
var $;
(function ($) {
    $mol_dom_context.addEventListener('storage', event => {
        const store = $mol_store_local;
        if (event.key) {
            store.value(event.key, undefined, $mol_mem_force_cache);
        }
    });
})($ || ($ = {}));
//mol/store/local/local.web.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_domain extends $mol_object2 {
        state() {
            return new this.$.$mol_state_shared;
        }
        user() {
            let id = this.$.$mol_store_local.value('user');
            if (!id) {
                id = Math.random().toString(16).slice(2);
                new $mol_after_tick(() => this.$.$mol_store_local.value('user', id));
            }
            return this.person(id);
        }
        person(id) {
            const obj = new $hyoo_sketch_person_model;
            obj.id = $mol_const(id);
            obj.domain = $mol_const(this);
            return obj;
        }
        element(id) {
            const obj = new $hyoo_sketch_element_model;
            obj.id = $mol_const(id);
            obj.domain = $mol_const(this);
            switch (obj.type()) {
                case 'text': return this.element_text(id);
                case 'button': return this.element_button(id);
                case 'string': return this.element_string(id);
                case 'link': return this.element_link(id);
                default: return obj;
            }
        }
        element_text(id) {
            const obj = new $hyoo_sketch_element_text_model;
            obj.id = $mol_const(id);
            obj.domain = $mol_const(this);
            obj.type('text');
            return obj;
        }
        element_button(id) {
            const obj = new $hyoo_sketch_element_button_model;
            obj.id = $mol_const(id);
            obj.domain = $mol_const(this);
            obj.type('button');
            return obj;
        }
        element_string(id) {
            const obj = new $hyoo_sketch_element_string_model;
            obj.id = $mol_const(id);
            obj.domain = $mol_const(this);
            obj.type('string');
            return obj;
        }
        element_link(id) {
            const obj = new $hyoo_sketch_element_link_model;
            obj.id = $mol_const(id);
            obj.domain = $mol_const(this);
            obj.type('link');
            return obj;
        }
        page(id) {
            const obj = new $hyoo_sketch_page_model;
            obj.id = $mol_const(id);
            obj.domain = $mol_const(this);
            return obj;
        }
        project(id) {
            const obj = new $hyoo_sketch_project_model;
            obj.id = $mol_const(id);
            obj.domain = $mol_const(this);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_domain.prototype, "state", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_domain.prototype, "user", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_domain.prototype, "person", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_domain.prototype, "element", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_domain.prototype, "element_text", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_domain.prototype, "element_button", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_domain.prototype, "element_string", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_domain.prototype, "element_link", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_domain.prototype, "page", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_domain.prototype, "project", null);
    $.$hyoo_sketch_domain = $hyoo_sketch_domain;
})($ || ($ = {}));
//hyoo/sketch/domain/domain.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(null);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next) {
            let exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure();
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (virt) {
                const now = new Date;
                this.stat({
                    type: 'file',
                    size: 0,
                    atime: now,
                    mtime: now,
                    ctime: now,
                }, 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer(undefined));
            }
            else {
                const buffer = next === undefined ? undefined : $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//mol/file/file.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//mol/dom/parse/parse.ts
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $mol_object2 {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            return $mol_wire_sync(this.native).json();
        }
        buffer() {
            return $mol_wire_sync(this.native).arrayBuffer();
        }
        xml() {
            return $mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $mol_object2 {
        static request(input, init = {}) {
            let native = $mol_dom_context.fetch;
            if (!native)
                native = $node['node-fetch'];
            const controller = new AbortController();
            let done = false;
            const promise = native(input, {
                ...init,
                signal: controller.signal,
            }).finally(() => {
                done = true;
            });
            return Object.assign(promise, {
                destructor: () => {
                    if (!done)
                        controller.abort();
                },
            });
        }
        static response(input, init) {
            const response = $mol_wire_sync(this).request(input, init);
            if (Math.floor(response.status / 100) === 2)
                return new $mol_fetch_response(response);
            throw new Error(response.statusText || `HTTP Error ${response.status}`);
        }
        static stream(input, init) {
            return this.response(input, init).stream();
        }
        static text(input, init) {
            return this.response(input, init).text();
        }
        static json(input, init) {
            return this.response(input, init).json();
        }
        static buffer(input, init) {
            this.response(input, init).buffer();
        }
        static xml(input, init) {
            return this.response(input, init).xml();
        }
        static xhtml(input, init) {
            return this.response(input, init).xhtml();
        }
        static html(input, init) {
            return this.response(input, init).html();
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch, "response", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "json", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//mol/fetch/fetch.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_web extends $mol_file {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        static base = $mol_dom_context.document
            ? new URL('.', $mol_dom_context.document.currentScript['src']).toString()
            : '';
        buffer(next) {
            if (next !== undefined)
                throw new Error(`Saving content not supported: ${this.path}`);
            const response = $mol_fetch.response(this.path());
            if (response.native.status === 404)
                throw new $mol_file_not_found(`File not found: ${this.path()}`);
            return new Uint8Array(response.buffer());
        }
        stat(next, virt) {
            let stat = next;
            if (next === undefined) {
                const content = this.text();
                const ctime = new Date();
                stat = {
                    type: 'file',
                    size: content.length,
                    ctime,
                    atime: ctime,
                    mtime: ctime
                };
            }
            this.parent().watcher();
            return stat;
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            return this.constructor.absolute(res);
        }
        ensure() {
            throw new Error('$mol_file_web.ensure() not implemented');
        }
        sub() {
            throw new Error('$mol_file_web.sub() not implemented');
        }
        relate(base = this.constructor.relative('.')) {
            throw new Error('$mol_file_web.relate() not implemented');
        }
        append(next) {
            throw new Error('$mol_file_web.append() not implemented');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "buffer", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "sub", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_web, "absolute", null);
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));
//mol/file/file.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if (error instanceof Promise)
                    $mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                this.warn(key);
            }
            return `<${key}>`;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//mol/locale/locale.ts
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $mol_view {
        dom_name() {
            return "article";
        }
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.dom_name = () => "header";
            obj.sub = () => this.head();
            return obj;
        }
        body() {
            return [];
        }
        body_scroll_top(val) {
            return this.Body().scroll_top(val);
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "footer";
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//mol/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            margin: 0,
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 2,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 1000,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                overflow: 'hidden',
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        Empty() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap_before() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_before()
            });
            return obj;
        }
        Gap_after() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_after()
            });
            return obj;
        }
        view_window() {
            return [
                0,
                0
            ];
        }
        rows() {
            return [];
        }
        gap_before() {
            return 0;
        }
        gap_after() {
            return 0;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//mol/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = this.$mol_dom_context.CSS?.supports('overflow-anchor:auto') ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//mol/support/css/css.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));
//mol/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top) && (bottom2 < limit_bottom)) {
                    min2 = Math.max(0, max - 1);
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = Math.min(min + 1, kids.length);
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([index, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_labeler extends $mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        label() {
            return [
                this.title()
            ];
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 40;
            obj.sub = () => this.label();
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Content", null);
    $.$mol_labeler = $mol_labeler;
})($ || ($ = {}));
//mol/labeler/-view.tree/labeler.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tmin-height: 2.5rem;\n\tcolor: var(--mol_theme_shade);\n\tz-index: 1;\n\tpadding: var(--mol_gap_text);\n\tgap: 0 var(--mol_gap_block);\n\tflex-wrap: wrap;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n}\n");
})($ || ($ = {}));
//mol/labeler/-css/labeler.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form_field extends $mol_labeler {
        bids() {
            return [];
        }
        label() {
            return [
                this.name(),
                this.Bid()
            ];
        }
        content() {
            return [
                this.control()
            ];
        }
        name() {
            return "";
        }
        bid() {
            return "";
        }
        Bid() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.bid()
            ];
            return obj;
        }
        control() {
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_form_field.prototype, "Bid", null);
    $.$mol_form_field = $mol_form_field;
})($ || ($ = {}));
//mol/form/field/-view.tree/field.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/field/field.view.css", "[mol_form_field] {\n\talign-items: stretch;\n\tpadding: var(--mol_gap_block);\n}\n\n[mol_form_field_bid] {\n\tcolor: var(--mol_theme_focus);\n\tdisplay: inline-block;\n\ttext-shadow: 0 0;\n}\n\n[mol_form_field_content] {\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));
//mol/form/field/-css/field.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form_field extends $.$mol_form_field {
            bid() {
                return this.bids().filter(Boolean)[0] ?? '';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form_field.prototype, "bid", null);
        $$.$mol_form_field = $mol_form_field;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/form/field/field.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
//mol/row/-view.tree/row.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: .375rem;\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmargin: .375rem;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/row/-css/row.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_form extends $mol_list {
        submit_blocked() {
            return false;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        rows() {
            return [
                this.Body(),
                this.Foot()
            ];
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        form_fields() {
            return [];
        }
        body() {
            return this.form_fields();
        }
        Body() {
            const obj = new this.$.$mol_list();
            obj.sub = () => this.body();
            return obj;
        }
        buttons() {
            return [];
        }
        foot() {
            return this.buttons();
        }
        Foot() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_form.prototype, "Foot", null);
    $.$mol_form = $mol_form;
})($ || ($ = {}));
//mol/form/-view.tree/form.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//mol/keyboard/code.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/form.css", "[mol_form_foot] {\n\tmargin: var(--mol_gap_block);\n}\n");
})($ || ($ = {}));
//mol/form/-css/form.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form extends $.$mol_form {
            form_fields() {
                return [...this.view_find(view => view instanceof $mol_form_field)]
                    .map(path => path[path.length - 1]);
            }
            submit_allowed() {
                return this.form_fields().every(field => !field.bid());
            }
            submit_blocked() {
                return !this.submit_allowed();
            }
            keydown(next) {
                if (next.ctrlKey && next.keyCode === $mol_keyboard_code.enter && !this.submit_blocked())
                    this.submit(event);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "form_fields", null);
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "submit_allowed", null);
        $$.$mol_form = $mol_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/form/form.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
        style_size() {
            return {};
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//mol/svg/-view.tree/svg.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//mol/after/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//mol/state/time/time.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/svg/svg.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return {
                ...super.attr(),
                viewBox: this.view_box(),
                preserveAspectRatio: this.aspect()
            };
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//mol/svg/root/-view.tree/root.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//mol/svg/root/-css/root.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.geometry()
            };
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//mol/svg/path/-view.tree/path.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//mol/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1rem;\n\theight: 1rem;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tmargin: .25rem 0;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));
//mol/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_resize extends $mol_icon {
        path() {
            return "M10.59,12L14.59,8H11V6H18V13H16V9.41L12,13.41V16H20V4H8V12H10.59M22,2V18H12V22H2V12H6V2H22M10,14H4V20H10V14Z";
        }
    }
    $.$mol_icon_resize = $mol_icon_resize;
})($ || ($ = {}));
//mol/icon/resize/-view.tree/resize.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_resize_bottom_right extends $mol_icon {
        path() {
            return "M22,22H20V20H22V22M22,18H20V16H22V18M18,22H16V20H18V22M18,18H16V16H18V18M14,22H12V20H14V22M22,14H20V12H22V14Z";
        }
    }
    $.$mol_icon_resize_bottom_right = $mol_icon_resize_bottom_right;
})($ || ($ = {}));
//mol/icon/resize/bottom/right/-view.tree/right.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_hotkey extends $mol_plugin {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        key() {
            return {};
        }
        mod_ctrl() {
            return false;
        }
        mod_alt() {
            return false;
        }
        mod_shift() {
            return false;
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_hotkey.prototype, "keydown", null);
    $.$mol_hotkey = $mol_hotkey;
})($ || ($ = {}));
//mol/hotkey/-view.tree/hotkey.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== event.ctrlKey)
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/hotkey/hotkey.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_string extends $mol_view {
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        autocomplete() {
            return false;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        auto() {
            return [
                this.selection_watcher()
            ];
        }
        field() {
            return {
                ...super.field(),
                disabled: this.disabled(),
                value: this.value_changed(),
                placeholder: this.hint_visible(),
                spellcheck: this.spellcheck(),
                autocomplete: this.autocomplete_native(),
                selectionEnd: this.selection_end(),
                selectionStart: this.selection_start()
            };
        }
        attr() {
            return {
                ...super.attr(),
                maxlength: this.length_max(),
                type: this.type()
            };
        }
        event() {
            return {
                ...super.event(),
                input: (event) => this.event_change(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        plugins() {
            return [
                this.Submit()
            ];
        }
        selection_watcher() {
            return null;
        }
        disabled() {
            return false;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        value_changed(val) {
            return this.value(val);
        }
        hint() {
            return "";
        }
        hint_visible() {
            return this.hint();
        }
        spellcheck() {
            return false;
        }
        autocomplete_native() {
            return "";
        }
        selection_end() {
            return 0;
        }
        selection_start() {
            return 0;
        }
        length_max() {
            return Infinity;
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "text";
        }
        event_change(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                enter: (event) => this.submit(event)
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "event_key_press", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "Submit", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//mol/string/-view.tree/string.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tz-index: 0;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_card);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:hover:where(:not(:disabled)) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: 1;\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/string/-css/string.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                this.value(next.target.value);
                this.selection_change(next);
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', event => this.selection_change(event));
            }
            selection_change(event) {
                const el = this.dom_node();
                this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
            }
            selection_start() {
                return this.selection()[0];
            }
            selection_end() {
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/string/string.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_minus extends $mol_icon {
        path() {
            return "M19,13H5V11H19V13Z";
        }
    }
    $.$mol_icon_minus = $mol_icon_minus;
})($ || ($ = {}));
//mol/icon/minus/-view.tree/minus.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
        style() {
            return {
                ...super.style(),
                minHeight: "1em"
            };
        }
        sub() {
            return [
                this.value()
            ];
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//mol/speck/-view.tree/speck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .625rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.25rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: 2;\n\ttext-align: center;\n\tline-height: 1;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n");
})($ || ($ = {}));
//mol/speck/-css/speck.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $mol_view {
        enabled() {
            return true;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.event_activate(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.error();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        error() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//mol/button/-view.tree/button.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_button]:focus {\n\toutline: none;\n}\n");
})($ || ($ = {}));
//mol/button/-css/button.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    this.status([error]);
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/button.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $mol_button {
        minimal_height() {
            return 40;
        }
        minimal_width() {
            return 40;
        }
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//mol/button/typed/-view.tree/typed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tbackground-color: var(--mol_theme_hover);\n}\n\n[mol_button_typed]:hover [mol_icon] ,\n[mol_button_typed]:focus [mol_icon] {\n\ttransform: scale(1.5);\n}\n");
})($ || ($ = {}));
//mol/button/typed/-css/typed.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//mol/button/minor/-view.tree/minor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//mol/button/minor/-css/minor.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus extends $mol_icon {
        path() {
            return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
        }
    }
    $.$mol_icon_plus = $mol_icon_plus;
})($ || ($ = {}));
//mol/icon/plus/-view.tree/plus.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_number extends $mol_view {
        precision_view() {
            return this.precision();
        }
        precision_change() {
            return this.precision();
        }
        value(val) {
            if (val !== undefined)
                return val;
            return NaN;
        }
        sub() {
            return [
                this.String(),
                this.Dec(),
                this.Inc()
            ];
        }
        precision() {
            return 1;
        }
        value_string(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        hint() {
            return " ";
        }
        enabled() {
            return true;
        }
        string_enabled() {
            return this.enabled();
        }
        String() {
            const obj = new this.$.$mol_string();
            obj.type = () => "tel";
            obj.value = (val) => this.value_string(val);
            obj.hint = () => this.hint();
            obj.enabled = () => this.string_enabled();
            return obj;
        }
        event_dec(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        dec_enabled() {
            return this.enabled();
        }
        dec_icon() {
            const obj = new this.$.$mol_icon_minus();
            return obj;
        }
        Dec() {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (val) => this.event_dec(val);
            obj.enabled = () => this.dec_enabled();
            obj.sub = () => [
                this.dec_icon()
            ];
            return obj;
        }
        event_inc(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        inc_enabled() {
            return this.enabled();
        }
        inc_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Inc() {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (val) => this.event_inc(val);
            obj.enabled = () => this.inc_enabled();
            obj.sub = () => [
                this.inc_icon()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "value_string", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "String", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "event_dec", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "dec_icon", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "Dec", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "event_inc", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "inc_icon", null);
    __decorate([
        $mol_mem
    ], $mol_number.prototype, "Inc", null);
    $.$mol_number = $mol_number;
})($ || ($ = {}));
//mol/number/-view.tree/number.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/number/number.css", "[mol_number] {\n\tdisplay: flex;\n\tflex: 0 1 auto;\n\tposition: relative;\n\talign-items: stretch;\n\tmax-width: 100%;\n}\n\n[mol_number]:hover {\n\tz-index: 2;\n}\n\n[mol_number_string] {\n\tappearance: textfield;\n\tflex: 1 1 7rem;\n\twidth: 7rem;\n}\n\n[mol_number_string]::-webkit-inner-spin-button {\n\tdisplay: none;\n}\n\n[mol_number_inc][disabled],\n[mol_number_dec][disabled] {\n\tvisibility: hidden;\n}\n");
})($ || ($ = {}));
//mol/number/-css/number.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_number extends $.$mol_number {
            event_dec(next) {
                this.value((Number(this.value()) || 0) - this.precision_change());
            }
            event_inc(next) {
                this.value((Number(this.value()) || 0) + this.precision_change());
            }
            value_string(next) {
                if (next !== void 0) {
                    this.value(next === '' ? null : Number(next));
                }
                const precisionView = this.precision_view();
                const value = next ? Number(next) : this.value();
                if (value === 0)
                    return '0';
                if (!value)
                    return '';
                if (precisionView >= 1) {
                    return (value / precisionView).toFixed();
                }
                else {
                    const fixedNumber = Math.log10(1 / precisionView);
                    return value.toFixed(fixedNumber);
                }
            }
        }
        $$.$mol_number = $mol_number;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/number/number.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element extends $mol_view {
        width(next) {
            return this.element().width(next);
        }
        height(next) {
            return this.element().height(next);
        }
        x(next) {
            return this.element().x(next);
        }
        y(next) {
            return this.element().y(next);
        }
        z(next) {
            return this.element().z(next);
        }
        element() {
            const obj = new this.$.$hyoo_sketch_element_model();
            return obj;
        }
        grid_step() {
            return 12;
        }
        preview() {
            return false;
        }
        style() {
            return {
                ...super.style(),
                width: this.width(),
                height: this.height(),
                left: this.x(),
                top: this.y(),
                zIndex: this.z_string()
            };
        }
        sub() {
            return this.kinds();
        }
        Options() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => this.options();
            return obj;
        }
        z_string() {
            return "1";
        }
        pointer_down(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        focused(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Element() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Wrap() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                maxWidth: this.width()
            });
            obj.sub = () => [
                this.Element()
            ];
            return obj;
        }
        resize_start(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Icon() {
            const obj = new this.$.$mol_icon_resize_bottom_right();
            return obj;
        }
        Resize() {
            const obj = new this.$.$mol_view();
            obj.event = () => ({
                pointerdown: (next) => this.resize_start(next)
            });
            obj.sub = () => [
                this.Icon()
            ];
            return obj;
        }
        Position() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Resize()
            ];
            return obj;
        }
        Editor() {
            const obj = new this.$.$hyoo_sketch_element_editor();
            obj.pointer_down = (next) => this.pointer_down(next);
            obj.focused = () => this.focused();
            obj.sub = () => [
                this.Wrap(),
                this.Position()
            ];
            return obj;
        }
        Preview() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        kinds() {
            return [
                this.Editor(),
                this.Preview()
            ];
        }
        X_control() {
            const obj = new this.$.$mol_number();
            obj.value = (next) => this.x(next);
            return obj;
        }
        X_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_X_field_name');
            obj.control = () => this.X_control();
            return obj;
        }
        Y_control() {
            const obj = new this.$.$mol_number();
            obj.value = (next) => this.y(next);
            return obj;
        }
        Y_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_Y_field_name');
            obj.control = () => this.Y_control();
            return obj;
        }
        Z_control() {
            const obj = new this.$.$mol_number();
            obj.value = (next) => this.z(next);
            return obj;
        }
        Z_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_Z_field_name');
            obj.control = () => this.Z_control();
            return obj;
        }
        Width_control() {
            const obj = new this.$.$mol_number();
            obj.value = (next) => this.width(next);
            return obj;
        }
        Width_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_Width_field_name');
            obj.control = () => this.Width_control();
            return obj;
        }
        Height_control() {
            const obj = new this.$.$mol_number();
            obj.value = (next) => this.height(next);
            return obj;
        }
        Height_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_Height_field_name');
            obj.control = () => this.Height_control();
            return obj;
        }
        options() {
            return [
                this.X_field(),
                this.Y_field(),
                this.Z_field(),
                this.Width_field(),
                this.Height_field()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "Options", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "pointer_down", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "focused", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "Element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "Wrap", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "resize_start", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "Resize", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "Position", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "Editor", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "Preview", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "X_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "X_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "Y_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "Y_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "Z_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "Z_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "Width_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "Width_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "Height_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element.prototype, "Height_field", null);
    $.$hyoo_sketch_element = $hyoo_sketch_element;
    class $hyoo_sketch_element_editor extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                hyoo_sketch_element__focused: this.focused()
            };
        }
        event() {
            return {
                ...super.event(),
                pointerdown: (event) => this.pointer_down(event)
            };
        }
        focused(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        pointer_down(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_editor.prototype, "focused", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_editor.prototype, "pointer_down", null);
    $.$hyoo_sketch_element_editor = $hyoo_sketch_element_editor;
})($ || ($ = {}));
//hyoo/sketch/element/-view.tree/element.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_model extends $mol_object2 {
        id() {
            return this.$.$mol_fail(new Error('Not defined'));
        }
        domain() {
            return this.$.$mol_fail(new Error('Not defined'));
        }
        state() {
            return this.domain().state().doc('element').doc(this.id());
        }
        type(next) {
            return String(this.state().sub('type').value(next) ?? '');
        }
        width(next) {
            return Number(this.state().sub('number').value(next) ?? 100);
        }
        height(next) {
            return Number(this.state().sub('height').value(next) ?? 50);
        }
        x(next) {
            const result = Number(this.state().sub('x').value(next) ?? 0);
            console.log({ next, val: result });
            return result;
        }
        y(next) {
            return Number(this.state().sub('y').value(next) ?? 0);
        }
        z(next) {
            return Number(this.state().sub('z').value(next) ?? 0);
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_model.prototype, "state", null);
    $.$hyoo_sketch_element_model = $hyoo_sketch_element_model;
})($ || ($ = {}));
//hyoo/sketch/element/element.model.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { px, per } = $mol_style_unit;
        $mol_style_define($hyoo_sketch_element, {
            position: 'absolute',
            transitionProperty: 'height, width, top, left',
            transitionDuration: '.1s',
            Position: {
                position: 'absolute',
                right: px(5),
                bottom: px(0),
            },
            Options: {
                $mol_form_field: {
                    flex: {
                        direction: 'row',
                        wrap: 'nowrap',
                    },
                },
            },
            Resize: {
                cursor: 'nwse-resize',
            },
            Editor: {
                flex: {
                    grow: 1,
                },
                cursor: 'pointer',
                border: {
                    width: px(1),
                    style: 'dotted',
                },
                userSelect: 'none',
                '@': {
                    hyoo_sketch_element__focused: {
                        'true': {
                            border: {
                                style: 'solid',
                            },
                        },
                    },
                },
            },
            Wrap: {
                flex: {
                    grow: 1,
                },
                '>': {
                    $mol_view: {
                        flex: {
                            grow: 1,
                        },
                        width: per(100),
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/element.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element extends $.$hyoo_sketch_element {
            kinds() {
                return this.preview() ? [this.Preview()] : [this.Editor()];
            }
            pointer_down(event) {
                event.preventDefault();
                event.stopPropagation();
                this.focused(true);
                const original_x = this.x();
                const original_y = this.y();
                const original_mouse_x = event.pageX;
                const original_mouse_y = event.pageY;
                const grid_step = this.grid_step();
                const move = (e) => {
                    const x = original_x + (e.pageX - original_mouse_x);
                    const y = original_y + (e.pageY - original_mouse_y);
                    const x_near = grid_step * Math.round(x / grid_step);
                    const y_near = grid_step * Math.round(y / grid_step);
                    this.x(x_near);
                    this.y(y_near);
                };
                function stopResize(e) {
                    window.removeEventListener('pointermove', move);
                    window.removeEventListener('pointerup', stopResize);
                }
                window.addEventListener('pointermove', move);
                window.addEventListener('pointerup', stopResize);
            }
            resize_start(event) {
                event.preventDefault();
                event.stopPropagation();
                const original_width = this.width();
                const original_height = this.height();
                const original_mouse_x = event.pageX;
                const original_mouse_y = event.pageY;
                const grid_step = this.grid_step();
                const resize = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const width = original_width + (e.pageX - original_mouse_x);
                    const height = original_height + (e.pageY - original_mouse_y);
                    const w_near = grid_step * Math.round(width / grid_step);
                    const h_near = grid_step * Math.round(height / grid_step);
                    this.width(w_near);
                    this.height(h_near);
                };
                function stopResize(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.removeEventListener('pointermove', resize);
                    window.removeEventListener('pointerup', stopResize);
                }
                window.addEventListener('pointermove', resize);
                window.addEventListener('pointerup', stopResize);
            }
            z_string() {
                return String(this.z());
            }
        }
        $$.$hyoo_sketch_element = $hyoo_sketch_element;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/element.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $mol_view {
        dom_name() {
            return "a";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri(),
                title: this.hint(),
                target: this.target(),
                download: this.file_name(),
                mol_link_current: this.current()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.click(event)
            };
        }
        uri() {
            return "";
        }
        hint() {
            return "";
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//mol/link/-view.tree/link.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static href(next) {
            if (next === undefined) {
                next = $mol_dom_context.location.href;
            }
            else if (!/^about:srcdoc/.test(next)) {
                new $mol_after_frame(() => {
                    const next = this.href();
                    const prev = $mol_dom_context.location.href;
                    if (next === prev)
                        return;
                    const history = $mol_dom_context.history;
                    history.replaceState(history.state, $mol_dom_context.document.title, next);
                });
            }
            if ($mol_dom_context.parent !== $mol_dom_context.self) {
                $mol_dom_context.parent.postMessage(['hashchange', next], '*');
            }
            return next;
        }
        static href_normal() {
            return this.link({});
        }
        static href_absolute() {
            return new URL(this.href(), $mol_dom_context.location.href).toString();
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#!?/)[1] || '';
            var chunks = href.split(this.separator);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    continue;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : { ...this.dict(), [key]: next };
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link({
                ...this.dict_cut(Object.keys(next)),
                ...next,
            });
        }
        static prolog = '!';
        static separator = '/';
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + this.prolog + chunks.join(this.separator), this.href_absolute()).toString();
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_absolute", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "make_link", null);
    $.$mol_state_arg = $mol_state_arg;
    const $mol_state_arg_change = (event) => {
        $mol_state_arg.href($mol_dom_context.location.href);
    };
    self.addEventListener('hashchange', $mol_state_arg_change);
})($ || ($ = {}));
//mol/state/arg/arg.web.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    const { scale } = $mol_style_func;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
            $mol_icon: {
                transform: 'scale(1.5)',
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            },
            $mol_icon: {
                transform: 'scale(1.5)',
            },
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//mol/link/link.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri() {
                const arg = this.arg();
                const uri = new this.$.$mol_state_arg(this.state_key()).link(arg);
                if (uri !== this.$.$mol_state_arg.href())
                    return uri;
                const arg2 = {};
                for (let i in arg)
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) !== args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            target() {
                return (this.uri_native().origin === $mol_dom_context.location.origin) ? '_self' : '_blank';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_eye extends $mol_icon {
        path() {
            return "M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9M12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z";
        }
    }
    $.$mol_icon_eye = $mol_icon_eye;
})($ || ($ = {}));
//mol/icon/eye/-view.tree/eye.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $mol_button_minor {
        attr() {
            return {
                ...super.attr(),
                mol_check_checked: this.checked(),
                "aria-checked": this.checked(),
                role: "checkbox"
            };
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Icon() {
            return null;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        label() {
            return [
                this.Title()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//mol/check/-view.tree/check.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tpadding: var(--mol_gap_text);\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n");
})($ || ($ = {}));
//mol/check/-css/check.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/check.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon extends $mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
})($ || ($ = {}));
//mol/check/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/icon/icon.view.css", "[mol_check_icon][mol_check_checked] {\n\tcolor: var(--mol_theme_current);\n}\n");
})($ || ($ = {}));
//mol/check/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_page extends $mol_page {
        project_name(next) {
            return this.project().name(next);
        }
        project() {
            const obj = new this.$.$hyoo_sketch_project_model();
            return obj;
        }
        tools() {
            return [
                this.Project_pin(),
                this.Page_add()
            ];
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        body() {
            return [
                this.List()
            ];
        }
        Page(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                page: this.page_id(id),
                focus: null
            });
            obj.title = () => this.page_name(id);
            return obj;
        }
        Project_pin_icon() {
            const obj = new this.$.$mol_icon_eye();
            return obj;
        }
        project_pin(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Project_pin() {
            const obj = new this.$.$mol_check_icon();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_page_Project_pin_hint');
            obj.Icon = () => this.Project_pin_icon();
            obj.checked = (val) => this.project_pin(val);
            return obj;
        }
        page_add(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Page_add_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Page_add() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_page_Page_add_hint');
            obj.click = (next) => this.page_add(next);
            obj.sub = () => [
                this.Page_add_icon()
            ];
            return obj;
        }
        Title() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.project_name(val);
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_page_Title_hint');
            return obj;
        }
        pages() {
            return [];
        }
        List() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.pages();
            return obj;
        }
        page_id(id) {
            return "";
        }
        page_name(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page.prototype, "project", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_page.prototype, "Page", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page.prototype, "Project_pin_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page.prototype, "project_pin", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page.prototype, "Project_pin", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page.prototype, "page_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page.prototype, "Page_add_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page.prototype, "Page_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page.prototype, "List", null);
    $.$hyoo_sketch_page = $hyoo_sketch_page;
})($ || ($ = {}));
//hyoo/sketch/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_page_model extends $mol_object2 {
        id() {
            return this.$.$mol_fail(new Error('Not defined'));
        }
        domain() {
            return this.$.$mol_fail(new Error('Not defined'));
        }
        state() {
            return this.domain().state().doc('page').doc(this.id());
        }
        name(next) {
            return String(this.state().sub('name').value(next) ?? '');
        }
        elements(next) {
            const ids = this.state().sub('elements').list(next && next.map(obj => obj.id()));
            return ids.map(id => this.domain().element(String(id)));
        }
        width(next) {
            return Number(this.state().sub('width').value(next) ?? '340');
        }
        height(next) {
            return Number(this.state().sub('height').value(next) ?? '640');
        }
        grid(next) {
            return Number(this.state().sub('grid').value(next) ?? '8');
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_model.prototype, "state", null);
    $.$hyoo_sketch_page_model = $hyoo_sketch_page_model;
})($ || ($ = {}));
//hyoo/sketch/page/page.model.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($hyoo_sketch_page, {
            Head: {
                flex: {
                    wrap: 'nowrap',
                }
            },
            Tools: {
                flex: {
                    wrap: 'nowrap',
                    shrink: 0,
                }
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_page extends $.$hyoo_sketch_page {
            domain() {
                return this.project().domain();
            }
            user() {
                return this.domain().user();
            }
            pages() {
                return this.project().pages().map(obj => this.Page(obj.id()));
            }
            page_id(id) {
                return id;
            }
            page_name(id) {
                return this.domain().page(id).name();
            }
            project_name(next) {
                return this.project().name(next);
            }
            page_add() {
                const obj = this.domain().page($mol_guid());
                obj.name('Page');
                this.project().pages([...this.project().pages(), obj]);
            }
            project_pin(next) {
                const pinned = this.user().projects().indexOf(this.project()) !== -1;
                if (next === undefined)
                    return pinned;
                if (next) {
                    this.user().projects([...this.user().projects(), this.project()]);
                }
                else {
                    this.user().projects(this.user().projects().filter(obj => obj !== this.project()));
                }
                return next;
            }
        }
        $$.$hyoo_sketch_page = $hyoo_sketch_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/page/page.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_project extends $mol_page {
        person() {
            const obj = new this.$.$hyoo_sketch_person_model();
            return obj;
        }
        title() {
            return this.$.$mol_locale.text('$hyoo_sketch_project_title');
        }
        tools() {
            return [
                this.Project_add()
            ];
        }
        body() {
            return [
                this.List()
            ];
        }
        Project(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                project: this.project_id(id)
            });
            obj.title = () => this.project_name(id);
            return obj;
        }
        project_add(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Project_add_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Project_add() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_project_Project_add_hint');
            obj.click = (next) => this.project_add(next);
            obj.sub = () => [
                this.Project_add_icon()
            ];
            return obj;
        }
        projects() {
            return [];
        }
        List() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.projects();
            return obj;
        }
        project_id(id) {
            return "";
        }
        project_name(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project.prototype, "person", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_project.prototype, "Project", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project.prototype, "project_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project.prototype, "Project_add_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project.prototype, "Project_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project.prototype, "List", null);
    $.$hyoo_sketch_project = $hyoo_sketch_project;
})($ || ($ = {}));
//hyoo/sketch/project/-view.tree/project.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_project_model extends $mol_object2 {
        id() {
            return this.$.$mol_fail(new Error('Not defined'));
        }
        domain() {
            return this.$.$mol_fail(new Error('Not defined'));
        }
        state() {
            return this.domain().state().doc('project').doc(this.id());
        }
        name(next) {
            return String(this.state().sub('name').value(next) ?? '');
        }
        pages(next) {
            const ids = this.state().sub('pages').list(next && next.map(obj => obj.id()));
            return ids.map(id => this.domain().page(String(id)));
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_project_model.prototype, "state", null);
    $.$hyoo_sketch_project_model = $hyoo_sketch_project_model;
})($ || ($ = {}));
//hyoo/sketch/project/project.model.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_project extends $.$hyoo_sketch_project {
            project_add() {
                const obj = this.person().domain().project($mol_guid());
                obj.name('New project');
                this.person().projects([...this.person().projects(), obj]);
            }
            projects() {
                return this.person().projects().map(obj => this.Project(obj.id()));
            }
            project_id(id) {
                return id;
            }
            project_name(id) {
                return this.person().domain().project(id).name();
            }
        }
        $$.$hyoo_sketch_project = $hyoo_sketch_project;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/project/project.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_person_model extends $mol_object2 {
        id() {
            return this.$.$mol_fail(new Error('Not defined'));
        }
        domain() {
            return this.$.$mol_fail(new Error('Not defined'));
        }
        state() {
            return this.domain().state().doc('person').doc(this.id());
        }
        name(next) {
            return String(this.state().sub('name').value(next) ?? '');
        }
        avatar(next) {
            return String(this.state().sub('avatar').value(next) ?? '');
        }
        projects(next) {
            const ids = this.state().sub('projects').list(next && next.map(obj => obj.id()));
            return ids.map(id => this.domain().project(String(id)));
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_person_model.prototype, "state", null);
    $.$hyoo_sketch_person_model = $hyoo_sketch_person_model;
})($ || ($ = {}));
//hyoo/sketch/person/person.model.ts
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 7;
        }
        width_limit() {
            return Infinity;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//mol/paragraph/-view.tree/paragraph.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/paragraph/-css/paragraph.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/paragraph/paragraph.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_text extends $hyoo_sketch_element {
        text(next) {
            return this.element().text(next);
        }
        element() {
            const obj = new this.$.$hyoo_sketch_element_text_model();
            return obj;
        }
        Element() {
            return this.Content();
        }
        Preview() {
            return this.Content();
        }
        options() {
            return [
                ...super.options(),
                this.Text_field()
            ];
        }
        Content() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.text();
            return obj;
        }
        Text_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.text(next);
            return obj;
        }
        Text_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_text_Text_field_name');
            obj.control = () => this.Text_control();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_text.prototype, "element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_text.prototype, "Content", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_text.prototype, "Text_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_text.prototype, "Text_field", null);
    $.$hyoo_sketch_element_text = $hyoo_sketch_element_text;
})($ || ($ = {}));
//hyoo/sketch/element/text/-view.tree/text.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_text_model extends $hyoo_sketch_element_model {
        text(next) {
            return String(this.state().sub('text').value(next) ?? 'Text');
        }
    }
    $.$hyoo_sketch_element_text_model = $hyoo_sketch_element_text_model;
})($ || ($ = {}));
//hyoo/sketch/element/text/text.model.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_text extends $.$hyoo_sketch_element_text {
        }
        $$.$hyoo_sketch_element_text = $hyoo_sketch_element_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/text/text.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_major extends $mol_button_typed {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
//mol/button/major/-view.tree/major.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/major/major.view.css", "[mol_button_major][disabled] {\n\topacity: .5;\n\tfilter: grayscale();\n}\n");
})($ || ($ = {}));
//mol/button/major/-css/major.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_button extends $hyoo_sketch_element {
        title(next) {
            return this.element().title(next);
        }
        element() {
            const obj = new this.$.$hyoo_sketch_element_button_model();
            return obj;
        }
        Element() {
            return this.Content();
        }
        Preview() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => this.title();
            return obj;
        }
        options() {
            return [
                ...super.options(),
                this.Title_field()
            ];
        }
        Content() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => this.title();
            return obj;
        }
        Title_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.title(next);
            return obj;
        }
        Title_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_button_Title_field_name');
            obj.control = () => this.Title_control();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_button.prototype, "element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_button.prototype, "Preview", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_button.prototype, "Content", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_button.prototype, "Title_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_button.prototype, "Title_field", null);
    $.$hyoo_sketch_element_button = $hyoo_sketch_element_button;
})($ || ($ = {}));
//hyoo/sketch/element/button/-view.tree/button.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_button_model extends $hyoo_sketch_element_model {
        title(next) {
            return String(this.state().sub('title').value(next) ?? 'Button');
        }
    }
    $.$hyoo_sketch_element_button_model = $hyoo_sketch_element_button_model;
})($ || ($ = {}));
//hyoo/sketch/element/button/button.model.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_string extends $hyoo_sketch_element {
        hint(next) {
            return this.element().hint(next);
        }
        value(next) {
            return this.element().value(next);
        }
        element() {
            const obj = new this.$.$hyoo_sketch_element_string_model();
            return obj;
        }
        Element() {
            return this.Content();
        }
        Preview() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.hint();
            return obj;
        }
        options() {
            return [
                ...super.options(),
                this.Hint_field(),
                this.Value_field()
            ];
        }
        Content() {
            const obj = new this.$.$mol_string();
            obj.hint = () => this.hint();
            obj.value = () => this.value();
            obj.disabled = () => true;
            return obj;
        }
        Hint_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.hint(next);
            return obj;
        }
        Hint_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_string_Hint_field_name');
            obj.control = () => this.Hint_control();
            return obj;
        }
        Value_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.value(next);
            return obj;
        }
        Value_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_string_Value_field_name');
            obj.control = () => this.Value_control();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_string.prototype, "element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_string.prototype, "Preview", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_string.prototype, "Content", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_string.prototype, "Hint_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_string.prototype, "Hint_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_string.prototype, "Value_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_string.prototype, "Value_field", null);
    $.$hyoo_sketch_element_string = $hyoo_sketch_element_string;
})($ || ($ = {}));
//hyoo/sketch/element/string/-view.tree/string.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_string_model extends $hyoo_sketch_element_model {
        hint(next) {
            return String(this.state().sub('hint').value(next) ?? 'Type here');
        }
        value(next) {
            return String(this.state().sub('value').value(next) ?? '');
        }
    }
    $.$hyoo_sketch_element_string_model = $hyoo_sketch_element_string_model;
})($ || ($ = {}));
//hyoo/sketch/element/string/string.model.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pop extends $mol_view {
        showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        align_vert() {
            return "";
        }
        align_hor() {
            return "";
        }
        sub() {
            return [
                this.Anchor()
            ];
        }
        sub_visible() {
            return [
                this.Anchor(),
                this.Bubble()
            ];
        }
        Anchor() {
            return null;
        }
        align() {
            return "bottom_center";
        }
        bubble_content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        Bubble() {
            const obj = new this.$.$mol_pop_bubble();
            obj.align = () => this.align();
            obj.content = () => this.bubble_content();
            obj.height_max = () => this.height_max();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "showed", null);
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "Bubble", null);
    $.$mol_pop = $mol_pop;
    class $mol_pop_bubble extends $mol_scroll {
        sub() {
            return this.content();
        }
        style() {
            return {
                ...super.style(),
                maxHeight: this.height_max()
            };
        }
        attr() {
            return {
                ...super.attr(),
                mol_pop_align: this.align(),
                tabindex: 0
            };
        }
        content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        align() {
            return "";
        }
    }
    $.$mol_pop_bubble = $mol_pop_bubble;
})($ || ($ = {}));
//mol/pop/-view.tree/pop.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop]:hover {\n\tz-index: 4;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: absolute;\n\tz-index: 3;\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\toverflow: hidden;\n\toverflow-y: scroll;\n\toverflow-y: overlay;\n\tword-break: normal;\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"suspense\"] {\n\tdisplay: none;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));
//mol/pop/-css/pop.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom) * .66;
                if (align === 'top')
                    return rect_bubble.top * .66;
                return 0;
            }
            align() {
                return `${this.align_vert()}_${this.align_hor()}`;
            }
            align_vert() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                if (!rect_bubble)
                    return 'suspense';
                return rect_bubble.top > (viewport.height - rect_bubble.bottom) ? 'top' : 'bottom';
            }
            align_hor() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                if (!rect_bubble)
                    return 'suspense';
                return rect_bubble.left > (viewport.width - rect_bubble.right) ? 'left' : 'right';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pop/pop.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pick extends $mol_pop {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        Anchor() {
            return this.Trigger();
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        trigger_enabled() {
            return true;
        }
        trigger_content() {
            return [];
        }
        hint() {
            return "";
        }
        Trigger() {
            const obj = new this.$.$mol_check();
            obj.minimal_width = () => 40;
            obj.minimal_height = () => 40;
            obj.enabled = () => this.trigger_enabled();
            obj.checked = (val) => this.showed(val);
            obj.sub = () => this.trigger_content();
            obj.hint = () => this.hint();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "Trigger", null);
    $.$mol_pick = $mol_pick;
})($ || ($ = {}));
//mol/pick/-view.tree/pick.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pick/pick.view.css", "[mol_pick_trigger] {\n\talign-items: center;\n}\n");
})($ || ($ = {}));
//mol/pick/-css/pick.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pick extends $.$mol_pick {
            keydown(event) {
                if (!this.trigger_enabled())
                    return;
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $mol_keyboard_code.escape) {
                    if (!this.showed())
                        return;
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        $$.$mol_pick = $mol_pick;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pick/pick.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_dots_vertical extends $mol_icon {
        path() {
            return "M12,16C13.1,16 14,16.9 14,18C14,19.1 13.1,20 12,20C10.9,20 10,19.1 10,18C10,16.9 10.9,16 12,16M12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10M12,4C13.1,4 14,4.9 14,6C14,7.1 13.1,8 12,8C10.9,8 10,7.1 10,6C10,4.9 10.9,4 12,4Z";
        }
    }
    $.$mol_icon_dots_vertical = $mol_icon_dots_vertical;
})($ || ($ = {}));
//mol/icon/dots/vertical/-view.tree/vertical.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $mol_paragraph {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        Low(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        High(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        parts() {
            return [];
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "High", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//mol/dimmer/-view.tree/dimmer.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.8;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//mol/dimmer/-css/dimmer.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/dimmer/dimmer.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_nav extends $mol_plugin {
        cycle(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        mod_ctrl() {
            return false;
        }
        mod_shift() {
            return false;
        }
        mod_alt() {
            return false;
        }
        keys_x(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        keys_y(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        current_x(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        current_y(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        event_up(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_down(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_left(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_right(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.event_key(event)
            };
        }
        event_key(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//mol/nav/-view.tree/nav.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $mol_keyboard_code.up: return this.event_up(event);
                    case $mol_keyboard_code.down: return this.event_down(event);
                    case $mol_keyboard_code.left: return this.event_left(event);
                    case $mol_keyboard_code.right: return this.event_right(event);
                    case $mol_keyboard_code.pageUp: return this.event_up(event);
                    case $mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/nav/nav.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_select extends $mol_pick {
        dictionary(val) {
            if (val !== undefined)
                return val;
            return {};
        }
        options() {
            return [];
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        option_label_default() {
            return "";
        }
        Option_row(id) {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (event) => this.event_select(id, event);
            obj.sub = () => this.option_content(id);
            return obj;
        }
        No_options() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.no_options_message()
            ];
            return obj;
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Nav()
            ];
        }
        hint() {
            return this.$.$mol_locale.text('$mol_select_hint');
        }
        bubble_content() {
            return [
                this.Filter(),
                this.Menu()
            ];
        }
        Filter() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.filter_pattern(val);
            obj.hint = () => this.$.$mol_locale.text('$mol_select_Filter_hint');
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Trigger_icon() {
            const obj = new this.$.$mol_icon_dots_vertical();
            return obj;
        }
        event_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        option_label(id) {
            return "";
        }
        filter_pattern(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Option_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.option_label(id);
            obj.needle = () => this.filter_pattern();
            return obj;
        }
        option_content(id) {
            return [
                this.Option_label(id)
            ];
        }
        no_options_message() {
            return this.$.$mol_locale.text('$mol_select_no_options_message');
        }
        nav_components() {
            return [];
        }
        option_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        nav_cycle(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.option_focused(component);
            obj.cycle = (val) => this.nav_cycle(val);
            return obj;
        }
        menu_content() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_content();
            return obj;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "dictionary", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "Option_row", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "No_options", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Filter", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Trigger_icon", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "event_select", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "filter_pattern", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "Option_label", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "option_focused", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "nav_cycle", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Menu", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "submit", null);
    $.$mol_select = $mol_select;
})($ || ($ = {}));
//mol/select/-view.tree/select.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));
//mol/match/text.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/select/select.view.css", "[mol_select] {\n\tdisplay: flex;\n\tword-break: normal;\n\talign-self: flex-start;\n}\n\n[mol_select_option_row] {\n\tmin-width: 100%;\n\tpadding: 0;\n\tjustify-content: flex-start;\n}\n\n[mol_select_bubble] {\n\tmin-width: 100%;\n}\n\n[mol_select_filter] {\n\tz-index: 2;\n\topacity: 1 !important;\n\tflex: 1 0 auto;\n\talign-self: stretch;\n}\n\n[mol_select_option_label] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tmin-height: 1.5em;\n\tdisplay: block;\n\twhite-space: nowrap;\n}\n\n[mol_select_clear_option_content] {\n\tpadding: .5em 1rem .5rem 0;\n\ttext-align: left;\n\tbox-shadow: var(--mol_theme_line);\n\tflex: 1 0 auto;\n}\n\n[mol_select_no_options] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tdisplay: block;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_select_trigger] {\n\tpadding: 0;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n}\n\n[mol_select_trigger] > * {\n\tmargin-right: -1rem;\n}\n\n[mol_select_trigger] > *:last-child {\n\tmargin-right: 0;\n}\n\n[mol_select_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n");
})($ || ($ = {}));
//mol/select/-css/select.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                this.focused();
                return next || '';
            }
            open() {
                this.showed(true);
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options = [...options.slice(0, index), ...options.slice(index + 1)];
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return (value == null ? id : value) || this.option_label_default();
            }
            option_rows() {
                return this.options_filtered().map((option) => this.Option_row(option));
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.showed(false);
                event?.preventDefault();
            }
            nav_components() {
                if (this.options().length > 1 && this.Filter()) {
                    return [this.Filter(), ...this.option_rows()];
                }
                else {
                    return this.option_rows();
                }
            }
            trigger_content() {
                return [
                    ...this.option_content(this.value()),
                    this.Trigger_icon(),
                ];
            }
            menu_content() {
                return [
                    ...this.option_rows(),
                    ...(this.options_filtered().length === 0) ? [this.No_options()] : []
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/select/select.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_link extends $hyoo_sketch_element {
        hint(next) {
            return this.element().hint(next);
        }
        page(next) {
            return this.element().page(next);
        }
        href(next) {
            return this.element().href(next);
        }
        title(next) {
            return this.element().title(next);
        }
        element() {
            const obj = new this.$.$hyoo_sketch_element_link_model();
            return obj;
        }
        project() {
            const obj = new this.$.$hyoo_sketch_project_model();
            return obj;
        }
        Element() {
            return this.Content();
        }
        Preview() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                page: this.page(),
                page_preview: this.page()
            });
            obj.hint = () => this.hint();
            obj.title = () => this.title();
            return obj;
        }
        options() {
            return [
                ...super.options(),
                this.Hint_field(),
                this.Title_field(),
                this.Page_field()
            ];
        }
        Content() {
            const obj = new this.$.$mol_link();
            obj.hint = () => this.hint();
            obj.title = () => this.title();
            return obj;
        }
        Hint_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.hint(next);
            return obj;
        }
        Hint_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_link_Hint_field_name');
            obj.control = () => this.Hint_control();
            return obj;
        }
        Title_control() {
            const obj = new this.$.$mol_string();
            obj.value = (next) => this.title(next);
            return obj;
        }
        Title_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_link_Title_field_name');
            obj.control = () => this.Title_control();
            return obj;
        }
        page_id(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        pages() {
            return {};
        }
        Page_control() {
            const obj = new this.$.$mol_select();
            obj.align = () => "top_center";
            obj.no_options_message = () => this.$.$mol_locale.text('$hyoo_sketch_element_link_Page_control_no_options_message');
            obj.value = (next) => this.page_id(next);
            obj.dictionary = () => this.pages();
            return obj;
        }
        Page_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_element_link_Page_field_name');
            obj.control = () => this.Page_control();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "element", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "project", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "Preview", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "Content", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "Hint_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "Hint_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "Title_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "Title_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "page_id", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "Page_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_element_link.prototype, "Page_field", null);
    $.$hyoo_sketch_element_link = $hyoo_sketch_element_link;
})($ || ($ = {}));
//hyoo/sketch/element/link/-view.tree/link.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_element_link_model extends $hyoo_sketch_element_model {
        hint(next) {
            return String(this.state().sub('hint').value(next) ?? 'This is link');
        }
        title(next) {
            return String(this.state().sub('title').value(next) ?? 'Link');
        }
        href(next) {
            return String(this.state().sub('href').value(next) ?? 'https://mol.hyoo.ru');
        }
        page(next) {
            return String(this.state().sub('page').value(next) ?? '');
        }
    }
    $.$hyoo_sketch_element_link_model = $hyoo_sketch_element_link_model;
})($ || ($ = {}));
//hyoo/sketch/element/link/link.model.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_element_link extends $.$hyoo_sketch_element_link {
            pages() {
                return this.project().pages().reduce((dict, page) => {
                    dict[page.id()] = page.name();
                    return dict;
                }, {});
            }
        }
        $$.$hyoo_sketch_element_link = $hyoo_sketch_element_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/element/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_television extends $mol_icon {
        path() {
            return "M21,17H3V5H21M21,3H3C1.9,3 1,3.9 1,5V17C1,18.1 1.9,19 3,19H8V21H16V19H21C22.1,19 23,18.1 23,17V5C23,3.9 22.1,3 21,3Z";
        }
    }
    $.$mol_icon_television = $mol_icon_television;
})($ || ($ = {}));
//mol/icon/television/-view.tree/television.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_television_play extends $mol_icon {
        path() {
            return "M21,3H3C1.89,3 1,3.89 1,5V17C1,18.1 1.9,19 3,19H8V21H16V19H21C22.1,19 23,18.1 23,17V5C23,3.89 22.1,3 21,3M21,17H3V5H21M16,11L9,15V7";
        }
    }
    $.$mol_icon_television_play = $mol_icon_television_play;
})($ || ($ = {}));
//mol/icon/television/play/-view.tree/play.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_play extends $mol_icon {
        path() {
            return "M8,5.14V19.14L19,12.14L8,5.14Z";
        }
    }
    $.$mol_icon_play = $mol_icon_play;
})($ || ($ = {}));
//mol/icon/play/-view.tree/play.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_play_circle extends $mol_icon {
        path() {
            return "M10,16.5V7.5L16,12M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z";
        }
    }
    $.$mol_icon_play_circle = $mol_icon_play_circle;
})($ || ($ = {}));
//mol/icon/play/circle/-view.tree/circle.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_format_title extends $mol_icon {
        path() {
            return "M5,4V7H10.5V19H13.5V7H19V4H5Z";
        }
    }
    $.$mol_icon_format_title = $mol_icon_format_title;
})($ || ($ = {}));
//mol/icon/format/title/-view.tree/title.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_gesture extends $mol_icon {
        path() {
            return "M4.59,6.89C5.29,6.18 6,5.54 6.3,5.67C6.8,5.87 6.3,6.7 6,7.19C5.75,7.61 3.14,11.08 3.14,13.5C3.14,14.78 3.62,15.84 4.5,16.5C5.23,17.04 6.22,17.21 7.12,16.94C8.19,16.63 9.07,15.54 10.18,14.17C11.39,12.68 13,10.73 14.26,10.73C15.89,10.73 15.91,11.74 16,12.5C12.24,13.16 10.64,16.19 10.64,17.89C10.64,19.59 12.08,21 13.85,21C15.5,21 18.14,19.65 18.54,14.88H21V12.38H18.53C18.38,10.73 17.44,8.18 14.5,8.18C12.25,8.18 10.32,10.09 9.56,11C9,11.75 7.5,13.5 7.27,13.74C7,14.04 6.59,14.58 6.16,14.58C5.71,14.58 5.44,13.75 5.8,12.66C6.15,11.57 7.2,9.8 7.65,9.14C8.43,8 8.95,7.22 8.95,5.86C8.95,3.69 7.31,3 6.44,3C5.12,3 3.97,4 3.72,4.25C3.36,4.61 3.06,4.91 2.84,5.18L4.59,6.89M13.88,18.55C13.57,18.55 13.14,18.29 13.14,17.83C13.14,17.23 13.87,15.63 16,15.07C15.71,17.76 14.58,18.55 13.88,18.55Z";
        }
    }
    $.$mol_icon_gesture = $mol_icon_gesture;
})($ || ($ = {}));
//mol/icon/gesture/-view.tree/gesture.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_gesture_tap extends $mol_icon {
        path() {
            return "M10,9C10,8.45 10.45,8 11,8C11.55,8 12,8.45 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5C13.21,5 15,6.79 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9C14,7.34 12.66,6 11,6C9.34,6 8,7.34 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9C7,6.79 8.79,5 11,5Z";
        }
    }
    $.$mol_icon_gesture_tap = $mol_icon_gesture_tap;
})($ || ($ = {}));
//mol/icon/gesture/tap/-view.tree/tap.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cursor_text extends $mol_icon {
        path() {
            return "M13,19C13,19.55 13.45,20 14,20H16V22H13.5C12.95,22 12,21.55 12,21C12,21.55 11.05,22 10.5,22H8V20H10C10.55,20 11,19.55 11,19V5C11,4.45 10.55,4 10,4H8V2H10.5C11.05,2 12,2.45 12,3C12,2.45 12.95,2 13.5,2H16V4H14C13.45,4 13,4.45 13,5V19Z";
        }
    }
    $.$mol_icon_cursor_text = $mol_icon_cursor_text;
})($ || ($ = {}));
//mol/icon/cursor/text/-view.tree/text.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_link extends $mol_icon {
        path() {
            return "M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7C4.24,7 2,9.24 2,12C2,14.76 4.24,17 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17C19.76,17 22,14.76 22,12C22,9.24 19.76,7 17,7Z";
        }
    }
    $.$mol_icon_link = $mol_icon_link;
})($ || ($ = {}));
//mol/icon/link/-view.tree/link.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_link_plus extends $mol_icon {
        path() {
            return "M7,7H11V9H7C5.34,9 4,10.34 4,12C4,13.66 5.34,15 7,15H11V17H7C4.24,17 2,14.76 2,12C2,9.24 4.24,7 7,7M17,7C19.76,7 22,9.24 22,12H20C20,10.34 18.66,9 17,9H13V7H17M8,11H16V13H8V11M17,12H19V15H22V17H19V20H17V17H14V15H17V12Z";
        }
    }
    $.$mol_icon_link_plus = $mol_icon_link_plus;
})($ || ($ = {}));
//mol/icon/link/plus/-view.tree/plus.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch_page_frame extends $mol_page {
        width(next) {
            return this.page().width(next);
        }
        height(next) {
            return this.page().height(next);
        }
        grid(next) {
            return this.page().grid(next);
        }
        page_name(next) {
            return this.page().name(next);
        }
        page() {
            const obj = new this.$.$hyoo_sketch_page_model();
            return obj;
        }
        project() {
            const obj = new this.$.$hyoo_sketch_project_model();
            return obj;
        }
        tools() {
            return [
                this.Project_demo(),
                this.Page_preview()
            ];
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        body() {
            return [
                this.Content(),
                this.Side_left()
            ];
        }
        element_focused(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Element(id) {
            const obj = new this.$.$hyoo_sketch_element();
            obj.element = () => this.element(id);
            obj.focused = (next) => this.handle_focused(id, next);
            obj.grid_step = () => this.grid();
            obj.preview = () => this.page_preview();
            return obj;
        }
        Element_text(id) {
            const obj = new this.$.$hyoo_sketch_element_text();
            obj.element = () => this.element_text(id);
            obj.focused = (next) => this.handle_focused(id, next);
            obj.grid_step = () => this.grid();
            obj.preview = () => this.page_preview();
            return obj;
        }
        Element_button(id) {
            const obj = new this.$.$hyoo_sketch_element_button();
            obj.element = () => this.element_button(id);
            obj.focused = (next) => this.handle_focused(id, next);
            obj.grid_step = () => this.grid();
            obj.preview = () => this.page_preview();
            return obj;
        }
        Element_string(id) {
            const obj = new this.$.$hyoo_sketch_element_string();
            obj.element = () => this.element_string(id);
            obj.focused = (next) => this.handle_focused(id, next);
            obj.grid_step = () => this.grid();
            obj.preview = () => this.page_preview();
            return obj;
        }
        Element_link(id) {
            const obj = new this.$.$hyoo_sketch_element_link();
            obj.element = () => this.element_link(id);
            obj.project = () => this.project();
            obj.focused = (next) => this.handle_focused(id, next);
            obj.grid_step = () => this.grid();
            obj.preview = () => this.page_preview();
            return obj;
        }
        Options() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => this.options();
            return obj;
        }
        plugins() {
            return [
                this.Delete_key()
            ];
        }
        Project_demo_icon() {
            const obj = new this.$.$mol_icon_television_play();
            return obj;
        }
        project_demo_pages() {
            return "";
        }
        Project_demo() {
            const obj = new this.$.$mol_link();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_page_frame_Project_demo_hint');
            obj.sub = () => [
                this.Project_demo_icon()
            ];
            obj.target = () => "_blank";
            obj.arg = () => ({
                demo: this.project_demo_pages()
            });
            return obj;
        }
        Page_preview_icon() {
            const obj = new this.$.$mol_icon_play_circle();
            return obj;
        }
        page_preview(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Page_preview() {
            const obj = new this.$.$mol_check_icon();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_page_frame_Page_preview_hint');
            obj.Icon = () => this.Page_preview_icon();
            obj.checked = (val) => this.page_preview(val);
            return obj;
        }
        Title() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.page_name(val);
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_page_frame_Title_hint');
            return obj;
        }
        focused() {
            return false;
        }
        mode() {
            return "";
        }
        grid_step() {
            return "";
        }
        focus(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        elements() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.attr = () => ({
                hyoo_sketch_page_frame__focused: this.focused(),
                hyoo_sketch_page_frame_content: this.mode()
            });
            obj.style = () => ({
                height: this.height(),
                width: this.width(),
                backgroundSize: this.grid_step()
            });
            obj.event = () => ({
                pointerdown: (next) => this.focus(next)
            });
            obj.sub = () => this.elements();
            return obj;
        }
        Text_icon() {
            const obj = new this.$.$mol_icon_format_title();
            return obj;
        }
        element_text_add(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Text() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_page_frame_Text_hint');
            obj.sub = () => [
                this.Text_icon()
            ];
            obj.click = (next) => this.element_text_add(next);
            return obj;
        }
        Button_icon() {
            const obj = new this.$.$mol_icon_gesture_tap();
            return obj;
        }
        element_button_add(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Button() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_page_frame_Button_hint');
            obj.sub = () => [
                this.Button_icon()
            ];
            obj.click = (next) => this.element_button_add(next);
            return obj;
        }
        String_icon() {
            const obj = new this.$.$mol_icon_cursor_text();
            return obj;
        }
        element_string_add(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        String() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_page_frame_String_hint');
            obj.sub = () => [
                this.String_icon()
            ];
            obj.click = (next) => this.element_string_add(next);
            return obj;
        }
        Link_icon() {
            const obj = new this.$.$mol_icon_link_plus();
            return obj;
        }
        element_link_add(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Link() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_sketch_page_frame_Link_hint');
            obj.sub = () => [
                this.Link_icon()
            ];
            obj.click = (next) => this.element_link_add(next);
            return obj;
        }
        tools_left() {
            return [
                this.Text(),
                this.Button(),
                this.String(),
                this.Link()
            ];
        }
        Tools_left() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.tools_left();
            return obj;
        }
        Side_left() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => [
                this.Tools_left()
            ];
            return obj;
        }
        element(id) {
            const obj = new this.$.$hyoo_sketch_element_model();
            return obj;
        }
        handle_focused(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        element_text(id) {
            const obj = new this.$.$hyoo_sketch_element_text_model();
            return obj;
        }
        element_button(id) {
            const obj = new this.$.$hyoo_sketch_element_button_model();
            return obj;
        }
        element_string(id) {
            const obj = new this.$.$hyoo_sketch_element_string_model();
            return obj;
        }
        element_link(id) {
            const obj = new this.$.$hyoo_sketch_element_link_model();
            return obj;
        }
        Width_control() {
            const obj = new this.$.$mol_number();
            obj.value = (next) => this.width(next);
            return obj;
        }
        Width_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_page_frame_Width_field_name');
            obj.control = () => this.Width_control();
            return obj;
        }
        Height_control() {
            const obj = new this.$.$mol_number();
            obj.value = (next) => this.height(next);
            return obj;
        }
        Height_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_page_frame_Height_field_name');
            obj.control = () => this.Height_control();
            return obj;
        }
        Grid_control() {
            const obj = new this.$.$mol_number();
            obj.value = (next) => this.grid(next);
            return obj;
        }
        Grid_filed() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_sketch_page_frame_Grid_filed_name');
            obj.control = () => this.Grid_control();
            return obj;
        }
        options() {
            return [
                this.Width_field(),
                this.Height_field(),
                this.Grid_filed()
            ];
        }
        element_delete(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Delete_key() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                delete: (next) => this.element_delete(next)
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "page", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "project", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "element_focused", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_page_frame.prototype, "Element", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_page_frame.prototype, "Element_text", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_page_frame.prototype, "Element_button", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_page_frame.prototype, "Element_string", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_page_frame.prototype, "Element_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Options", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Project_demo_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Project_demo", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Page_preview_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "page_preview", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Page_preview", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "focus", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Content", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Text_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "element_text_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Text", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Button_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "element_button_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Button", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "String_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "element_string_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "String", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Link_icon", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "element_link_add", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Link", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Tools_left", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Side_left", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_page_frame.prototype, "element", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_page_frame.prototype, "handle_focused", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_page_frame.prototype, "element_text", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_page_frame.prototype, "element_button", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_page_frame.prototype, "element_string", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch_page_frame.prototype, "element_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Width_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Width_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Height_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Height_field", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Grid_control", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Grid_filed", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "element_delete", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch_page_frame.prototype, "Delete_key", null);
    $.$hyoo_sketch_page_frame = $hyoo_sketch_page_frame;
})($ || ($ = {}));
//hyoo/sketch/page/frame/-view.tree/frame.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/sketch/page/frame/frame.view.css", "[hyoo_sketch_page_frame_content=\"editor\"] {\n\tbackground-color: white;\n\tbackground-image:\n\t\tlinear-gradient(var(--mol_theme_line), transparent 1px),\n\t\tlinear-gradient(90deg, var(--mol_theme_line) , transparent 1px);\n\tbackground-size: 10px 10px;\n\tbox-sizing: content-box;\n    background-position: -1px -1px;\n}\n\n[hyoo_sketch_page_frame__focused=\"true\"] {\n\tborder-color: 'black';\n}\n");
})($ || ($ = {}));
//hyoo/sketch/page/frame/-css/frame.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { px } = $mol_style_unit;
        $mol_style_define($.$hyoo_sketch_page_frame, {
            Body: {
                padding: $mol_gap.block,
                alignItems: 'center',
            },
            Content: {
                position: 'relative',
                border: {
                    style: 'solid',
                    width: px(1),
                    color: 'transparent',
                },
            },
            Head: {
                justifyContent: 'flex-start',
            },
            Side_left: {
                position: 'absolute',
                top: 0,
                left: 0,
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/page/frame/frame.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch_page_frame extends $.$hyoo_sketch_page_frame {
            domain() {
                return this.page().domain();
            }
            element(id) {
                return this.domain().element(id);
            }
            element_text(id) {
                return this.domain().element_text(id);
            }
            element_button(id) {
                return this.domain().element_button(id);
            }
            element_string(id) {
                return this.domain().element_string(id);
            }
            element_link(id) {
                return this.domain().element_link(id);
            }
            element_text_add() {
                const obj = this.domain().element_text($mol_guid());
                this.page().elements([...this.page().elements(), obj]);
            }
            element_button_add() {
                const obj = this.domain().element_button($mol_guid());
                this.page().elements([...this.page().elements(), obj]);
            }
            element_string_add() {
                const obj = this.domain().element_string($mol_guid());
                this.page().elements([...this.page().elements(), obj]);
            }
            element_link_add() {
                const obj = this.domain().element_link($mol_guid());
                this.page().elements([...this.page().elements(), obj]);
            }
            Element_switch(id) {
                const type = this.element(id).type();
                switch (type) {
                    case 'text': return this.Element_text(id);
                    case 'button': return this.Element_button(id);
                    case 'string': return this.Element_string(id);
                    case 'link': return this.Element_link(id);
                    default: return this.Element(id);
                }
            }
            elements() {
                return this.page().elements().map(obj => this.Element_switch(obj.id()));
            }
            element_focused(id) {
                return this.$.$mol_state_arg.value('focus', id) ?? '';
            }
            handle_focused(id, next) {
                if (next !== undefined) {
                    if (next)
                        this.element_focused(id);
                    return true;
                }
                return id === this.element_focused();
            }
            Element_options() {
                const id = this.element_focused();
                if (!id)
                    return null;
                return this.Element_switch(id).Options();
            }
            grid_step() {
                return `${this.grid()}px ${this.grid()}px`;
            }
            focus() {
                this.$.$mol_state_arg.value('focus', null);
            }
            focused() {
                return this.$.$mol_state_arg.value('focus') === null;
            }
            element_delete() {
                const id = this.element_focused();
                if (id) {
                    const list = this.page().elements();
                    this.page().elements(list.filter(obj => obj.id() !== id));
                }
            }
            page_preview(next) {
                if (next === undefined) {
                    return this.page().id() === this.$.$mol_state_arg.value('page_preview');
                }
                this.$.$mol_state_arg.value('page_preview', next === true ? this.page().id() : null);
                return next;
            }
            mode() {
                return this.page_preview() ? 'preview' : 'editor';
            }
            project_demo_pages() {
                return [this.page().id()].join(',');
            }
        }
        __decorate([
            $mol_mem_key
        ], $hyoo_sketch_page_frame.prototype, "Element_switch", null);
        __decorate([
            $mol_mem
        ], $hyoo_sketch_page_frame.prototype, "element_focused", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_sketch_page_frame.prototype, "handle_focused", null);
        __decorate([
            $mol_mem
        ], $hyoo_sketch_page_frame.prototype, "Element_options", null);
        $$.$hyoo_sketch_page_frame = $hyoo_sketch_page_frame;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/page/frame/frame.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_sketch extends $mol_book2 {
        domain() {
            const obj = new this.$.$hyoo_sketch_domain();
            return obj;
        }
        title() {
            return this.$.$mol_locale.text('$hyoo_sketch_title');
        }
        pages() {
            return [
                this.Projects_page(),
                this.Pages_page(),
                this.Frame_page(),
                this.Option_page()
            ];
        }
        Demo_page(id) {
            const obj = new this.$.$mol_page();
            obj.title = () => this.demo_page_title(id);
            obj.Head = () => null;
            obj.body = () => [
                this.Demo_page_content(id)
            ];
            return obj;
        }
        user() {
            const obj = new this.$.$hyoo_sketch_person_model();
            return obj;
        }
        Projects_page() {
            const obj = new this.$.$hyoo_sketch_project();
            obj.person = () => this.user();
            return obj;
        }
        project() {
            const obj = new this.$.$hyoo_sketch_project_model();
            return obj;
        }
        Pages_page() {
            const obj = new this.$.$hyoo_sketch_page();
            obj.project = () => this.project();
            return obj;
        }
        page() {
            const obj = new this.$.$hyoo_sketch_page_model();
            return obj;
        }
        page_options() {
            return this.Frame_page().Options();
        }
        element_focused_options() {
            return this.Frame_page().Element_options();
        }
        Demo_element(id) {
            return this.Frame_page().Element_switch(id);
        }
        Frame_page() {
            const obj = new this.$.$hyoo_sketch_page_frame();
            obj.page = () => this.page();
            obj.project = () => this.project();
            return obj;
        }
        options() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Option_page() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.$.$mol_locale.text('$hyoo_sketch_Option_page_title');
            obj.body = () => [
                this.options()
            ];
            return obj;
        }
        demo_page_title(id) {
            return "";
        }
        demo_page_width(id) {
            return NaN;
        }
        demo_page_elements(id) {
            return [];
        }
        Demo_page_content(id) {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                width: this.demo_page_width(id)
            });
            obj.sub = () => this.demo_page_elements(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "domain", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch.prototype, "Demo_page", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "user", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "Projects_page", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "project", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "Pages_page", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "page", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "Frame_page", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "options", null);
    __decorate([
        $mol_mem
    ], $hyoo_sketch.prototype, "Option_page", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sketch.prototype, "Demo_page_content", null);
    $.$hyoo_sketch = $hyoo_sketch;
})($ || ($ = {}));
//hyoo/sketch/-view.tree/sketch.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($hyoo_sketch, {
            Projects_page: {
                flex: {
                    basis: rem(12),
                },
            },
            Pages_page: {
                flex: {
                    basis: rem(15),
                },
            },
            Frame_page: {
                flex: {
                    basis: rem(30),
                },
            },
            Option_page: {
                flex: {
                    basis: rem(20),
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/sketch.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sketch extends $.$hyoo_sketch {
            user() {
                return this.domain().user();
            }
            project_opened() {
                return this.$.$mol_state_arg.value('project');
            }
            project() {
                return this.domain().project(this.project_opened());
            }
            page_opened() {
                return this.$.$mol_state_arg.value('page');
            }
            page() {
                return this.domain().page(this.page_opened());
            }
            demo_pages() {
                const str = this.$.$mol_state_arg.value('demo');
                if (!str)
                    return [];
                return str.split(',');
            }
            pages() {
                const demo_pages = this.demo_pages();
                if (demo_pages.length) {
                    return demo_pages.map(id => this.Demo_page(id));
                }
                return [
                    this.Projects_page(),
                    ...this.project_opened() ? [this.Pages_page()] : [],
                    ...this.page_opened() ? [this.Frame_page()] : [],
                    ...this.page_opened() ? [this.Option_page()] : [],
                ];
            }
            options() {
                return this.element_focused_options() ?? this.Frame_page().Options();
            }
            demo_page_title(id) {
                return this.domain().page(id).name();
            }
            demo_page_height(id) {
                return this.domain().page(id).height();
            }
            demo_page_width(id) {
                return this.domain().page(id).width();
            }
            demo_page_elements(id) {
                const page = this.domain().page(id);
                return page.elements().map(obj => {
                    const element = this.Demo_element(obj.id());
                    element.preview = $mol_const(true);
                    return element;
                });
            }
        }
        $$.$hyoo_sketch = $hyoo_sketch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/sketch/sketch.view.ts

//# sourceMappingURL=web.js.map
