declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    class $mol_object2 {
        static $: typeof $$;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: typeof $$;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): any;
        static toString(): any;
        static toJSON(): any;
        destructor(): void;
        static destructor(): void;
        toString(): string;
    }
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    enum $mol_wire_cursor {
        stale = -1,
        doubt = -2,
        fresh = -3,
        final = -4
    }
}

declare namespace $ {
    class $mol_wire_pub extends Object {
        data: unknown[];
        static get [Symbol.species](): ArrayConstructor;
        protected sub_from: number;
        get sub_list(): readonly $mol_wire_sub[];
        get sub_empty(): boolean;
        sub_on(sub: $mol_wire_pub, pub_pos: number): number;
        sub_off(sub_pos: number): void;
        reap(): void;
        promote(): void;
        fresh(): void;
        complete(): void;
        get incompleted(): boolean;
        emit(quant?: $mol_wire_cursor): void;
        peer_move(from_pos: number, to_pos: number): void;
        peer_repos(peer_pos: number, self_pos: number): void;
    }
}

declare namespace $ {
    interface $mol_wire_sub extends $mol_wire_pub {
        temp: boolean;
        track_on(): $mol_wire_sub | null;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        pub_off(pub_pos: number): void;
        track_cut(sub: $mol_wire_pub | null): void;
        track_off(sub: $mol_wire_pub | null): void;
        absorb(quant: $mol_wire_cursor): void;
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_wire_auto_sub: $mol_wire_sub | null;
    function $mol_wire_auto(next?: $mol_wire_sub | null): $mol_wire_sub | null;
    const $mol_wire_affected: (number | $mol_wire_sub)[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    let $mol_dev_format_head: symbol;
    let $mol_dev_format_body: symbol;
    function $mol_dev_format_native(obj: any): any[];
    function $mol_dev_format_auto(obj: any): any[];
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    function $mol_dev_format_span(style: object, ...content: any[]): any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    class $mol_wire_pub_sub extends $mol_wire_pub implements $mol_wire_sub {
        protected pub_from: number;
        protected cursor: $mol_wire_cursor;
        get temp(): boolean;
        get pub_list(): $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        promote(): void;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        track_off(sub: $mol_wire_sub | null): void;
        pub_off(sub_pos: number): void;
        destructor(): void;
        track_cut(): void;
        complete(): void;
        complete_pubs(): void;
        absorb(quant?: $mol_wire_cursor): void;
        get pub_empty(): boolean;
    }
}

declare namespace $ {
    class $mol_after_frame extends $mol_object2 {
        task: () => void;
        static _promise: Promise<void> | null;
        static get promise(): Promise<void>;
        cancelled: boolean;
        promise: Promise<void>;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_promise_like(val: any): val is Promise<any>;
}

declare namespace $ {
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_frame | null;
        static plan(): void;
        static sync(): void;
        [Symbol.toStringTag]: string;
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        get incompleted(): boolean;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, args?: Args);
        plan(): void;
        reap(): void;
        toString(): string;
        toJSON(): string;
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        fresh(): void;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        sync(): Awaited<Result>;
        async(): Promise<Result>;
        step(): Promise<null>;
    }
}

declare namespace $ {
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    const $mol_key_store: WeakMap<object, string>;
    function $mol_key<Value>(value: Value): string;
}

declare namespace $ {
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    type $mol_log3_event<Fields> = {
        [key in string]: unknown;
    } & {
        time?: string;
        place: unknown;
        message: string;
    } & Fields;
    type $mol_log3_logger<Fields, Res = void> = (this: $, event: $mol_log3_event<Fields>) => Res;
    let $mol_log3_come: $mol_log3_logger<{}>;
    let $mol_log3_done: $mol_log3_logger<{}>;
    let $mol_log3_fail: $mol_log3_logger<{}>;
    let $mol_log3_warn: $mol_log3_logger<{
        hint: string;
    }>;
    let $mol_log3_rise: $mol_log3_logger<{}>;
    let $mol_log3_area: $mol_log3_logger<{}, () => void>;
    function $mol_log3_area_lazy(this: $, event: $mol_log3_event<{}>): () => void;
    let $mol_log3_stack: (() => void)[];
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper, Lower = never> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? [
            Lower
        ] extends [Input[Field]] ? Field : never : never;
    }[keyof Input];
}

declare namespace $ {
    function $mol_log3_web_make(level: $mol_type_keys_extract<Console, Function>, color: string): (this: $, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, Args, Result>;
        get temp(): boolean;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    function $mol_wire_method<Host extends object, Args extends readonly any[]>(host: Host, field: PropertyKey, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: Host, ...args: Args) => any;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
}

declare namespace $ {
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

declare namespace $ {
    class $mol_wire_atom<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static solo<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result): $mol_wire_atom<Host, Args, Result>;
        static plex<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result, key: Args[0]): $mol_wire_atom<Host, Args, Result>;
        static watching: Set<$mol_wire_atom<any, any, any>>;
        static watcher: $mol_after_frame | null;
        static watch(): void;
        watch(): void;
        resync(args: Args): Error | Result | Promise<Error | Result>;
        once(): Awaited<Result>;
        channel(): ((next?: $mol_type_foot<Args>) => Awaited<Result>) & {
            atom: $mol_wire_atom<Host, Args, Result>;
        };
        destructor(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    export function $mol_wire_solo<Args extends any[]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): TypedPropertyDescriptor<(...args: First_optional<Args>) => any>;
    type First_optional<Args extends any[]> = Args extends [] ? [] : [Args[0] | undefined, ...$mol_type_tail<Args>];
    export {};
}

declare namespace $ {
    function $mol_wire_plex<Args extends [any, ...any[]]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: typeof host, ...args: Args) => any;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    let $mol_mem: typeof $mol_wire_solo;
    let $mol_mem_key: typeof $mol_wire_plex;
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(): {
            width: number;
            height: number;
        };
        static resizes(next?: Event): Event | undefined;
    }
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        promise: any;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], notify?: 'notify'): Element[];
    }
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): (obj: object, name: PropertyKey, descr: PropertyDescriptor) => PropertyDescriptor;
        static get field(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value) => Value | undefined;
    }
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_wire_probe<Value>(task: () => Value, def?: Value): Value | undefined;
}

declare namespace $ {
    function $mol_wire_watch(): void;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_wire_solid(): void;
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }, passive?: boolean): void;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    export function $mol_wire_async<Host extends object>(obj: Host): ObjectOrFunctionResultPromisify<Host>;
    type FunctionResultPromisify<Some> = Some extends (...args: infer Args) => infer Res ? Res extends PromiseLike<unknown> ? Some : (...args: Args) => Promise<Res> : Some;
    type MethodsResultPromisify<Host extends Object> = {
        [K in keyof Host]: FunctionResultPromisify<Host[K]>;
    };
    type ObjectOrFunctionResultPromisify<Some> = (Some extends (...args: any) => unknown ? FunctionResultPromisify<Some> : {}) & (Some extends Object ? MethodsResultPromisify<Some> : Some);
    export {};
}

declare namespace $ {
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
    function $mol_style_attach_force(): HTMLStyleElement;
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_decor<Value> {
        readonly value: Value;
        constructor(value: Value);
        prefix(): string;
        valueOf(): Value;
        postfix(): string;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_style_unit_length = '%' | 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'cap' | 'ch' | 'em' | 'rem' | 'ex' | 'ic' | 'lh' | 'rlh' | 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
    type $mol_style_unit_angle = 'deg' | 'rad' | 'grad' | 'turn';
    type $mol_style_unit_time = 's' | 'ms';
    type $mol_style_unit_any = $mol_style_unit_length | $mol_style_unit_angle | $mol_style_unit_time;
    type $mol_style_unit_str<Quanity extends $mol_style_unit_any = $mol_style_unit_any> = `${number}${Quanity}`;
    class $mol_style_unit<Literal extends $mol_style_unit_any> extends $mol_decor<number> {
        readonly literal: Literal;
        constructor(value: number, literal: Literal);
        postfix(): Literal;
        static per(value: number): `${number}%`;
        static px(value: number): `${number}px`;
        static mm(value: number): `${number}mm`;
        static cm(value: number): `${number}cm`;
        static Q(value: number): `${number}Q`;
        static in(value: number): `${number}in`;
        static pc(value: number): `${number}pc`;
        static pt(value: number): `${number}pt`;
        static cap(value: number): `${number}cap`;
        static ch(value: number): `${number}ch`;
        static em(value: number): `${number}em`;
        static rem(value: number): `${number}rem`;
        static ex(value: number): `${number}ex`;
        static ic(value: number): `${number}ic`;
        static lh(value: number): `${number}lh`;
        static rlh(value: number): `${number}rlh`;
        static vh(value: number): `${number}vh`;
        static vw(value: number): `${number}vw`;
        static vi(value: number): `${number}vi`;
        static vb(value: number): `${number}vb`;
        static vmin(value: number): `${number}vmin`;
        static vmax(value: number): `${number}vmax`;
        static deg(value: number): `${number}deg`;
        static rad(value: number): `${number}rad`;
        static grad(value: number): `${number}grad`;
        static turn(value: number): `${number}turn`;
        static s(value: number): `${number}s`;
        static ms(value: number): `${number}ms`;
    }
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'clamp' | 'scale' | 'cubic-bezier' | 'linear' | 'steps' | $mol_style_func_image | $mol_style_func_filter;
    type $mol_style_func_image = 'url' | 'linear-gradient' | 'radial-gradient' | 'conic-gradient';
    type $mol_style_func_filter = 'blur' | 'brightness' | 'contrast' | 'drop-shadow' | 'grayscale' | 'hue-rotate' | 'invert' | 'opacity' | 'sepia' | 'saturate';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static linear_gradient<Value>(value: Value): $mol_style_func<"linear-gradient", Value>;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string, Value extends string>(name: Name, defaultValue?: Value): $mol_style_func<"var", Name | (Name | Value)[]>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | `${number}%`)[]>;
        static clamp(min: $mol_style_unit_str<any>, mid: $mol_style_unit_str<any>, max: $mol_style_unit_str<any>): $mol_style_func<"clamp", `${number}${any}`[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
        static scale(zoom: number): $mol_style_func<"scale", number[]>;
        static linear(...breakpoints: Array<number | [number, number | $mol_style_unit_str<'%'>]>): $mol_style_func<"linear", string[]>;
        static cubic_bezier(x1: number, y1: number, x2: number, y2: number): $mol_style_func<"cubic-bezier", number[]>;
        static steps(value: number, step_position: 'jump-start' | 'jump-end' | 'jump-none' | 'jump-both' | 'start' | 'end'): $mol_style_func<"steps", (number | "end" | "start" | "jump-start" | "jump-end" | "jump-none" | "jump-both")[]>;
        static blur(value?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"blur", string>;
        static brightness(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"brightness", string | number>;
        static contrast(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"contrast", string | number>;
        static drop_shadow(color: $mol_style_properties_color, x_offset: $mol_style_unit_str<$mol_style_unit_length>, y_offset: $mol_style_unit_str<$mol_style_unit_length>, blur_radius?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"drop-shadow", (`${number}%` | `${number}px` | `${number}mm` | `${number}cm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}pt` | `${number}cap` | `${number}ch` | `${number}em` | `${number}rem` | `${number}ex` | `${number}ic` | `${number}lh` | `${number}rlh` | `${number}vh` | `${number}vw` | `${number}vi` | `${number}vb` | `${number}vmin` | `${number}vmax` | $mol_style_properties_color)[]>;
        static grayscale(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"grayscale", string | number>;
        static hue_rotate(value?: 0 | $mol_style_unit_str<$mol_style_unit_angle>): $mol_style_func<"hue-rotate", string | 0>;
        static invert(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"invert", string | number>;
        static opacity(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"opacity", string | number>;
        static sepia(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"sepia", string | number>;
        static saturate(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"saturate", string | number>;
    }
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer' | $mol_style_func<'var'>;
    export type $mol_style_properties_color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}`;
    type Length = 0 | `${number}${$mol_style_unit_length}` | $mol_style_func<'calc' | 'var' | 'clamp'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | readonly [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Single_animation_composition = 'replace' | 'add' | 'accumulate';
    type Single_animation_direction = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    type Single_animation_fill_mode = 'none' | 'forwards' | 'backwards' | 'both';
    type Single_animation_iteration_count = 'infinite' | number;
    type Single_animation_play_state = 'running' | 'paused';
    type Easing_function = Linear_easing_function | Cubic_bezier_easing_function | Step_easing_function;
    type Linear_easing_function = 'linear' | $mol_style_func<'linear'>;
    type Cubic_bezier_easing_function = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | $mol_style_func<'cubic-bezier'>;
    type Step_easing_function = 'step-start' | 'step-end' | $mol_style_func<'steps'>;
    type Compat_auto = 'searchfield' | 'textarea' | 'push-button' | 'slider-horizontal' | 'checkbox' | 'radio' | 'menulist' | 'listbox' | 'meter' | 'progress-bar' | 'button';
    type Compat_special = 'textfield' | 'menulist-button';
    type Mix_blend_mode = Blend_mode | 'plus-darker' | 'plus-lighter';
    type Blend_mode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
    type Box = 'border-box' | 'padding-box' | 'content-box';
    type Baseline_position = 'baseline' | `${'first' | 'last'} baseline`;
    type Content_distribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
    type Self_position = 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end';
    type Content_position = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
    type Span_align = 'none' | 'start' | 'end' | 'center' | $mol_style_func<'var'>;
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both' | $mol_style_func<'var'>;
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type Overflow_position = 'unsafe' | 'safe';
    type ContainRule = 'size' | 'layout' | 'style' | 'paint' | $mol_style_func<'var'>;
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat' | $mol_style_func<'var'>;
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        accentColor?: $mol_style_properties_color | Common;
        align?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        justify?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        all?: Common;
        animation?: {
            composition?: Single_animation_composition | Single_animation_composition[][] | Common;
            delay?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            direction?: Single_animation_direction | Single_animation_direction[][] | Common;
            duration?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            fillMode?: Single_animation_fill_mode | Single_animation_fill_mode[][] | Common;
            iterationCount?: Single_animation_iteration_count | Single_animation_iteration_count[][] | Common;
            name?: 'none' | string & {} | ('none' | string & {})[][] | Common;
            playState?: Single_animation_play_state | Single_animation_play_state[][] | Common;
            timingFunction?: Easing_function | Easing_function[][] | Common;
        };
        appearance?: 'none' | 'auto' | Compat_auto | Compat_special | Common;
        aspectRatio?: 'auto' | number | `${number} / ${number}`;
        backdropFilter: $mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'> | ($mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'>)[][] | 'none' | Common;
        backfaceVisibility: 'visible' | 'hidden' | Common;
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        gap?: Length;
        background?: 'none' | {
            attachment?: 'scroll' | 'fixed' | 'local' | ('scroll' | 'fixed' | 'local')[][] | Common;
            blendMode?: Mix_blend_mode | Mix_blend_mode[][] | Common;
            clip?: Box | Box[][] | Common;
            color?: $mol_style_properties_color | Common;
            image?: readonly (readonly [$mol_style_func<$mol_style_func_image> | string & {}])[] | 'none' | Common;
            repeat?: Repeat | [Repeat, Repeat] | Common;
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center' | Common;
            size?: (BG_size | [BG_size, BG_size])[];
        };
        box?: {
            shadow?: readonly {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: $mol_style_properties_color;
            }[] | 'none' | Common;
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: string & {} | 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: $mol_style_properties_color | Common;
        display?: 'block' | 'inline' | 'run-in' | 'list-item' | 'none' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'contents' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-column-group' | 'table-row' | 'table-cell' | 'table-column' | 'table-caption' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid' | 'ruby' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | Common;
        overflow?: Overflow | {
            x?: Overflow | Common;
            y?: Overflow | Common;
            anchor?: 'auto' | 'none' | Common;
        };
        contain?: 'none' | 'strict' | 'content' | ContainRule | readonly ContainRule[] | Common;
        whiteSpace?: 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-wrap' | 'pre-line' | Common;
        webkitOverflowScrolling?: 'auto' | 'touch' | Common;
        scrollbar?: {
            color?: readonly [$mol_style_properties_color, $mol_style_properties_color] | 'auto' | Common;
            width?: 'auto' | 'thin' | 'none' | Common;
        };
        scroll?: {
            snap?: {
                type: 'none' | Snap_axis | readonly [Snap_axis, 'mandatory' | 'proximity'] | Common;
                stop: 'normal' | 'always' | Common;
                align: Span_align | readonly [Span_align, Span_align] | Common;
            };
            padding?: Directions<Length | 'auto'>;
        };
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        height?: Size;
        minHeight?: Size;
        maxHeight?: Size;
        margin?: Directions<Length | 'auto'>;
        padding?: Directions<Length | 'auto'>;
        position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed' | Common;
        top?: Length | 'auto' | Common;
        right?: Length | 'auto' | Common;
        bottom?: Length | 'auto' | Common;
        left?: Length | 'auto' | Common;
        border?: Directions<{
            radius?: Length | [Length, Length];
            style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Common;
            color?: $mol_style_properties_color | Common;
            width?: Length | Common;
        }>;
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size | Common;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | Common;
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number | Common;
        opacity: number | Common;
    }
    export {};
}

declare namespace $ {
    function $mol_style_prop<Keys extends string[]>(prefix: string, keys: Keys): Record<Keys[number], $mol_style_func<"var", unknown>>;
}

declare namespace $ {
    const $mol_theme: Record<"image" | "line" | "text" | "field" | "current" | "focus" | "back" | "hover" | "card" | "special" | "control" | "shade", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    let $mol_gap: Record<"text" | "space" | "block" | "blur" | "round", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        autorun(): void;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly (string | number | boolean | $mol_view | Node)[];
        sub_visible(): readonly (string | number | boolean | $mol_view | Node)[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | null;
        dom_id(): string;
        dom_node_external(next?: Element): Element;
        dom_node(next?: Element): Element;
        dom_final(): Element | undefined;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        auto(): any;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        static _view_names?: Map<string, string[]>;
        static view_names(suffix: string): string[];
        view_names_owned(): string[];
        view_names(): Set<string>;
        theme(next?: string | null): string | null;
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style_size(): {
            [key: string]: string | number;
        };
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [x: string]: (event: Event) => Promise<void>;
        };
        plugins(): readonly $mol_view[];
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        force_render(path: Set<$mol_view>): void;
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): void;
        bring(): void;
        destructor(): void;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

declare namespace $ {
}

interface Window {
    cordova: any;
}
declare namespace $ {
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node_external(next?: Element): Element;
        render(): void;
    }
}

declare namespace $ {
    class $mol_dom_listener extends $mol_object {
        _node: any;
        _event: string;
        _handler: (event: any) => any;
        _config: boolean | {
            passive: boolean;
        };
        constructor(_node: any, _event: string, _handler: (event: any) => any, _config?: boolean | {
            passive: boolean;
        });
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_print extends $mol_object {
        static before(): $mol_dom_listener;
        static after(): $mol_dom_listener;
        static active(next?: boolean): boolean;
    }
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':focus-visible' | ':focus-within' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | ':not()' | ':nth-child(even)' | ':nth-child(odd)' | ':nth-last-child(even)' | ':nth-last-child(odd)' | ':nth-of-type(even)' | ':nth-of-type(odd)' | ':nth-last-of-type(even)' | ':nth-last-of-type(odd)' | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':placeholder-shown' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type Attrs<View extends $mol_view, Config, Attrs = ReturnType<View['attr']>> = {
        [name in keyof Attrs]?: {
            [val in keyof Config[Extract<name, keyof Config>]]: $mol_style_guard<View, Config[Extract<name, keyof Config>][val]>;
        };
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    type Keys<View extends $mol_view> = '>' | '@' | keyof $mol_style_properties | $mol_style_pseudo_element | $mol_style_pseudo_class | $mol_type_keys_extract<View, () => $mol_view> | `$${string}`;
    export type $mol_style_guard<View extends $mol_view, Config> = {
        [key in Keys<View>]?: unknown;
    } & $mol_style_properties & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? $mol_style_properties[key] : key extends '>' | $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends `[${string}]` ? {
            [val in keyof Config[key]]: $mol_style_guard<View, Config[key][val]>;
        } : key extends `--${string}` ? any : key extends keyof $ ? $mol_style_guard<InstanceType<Extract<$[key], typeof $mol_view>>, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : key extends `$${string}` ? $mol_type_error<'Unknown View Class'> : $mol_type_error<'Unknown CSS Property'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
}

declare namespace $ {
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
}

declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		field( ): ({ 
			'tabIndex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['field'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_scroll extends $.$mol_scroll {
        scroll_top(next?: number, cache?: 'cache'): number;
        scroll_left(next?: number, cache?: 'cache'): number;
        event_scroll(next?: Event): void;
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $ {
    let $mol_layer: Record<string, $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_type_enforce<Actual extends Expected, Expected> = Actual;
}

declare namespace $ {

	type $mol_view__title__66DCUU5L = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['title'] >
	>
	export class $mol_book2 extends $mol_scroll {
		pages( ): readonly($mol_view)[]
		menu_title( ): string
		sub( ): ReturnType< $mol_book2['pages'] >
		minimal_width( ): number
		Placeholder( ): $mol_view
		Gap( id: any): $mol_view
	}
	
}

//# sourceMappingURL=book2.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_book2 extends $.$mol_book2 {
        title(): string;
        menu_title(): string;
        sub(): readonly $mol_view[];
        bring(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    let $mol_action: typeof $mol_wire_method;
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string): string;
        static href_normal(): string;
        static href_absolute(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): Readonly<{
            [key: string]: string;
        }>;
        static dict_cut(except: string[]): {
            [key: string]: string;
        };
        static value(key: string, next?: string | null): string | null;
        static link(next: Record<string, string | null>): string;
        static prolog: string;
        static separator: string;
        static make_link(next: {
            [key: string]: string | null;
        }): string;
        static go(next: {
            [key: string]: string | null;
        }): void;
        static encode(str: string): string;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: Record<string, string | null>): string;
    }
}

declare namespace $ {
    let $mol_mem_persist: typeof $mol_wire_solid;
}

declare namespace $ {
    export function $mol_wire_sync<Host extends object>(obj: Host): ObjectOrFunctionResultAwaited<Host>;
    type FunctionResultAwaited<Some> = Some extends (...args: infer Args) => infer Res ? (...args: Args) => Awaited<Res> : Some;
    type MethodsResultAwaited<Host extends Object> = {
        [K in keyof Host]: FunctionResultAwaited<Host[K]>;
    };
    type ObjectOrFunctionResultAwaited<Some> = (Some extends (...args: any) => unknown ? FunctionResultAwaited<Some> : {}) & (Some extends Object ? MethodsResultAwaited<Some> : Some);
    export {};
}

declare namespace $ {
    class $mol_storage extends $mol_object2 {
        static native(): StorageManager;
        static persisted(next?: boolean, cache?: 'cache'): boolean;
        static estimate(): StorageEstimate;
        static dir(): FileSystemDirectoryHandle;
    }
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static changes(next?: StorageEvent): StorageEvent | undefined;
        static value<Value>(key: string, next?: Value | null): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value | null;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_lights(this: $, next?: boolean): boolean;
}

declare namespace $ {

	export class $mol_theme_auto extends $mol_plugin {
		theme( ): string
		attr( ): ({ 
			'mol_theme': ReturnType< $mol_theme_auto['theme'] >,
		}) 
	}
	
}

//# sourceMappingURL=auto.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_theme_auto extends $.$mol_theme_auto {
        theme(): "$mol_theme_light" | "$mol_theme_dark";
    }
}

declare var $node: any;

declare namespace $ {
    function $mol_charset_encode(value: string): Uint8Array;
}

declare namespace $ {
    type $mol_int62_string = `${string}_${string}`;
    function $mol_int62_string_ensure(str: unknown): `${string}_${string}` | null;
    type $mol_int62_pair = {
        readonly lo: number;
        readonly hi: number;
    };
    const $mol_int62_max: number;
    const $mol_int62_min: number;
    const $mol_int62_range: number;
    function $mol_int62_to_string({ lo, hi }: $mol_int62_pair): `${string}_${string}`;
    function $mol_int62_from_string(str: string): null | $mol_int62_pair;
    function $mol_int62_compare(left_lo: number, left_hi: number, right_lo: number, right_hi: number): number;
    function $mol_int62_inc(lo: number, hi: number, max?: number): $mol_int62_pair;
    function $mol_int62_random(): $mol_int62_pair;
    function $mol_int62_hash_string(str: string): `${string}_${string}`;
    function $mol_int62_hash_buffer(buf: Uint8Array, seed?: {
        lo: number;
        hi: number;
    }): $mol_int62_pair;
}

declare let $hyoo_sync_revision: string;

declare namespace $ {
    type $mol_data_value<Input = any, Output = any> = (val: Input) => Output;
}

declare namespace $ {
    function $mol_data_setup<Value extends $mol_data_value, Config = never>(value: Value, config: Config): Value & {
        config: Config;
        Value: ReturnType<Value>;
    };
}

declare namespace $ {
    class $mol_error_mix<Cause extends {} = {}> extends AggregateError {
        readonly cause: Cause;
        name: string;
        constructor(message: string, cause?: Cause, ...errors: Error[]);
        static make(...params: ConstructorParameters<typeof $mol_error_mix>): $mol_error_mix<{}>;
    }
}

declare namespace $ {
    class $mol_data_error extends $mol_error_mix {
    }
}

declare namespace $ {
    function $mol_data_enum<Dict extends Record<number | string, number | string>>(name: string, dict: Dict): ((value: Dict[keyof Dict]) => Dict[keyof Dict]) & {
        config: {
            name: string;
            dict: Dict;
        };
        Value: Dict[keyof Dict];
    };
}

declare namespace $ {
    var $mol_crypto_native: Crypto;
}

declare namespace $ {
    function $mol_base64_encode(src: string | Uint8Array): string;
}

declare namespace $ {
    function $mol_base64_encode_web(str: string | Uint8Array): string;
}

declare namespace $ {
    function $mol_base64_decode(base64: string): Uint8Array;
}

declare namespace $ {
    function $mol_base64_decode_web(base64Str: string): Uint8Array;
}

declare namespace $ {
    function $mol_base64_url_encode(buffer: Uint8Array): string;
    function $mol_base64_url_decode(str: string): Uint8Array;
}

declare namespace $ {
    function $mol_crypto_auditor_pair(this: $): Promise<{
        public: $mol_crypto_auditor_public;
        private: $mol_crypto_auditor_private;
    }>;
    class $mol_crypto_auditor_public extends Object {
        readonly native: CryptoKey & {
            type: 'public';
        };
        static size_str: number;
        static size_bin: number;
        constructor(native: CryptoKey & {
            type: 'public';
        });
        static from(serial: string | Uint8Array): Promise<$mol_crypto_auditor_public>;
        serial(): Promise<string>;
        toArray(): Promise<Uint8Array>;
        verify(data: BufferSource, sign: BufferSource): Promise<boolean>;
    }
    class $mol_crypto_auditor_private extends Object {
        readonly native: CryptoKey & {
            type: 'private';
        };
        static size_str: number;
        static size_bin: number;
        constructor(native: CryptoKey & {
            type: 'private';
        });
        static from(serial: string | Uint8Array): Promise<$mol_crypto_auditor_private>;
        serial(): Promise<string>;
        toArray(): Promise<Uint8Array>;
        sign(data: BufferSource): Promise<ArrayBuffer>;
        public(): Promise<$mol_crypto_auditor_public>;
    }
    const $mol_crypto_auditor_sign_size = 64;
    function $mol_crypto_auditor_private_to_public(serial: string): string;
}

declare namespace $ {
    enum $hyoo_crowd_peer_level {
        get = 0,
        add = 1,
        mod = 2,
        law = 3
    }
    class $hyoo_crowd_peer extends Object {
        readonly key_public: $mol_crypto_auditor_public;
        readonly key_public_serial: string;
        readonly key_private: $mol_crypto_auditor_private;
        readonly key_private_serial: string;
        id: $mol_int62_string;
        constructor(key_public: $mol_crypto_auditor_public, key_public_serial: string, key_private: $mol_crypto_auditor_private, key_private_serial: string);
        static generate(): Promise<$hyoo_crowd_peer>;
        static restore(serial: string): Promise<$hyoo_crowd_peer>;
    }
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'utf-16le' | 'utf-16be' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
}

declare namespace $ {
    function $mol_charset_decode(buffer: BufferSource, encoding?: $mol_charset_encoding): string;
}

declare namespace $ {
    type $hyoo_crowd_unit_id = `${$mol_int62_string}!${$mol_int62_string}`;
    enum $hyoo_crowd_unit_kind {
        grab = 0,
        join = 1,
        give = 2,
        data = 3
    }
    enum $hyoo_crowd_unit_group {
        auth = 0,
        data = 1
    }
    class $hyoo_crowd_unit extends Object {
        readonly land: $mol_int62_string;
        readonly auth: $mol_int62_string;
        readonly head: $mol_int62_string;
        readonly self: $mol_int62_string;
        readonly next: $mol_int62_string;
        readonly prev: $mol_int62_string;
        readonly time: number;
        readonly data: unknown;
        bin: $hyoo_crowd_unit_bin | null;
        constructor(land: $mol_int62_string, auth: $mol_int62_string, head: $mol_int62_string, self: $mol_int62_string, next: $mol_int62_string, prev: $mol_int62_string, time: number, data: unknown, bin: $hyoo_crowd_unit_bin | null);
        kind(): $hyoo_crowd_unit_kind;
        group(): $hyoo_crowd_unit_group;
        level(): $hyoo_crowd_peer_level;
        [Symbol.toPrimitive](): string;
    }
    class $hyoo_crowd_unit_bin extends DataView {
        static from_buffer(buffer: Int16Array): $hyoo_crowd_unit_bin;
        static from_unit(unit: $hyoo_crowd_unit): $hyoo_crowd_unit_bin;
        sign(next?: Uint8Array): Uint8Array;
        size(): number;
        sens(): Uint8Array;
        unit(): $hyoo_crowd_unit;
    }
    function $hyoo_crowd_unit_compare(left: $hyoo_crowd_unit, right: $hyoo_crowd_unit): number;
}

declare namespace $ {
    type $mol_type_partial_deep<Val> = Val extends object ? Val extends Function ? Val : {
        [field in keyof Val]?: $mol_type_partial_deep<Val[field]> | undefined;
    } : Val;
}

declare namespace $ {
    let $mol_jsx_prefix: string;
    let $mol_jsx_crumbs: string;
    let $mol_jsx_booked: Set<string> | null;
    let $mol_jsx_document: $mol_jsx.JSX.ElementClass['ownerDocument'];
    const $mol_jsx_frag = "";
    function $mol_jsx<Props extends $mol_jsx.JSX.IntrinsicAttributes, Children extends Array<Node | string>>(Elem: string | ((props: Props, ...children: Children) => Element), props: Props, ...childNodes: Children): Element | DocumentFragment;
    namespace $mol_jsx.JSX {
        interface Element extends HTMLElement {
            class?: string;
        }
        interface ElementClass {
            attributes: {};
            ownerDocument: Pick<Document, 'getElementById' | 'createElementNS' | 'createDocumentFragment'>;
            childNodes: Array<Node | string>;
            valueOf(): Element;
        }
        type OrString<Dict> = {
            [key in keyof Dict]: Dict[key] | string;
        };
        type IntrinsicElements = {
            [key in keyof ElementTagNameMap]?: $.$mol_type_partial_deep<OrString<Element & IntrinsicAttributes & ElementTagNameMap[key]>>;
        };
        interface IntrinsicAttributes {
            id?: string;
            xmlns?: string;
        }
        interface ElementAttributesProperty {
            attributes: {};
        }
        interface ElementChildrenAttribute {
        }
    }
}

declare namespace $ {
    function $hyoo_sync_peer(path: string, next?: string): Promise<$hyoo_crowd_peer>;
}

declare namespace $ {
    function $hyoo_crowd_time_now(): number;
    function $hyoo_crowd_time_stamp(time: number): number;
}

declare namespace $ {
    class $hyoo_crowd_clock extends Map<$mol_int62_string, number> {
        static begin: number;
        last_time: number;
        constructor(entries?: Iterable<readonly [$mol_int62_string, number]>);
        sync(right: $hyoo_crowd_clock): void;
        see_time(time: number): void;
        see_peer(peer: $mol_int62_string, time: number): void;
        see_bin(bin: $hyoo_crowd_clock_bin, group: $hyoo_crowd_unit_group): void;
        fresh(peer: $mol_int62_string, time: number): boolean;
        ahead(clock: $hyoo_crowd_clock): boolean;
        time(peer: $mol_int62_string): number;
        now(): number;
        last_stamp(): number;
        tick(peer: $mol_int62_string): number;
    }
    class $hyoo_crowd_clock_bin extends DataView {
        static from(land_id: $mol_int62_string, clocks: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock], count: number): $hyoo_crowd_clock_bin;
        land(): `${string}_${string}`;
        count(): number;
    }
}

declare namespace $ {
    class $hyoo_crowd_node extends $mol_object2 {
        readonly land: $hyoo_crowd_land;
        readonly head: $mol_int62_string;
        constructor(land?: $hyoo_crowd_land, head?: $mol_int62_string);
        static for<Node extends typeof $hyoo_crowd_node>(this: Node, land: $hyoo_crowd_land, head: $mol_int62_string): InstanceType<Node>;
        static toJSON(): string;
        id(): `${string}_${string}`;
        world(): $hyoo_crowd_world | null;
        as<Node extends typeof $hyoo_crowd_node>(Node: Node): InstanceType<Node>;
        units(): readonly $hyoo_crowd_unit[];
        nodes<Node extends typeof $hyoo_crowd_node>(Node: Node): InstanceType<Node>[];
        virgin(): boolean;
        [Symbol.toPrimitive](): string;
        toJSON(): `${string}_${string}`;
    }
}

declare namespace $ {
    class $hyoo_crowd_reg extends $hyoo_crowd_node {
        value(next?: unknown): {} | null;
        str(next?: string): string;
        numb(next?: number): number;
        bool(next?: boolean): boolean;
        yoke(law?: readonly ("" | `${string}_${string}`)[], mod?: readonly ("" | `${string}_${string}`)[], add?: readonly ("" | `${string}_${string}`)[]): $hyoo_crowd_land | null;
    }
}

declare namespace $ {
    class $hyoo_crowd_struct extends $hyoo_crowd_node {
        sub<Node extends typeof $hyoo_crowd_node>(key: string, Node: Node): InstanceType<Node>;
        yoke<Node extends typeof $hyoo_crowd_node>(key: string, Node: Node, law?: readonly ("" | `${string}_${string}`)[], mod?: readonly ("" | `${string}_${string}`)[], add?: readonly ("" | `${string}_${string}`)[]): InstanceType<Node> | null;
    }
}

declare namespace $ {
    class $hyoo_crowd_land extends $mol_object {
        id(): `${string}_${string}`;
        toJSON(): `${string}_${string}`;
        peer(): $hyoo_crowd_peer;
        peer_id(): `${string}_${string}`;
        world(): $hyoo_crowd_world | null;
        get clock_auth(): $hyoo_crowd_clock;
        get clock_data(): $hyoo_crowd_clock;
        get clocks(): readonly [$hyoo_crowd_clock, $hyoo_crowd_clock];
        get clocks_bin(): Uint8Array;
        readonly pub: $mol_wire_pub;
        readonly _clocks: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock];
        _unit_all: Map<`${string}_${string}!${string}_${string}`, $hyoo_crowd_unit>;
        unit(head: $mol_int62_string, self: $mol_int62_string): $hyoo_crowd_unit | undefined;
        _unit_lists: Map<`${string}_${string}`, ($hyoo_crowd_unit[] & {
            dirty: boolean;
        }) | undefined>;
        _unit_alives: Map<`${string}_${string}`, $hyoo_crowd_unit[] | undefined>;
        size(): number;
        unit_list(head: $mol_int62_string): $hyoo_crowd_unit[] & {
            dirty: boolean;
        };
        unit_alives(head: $mol_int62_string): readonly $hyoo_crowd_unit[];
        node<Node extends typeof $hyoo_crowd_node>(head: $mol_int62_string, Node: Node): InstanceType<Node>;
        chief: $hyoo_crowd_struct;
        id_new(): $mol_int62_string;
        fork(auth: $hyoo_crowd_peer): $hyoo_crowd_land;
        delta(clocks?: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): readonly $hyoo_crowd_unit[];
        resort(head: $mol_int62_string): $hyoo_crowd_unit[] & {
            dirty: boolean;
        };
        apply(delta: readonly $hyoo_crowd_unit[]): this;
        _joined: boolean;
        join(): true | undefined;
        leave(): false | undefined;
        allowed_add(peer?: `${string}_${string}`): boolean;
        allowed_mod(peer?: `${string}_${string}`): boolean;
        allowed_law(peer?: `${string}_${string}`): boolean;
        level_base(next?: $hyoo_crowd_peer_level): void;
        level(peer: $mol_int62_string | '', next?: $hyoo_crowd_peer_level): $hyoo_crowd_peer_level;
        grabbed(): boolean;
        peers(): readonly `${string}_${string}`[];
        residents(): readonly `${string}_${string}`[];
        authors(): Set<`${string}_${string}`>;
        steal_rights(donor: $hyoo_crowd_land): void;
        first_stamp(): number | null;
        last_stamp(): number;
        selection(peer: $mol_int62_string): $hyoo_crowd_reg;
        put(head: $mol_int62_string, self: $mol_int62_string, prev: $mol_int62_string, data: unknown): $hyoo_crowd_unit;
        wipe(unit: $hyoo_crowd_unit): $hyoo_crowd_unit;
        move(unit: $hyoo_crowd_unit, head: $mol_int62_string, prev: $mol_int62_string): void;
        insert(unit: $hyoo_crowd_unit, head: $mol_int62_string, seat: number): void;
    }
}

declare namespace $ {
    class $hyoo_crowd_fund<Node extends typeof $hyoo_crowd_node> extends $mol_object {
        world: $hyoo_crowd_world;
        node_class: Node;
        constructor(world: $hyoo_crowd_world, node_class: Node);
        Item(id: $mol_int62_string | `${$mol_int62_string}!${$mol_int62_string}`): InstanceType<Node>;
        make(law?: readonly ("" | `${string}_${string}`)[], mod?: readonly ("" | `${string}_${string}`)[], add?: readonly ("" | `${string}_${string}`)[]): InstanceType<Node>;
    }
}

declare namespace $ {
    let $mol_dict_key: typeof $mol_key;
    class $mol_dict<Key, Value> extends Map<Key, Value> {
        get(key: Key): Value | undefined;
        has(key: Key): boolean;
        set(key: Key, value: Value): this;
        delete(key: Key): boolean;
        forEach(back: (value: Value, key: Key, dict: Map<Key, Value>) => void, context?: any): void;
        keys(): {
            [Symbol.iterator](): any;
            next(): IteratorReturnResult<any> | IteratorYieldResult<Key>;
        };
        entries(): {
            [Symbol.iterator](): any;
            next(): IteratorReturnResult<any> | IteratorYieldResult<[Key, Value]>;
        };
        [Symbol.iterator](): {
            [Symbol.iterator](): any;
            next(): IteratorReturnResult<any> | IteratorYieldResult<[Key, Value]>;
        };
    }
}

declare namespace $ {
    class $hyoo_crowd_world extends $mol_object {
        readonly peer?: $hyoo_crowd_peer | undefined;
        constructor(peer?: $hyoo_crowd_peer | undefined);
        readonly lands_pub: $mol_wire_pub;
        _lands: Map<`${string}_${string}`, $hyoo_crowd_land>;
        get lands(): Map<`${string}_${string}`, $hyoo_crowd_land>;
        land_init(id: $hyoo_crowd_land): void;
        land(id: $mol_int62_string): $hyoo_crowd_land;
        land_sync(id: $mol_int62_string): $hyoo_crowd_land;
        Fund<Item extends typeof $hyoo_crowd_node>(Item: Item): $hyoo_crowd_fund<Item>;
        home(): $hyoo_crowd_land;
        _knights: $mol_dict<`${string}_${string}`, $hyoo_crowd_peer>;
        _signs: WeakMap<$hyoo_crowd_unit, Uint8Array>;
        grab(law?: readonly ("" | `${string}_${string}`)[], mod?: readonly ("" | `${string}_${string}`)[], add?: readonly ("" | `${string}_${string}`)[]): Promise<$hyoo_crowd_land>;
        sign_units(units: readonly $hyoo_crowd_unit[]): Promise<$hyoo_crowd_unit[]>;
        delta_land(land: $hyoo_crowd_land, clocks?: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): Promise<$hyoo_crowd_unit[]>;
        delta_batch(land: $hyoo_crowd_land, clocks?: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): Promise<Uint8Array>;
        delta(clocks?: Map<`${string}_${string}`, readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]>): AsyncGenerator<Uint8Array, void, unknown>;
        merge(donor: $hyoo_crowd_world): Promise<void>;
        apply(delta: Uint8Array): Promise<{
            allow: $hyoo_crowd_unit[];
            forbid: Map<$hyoo_crowd_unit, string>;
        }>;
        audit_delta(land: $hyoo_crowd_land, delta: $hyoo_crowd_unit[]): Promise<{
            allow: $hyoo_crowd_unit[];
            forbid: Map<$hyoo_crowd_unit, string>;
        }>;
    }
}

declare namespace $ {
    function $mol_promise<Result = void>(): Promise<Result> & {
        done: (res: Result | PromiseLike<Result>) => void;
        fail: (error?: any) => void;
    };
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_wait_timeout_async(this: $, timeout: number): Promise<void> & {
        done: (res: void | PromiseLike<void>) => void;
        fail: (error?: any) => void;
    } & {
        destructor: () => void;
    };
    function $mol_wait_timeout(this: $, timeout: number): void;
}

declare namespace $ {
    function $mol_wire_race<Tasks extends ((...args: any) => any)[]>(...tasks: Tasks): {
        [index in keyof Tasks]: ReturnType<Tasks[index]>;
    };
}

declare namespace $ {
    let $hyoo_sync_masters: string[];
}

declare namespace $ {
    class $hyoo_sync_yard<Line> extends $mol_object2 {
        db_unit_persisted: WeakSet<$hyoo_crowd_unit>;
        log_pack(data: any): any;
        peer(next?: string): $hyoo_crowd_peer;
        world(): $hyoo_crowd_world;
        land_init(land: $hyoo_crowd_land): void;
        land(id: $mol_int62_string): $hyoo_crowd_land;
        land_grab(law?: readonly ("" | `${string}_${string}`)[], mod?: readonly ("" | `${string}_${string}`)[], add?: readonly ("" | `${string}_${string}`)[]): $hyoo_crowd_land;
        home(): $hyoo_crowd_land;
        land_search(query: string): `${string}_${string}`[];
        sync(): void;
        land_sync(land: $hyoo_crowd_land): void;
        db_land_clocks(land: $mol_int62_string, next?: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): readonly [$hyoo_crowd_clock, $hyoo_crowd_clock] | undefined;
        db_land_sync(land: $hyoo_crowd_land): void;
        db_land_init(land: $hyoo_crowd_land): void;
        db_land_load(land: $hyoo_crowd_land): Promise<$hyoo_crowd_unit[]>;
        db_land_search(from: string | number, to?: string | number): Promise<Set<`${string}_${string}`>>;
        db_land_save(land: $hyoo_crowd_land, units: readonly $hyoo_crowd_unit[]): Promise<void>;
        master_cursor(next?: number): number;
        master_list(): string[];
        master_link(): string;
        master(): any;
        server(): any;
        slaves(next?: readonly Line[]): readonly Line[];
        line_lands(line: Line, next?: $hyoo_crowd_land[]): $hyoo_crowd_land[];
        line_land_clocks({ line, land }: {
            line: Line;
            land: $hyoo_crowd_land;
        }, next?: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): readonly [$hyoo_crowd_clock, $hyoo_crowd_clock] | undefined;
        line_sync(line: Line): void;
        line_land_sync({ line, land }: {
            line: Line;
            land: $hyoo_crowd_land;
        }): void;
        line_land_init({ line, land }: {
            line: Line;
            land: $hyoo_crowd_land;
        }): void;
        line_land_neck({ line, land }: {
            line: Line;
            land: $mol_int62_string;
        }, next?: Promise<any>[]): Promise<any>[];
        line_receive(line: Line, message: Uint8Array): Promise<void>;
        line_send_clocks(line: Line, land: $hyoo_crowd_land): void;
        line_send_units(line: Line, units: readonly $hyoo_crowd_unit[]): Promise<void>;
    }
}

declare namespace $ {
    function $mol_db_response<Result>(request: IDBRequest<Result>): Promise<Result>;
}

declare namespace $ {
    class $mol_db_store<Schema extends $mol_db_store_schema> {
        readonly native: IDBObjectStore;
        constructor(native: IDBObjectStore);
        get name(): string;
        get path(): string | string[];
        get incremental(): boolean;
        get indexes(): { [Name in keyof Schema["Indexes"]]: $mol_db_index<{
            Key: Schema["Indexes"][Name];
            Doc: Schema['Doc'];
        }>; };
        index_make(name: string, path?: string[], unique?: boolean, multiEntry?: boolean): IDBIndex;
        index_drop(name: string): this;
        get transaction(): $mol_db_transaction<$mol_db_schema>;
        get db(): $mol_db_database<$mol_db_schema>;
        clear(): Promise<undefined>;
        count(keys?: Schema['Key'] | IDBKeyRange): Promise<number>;
        put(doc: Schema['Doc'], key?: Schema['Key']): Promise<IDBValidKey>;
        get(key: Schema['Key']): Promise<Schema["Doc"] | undefined>;
        select(key?: Schema['Key'] | IDBKeyRange | null, count?: number): Promise<Schema["Doc"][]>;
        drop(keys: Schema['Key'] | IDBKeyRange): Promise<undefined>;
    }
}

declare namespace $ {
    type $mol_db_store_schema = {
        Key: IDBValidKey;
        Doc: unknown;
        Indexes: Record<string, IDBValidKey[]>;
    };
}

declare namespace $ {
    class $mol_db_index<Schema extends $mol_db_index_schema> {
        readonly native: IDBIndex;
        constructor(native: IDBIndex);
        get name(): string;
        get paths(): string[];
        get unique(): boolean;
        get multiple(): boolean;
        get store(): $mol_db_store<$mol_db_store_schema>;
        get transaction(): $mol_db_transaction<$mol_db_schema>;
        get db(): $mol_db_database<$mol_db_schema>;
        count(keys?: Schema['Key'] | IDBKeyRange): Promise<number>;
        get(key: Schema['Key']): Promise<Schema["Doc"] | undefined>;
        select(key?: Schema['Key'] | IDBKeyRange | null, count?: number): Promise<Schema["Doc"][]>;
    }
}

declare namespace $ {
    type $mol_db_index_schema = {
        Key: IDBValidKey[];
        Doc: unknown;
    };
}

declare namespace $ {
    function $mol_db<Schema extends $mol_db_schema>(this: $, name: string, ...migrations: ((transaction: $mol_db_transaction<$mol_db_schema>) => void)[]): Promise<$mol_db_database<Schema>>;
}

declare namespace $ {
    type $mol_db_schema = Record<string, $mol_db_store_schema>;
}

declare namespace $ {
    class $mol_db_database<Schema extends $mol_db_schema> {
        readonly native: IDBDatabase;
        constructor(native: IDBDatabase);
        get name(): string;
        get version(): number;
        get stores(): (keyof Schema)[];
        read<Names extends Exclude<keyof Schema, symbol | number>>(...names: Names[]): Pick<Schema, Names> extends infer T extends $mol_db_schema ? { [Name in keyof T]: $mol_db_store<Pick<Schema, Names>[Name]>; } : never;
        change<Names extends Exclude<keyof Schema, symbol | number>>(...names: Names[]): $mol_db_transaction<Pick<Schema, Names>>;
        kill(): Promise<IDBDatabase>;
        destructor(): void;
    }
}

interface IDBTransaction {
    commit(): void;
}
declare namespace $ {
    class $mol_db_transaction<Schema extends $mol_db_schema> {
        readonly native: IDBTransaction;
        constructor(native: IDBTransaction);
        get stores(): { [Name in keyof Schema]: $mol_db_store<Schema[Name]>; };
        store_make(name: string): IDBObjectStore;
        store_drop(name: string): this;
        abort(): void;
        commit(): Promise<void>;
        get db(): $mol_db_database<$mol_db_schema>;
    }
}

declare namespace $ {
    class $hyoo_sync_client extends $hyoo_sync_yard<WebSocket | Window> {
        db(): Promise<$mol_db_database<{
            Unit: {
                Key: [$mol_int62_string, $mol_int62_string, $mol_int62_string];
                Doc: $hyoo_crowd_unit;
                Indexes: {
                    Land: [$mol_int62_string];
                    Data: [$mol_int62_string];
                };
            };
        }>>;
        db_land_load(land: $hyoo_crowd_land): Promise<$hyoo_crowd_unit[]>;
        db_land_search(from: string, to?: string): Promise<Set<`${string}_${string}`>>;
        db_land_save(land: $hyoo_crowd_land, units: readonly $hyoo_crowd_unit[]): Promise<void>;
        reconnects(reset?: null): number;
        master(): WebSocket;
        line_send_clocks(line: WebSocket | Window, land: $hyoo_crowd_land): void;
        line_send_units(line: WebSocket | Window, units: readonly $hyoo_crowd_unit[]): Promise<void>;
    }
}

declare namespace $ {
    class $hyoo_sketch_domain extends $mol_object2 {
        static yard(): $hyoo_sync_client;
        yard(): $hyoo_sync_client;
        user(): $hyoo_sketch_person;
        person(id: $mol_int62_string): $hyoo_sketch_person;
        element(id: $mol_int62_string): $hyoo_sketch_element;
        element_new(page: $mol_int62_string): $hyoo_sketch_element;
        page(id: $mol_int62_string): $hyoo_sketch_page;
        page_new(project: $mol_int62_string): $hyoo_sketch_page;
        project(id: $mol_int62_string): $hyoo_sketch_project;
        project_new(): $hyoo_sketch_project;
    }
}

declare namespace $ {
    class $hyoo_sketch_entity extends $mol_object {
        id(): $mol_int62_string;
        head(): $mol_int62_string;
        domain(): $hyoo_sketch_domain;
        land(): $hyoo_crowd_land;
        state(): $hyoo_crowd_struct;
    }
}

declare namespace $ {
    function $mol_reconcile<Prev, Next>({ prev, from, to, next, equal, drop, insert, update, }: {
        prev: readonly Prev[];
        from: number;
        to: number;
        next: ArrayLike<Next>;
        equal: (next: Next, prev: Prev) => boolean;
        drop: (prev: Prev, lead: Prev | null) => Prev | null;
        insert: (next: Next, lead: Prev | null) => Prev;
        update?: (next: Next, prev: Prev, lead: Prev | null) => Prev;
    }): void;
}

declare namespace $ {
    class $hyoo_crowd_list extends $hyoo_crowd_node {
        list(next?: readonly unknown[]): readonly unknown[];
        set(next?: ReadonlySet<string | number | boolean | null>): Set<unknown>;
        insert(next: readonly unknown[], from?: number, to?: number): void;
        move(from: number, to: number): void;
        cut(seat: number): $hyoo_crowd_unit;
        has(val: string | number | boolean | null, next?: boolean): boolean;
        add(val: string | number | boolean | null): void;
        drop(val: string | number | boolean | null): void;
        node_make<Node extends typeof $hyoo_crowd_node>(val: unknown, Node: Node): InstanceType<Node>;
    }
}

declare namespace $ {
    class $hyoo_sketch_project extends $hyoo_sketch_entity {
        name(next?: string): string;
        pages_node(): $hyoo_crowd_list;
        pages(next?: $hyoo_sketch_page[]): $hyoo_sketch_page[];
        page_add(obj: $hyoo_sketch_page): void;
        page_delete(obj: $hyoo_sketch_page): void;
        page_duplicate(obj: $hyoo_sketch_page): void;
        editors(): `${string}_${string}`[];
        authors(): $hyoo_sketch_person[];
        access_public(): boolean;
    }
}

declare namespace $ {

	type $mol_view__dom_name__W6DXS7JT = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__6RTY41M5 = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__UL7SRPEN = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height__7L92FEEQ = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name__74MPAQNS = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__ENLWWOEG = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_page_body_scroll_top__4NU4FF60 = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub__PTHZ2OCM = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub__GGAGQTE1 = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name__XR54NCC3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__9KBN234Z = $mol_type_enforce<
		ReturnType< $mol_page['foot'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_page extends $mol_view {
		tabindex( ): number
		Logo( ): any
		title_content( ): readonly(any)[]
		Title( ): $mol_view
		tools( ): readonly($mol_view_content)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		body_scroll_top( next?: ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] > ): ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] >
		body( ): readonly($mol_view)[]
		Body_content( ): $mol_view
		body_content( ): readonly(any)[]
		Body( ): $mol_scroll
		foot( ): readonly($mol_view)[]
		Foot( ): $mol_view
		dom_name( ): string
		field( ): ({ 
			'tabIndex': ReturnType< $mol_page['tabindex'] >,
		})  & ReturnType< $mol_view['field'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static task(precision: number, reset?: null): $mol_after_timeout | $mol_after_frame;
        static now(precision: number): number;
    }
}

declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): Record<string, any>;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_svg_path__geometry__BUYA9HOO = $mol_type_enforce<
		ReturnType< $mol_icon['path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $mol_icon extends $mol_svg_root {
		path( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		minimal_width( ): number
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_account extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=account.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link extends $mol_view {
		uri_toggle( ): string
		hint( ): string
		hint_safe( ): ReturnType< $mol_link['hint'] >
		target( ): string
		file_name( ): string
		current( ): boolean
		relation( ): string
		event_click( next?: any ): any
		click( next?: ReturnType< $mol_link['event_click'] > ): ReturnType< $mol_link['event_click'] >
		uri( ): string
		dom_name( ): string
		uri_off( ): string
		uri_native( ): any
		external( ): boolean
		attr( ): ({ 
			'href': ReturnType< $mol_link['uri_toggle'] >,
			'title': ReturnType< $mol_link['hint_safe'] >,
			'target': ReturnType< $mol_link['target'] >,
			'download': ReturnType< $mol_link['file_name'] >,
			'mol_link_current': ReturnType< $mol_link['current'] >,
			'rel': ReturnType< $mol_link['relation'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		arg( ): Record<string, any>
		event( ): ({ 
			click( next?: ReturnType< $mol_link['click'] > ): ReturnType< $mol_link['click'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri_toggle(): string;
        uri(): string;
        uri_off(): string;
        uri_native(): URL;
        current(): boolean;
        file_name(): string;
        minimal_height(): number;
        external(): boolean;
        target(): '_self' | '_blank' | '_top' | '_parent' | string;
        hint_safe(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    type $mol_file_type = 'file' | 'dir' | 'link';
    interface $mol_file_stat {
        type: $mol_file_type;
        size: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }
    class $mol_file_not_found extends Error {
    }
    abstract class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        static base: string;
        path(): string;
        parent(): $mol_file;
        abstract stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        reset(): void;
        version(): string;
        abstract ensure(): void;
        abstract drop(): void;
        watcher(): {
            destructor(): void;
        };
        exists(next?: boolean): boolean;
        type(): "" | $mol_file_type;
        name(): string;
        ext(): string;
        abstract buffer(next?: Uint8Array): Uint8Array;
        text(next?: string, virt?: 'virt'): string;
        abstract sub(): $mol_file[];
        abstract resolve(path: string): $mol_file;
        abstract relate(base?: $mol_file): string;
        abstract append(next: Uint8Array | string): void;
        find(include?: RegExp, exclude?: RegExp): $mol_file[];
        size(): number;
        open(...modes: readonly ('create' | 'exists_truncate' | 'exists_fail' | 'read_only' | 'write_only' | 'read_write' | 'append')[]): number;
        toJSON(): string;
    }
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
    class $mol_fetch_response extends $mol_object2 {
        readonly native: Response;
        constructor(native: Response);
        status(): "success" | "unknown" | "inform" | "redirect" | "wrong" | "failed";
        code(): number;
        message(): string;
        headers(): Headers;
        mime(): string | null;
        stream(): ReadableStream<Uint8Array> | null;
        text(): string;
        json(): unknown;
        buffer(): ArrayBuffer;
        xml(): Document;
        xhtml(): Document;
        html(): Document;
    }
    class $mol_fetch extends $mol_object2 {
        static request(input: RequestInfo, init?: RequestInit): Promise<Response> & {
            destructor: () => void;
        };
        static response(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static success(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static stream(input: RequestInfo, init?: RequestInit): ReadableStream<Uint8Array> | null;
        static text(input: RequestInfo, init?: RequestInit): string;
        static json(input: RequestInfo, init?: RequestInit): unknown;
        static buffer(input: RequestInfo, init?: RequestInit): ArrayBuffer;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {
    class $mol_file_web extends $mol_file {
        static absolute(path: string): $mol_file_web;
        static relative(path: string): $mol_file_web;
        static base: string;
        buffer(next?: Uint8Array): Uint8Array;
        stat(next?: $mol_file_stat, virt?: 'virt'): $mol_file_stat;
        resolve(path: string): $mol_file_web;
        ensure(): void;
        drop(): void;
        sub(): $mol_file[];
        relate(base?: $mol_file): string;
        append(next: Uint8Array | string): void;
    }
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
        static warn(key: string): null;
    }
}

declare namespace $ {

	export class $mol_icon_plus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=plus.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_speck extends $mol_view {
		theme( ): string
		value( ): any
		attr( ): ({ 
			'mol_theme': ReturnType< $mol_speck['theme'] >,
		})  & ReturnType< $mol_view['attr'] >
		style( ): ({ 
			'minHeight': string,
		})  & ReturnType< $mol_view['style'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $ {

	type $mol_speck__value__E7MUM8EU = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		event( ): ({ 
			click( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        status(next?: any[]): any[];
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
        error(): string;
        hint_safe(): string;
        sub_visible(): ($mol_speck | $mol_view_content)[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {
    function $mol_support_css_overflow_anchor(this: $): boolean;
}

declare namespace $ {

	type $mol_view__style__QSL3V5NH = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style__RKEIU7DS = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		rows( ): readonly($mol_view)[]
		gap_before( ): number
		gap_after( ): number
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		Empty( ): $mol_view
		Gap_before( ): $mol_view
		Gap_after( ): $mol_view
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly $mol_view[];
        render_visible_only(): boolean;
        view_window(next?: [number, number]): [number, number];
        gap_before(): number;
        gap_after(): number;
        sub_visible(): $mol_view[];
        minimal_height(): number;
        force_render(path: Set<$mol_view>): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_pop_bubble__align__NRHWJFVK = $mol_type_enforce<
		ReturnType< $mol_pop['align'] >
		,
		ReturnType< $mol_pop_bubble['align'] >
	>
	type $mol_pop_bubble__content__LYR9CY2M = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max__URRJU63G = $mol_type_enforce<
		ReturnType< $mol_pop['height_max'] >
		,
		ReturnType< $mol_pop_bubble['height_max'] >
	>
	export class $mol_pop extends $mol_view {
		Anchor( ): any
		align( ): string
		bubble_content( ): readonly($mol_view_content)[]
		height_max( ): number
		Bubble( ): $mol_pop_bubble
		showed( next?: boolean ): boolean
		align_vert( ): string
		align_hor( ): string
		prefer( ): string
		sub( ): readonly(any)[]
		sub_visible( ): readonly(any)[]
	}
	
	export class $mol_pop_bubble extends $mol_view {
		content( ): readonly($mol_view_content)[]
		height_max( ): number
		align( ): string
		sub( ): ReturnType< $mol_pop_bubble['content'] >
		style( ): ({ 
			'maxHeight': ReturnType< $mol_pop_bubble['height_max'] >,
		})  & ReturnType< $mol_view['style'] >
		attr( ): ({ 
			'mol_pop_align': ReturnType< $mol_pop_bubble['align'] >,
			'tabindex': number,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=pop.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        showed(next?: boolean): boolean;
        sub_visible(): any[];
        height_max(): number;
        align(): string;
        align_vert(): "suspense" | "top" | "bottom";
        align_hor(): "suspense" | "left" | "right";
        View_port(): $mol_view;
        view_port(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | {
            left: number;
            top: number;
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub__JIXF7LNB = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): readonly $mol_view_content[];
        label(): readonly any[];
        aria_checked(): string;
    }
}

declare namespace $ {

	type $mol_check__minimal_width__L56ZUEGO = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height__Q077KZBU = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled__MR61IGTB = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked__U60DEX23 = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks__6LWG0M5G = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub__VC1MXCHB = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint__CSSLHMXR = $mol_type_enforce<
		ReturnType< $mol_pick['hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	export class $mol_pick extends $mol_pop {
		keydown( next?: any ): any
		trigger_enabled( ): boolean
		clicks( next?: any ): any
		trigger_content( ): readonly($mol_view_content)[]
		hint( ): string
		Trigger( ): $mol_check
		event( ): ({ 
			keydown( next?: ReturnType< $mol_pick['keydown'] > ): ReturnType< $mol_pick['keydown'] >,
		})  & ReturnType< $mol_pop['event'] >
		Anchor( ): ReturnType< $mol_pick['Trigger'] >
	}
	
}

//# sourceMappingURL=pick.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pick extends $.$mol_pick {
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_paragraph extends $mol_view {
		line_height( ): number
		letter_width( ): number
		width_limit( ): number
		row_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paragraph.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_paragraph extends $.$mol_paragraph {
        maximal_width(): number;
        width_limit(): number;
        minimal_width(): number;
        row_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    type $mol_type_equals<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? unknown : never;
}

declare namespace $ {
    type $mol_type_merge<Intersection> = Intersection extends (...a: any[]) => any ? Intersection : Intersection extends new (...a: any[]) => any ? Intersection : Intersection extends object ? $mol_type_merge_object<Intersection> extends Intersection ? unknown extends $mol_type_equals<{
        [Key in keyof Intersection]: Intersection[Key];
    }, Intersection> ? Intersection : {
        [Key in keyof Intersection]: $mol_type_merge<Intersection[Key]>;
    } : Intersection : Intersection;
    type $mol_type_merge_object<Intersection> = {
        [Key in keyof Intersection]: Intersection[Key];
    };
}

declare namespace $ {
    type $mol_type_intersect<Union> = (Union extends any ? (_: Union) => void : never) extends ((_: infer Intersection) => void) ? Intersection : never;
}

declare namespace $ {
    type $mol_unicode_category = [$mol_unicode_category_binary] | ['General_Category', $mol_char_category_general] | ['Script', $mol_unicode_category_script] | ['Script_Extensions', $mol_unicode_category_script];
    type $mol_unicode_category_binary = 'ASCII' | 'ASCII_Hex_Digit' | 'Alphabetic' | 'Any' | 'Assigned' | 'Bidi_Control' | 'Bidi_Mirrored' | 'Case_Ignorable' | 'Cased' | 'Changes_When_Casefolded' | 'Changes_When_Casemapped' | 'Changes_When_Lowercased' | 'Changes_When_NFKC_Casefolded' | 'Changes_When_Titlecased' | 'Changes_When_Uppercased' | 'Dash' | 'Default_Ignorable_Code_Point' | 'Deprecated' | 'Diacritic' | 'Emoji' | 'Emoji_Component' | 'Emoji_Modifier' | 'Emoji_Modifier_Base' | 'Emoji_Presentation' | 'Extended_Pictographic' | 'Extender' | 'Grapheme_Base' | 'Grapheme_Extend' | 'Hex_Digit' | 'IDS_Binary_Operator' | 'IDS_Trinary_Operator' | 'ID_Continue' | 'ID_Start' | 'Ideographic' | 'Join_Control' | 'Logical_Order_Exception' | 'Lowercase' | 'Math' | 'Noncharacter_Code_Point' | 'Pattern_Syntax' | 'Pattern_White_Space' | 'Quotation_Mark' | 'Radical' | 'Regional_Indicator' | 'Sentence_Terminal' | 'Soft_Dotted' | 'Terminal_Punctuation' | 'Unified_Ideograph' | 'Uppercase' | 'Variation_Selector' | 'White_Space' | 'XID_Continue' | 'XID_Start';
    type $mol_char_category_general = 'Cased_Letter' | 'Close_Punctuation' | 'Connector_Punctuation' | 'Control' | 'Currency_Symbol' | 'Dash_Punctuation' | 'Decimal_Number' | 'Enclosing_Mark' | 'Final_Punctuation' | 'Format' | 'Initial_Punctuation' | 'Letter' | 'Letter_Number' | 'Line_Separator' | 'Lowercase_Letter' | 'Mark' | 'Math_Symbol' | 'Modifier_Letter' | 'Modifier_Symbol' | 'Nonspacing_Mark' | 'Number' | 'Open_Punctuation' | 'Other' | 'Other_Letter' | 'Other_Number' | 'Other_Punctuation' | 'Other_Symbol' | 'Paragraph_Separator' | 'Private_Use' | 'Punctuation' | 'Separator' | 'Space_Separator' | 'Spacing_Mark' | 'Surrogate' | 'Symbol' | 'Titlecase_Letter' | 'Unassigned' | 'Uppercase_Letter';
    type $mol_unicode_category_script = 'Adlam' | 'Ahom' | 'Anatolian_Hieroglyphs' | 'Arabic' | 'Armenian' | 'Avestan' | 'Balinese' | 'Bamum' | 'Bassa_Vah' | 'Batak' | 'Bengali' | 'Bhaiksuki' | 'Bopomofo' | 'Brahmi' | 'Braille' | 'Buginese' | 'Buhid' | 'Canadian_Aboriginal' | 'Carian' | 'Caucasian_Albanian' | 'Chakma' | 'Cham' | 'Chorasmian' | 'Cherokee' | 'Common' | 'Coptic' | 'Cuneiform' | 'Cypriot' | 'Cyrillic' | 'Deseret' | 'Devanagari' | 'Dives_Akuru' | 'Dogra' | 'Duployan' | 'Egyptian_Hieroglyphs' | 'Elbasan' | 'Elymaic' | 'Ethiopic' | 'Georgian' | 'Glagolitic' | 'Gothic' | 'Grantha' | 'Greek' | 'Gujarati' | 'Gunjala_Gondi' | 'Gurmukhi' | 'Han' | 'Hangul' | 'Hanifi_Rohingya' | 'Hanunoo' | 'Hatran' | 'Hebrew' | 'Hiragana' | 'Imperial_Aramaic' | 'Inherited' | 'Inscriptional_Pahlavi' | 'Inscriptional_Parthian' | 'Javanese' | 'Kaithi' | 'Kannada' | 'Katakana' | 'Kayah_Li' | 'Kharoshthi' | 'Khitan_Small_Script' | 'Khmer' | 'Khojki' | 'Khudawadi' | 'Lao' | 'Latin' | 'Lepcha' | 'Limbu' | 'Linear_A' | 'Linear_B' | 'Lisu' | 'Lycian' | 'Lydian' | 'Mahajani' | 'Makasar' | 'Malayalam' | 'Mandaic' | 'Manichaean' | 'Marchen' | 'Medefaidrin' | 'Masaram_Gondi' | 'Meetei_Mayek' | 'Mende_Kikakui' | 'Meroitic_Cursive' | 'Meroitic_Hieroglyphs' | 'Miao' | 'Modi' | 'Mongolian' | 'Mro' | 'Multani' | 'Myanmar' | 'Nabataean' | 'Nandinagari' | 'New_Tai_Lue' | 'Newa' | 'Nko' | 'Nushu' | 'Nyiakeng_Puachue_Hmong' | 'Ogham' | 'Ol_Chiki' | 'Old_Hungarian' | 'Old_Italic' | 'Old_North_Arabian' | 'Old_Permic' | 'Old_Persian' | 'Old_Sogdian' | 'Old_South_Arabian' | 'Old_Turkic' | 'Oriya' | 'Osage' | 'Osmanya' | 'Pahawh_Hmong' | 'Palmyrene' | 'Pau_Cin_Hau' | 'Phags_Pa' | 'Phoenician' | 'Psalter_Pahlavi' | 'Rejang' | 'Runic' | 'Samaritan' | 'Saurashtra' | 'Sharada' | 'Shavian' | 'Siddham' | 'SignWriting' | 'Sinhala' | 'Sogdian' | 'Sora_Sompeng' | 'Soyombo' | 'Sundanese' | 'Syloti_Nagri' | 'Syriac' | 'Tagalog' | 'Tagbanwa' | 'Tai_Le' | 'Tai_Tham' | 'Tai_Viet' | 'Takri' | 'Tamil' | 'Tangut' | 'Telugu' | 'Thaana' | 'Thai' | 'Tibetan' | 'Tifinagh' | 'Tirhuta' | 'Ugaritic' | 'Vai' | 'Wancho' | 'Warang_Citi' | 'Yezidi' | 'Yi' | 'Zanabazar_Square';
}

interface String {
    match<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.match]>;
    matchAll<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.matchAll]>;
}
declare namespace $ {
    type Groups_to_params<T> = {
        [P in keyof T]?: T[P] | boolean | undefined;
    };
    export type $mol_regexp_source = number | string | RegExp | {
        [key in string]: $mol_regexp_source;
    } | readonly [$mol_regexp_source, ...$mol_regexp_source[]];
    export type $mol_regexp_groups<Source extends $mol_regexp_source> = Source extends number ? {} : Source extends string ? {} : Source extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{
        [key in Extract<keyof Source, number>]: $mol_regexp_groups<Source[key]>;
    }[Extract<keyof Source, number>]>> : Source extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> ? {} : NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> : Source extends {
        readonly [key in string]: $mol_regexp_source;
    } ? $mol_type_merge<$mol_type_intersect<{
        [key in keyof Source]: $mol_type_merge<$mol_type_override<{
            readonly [k in Extract<keyof Source, string>]: string;
        }, {
            readonly [k in key]: Source[key] extends string ? Source[key] : string;
        }> & $mol_regexp_groups<Source[key]>>;
    }[keyof Source]>> : never;
    export class $mol_regexp<Groups extends Record<string, string>> extends RegExp {
        readonly groups: (Extract<keyof Groups, string>)[];
        constructor(source: string, flags?: string, groups?: (Extract<keyof Groups, string>)[]);
        [Symbol.matchAll](str: string): IterableIterator<RegExpMatchArray & $mol_type_override<RegExpMatchArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }>>;
        [Symbol.match](str: string): null | RegExpMatchArray;
        [Symbol.split](str: string): string[];
        test(str: string): boolean;
        exec(str: string): RegExpExecArray & $mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }> | null;
        generate(params: Groups_to_params<Groups>): string | null;
        get native(): RegExp;
        static repeat<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static repeat_greedy<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static vary<Sources extends readonly $mol_regexp_source[]>(sources: Sources): $mol_regexp<$mol_regexp_groups<Sources[number]>>;
        static optional<Source extends $mol_regexp_source>(source: Source): $mol_regexp<$mol_regexp_groups<Source>>;
        static force_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static forbid_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static from<Source extends $mol_regexp_source>(source: Source, { ignoreCase, multiline }?: Partial<Pick<RegExp, 'ignoreCase' | 'multiline'>>): $mol_regexp<$mol_regexp_groups<Source>>;
        static unicode_only(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static unicode_except(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static char_range(from: number, to: number): $mol_regexp<{}>;
        static char_only(...allowed: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static char_except(...forbidden: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static decimal_only: $mol_regexp<{}>;
        static decimal_except: $mol_regexp<{}>;
        static latin_only: $mol_regexp<{}>;
        static latin_except: $mol_regexp<{}>;
        static space_only: $mol_regexp<{}>;
        static space_except: $mol_regexp<{}>;
        static word_break_only: $mol_regexp<{}>;
        static word_break_except: $mol_regexp<{}>;
        static tab: $mol_regexp<{}>;
        static slash_back: $mol_regexp<{}>;
        static nul: $mol_regexp<{}>;
        static char_any: $mol_regexp<{}>;
        static begin: $mol_regexp<{}>;
        static end: $mol_regexp<{}>;
        static or: $mol_regexp<{}>;
        static line_end: $mol_regexp<{
            readonly win_end: string;
            readonly mac_end: string;
        }>;
    }
    export {};
}

declare namespace $ {

	type $mol_paragraph__sub__OEHOHZ4I = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub__LIVE8LFJ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $mol_dimmer extends $mol_paragraph {
		parts( ): readonly($mol_view_content)[]
		string( id: any): string
		haystack( ): string
		needle( ): string
		sub( ): ReturnType< $mol_dimmer['parts'] >
		Low( id: any): $mol_paragraph
		High( id: any): $mol_paragraph
	}
	
}

//# sourceMappingURL=dimmer.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_nav extends $mol_plugin {
		event_key( next?: any ): any
		cycle( next?: boolean ): boolean
		mod_ctrl( ): boolean
		mod_shift( ): boolean
		mod_alt( ): boolean
		keys_x( next?: readonly(any)[] ): readonly(any)[]
		keys_y( next?: readonly(any)[] ): readonly(any)[]
		current_x( next?: any ): any
		current_y( next?: any ): any
		event_up( next?: any ): any
		event_down( next?: any ): any
		event_left( next?: any ): any
		event_right( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_nav['event_key'] > ): ReturnType< $mol_nav['event_key'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=nav.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): undefined;
        event_up(event?: KeyboardEvent): undefined;
        event_down(event?: KeyboardEvent): undefined;
        event_left(event?: KeyboardEvent): undefined;
        event_right(event?: KeyboardEvent): undefined;
        index_y(): number | null;
        index_x(): number | null;
    }
}

declare namespace $ {

	export class $mol_hotkey extends $mol_plugin {
		keydown( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_hotkey['keydown'] > ): ReturnType< $mol_hotkey['keydown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		key( ): Record<string, any>
		mod_ctrl( ): boolean
		mod_alt( ): boolean
		mod_shift( ): boolean
	}
	
}

//# sourceMappingURL=hotkey.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_hotkey extends $.$mol_hotkey {
        key(): {
            readonly [x: number]: ((event: KeyboardEvent) => void) | undefined;
            readonly backspace?: ((event: KeyboardEvent) => void) | undefined;
            readonly tab?: ((event: KeyboardEvent) => void) | undefined;
            readonly enter?: ((event: KeyboardEvent) => void) | undefined;
            readonly shift?: ((event: KeyboardEvent) => void) | undefined;
            readonly ctrl?: ((event: KeyboardEvent) => void) | undefined;
            readonly alt?: ((event: KeyboardEvent) => void) | undefined;
            readonly pause?: ((event: KeyboardEvent) => void) | undefined;
            readonly capsLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly escape?: ((event: KeyboardEvent) => void) | undefined;
            readonly space?: ((event: KeyboardEvent) => void) | undefined;
            readonly pageUp?: ((event: KeyboardEvent) => void) | undefined;
            readonly pageDown?: ((event: KeyboardEvent) => void) | undefined;
            readonly end?: ((event: KeyboardEvent) => void) | undefined;
            readonly home?: ((event: KeyboardEvent) => void) | undefined;
            readonly left?: ((event: KeyboardEvent) => void) | undefined;
            readonly up?: ((event: KeyboardEvent) => void) | undefined;
            readonly right?: ((event: KeyboardEvent) => void) | undefined;
            readonly down?: ((event: KeyboardEvent) => void) | undefined;
            readonly insert?: ((event: KeyboardEvent) => void) | undefined;
            readonly delete?: ((event: KeyboardEvent) => void) | undefined;
            readonly key0?: ((event: KeyboardEvent) => void) | undefined;
            readonly key1?: ((event: KeyboardEvent) => void) | undefined;
            readonly key2?: ((event: KeyboardEvent) => void) | undefined;
            readonly key3?: ((event: KeyboardEvent) => void) | undefined;
            readonly key4?: ((event: KeyboardEvent) => void) | undefined;
            readonly key5?: ((event: KeyboardEvent) => void) | undefined;
            readonly key6?: ((event: KeyboardEvent) => void) | undefined;
            readonly key7?: ((event: KeyboardEvent) => void) | undefined;
            readonly key8?: ((event: KeyboardEvent) => void) | undefined;
            readonly key9?: ((event: KeyboardEvent) => void) | undefined;
            readonly A?: ((event: KeyboardEvent) => void) | undefined;
            readonly B?: ((event: KeyboardEvent) => void) | undefined;
            readonly C?: ((event: KeyboardEvent) => void) | undefined;
            readonly D?: ((event: KeyboardEvent) => void) | undefined;
            readonly E?: ((event: KeyboardEvent) => void) | undefined;
            readonly F?: ((event: KeyboardEvent) => void) | undefined;
            readonly G?: ((event: KeyboardEvent) => void) | undefined;
            readonly H?: ((event: KeyboardEvent) => void) | undefined;
            readonly I?: ((event: KeyboardEvent) => void) | undefined;
            readonly J?: ((event: KeyboardEvent) => void) | undefined;
            readonly K?: ((event: KeyboardEvent) => void) | undefined;
            readonly L?: ((event: KeyboardEvent) => void) | undefined;
            readonly M?: ((event: KeyboardEvent) => void) | undefined;
            readonly N?: ((event: KeyboardEvent) => void) | undefined;
            readonly O?: ((event: KeyboardEvent) => void) | undefined;
            readonly P?: ((event: KeyboardEvent) => void) | undefined;
            readonly Q?: ((event: KeyboardEvent) => void) | undefined;
            readonly R?: ((event: KeyboardEvent) => void) | undefined;
            readonly S?: ((event: KeyboardEvent) => void) | undefined;
            readonly T?: ((event: KeyboardEvent) => void) | undefined;
            readonly U?: ((event: KeyboardEvent) => void) | undefined;
            readonly V?: ((event: KeyboardEvent) => void) | undefined;
            readonly W?: ((event: KeyboardEvent) => void) | undefined;
            readonly X?: ((event: KeyboardEvent) => void) | undefined;
            readonly Y?: ((event: KeyboardEvent) => void) | undefined;
            readonly Z?: ((event: KeyboardEvent) => void) | undefined;
            readonly metaLeft?: ((event: KeyboardEvent) => void) | undefined;
            readonly metaRight?: ((event: KeyboardEvent) => void) | undefined;
            readonly select?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad0?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad1?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad2?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad3?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad4?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad5?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad6?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad7?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad8?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad9?: ((event: KeyboardEvent) => void) | undefined;
            readonly multiply?: ((event: KeyboardEvent) => void) | undefined;
            readonly add?: ((event: KeyboardEvent) => void) | undefined;
            readonly subtract?: ((event: KeyboardEvent) => void) | undefined;
            readonly decimal?: ((event: KeyboardEvent) => void) | undefined;
            readonly divide?: ((event: KeyboardEvent) => void) | undefined;
            readonly F1?: ((event: KeyboardEvent) => void) | undefined;
            readonly F2?: ((event: KeyboardEvent) => void) | undefined;
            readonly F3?: ((event: KeyboardEvent) => void) | undefined;
            readonly F4?: ((event: KeyboardEvent) => void) | undefined;
            readonly F5?: ((event: KeyboardEvent) => void) | undefined;
            readonly F6?: ((event: KeyboardEvent) => void) | undefined;
            readonly F7?: ((event: KeyboardEvent) => void) | undefined;
            readonly F8?: ((event: KeyboardEvent) => void) | undefined;
            readonly F9?: ((event: KeyboardEvent) => void) | undefined;
            readonly F10?: ((event: KeyboardEvent) => void) | undefined;
            readonly F11?: ((event: KeyboardEvent) => void) | undefined;
            readonly F12?: ((event: KeyboardEvent) => void) | undefined;
            readonly numLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly scrollLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly semicolon?: ((event: KeyboardEvent) => void) | undefined;
            readonly equals?: ((event: KeyboardEvent) => void) | undefined;
            readonly comma?: ((event: KeyboardEvent) => void) | undefined;
            readonly dash?: ((event: KeyboardEvent) => void) | undefined;
            readonly period?: ((event: KeyboardEvent) => void) | undefined;
            readonly forwardSlash?: ((event: KeyboardEvent) => void) | undefined;
            readonly graveAccent?: ((event: KeyboardEvent) => void) | undefined;
            readonly bracketOpen?: ((event: KeyboardEvent) => void) | undefined;
            readonly slashBack?: ((event: KeyboardEvent) => void) | undefined;
            readonly slashBackLeft?: ((event: KeyboardEvent) => void) | undefined;
            readonly bracketClose?: ((event: KeyboardEvent) => void) | undefined;
            readonly quoteSingle?: ((event: KeyboardEvent) => void) | undefined;
        };
        keydown(event?: KeyboardEvent): void;
    }
}

declare namespace $ {

	type $mol_hotkey__mod_ctrl__NIMDDYBE = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key__ZX3TM8ST = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_string['submit'] > ): ReturnType< $mol_string['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $mol_string extends $mol_view {
		selection_watcher( ): any
		error_report( ): any
		disabled( ): boolean
		value( next?: string ): string
		value_changed( next?: ReturnType< $mol_string['value'] > ): ReturnType< $mol_string['value'] >
		hint( ): string
		hint_visible( ): ReturnType< $mol_string['hint'] >
		spellcheck( ): boolean
		autocomplete_native( ): string
		selection_end( ): number
		selection_start( ): number
		keyboard( ): string
		enter( ): string
		length_max( ): number
		type( next?: string ): string
		event_change( next?: any ): any
		submit_with_ctrl( ): boolean
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		dom_name( ): string
		enabled( ): boolean
		minimal_height( ): number
		autocomplete( ): boolean
		selection( next?: readonly(number)[] ): readonly(number)[]
		auto( ): readonly(any)[]
		field( ): ({ 
			'disabled': ReturnType< $mol_string['disabled'] >,
			'value': ReturnType< $mol_string['value_changed'] >,
			'placeholder': ReturnType< $mol_string['hint_visible'] >,
			'spellcheck': ReturnType< $mol_string['spellcheck'] >,
			'autocomplete': ReturnType< $mol_string['autocomplete_native'] >,
			'selectionEnd': ReturnType< $mol_string['selection_end'] >,
			'selectionStart': ReturnType< $mol_string['selection_start'] >,
			'inputMode': ReturnType< $mol_string['keyboard'] >,
			'enterkeyhint': ReturnType< $mol_string['enter'] >,
		})  & ReturnType< $mol_view['field'] >
		attr( ): ({ 
			'maxlength': ReturnType< $mol_string['length_max'] >,
			'type': ReturnType< $mol_string['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			input( next?: ReturnType< $mol_string['event_change'] > ): ReturnType< $mol_string['event_change'] >,
		})  & ReturnType< $mol_view['event'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=string.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        error_report(): void;
        hint_visible(): string;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
        selection_watcher(): $mol_dom_listener;
        selection_change(event: Event): void;
        selection_start(): number;
        selection_end(): number;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_cross extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=cross.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__key__KWXQBBLJ = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y__YH384OMP = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y__Y7Y6AFR0 = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value__26H3BECC = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint__R1F84KZO = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit__06RVGOQO = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled__KUUW0M6M = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard__JCX3Q9F9 = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter__KCGVS4BK = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint__IKR6GLBV = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__0ER56M7X = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__FGBMRYYW = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows__3FODVJA8 = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_dimmer__haystack__RHS4XMJM = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__P8K2QV64 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__CQVHKZU1 = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub__D19C2KHW = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click__FGCUXDYQ = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__S66HUMQN = $mol_type_enforce<
		ReturnType< $mol_search['suggest_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_search extends $mol_pop {
		clear( next?: any ): any
		Hotkey( ): $mol_hotkey
		nav_components( ): readonly($mol_view)[]
		nav_focused( next?: any ): any
		Nav( ): $mol_nav
		suggests_showed( next?: boolean ): boolean
		query( next?: string ): string
		hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		keyboard( ): string
		enter( ): string
		bring( ): ReturnType< ReturnType< $mol_search['Query'] >['bring'] >
		Query( ): $mol_string
		Clear_icon( ): $mol_icon_cross
		Clear( ): $mol_button_minor
		anchor_content( ): readonly(any)[]
		menu_items( ): readonly($mol_view)[]
		Menu( ): $mol_list
		suggest_select( id: any, next?: any ): any
		suggest_label( id: any): string
		Suggest_label( id: any): $mol_dimmer
		suggest_content( id: any): readonly($mol_view_content)[]
		suggests( ): readonly(string)[]
		plugins( ): readonly($mol_plugin)[]
		showed( next?: ReturnType< $mol_search['suggests_showed'] > ): ReturnType< $mol_search['suggests_showed'] >
		align_hor( ): string
		Anchor( ): $mol_view
		bubble_content( ): readonly($mol_view_content)[]
		Suggest( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        anchor_content(): ($mol_button_minor | $.$mol_string)[];
        suggests_showed(next?: boolean): boolean;
        suggest_selected(next?: string): void;
        nav_components(): ($mol_button_minor | $.$mol_string)[];
        nav_focused(component?: $mol_view): $mol_view | $.$mol_string | null;
        suggest_label(key: string): string;
        menu_items(): $mol_button_minor[];
        suggest_select(id: string, event?: MouseEvent): void;
        clear(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_dots_vertical extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=vertical.view.tree.d.ts.map
declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}

declare namespace $ {

	type $mol_dimmer__haystack__F21COAFG = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__6SIBHDLW = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y__14JPQG97 = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y__DZZTDIFF = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle__FK5JSPA2 = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows__VY3LIPIR = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__CN8FZTTI = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__event_click__VZRNN44K = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub__MCBOJ64E = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__0Y9BKNPW = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query__F8HBIRQ0 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint__LACZT5QE = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit__UVXJKFPS = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled__MN7DE69J = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	export class $mol_select extends $mol_pick {
		event_select( id: any, next?: any ): any
		option_label( id: any): string
		filter_pattern( next?: string ): string
		Option_label( id: any): $mol_dimmer
		option_content( id: any): readonly(any)[]
		no_options_message( ): string
		nav_components( ): readonly($mol_view)[]
		option_focused( next?: any ): any
		nav_cycle( next?: boolean ): boolean
		Nav( ): $mol_nav
		menu_content( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		filter_hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		dictionary( next?: Record<string, any> ): Record<string, any>
		options( ): readonly(string)[]
		value( next?: string ): string
		option_label_default( ): string
		Option_row( id: any): $mol_button_minor
		No_options( ): $mol_view
		plugins( ): readonly(any)[]
		hint( ): string
		bubble_content( ): readonly(any)[]
		Filter( ): $mol_search
		Trigger_icon( ): $mol_icon_dots_vertical
	}
	
}

//# sourceMappingURL=select.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options(): readonly string[];
        options_filtered(): readonly string[];
        option_label(id: string): any;
        option_rows(): $mol_button_minor[];
        option_focused(component?: $mol_view): $mol_view | $.$mol_search | null;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($mol_button_minor | $.$mol_search)[];
        trigger_content(): readonly $mol_view_content[];
        menu_content(): $mol_view[];
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_hash_string(str: string, seed?: number): number;
}

declare namespace $ {

	export class $mol_avatar extends $mol_icon {
		view_box( ): string
		id( ): string
		path( ): string
	}
	
}

//# sourceMappingURL=avatar.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_avatar extends $.$mol_avatar {
        path(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_sync extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=sync.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_sync_off extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=off.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sync_online extends $.$hyoo_sync_online {
        message(): string;
        link_content(): $mol_icon_sync_off[];
        hint(): string;
        master_link(): string;
        master_id(index: number): string;
        option_label(index: number): string;
        value(next?: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $hyoo_sync_online_master_cursor__E863ZJYL = $mol_type_enforce<
		Parameters< $hyoo_sync_online['master_cursor'] >[0]
		,
		Parameters< ReturnType< $hyoo_sync_online['yard'] >['master_cursor'] >[0]
	>
	type $mol_avatar__id__332XFFZ8 = $mol_type_enforce<
		ReturnType< $hyoo_sync_online['master_id'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_avatar__id__E5VFWUFJ = $mol_type_enforce<
		ReturnType< $hyoo_sync_online['master_link'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_link__uri__KQCZJX8F = $mol_type_enforce<
		ReturnType< $hyoo_sync_online['master_link'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub__8TKECQ48 = $mol_type_enforce<
		ReturnType< $hyoo_sync_online['link_content'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__hint__96XU4N9P = $mol_type_enforce<
		ReturnType< $hyoo_sync_online['message'] >
		,
		ReturnType< $mol_link['hint'] >
	>
	export class $hyoo_sync_online extends $mol_select {
		dictionary( ): ReturnType< ReturnType< $hyoo_sync_online['yard'] >['master_list'] >
		master_cursor( next?: ReturnType< ReturnType< $hyoo_sync_online['yard'] >['master_cursor'] > ): ReturnType< ReturnType< $hyoo_sync_online['yard'] >['master_cursor'] >
		master_id( id: any): string
		Option_logo( id: any): $mol_avatar
		master_link( ): string
		Well( ): $mol_avatar
		Fail( ): $mol_icon_sync_off
		link_content( ): readonly(any)[]
		hint( ): string
		message( ): ReturnType< $hyoo_sync_online['hint'] >
		Link( ): $mol_link
		minimal_width( ): number
		minimal_height( ): number
		yard( ): $hyoo_sync_yard<any>
		Filter( ): any
		option_content( id: any): readonly(any)[]
		trigger_content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=online.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=script.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script_text extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link_source extends $mol_link {
		Icon( ): $mol_icon_script_text
		hint( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=source.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_check_icon extends $mol_check {
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_brightness_6 extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=6.view.tree.d.ts.map
declare namespace $ {

	export class $mol_lights_toggle extends $mol_check_icon {
		Lights_icon( ): $mol_icon_brightness_6
		lights( next?: boolean ): boolean
		Icon( ): ReturnType< $mol_lights_toggle['Lights_icon'] >
		hint( ): string
		checked( next?: ReturnType< $mol_lights_toggle['lights'] > ): ReturnType< $mol_lights_toggle['lights'] >
	}
	
}

//# sourceMappingURL=toggle.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_lights_toggle extends $.$mol_lights_toggle {
        lights(next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_time_base {
        static patterns: Record<string, (arg: any) => string>;
        static formatter(pattern: string): (arg: any) => string;
        toString(pattern: string): string;
    }
}

declare namespace $ {
    type $mol_time_duration_config = number | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
    };
    class $mol_time_duration extends $mol_time_base {
        constructor(config?: $mol_time_duration_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        summ(config: $mol_time_duration_config): $mol_time_duration;
        mult(numb: number): $mol_time_duration;
        count(config: $mol_time_duration_config): number;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        static patterns: {
            '#Y': (duration: $mol_time_duration) => string;
            '#M': (duration: $mol_time_duration) => string;
            '#D': (duration: $mol_time_duration) => string;
            '#h': (duration: $mol_time_duration) => string;
            '#m': (duration: $mol_time_duration) => string;
            '#s': (duration: $mol_time_duration) => string;
        };
    }
}

declare namespace $ {
    enum $mol_time_moment_weekdays {
        monday = 0,
        tuesday = 1,
        wednesday = 2,
        thursday = 3,
        friday = 4,
        saturday = 5,
        sunday = 6
    }
    type $mol_time_moment_config = number | Date | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        offset?: $mol_time_duration_config;
    };
    class $mol_time_moment extends $mol_time_base {
        constructor(config?: $mol_time_moment_config);
        readonly year: number | undefined;
        readonly month: number | undefined;
        readonly day: number | undefined;
        readonly hour: number | undefined;
        readonly minute: number | undefined;
        readonly second: number | undefined;
        readonly offset: $mol_time_duration | undefined;
        get weekday(): number;
        _native: Date | undefined;
        get native(): Date;
        _normal: $mol_time_moment | undefined;
        get normal(): $mol_time_moment;
        merge(config: $mol_time_moment_config): $mol_time_moment;
        shift(config: $mol_time_duration_config): $mol_time_moment;
        mask(config: $mol_time_moment_config): $mol_time_moment;
        toOffset(config?: $mol_time_duration_config): $mol_time_moment;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        static patterns: {
            YYYY: (moment: $mol_time_moment) => string;
            AD: (moment: $mol_time_moment) => string;
            YY: (moment: $mol_time_moment) => string;
            Month: (moment: $mol_time_moment) => string;
            'DD Month': (moment: $mol_time_moment) => string;
            'D Month': (moment: $mol_time_moment) => string;
            Mon: (moment: $mol_time_moment) => string;
            'DD Mon': (moment: $mol_time_moment) => string;
            'D Mon': (moment: $mol_time_moment) => string;
            '-MM': (moment: $mol_time_moment) => string;
            MM: (moment: $mol_time_moment) => string;
            M: (moment: $mol_time_moment) => string;
            WeekDay: (moment: $mol_time_moment) => string;
            WD: (moment: $mol_time_moment) => string;
            '-DD': (moment: $mol_time_moment) => string;
            DD: (moment: $mol_time_moment) => string;
            D: (moment: $mol_time_moment) => string;
            Thh: (moment: $mol_time_moment) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
            Z: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    class $hyoo_sketch_person extends $hyoo_sketch_entity {
        name(next?: string): string;
        avatar(next?: string): string;
        projects_node(): $hyoo_crowd_list;
        projects(next?: $hyoo_sketch_project[]): $hyoo_sketch_project[];
        project_add(obj: $hyoo_sketch_project): void;
        project_delete(obj: $hyoo_sketch_project): void;
        current(): boolean;
        online(): boolean;
        online_time(): $mol_time_moment | null;
        cursor_position(next?: {
            x: number;
            y: number;
            page: $mol_int62_string | null;
        }): {
            x: number;
            y: number;
            page: $mol_int62_string | null;
        } | undefined;
    }
}

declare namespace $ {
    class $hyoo_sketch_element extends $hyoo_sketch_entity {
        page(next?: $hyoo_sketch_page): $hyoo_sketch_page;
        name(next?: string): string;
        type(next?: string): string;
        duplicate(): $hyoo_sketch_element;
    }
}

declare namespace $ {

	export class $mol_icon_television extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=television.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_television_play extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=play.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_play extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=play.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_play_circle extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=circle.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_row extends $mol_view {
	}
	
}

//# sourceMappingURL=row.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub__PF2WDTQC = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $hyoo_sketch_option extends $mol_row {
		name( ): string
		Name( ): $mol_view
		Control( ): $mol_view
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=option.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_minus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=minus.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_string__type__J82M6AE4 = $mol_type_enforce<
		ReturnType< $mol_number['type'] >
		,
		ReturnType< $mol_string['type'] >
	>
	type $mol_string__value__1YOJYFU3 = $mol_type_enforce<
		ReturnType< $mol_number['value_string'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint__UN690GC5 = $mol_type_enforce<
		ReturnType< $mol_number['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__enabled__Y0AVTRSW = $mol_type_enforce<
		ReturnType< $mol_number['string_enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__submit__OB02BH5P = $mol_type_enforce<
		ReturnType< $mol_number['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_button_minor__event_click__8CPLFRDH = $mol_type_enforce<
		ReturnType< $mol_number['event_dec'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__enabled__N8YX9GHY = $mol_type_enforce<
		ReturnType< $mol_number['dec_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub__JOEWIXKZ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__event_click__65C7XWYE = $mol_type_enforce<
		ReturnType< $mol_number['event_inc'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__enabled__70EDGAY0 = $mol_type_enforce<
		ReturnType< $mol_number['inc_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub__D5X373PA = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_number extends $mol_view {
		precision( ): number
		type( ): string
		value_string( next?: string ): string
		hint( ): string
		string_enabled( ): ReturnType< $mol_number['enabled'] >
		submit( next?: any ): any
		String( ): $mol_string
		event_dec( next?: any ): any
		dec_enabled( ): ReturnType< $mol_number['enabled'] >
		dec_icon( ): $mol_icon_minus
		Dec( ): $mol_button_minor
		event_inc( next?: any ): any
		inc_enabled( ): ReturnType< $mol_number['enabled'] >
		inc_icon( ): $mol_icon_plus
		Inc( ): $mol_button_minor
		precision_view( ): ReturnType< $mol_number['precision'] >
		precision_change( ): ReturnType< $mol_number['precision'] >
		value_min( ): number
		value_max( ): number
		value( next?: number ): number
		enabled( ): boolean
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=number.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_number extends $.$mol_number {
        value_limited(next?: any): number;
        event_dec(next?: Event): void;
        event_inc(next?: Event): void;
        value_string(next?: string): string;
        dec_enabled(): boolean;
        inc_enabled(): boolean;
    }
}

declare namespace $ {

	type $mol_check__checked__VW6CU0EY = $mol_type_enforce<
		ReturnType< $mol_check_list['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__label__XZRY38XK = $mol_type_enforce<
		ReturnType< $mol_check_list['option_label'] >
		,
		ReturnType< $mol_check['label'] >
	>
	type $mol_check__enabled__7AVSOTFO = $mol_type_enforce<
		ReturnType< $mol_check_list['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint__H409KYQ8 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height__8V6718RK = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	export class $mol_check_list extends $mol_view {
		option_checked( id: any, next?: boolean ): boolean
		option_title( id: any): string
		option_label( id: any): readonly(any)[]
		enabled( ): boolean
		option_enabled( id: any): ReturnType< $mol_check_list['enabled'] >
		option_hint( id: any): string
		items( ): readonly($mol_check)[]
		dictionary( ): Record<string, any>
		Option( id: any): $mol_check
		options( ): Record<string, any>
		keys( ): readonly(string)[]
		sub( ): ReturnType< $mol_check_list['items'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check_list extends $.$mol_check_list {
        options(): {
            [key: string]: string;
        };
        dictionary(next?: Record<string, boolean>): Record<string, boolean>;
        option_checked(id: string, next?: boolean | null): boolean;
        keys(): readonly string[];
        items(): $.$mol_check[];
        option_title(key: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $ {

	export class $mol_switch extends $mol_check_list {
		value( next?: string ): string
	}
	
}

//# sourceMappingURL=switch.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_switch extends $.$mol_switch {
        value(next?: string): string;
        option_checked(key: string, next?: boolean): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_major extends $mol_button_minor {
	}
	
}

//# sourceMappingURL=major.view.tree.d.ts.map
declare namespace $ {

	type $mol_avatar__id__BTWYU8ZX = $mol_type_enforce<
		ReturnType< $hyoo_sketch_person_avatar['id'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_paragraph__title__MSG1M6OT = $mol_type_enforce<
		ReturnType< $hyoo_sketch_person_avatar['name'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_speck__value__FI0QE5B7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $hyoo_sketch_person_avatar extends $mol_view {
		id( ): ReturnType< ReturnType< $hyoo_sketch_person_avatar['person'] >['id'] >
		name( ): ReturnType< ReturnType< $hyoo_sketch_person_avatar['person'] >['name'] >
		online( ): ReturnType< ReturnType< $hyoo_sketch_person_avatar['person'] >['online'] >
		Avatar( ): $mol_avatar
		Name( ): $mol_paragraph
		Online( ): $mol_speck
		person( ): $hyoo_sketch_person
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=avatar.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_person_avatar extends $.$hyoo_sketch_person_avatar {
        name_content(): (string | $mol_speck)[];
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_cursor_default extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=default.view.tree.d.ts.map
declare namespace $ {

	export class $hyoo_sketch_person_cursor extends $hyoo_sketch_person_avatar {
		Cursor( ): $mol_icon_cursor_default
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=cursor.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_person_cursor extends $.$hyoo_sketch_person_cursor {
        position_set(): void;
        auto(): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_view__sub__U9C0MGJ4 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor_paper['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $hyoo_sketch_person_cursor__person__AKWDWDDH = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor_paper['person'] >
		,
		ReturnType< $hyoo_sketch_person_cursor['person'] >
	>
	type $mol_view__sub__AJNDB86Q = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor_paper['cursors'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $hyoo_sketch_editor_paper extends $mol_view {
		pointer_down( next?: any ): any
		pointer_enter( next?: any ): any
		width( ): number
		height( ): number
		background_size( ): string
		preview( ): boolean
		selected( next?: boolean ): boolean
		content( ): readonly(any)[]
		Content( ): $mol_view
		person( id: any): $hyoo_sketch_person
		Cursor( id: any): $hyoo_sketch_person_cursor
		cursors( ): readonly(any)[]
		Cursors( ): $mol_view
		page( ): $hyoo_sketch_page
		grid( ): number
		event( ): ({ 
			pointerdown( next?: ReturnType< $hyoo_sketch_editor_paper['pointer_down'] > ): ReturnType< $hyoo_sketch_editor_paper['pointer_down'] >,
			pointerenter( next?: ReturnType< $hyoo_sketch_editor_paper['pointer_enter'] > ): ReturnType< $hyoo_sketch_editor_paper['pointer_enter'] >,
		})  & ReturnType< $mol_view['event'] >
		style( ): ({ 
			'width': ReturnType< $hyoo_sketch_editor_paper['width'] >,
			'height': ReturnType< $hyoo_sketch_editor_paper['height'] >,
			'backgroundSize': ReturnType< $hyoo_sketch_editor_paper['background_size'] >,
		})  & ReturnType< $mol_view['style'] >
		attr( ): ({ 
			'hyoo_sketch_editor_paper_preview': ReturnType< $hyoo_sketch_editor_paper['preview'] >,
			'hyoo_sketch_editor_paper_focused': ReturnType< $hyoo_sketch_editor_paper['selected'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paper.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_editor_paper extends $.$hyoo_sketch_editor_paper {
        person(id: $mol_int62_string): $hyoo_sketch_person;
        background_size(): string;
        pointer_down(): void;
        pointer_enter(e: PointerEvent): void;
        cursor_sync(x: number, y: number, page: $mol_int62_string | null): void;
        cursors(): $.$hyoo_sketch_person_cursor[];
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_resize extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=resize.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_resize_bottom_right extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=right.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub__X96EKO60 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__event__H8Z2W211 = $mol_type_enforce<
		({ 
			pointerdown( next?: ReturnType< $hyoo_sketch_element_base['resize_start'] > ): ReturnType< $hyoo_sketch_element_base['resize_start'] >,
		}) 
		,
		ReturnType< $mol_view['event'] >
	>
	type $mol_view__sub__0BAP89VD = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_number__value__AOCSV3E6 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['width'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $hyoo_sketch_option__name__7FNKQIF8 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__UR11PE06 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['Width_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_number__value__UZ3XTQY9 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['height'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $hyoo_sketch_option__name__3WPX47V7 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__0S4WVNS6 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['Height_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_number__value__3DL9QK19 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['left'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $hyoo_sketch_option__name__15ESJQR4 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__VT9RGQ1P = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['Left_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_number__value__30IEM385 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['top'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $hyoo_sketch_option__name__4UIDUQHT = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__LARLXHN8 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['Top_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_number__value__CR0YYK4K = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['order'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $hyoo_sketch_option__name__QLDM44ZT = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__LTJKJR83 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['Order_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_view__style__YB6HGQJ3 = $mol_type_enforce<
		Record<string, any> & ReturnType< $hyoo_sketch_element_base['position'] >
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub__GE5W2X0W = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $hyoo_sketch_element_base_editor__duplicate__2CYIAZ27 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['duplicate_event'] >
		,
		ReturnType< $hyoo_sketch_element_base_editor['duplicate'] >
	>
	type $hyoo_sketch_element_base_editor__copy__YN5ZBYL8 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['copy'] >
		,
		ReturnType< $hyoo_sketch_element_base_editor['copy'] >
	>
	type $hyoo_sketch_element_base_editor__paste__3S33INEY = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['paste'] >
		,
		ReturnType< $hyoo_sketch_element_base_editor['paste'] >
	>
	type $hyoo_sketch_element_base_editor__delete__9EPEFJLC = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['delete'] >
		,
		ReturnType< $hyoo_sketch_element_base_editor['delete'] >
	>
	type $hyoo_sketch_element_base_editor__move_up__9RIH1FHI = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['move_up'] >
		,
		ReturnType< $hyoo_sketch_element_base_editor['move_up'] >
	>
	type $hyoo_sketch_element_base_editor__move_down__47YNJQ8T = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['move_down'] >
		,
		ReturnType< $hyoo_sketch_element_base_editor['move_down'] >
	>
	type $hyoo_sketch_element_base_editor__move_left__3S3X06V9 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['move_left'] >
		,
		ReturnType< $hyoo_sketch_element_base_editor['move_left'] >
	>
	type $hyoo_sketch_element_base_editor__move_right__PG4HA7YR = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['move_right'] >
		,
		ReturnType< $hyoo_sketch_element_base_editor['move_right'] >
	>
	type $hyoo_sketch_element_base_editor__event__HEPDAJ1E = $mol_type_enforce<
		({ 
			pointerdown( next?: ReturnType< $hyoo_sketch_element_base['pointer_down'] > ): ReturnType< $hyoo_sketch_element_base['pointer_down'] >,
		}) 
		,
		ReturnType< $hyoo_sketch_element_base_editor['event'] >
	>
	type $hyoo_sketch_element_base_editor__style__OXSQ19VK = $mol_type_enforce<
		Record<string, any> & ReturnType< $hyoo_sketch_element_base['position'] >
		,
		ReturnType< $hyoo_sketch_element_base_editor['style'] >
	>
	type $hyoo_sketch_element_base_editor__selected__O46C43QS = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['selected'] >
		,
		ReturnType< $hyoo_sketch_element_base_editor['selected'] >
	>
	type $hyoo_sketch_element_base_editor__editing__7I23L7BV = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_base['editing'] >
		,
		ReturnType< $hyoo_sketch_element_base_editor['editing'] >
	>
	type $hyoo_sketch_element_base_editor__sub__KK0VQ2K1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_sketch_element_base_editor['sub'] >
	>
	export class $hyoo_sketch_element_base extends $mol_view {
		domain( ): ReturnType< ReturnType< $hyoo_sketch_element_base['element'] >['domain'] >
		page( ): ReturnType< ReturnType< $hyoo_sketch_element_base['element'] >['page'] >
		state( ): ReturnType< ReturnType< $hyoo_sketch_element_base['element'] >['state'] >
		order_default( ): number
		width_default( ): number
		width( next?: ReturnType< $hyoo_sketch_element_base['width_default'] > ): ReturnType< $hyoo_sketch_element_base['width_default'] >
		height_default( ): number
		height( next?: ReturnType< $hyoo_sketch_element_base['height_default'] > ): ReturnType< $hyoo_sketch_element_base['height_default'] >
		left_default( ): number
		left( next?: ReturnType< $hyoo_sketch_element_base['left_default'] > ): ReturnType< $hyoo_sketch_element_base['left_default'] >
		top_default( ): number
		top( next?: ReturnType< $hyoo_sketch_element_base['top_default'] > ): ReturnType< $hyoo_sketch_element_base['top_default'] >
		order_string( next?: string ): string
		Element( ): $mol_view
		duplicate_event( next?: any ): any
		copy( next?: any ): any
		paste( next?: any ): any
		delete( next?: any ): any
		move_up( next?: any ): any
		move_down( next?: any ): any
		move_left( next?: any ): any
		move_right( next?: any ): any
		pointer_down( next?: any ): any
		selected( next?: boolean ): boolean
		editing( ): boolean
		Element_wrap( ): $mol_view
		resize_start( next?: any ): any
		Resize_icon( ): $mol_icon_resize_bottom_right
		Resize( ): $mol_view
		Width_control( ): $mol_number
		Option_width( ): $hyoo_sketch_option
		Height_control( ): $mol_number
		Option_height( ): $hyoo_sketch_option
		Left_control( ): $mol_number
		Option_left( ): $hyoo_sketch_option
		Top_control( ): $mol_number
		Option_top( ): $hyoo_sketch_option
		Order_control( ): $mol_number
		Option_order( ): $hyoo_sketch_option
		Position_options( ): readonly(any)[]
		element( ): $hyoo_sketch_element
		order( next?: ReturnType< $hyoo_sketch_element_base['order_default'] > ): ReturnType< $hyoo_sketch_element_base['order_default'] >
		grid( next?: number ): number
		position( ): ({ 
			'width': ReturnType< $hyoo_sketch_element_base['width'] >,
			'height': ReturnType< $hyoo_sketch_element_base['height'] >,
			'left': ReturnType< $hyoo_sketch_element_base['left'] >,
			'top': ReturnType< $hyoo_sketch_element_base['top'] >,
			'zIndex': ReturnType< $hyoo_sketch_element_base['order_string'] >,
		}) 
		Preview( ): $mol_view
		duplicate( next?: $hyoo_sketch_element ): $hyoo_sketch_element
		Editor( ): $hyoo_sketch_element_base_editor
		Options( ): ({ 
			'position': ReturnType< $hyoo_sketch_element_base['Position_options'] >,
		}) 
		duplicate_top_shift( ): boolean
	}
	
	type $mol_hotkey__key__XY9GA6ZA = $mol_type_enforce<
		({ 
			D( next?: ReturnType< $hyoo_sketch_element_base_editor['duplicate'] > ): ReturnType< $hyoo_sketch_element_base_editor['duplicate'] >,
			C( next?: ReturnType< $hyoo_sketch_element_base_editor['copy'] > ): ReturnType< $hyoo_sketch_element_base_editor['copy'] >,
			V( next?: ReturnType< $hyoo_sketch_element_base_editor['paste'] > ): ReturnType< $hyoo_sketch_element_base_editor['paste'] >,
			delete( next?: ReturnType< $hyoo_sketch_element_base_editor['delete'] > ): ReturnType< $hyoo_sketch_element_base_editor['delete'] >,
			backspace( next?: ReturnType< $hyoo_sketch_element_base_editor['delete'] > ): ReturnType< $hyoo_sketch_element_base_editor['delete'] >,
			left( next?: ReturnType< $hyoo_sketch_element_base_editor['move_left'] > ): ReturnType< $hyoo_sketch_element_base_editor['move_left'] >,
			up( next?: ReturnType< $hyoo_sketch_element_base_editor['move_up'] > ): ReturnType< $hyoo_sketch_element_base_editor['move_up'] >,
			right( next?: ReturnType< $hyoo_sketch_element_base_editor['move_right'] > ): ReturnType< $hyoo_sketch_element_base_editor['move_right'] >,
			down( next?: ReturnType< $hyoo_sketch_element_base_editor['move_down'] > ): ReturnType< $hyoo_sketch_element_base_editor['move_down'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $hyoo_sketch_element_base_editor extends $mol_view {
		selected( next?: boolean ): boolean
		editing( ): boolean
		duplicate( next?: any ): any
		copy( next?: any ): any
		paste( next?: any ): any
		delete( next?: any ): any
		move_left( next?: any ): any
		move_up( next?: any ): any
		move_right( next?: any ): any
		move_down( next?: any ): any
		Hotkey( ): $mol_hotkey
		attr( ): ({ 
			'hyoo_sketch_element_base_selected': ReturnType< $hyoo_sketch_element_base_editor['selected'] >,
			'hyoo_sketch_element_base_editing': ReturnType< $hyoo_sketch_element_base_editor['editing'] >,
			'tabindex': string,
		})  & ReturnType< $mol_view['attr'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=base.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_element_base extends $.$hyoo_sketch_element_base {
        switch(): $mol_view[] | $hyoo_sketch_element_base_editor[];
        grid_near(value: number): number;
        pointer_down(event: PointerEvent): void;
        resize_start(event: PointerEvent): void;
        width(next?: number): number;
        height(next?: number): number;
        top(next?: number): number;
        left(next?: number): number;
        order(next?: number): number;
        order_string(): string;
        duplicate(elem?: $hyoo_sketch_element): $hyoo_sketch_element;
        duplicate_event(): void;
        copy(): void;
        paste(): void;
        delete(event: KeyboardEvent): void;
        move_up(event: KeyboardEvent): void;
        move_down(event: KeyboardEvent): void;
        move_left(event: KeyboardEvent): void;
        move_right(event: KeyboardEvent): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_magnify extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=magnify.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_help extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=help.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_help_rhombus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=rhombus.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_help_rhombus_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {
    class $mol_span extends $mol_object2 {
        readonly uri: string;
        readonly source: string;
        readonly row: number;
        readonly col: number;
        readonly length: number;
        constructor(uri: string, source: string, row: number, col: number, length: number);
        static unknown: $mol_span;
        static begin(uri: string, source?: string): $mol_span;
        static end(uri: string, source: string): $mol_span;
        static entire(uri: string, source: string): $mol_span;
        toString(): string;
        toJSON(): {
            uri: string;
            row: number;
            col: number;
            length: number;
        };
        error(message: string, Class?: ErrorConstructor): Error;
        span(row: number, col: number, length: number): $mol_span;
        after(length?: number): $mol_span;
        slice(begin: number, end?: number): $mol_span;
    }
}

declare namespace $ {
    class $mol_error_syntax extends SyntaxError {
        reason: string;
        line: string;
        span: $mol_span;
        constructor(reason: string, line: string, span: $mol_span);
    }
}

declare namespace $ {
    function $mol_tree2_from_string(this: $, str: string, uri?: string): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_to_string(this: $, tree: $mol_tree2): string;
}

declare namespace $ {
    type $mol_tree2_path = Array<string | number | null>;
    type $mol_tree2_hack<Context> = (input: $mol_tree2, belt: $mol_tree2_belt<Context>, context: Context) => readonly $mol_tree2[];
    type $mol_tree2_belt<Context> = Record<string, $mol_tree2_hack<Context>>;
    class $mol_tree2 extends Object {
        readonly type: string;
        readonly value: string;
        readonly kids: readonly $mol_tree2[];
        readonly span: $mol_span;
        constructor(type: string, value: string, kids: readonly $mol_tree2[], span: $mol_span);
        static list(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        list(kids: readonly $mol_tree2[]): $mol_tree2;
        static data(value: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        data(value: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        static struct(type: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        struct(type: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        clone(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        text(): string;
        static fromString(str: string, uri?: string): $mol_tree2;
        toString(): string;
        insert(value: $mol_tree2 | null, ...path: $mol_tree2_path): $mol_tree2;
        select(...path: $mol_tree2_path): $mol_tree2;
        filter(path: string[], value?: string): $mol_tree2;
        hack_self<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): readonly $mol_tree2[];
        hack<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): $mol_tree2[];
        error(message: string, Class?: ErrorConstructor): Error;
    }
    class $mol_tree2_empty extends $mol_tree2 {
        constructor();
    }
}

declare namespace $ {
    class $mol_view_tree2_error extends Error {
        readonly spans: readonly $mol_span[];
        constructor(message: string, spans: readonly $mol_span[]);
        toJSON(): {
            message: string;
            spans: readonly $mol_span[];
        };
    }
    class $mol_view_tree2_error_suggestions {
        readonly suggestions: readonly string[];
        constructor(suggestions: readonly string[]);
        toString(): string;
        toJSON(): readonly string[];
    }
    function $mol_view_tree2_error_str(strings: readonly string[], ...parts: readonly ($mol_span | readonly $mol_span[] | string | number | $mol_view_tree2_error_suggestions)[]): $mol_view_tree2_error;
}

declare namespace $ {
    function $mol_view_tree2_child(this: $, tree: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_classes(defs: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_normalize(this: $, defs: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    let $mol_view_tree2_prop_signature: $mol_regexp<{
        readonly name: string;
        readonly key: string;
        readonly next: string;
    }>;
}

declare namespace $ {
    function $mol_view_tree2_prop_parts(this: $, prop: $mol_tree2): {
        name: string;
        key: string;
        next: string;
    };
}

declare namespace $ {
    function $mol_view_tree2_prop_quote(name: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_class_match(klass?: $mol_tree2): boolean;
}

declare namespace $ {
    function $mol_view_tree2_class_super(this: $, klass: $mol_tree2): $mol_tree2;
}

declare namespace $ {
    function $mol_view_tree2_class_props(this: $, klass: $mol_tree2): $mol_tree2[];
}

declare namespace $ {

	type $mol_icon__path__LSED99LZ = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_icon['icon_path'] >
		,
		ReturnType< $mol_icon['path'] >
	>
	type $mol_string__hint__SMR87SBR = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__C2Z1M73R = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_icon['icon_name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $hyoo_sketch_option__name__P2EO3XHP = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__0RXR0HU0 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_icon['Icon_name_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_link__uri__KOC5UJN0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__target__HTXWIXOT = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['target'] >
	>
	type $mol_link__sub__YUUPOALR = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $hyoo_sketch_option__name__PRC7YTC5 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__5N5TNDDX = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_icon['Icon_search'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_view__sub__MT7SUDBC = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $hyoo_sketch_element_icon extends $hyoo_sketch_element_base {
		icon_path( ): string
		Icon( ): $mol_icon
		icon_name( next?: string ): string
		Icon_name_control( ): $mol_string
		Icon_name_option( ): $hyoo_sketch_option
		Icon_search_icon( ): $mol_icon_magnify
		Icon_search( ): $mol_link
		Icon_search_option( ): $hyoo_sketch_option
		icon_options( ): readonly(any)[]
		Element( ): $mol_view
		Not_found_icon( ): $mol_icon_help_rhombus_outline
		Options( ): ({ 
			'icon': ReturnType< $hyoo_sketch_element_icon['icon_options'] >,
		})  & ReturnType< $hyoo_sketch_element_base['Options'] >
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_element_icon extends $.$hyoo_sketch_element_icon {
        icon_path(): string;
        icon_name(next?: string): string;
        duplicate(elem?: $hyoo_sketch_element): $hyoo_sketch_element;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_string__value__N7M16XT9 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_text['text'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $hyoo_sketch_option__name__97R6R41W = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__YHL0GZR9 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_text['Text_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_switch__value__DB9QQVM5 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_text['padding'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__G9IG8938 = $mol_type_enforce<
		({ 
			'none': string,
			'text': string,
			'block': string,
			'space': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $hyoo_sketch_option__name__CCAX5A5T = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__5I7DBNZ4 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_text['Padding_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_switch__value__99XF5FKI = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_text['align_hor'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__D53LZNZS = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_text['align_options'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $hyoo_sketch_option__name__WLHKBEPB = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__B8NJHHKT = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_text['Align_hor_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_switch__value__TMWITH62 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_text['align_ver'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__TUTZDCGP = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_text['align_options'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $hyoo_sketch_option__name__GC2EVTLY = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__6FZ674OF = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_text['Align_ver_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_switch__value__VPWD3908 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_text['size'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__8N2K38ET = $mol_type_enforce<
		({ 
			'0.75rem': string,
			'1.0rem': string,
			'1.25rem': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $hyoo_sketch_option__name__FJN3DSR1 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__IO0QA1ZD = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_text['Size_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_view__style__YOJG8YWW = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_text['style'] >
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub__1CGSXWJW = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_text['text_sub'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $hyoo_sketch_element_icon__element__YNJ4CXA9 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_text['element'] >
		,
		ReturnType< $hyoo_sketch_element_icon['element'] >
	>
	export class $hyoo_sketch_element_text extends $hyoo_sketch_element_base {
		padding_style( ): string
		style( ): ({ 
			'padding': ReturnType< $hyoo_sketch_element_text['padding_style'] >,
			'justifyContent': ReturnType< $hyoo_sketch_element_text['align_hor'] >,
			'alignItems': ReturnType< $hyoo_sketch_element_text['align_ver'] >,
			'fontSize': ReturnType< $hyoo_sketch_element_text['size'] >,
		}) 
		Text_icon( ): $mol_icon
		text_sub( ): readonly(any)[]
		icon_options( ): ReturnType< ReturnType< $hyoo_sketch_element_text['Icon'] >['icon_options'] >
		text_default( ): string
		text( next?: ReturnType< $hyoo_sketch_element_text['text_default'] > ): ReturnType< $hyoo_sketch_element_text['text_default'] >
		Text_control( ): $mol_string
		Text_option( ): $hyoo_sketch_option
		padding_default( ): string
		padding( next?: ReturnType< $hyoo_sketch_element_text['padding_default'] > ): ReturnType< $hyoo_sketch_element_text['padding_default'] >
		Padding_control( ): $mol_switch
		Padding_option( ): $hyoo_sketch_option
		align_hor_default( ): string
		align_hor( next?: ReturnType< $hyoo_sketch_element_text['align_hor_default'] > ): ReturnType< $hyoo_sketch_element_text['align_hor_default'] >
		Align_hor_control( ): $mol_switch
		Align_hor_option( ): $hyoo_sketch_option
		align_ver_default( ): string
		align_ver( next?: ReturnType< $hyoo_sketch_element_text['align_ver_default'] > ): ReturnType< $hyoo_sketch_element_text['align_ver_default'] >
		align_options( ): ({ 
			'start': string,
			'center': string,
			'end': string,
		}) 
		Align_ver_control( ): $mol_switch
		Align_ver_option( ): $hyoo_sketch_option
		size_default( ): string
		size( next?: ReturnType< $hyoo_sketch_element_text['size_default'] > ): ReturnType< $hyoo_sketch_element_text['size_default'] >
		Size_control( ): $mol_switch
		Size_option( ): $hyoo_sketch_option
		text_options( ): readonly(any)[]
		Element( ): $mol_view
		Icon( ): $hyoo_sketch_element_icon
		Options( ): ({ 
			'text': ReturnType< $hyoo_sketch_element_text['text_options'] >,
		})  & ReturnType< $hyoo_sketch_element_base['Options'] >
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_element_text extends $.$hyoo_sketch_element_text {
        text_sub(): (string | $mol_icon)[];
        padding_style(): string;
        text(next?: string): string;
        padding(next?: string): string;
        align_ver(next?: string): string;
        align_hor(next?: string): string;
        size(next?: string): string;
        duplicate(elem?: $hyoo_sketch_element): $hyoo_sketch_element;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__minimal_height__8YQ2E04M = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__MNP2ZX9M = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height__IB1ERB8U = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__83HSB0HJ = $mol_type_enforce<
		ReturnType< $mol_labeler['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_labeler extends $mol_list {
		label( ): readonly($mol_view_content)[]
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_view
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=labeler.view.tree.d.ts.map
declare namespace $ {
    type $hyoo_sketch_element_nav_action_type = 'open' | 'close' | 'replace' | 'external';
    type $hyoo_sketch_element_nav_action_data = {
        type: $hyoo_sketch_element_nav_action_type;
        source_page: string;
        target_page: string;
        target_link: string;
    };
}

declare namespace $ {

	type $mol_button_major__title__S9KU2QQH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click__HL33TFJU = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_nav['nav_action_add'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $hyoo_sketch_option__Control__4VTVJ74R = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_nav['Nav_action_add'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $hyoo_sketch_element_nav_action__pages__JMFUL852 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_nav['project_pages'] >
		,
		ReturnType< $hyoo_sketch_element_nav_action['pages'] >
	>
	type $hyoo_sketch_element_nav_action__drop__0GFYROCC = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_nav['nav_action_drop'] >
		,
		ReturnType< $hyoo_sketch_element_nav_action['drop'] >
	>
	type $hyoo_sketch_element_nav_action__type__8G59X5AR = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_nav['nav_action_type'] >
		,
		ReturnType< $hyoo_sketch_element_nav_action['type'] >
	>
	type $hyoo_sketch_element_nav_action__target_page__LOKNWZA7 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_nav['nav_action_target_page'] >
		,
		ReturnType< $hyoo_sketch_element_nav_action['target_page'] >
	>
	type $hyoo_sketch_element_nav_action__source_page__FGSVGAIX = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_nav['nav_action_source_page'] >
		,
		ReturnType< $hyoo_sketch_element_nav_action['source_page'] >
	>
	type $hyoo_sketch_element_nav_action__link__ANAJ0LKJ = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_nav['nav_action_target_link'] >
		,
		ReturnType< $hyoo_sketch_element_nav_action['link'] >
	>
	type $mol_view__sub__0TV09Z0F = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $hyoo_sketch_element_nav extends $hyoo_sketch_element_base {
		nav_action_add( next?: any ): any
		Nav_action_add( ): $mol_button_major
		Nav_action_add_option( ): $hyoo_sketch_option
		project_pages( ): Record<string, any>
		nav_action_drop( id: any, next?: any ): any
		nav_action_type( id: any, next?: string ): string
		nav_action_target_page( id: any, next?: string ): string
		nav_action_source_page( id: any, next?: string ): string
		nav_action_target_link( id: any, next?: string ): string
		Nav_action( id: any): $hyoo_sketch_element_nav_action
		nav_options( ): readonly(any)[]
		Element( ): $mol_view
		nav_pages_param( ): string
		nav_click_handler( ): any
		nav_actions( ): readonly($hyoo_sketch_element_nav_action_data)[]
		Options( ): ({ 
			'nav': ReturnType< $hyoo_sketch_element_nav['nav_options'] >,
		})  & ReturnType< $hyoo_sketch_element_base['Options'] >
	}
	
	type $mol_switch__value__4B7ZCSF6 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_nav_action['type'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__7GTRZL2G = $mol_type_enforce<
		({ 
			'open': string,
			'replace': string,
			'close': string,
			'external': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_labeler__title__8KYY8Z18 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__XF8LDYGJ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_select__align__NSI3O3MH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['align'] >
	>
	type $mol_select__value__5R46FK2D = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_nav_action['source_page'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__0ICWJBUX = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_nav_action['pages'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__OEXLGT89 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__0QGGEN3A = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_select__align__68OFX8N3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['align'] >
	>
	type $mol_select__value__9OLW20EP = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_nav_action['target_page'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__KHRGEIIL = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_nav_action['pages'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__B569J0C8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__WA600NKZ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_string__value__I74UE8CF = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_nav_action['link'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_labeler__title__UDMSQQBC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__NAI7V5V7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_button_minor__title__BTBUY5FZ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click__EOMDTKTJ = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_nav_action['drop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	export class $hyoo_sketch_element_nav_action extends $mol_list {
		type( next?: string ): string
		Type( ): $mol_switch
		Type_label( ): $mol_labeler
		source_page( next?: string ): string
		pages( ): Record<string, any>
		Source_page( ): $mol_select
		Source_page_label( ): $mol_labeler
		target_page( next?: string ): string
		Target_page( ): $mol_select
		Target_page_label( ): $mol_labeler
		link( next?: string ): string
		Link( ): $mol_string
		Link_label( ): $mol_labeler
		drop( next?: any ): any
		Drop( ): $mol_button_minor
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=nav.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_element_nav extends $.$hyoo_sketch_element_nav {
        project_pages(): any;
        nav_options(): ($hyoo_sketch_option | $.$hyoo_sketch_element_nav_action)[];
        nav_actions_node(): $hyoo_crowd_list;
        nav_actions(next?: $hyoo_sketch_element_nav_action_data[]): $hyoo_sketch_element_nav_action_data[];
        nav_action_add(): void;
        nav_action_drop(id: number): void;
        nav_action_value<Key extends keyof $hyoo_sketch_element_nav_action_data>({ id, key }: {
            id: number;
            key: Key;
        }, next?: string): $hyoo_sketch_element_nav_action_data[Key];
        nav_action_type(id: number, next?: string): $hyoo_sketch_element_nav_action_type;
        nav_action_source_page(id: number, next?: string): string;
        nav_action_target_page(id: number, next?: string): string;
        nav_action_target_link(id: number, next?: string): string;
        nav_pages(next?: string[]): string[];
        nav_page_close(id: string): string[];
        nav_page_open(id: string): string[];
        nav_page_replace(source_id: string, target_id: string): string[];
        nav_click_handler(): void;
        duplicate(elem: $hyoo_sketch_element): $hyoo_sketch_element;
    }
    class $hyoo_sketch_element_nav_action extends $.$hyoo_sketch_element_nav_action {
        rows(): ($mol_button_minor | $mol_labeler)[];
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_switch__value__6WO20205 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_button['button_type'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__MFL3YA52 = $mol_type_enforce<
		({ 
			'major': string,
			'minor': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $hyoo_sketch_option__name__8OF8E50O = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__MY7HOXMR = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_button['Button_type_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $hyoo_sketch_element_nav__element__2XXMJZ8T = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_button['element'] >
		,
		ReturnType< $hyoo_sketch_element_nav['element'] >
	>
	type $hyoo_sketch_element_button_text__element__9YH9L69R = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_button['element'] >
		,
		ReturnType< $hyoo_sketch_element_button_text['element'] >
	>
	type $mol_button_major__style__O02J8AM2 = $mol_type_enforce<
		({ 
			'width': string,
		})  & ReturnType< $hyoo_sketch_element_button['text_style'] >
		,
		ReturnType< $mol_button_major['style'] >
	>
	type $mol_button_major__click__TYVY32IN = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_button['click'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub__D8MVUTC3 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_button['text_sub'] >
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_button_minor__style__CZLCWTG6 = $mol_type_enforce<
		({ 
			'width': string,
		})  & ReturnType< $hyoo_sketch_element_button['text_style'] >
		,
		ReturnType< $mol_button_minor['style'] >
	>
	type $mol_button_minor__click__ATJEV12C = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_button['click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__7IY19ZUO = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_button['text_sub'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $hyoo_sketch_element_button extends $hyoo_sketch_element_base {
		nav_options( ): ReturnType< ReturnType< $hyoo_sketch_element_button['Nav'] >['nav_options'] >
		text_options( ): ReturnType< ReturnType< $hyoo_sketch_element_button['Text'] >['text_options'] >
		text_sub( ): ReturnType< ReturnType< $hyoo_sketch_element_button['Text'] >['text_sub'] >
		text_style( ): ReturnType< ReturnType< $hyoo_sketch_element_button['Text'] >['style'] >
		Text_option( ): ReturnType< ReturnType< $hyoo_sketch_element_button['Text'] >['Text_option'] >
		click( next?: any ): any
		button_type( next?: string ): string
		Button_type_control( ): $mol_switch
		Button_type_option( ): $hyoo_sketch_option
		button_options( ): readonly(any)[]
		Nav( ): $hyoo_sketch_element_nav
		Text( ): $hyoo_sketch_element_button_text
		Button_major( ): $mol_button_major
		Button_minor( ): $mol_button_minor
		Element( ): $mol_button
		Options( ): ({ 
			'button': ReturnType< $hyoo_sketch_element_button['button_options'] >,
			'text': ReturnType< $hyoo_sketch_element_button['text_options'] >,
			'nav': ReturnType< $hyoo_sketch_element_button['nav_options'] >,
		})  & ReturnType< $hyoo_sketch_element_base['Options'] >
	}
	
	export class $hyoo_sketch_element_button_text extends $hyoo_sketch_element_text {
		text_default( next?: string ): string
		padding_default( next?: string ): string
		align_hor_default( next?: string ): string
		align_ver_default( next?: string ): string
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_element_button extends $.$hyoo_sketch_element_button {
        Element(): $mol_button;
        button_type(next?: string): string;
        click(): void;
        duplicate(elem?: $hyoo_sketch_element): $hyoo_sketch_element;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_eye extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=eye.view.tree.d.ts.map
declare namespace $ {

	type $mol_string__type__9MUADZFF = $mol_type_enforce<
		ReturnType< $mol_password['type'] >
		,
		ReturnType< $mol_string['type'] >
	>
	type $mol_string__hint__MY9DEJYE = $mol_type_enforce<
		ReturnType< $mol_password['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__QI8134AN = $mol_type_enforce<
		ReturnType< $mol_password['value'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__submit__3SU4MDRX = $mol_type_enforce<
		ReturnType< $mol_password['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled__ETQTCMXQ = $mol_type_enforce<
		ReturnType< $mol_password['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_check_icon__checked__6FK0QW5X = $mol_type_enforce<
		ReturnType< $mol_password['checked'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__FOYY9N2S = $mol_type_enforce<
		ReturnType< $mol_password['Show_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	export class $mol_password extends $mol_view {
		hint( ): string
		value( next?: string ): string
		submit( next?: any ): any
		enabled( ): boolean
		Pass( ): $mol_string
		checked( next?: boolean ): boolean
		Show_icon( ): $mol_icon_eye
		Show( ): $mol_check_icon
		content( ): readonly(any)[]
		type( next?: string ): string
		sub( ): ReturnType< $mol_password['content'] >
	}
	
}

//# sourceMappingURL=password.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_password extends $.$mol_password {
        checked(next?: boolean): boolean;
    }
}

declare namespace $ {

	type $mol_switch__value__2DEMIU7V = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_input['input_type'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__6LGXQ5I2 = $mol_type_enforce<
		({ 
			'String': string,
			'Number': string,
			'Password': string,
			'Search': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $hyoo_sketch_option__name__553B6AUW = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__45Q2OAQS = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_input['Input_type_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_string__value__K8A43AV6 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_input['input_hint'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $hyoo_sketch_option__name__D5FOZW9O = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__W2XS1R3S = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_input['Input_hint_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_string__value__RG3TMZNK = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_input['input_text'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $hyoo_sketch_option__name__7CWHFHSX = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__UGX5U6A1 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_input['Input_text_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_switch__value__VY1BNJA6 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_input['input_enabled'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__5TV2DL5I = $mol_type_enforce<
		({ 
			'on': string,
			'off': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $hyoo_sketch_option__name__6XYLDCXP = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__YJ0QCDIK = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_input['Input_enabled_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_string__hint__63GU6TFI = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_input['input_hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__2PG87GUQ = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_input['input_text'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__enabled__WZLOBE75 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_input['input_enabled_bool'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_number__value__QGES0PO5 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_input['input_number'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__enabled__L6T6Z0C9 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_input['input_enabled_bool'] >
		,
		ReturnType< $mol_number['enabled'] >
	>
	type $mol_password__hint__8C3XW4MG = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_input['input_hint'] >
		,
		ReturnType< $mol_password['hint'] >
	>
	type $mol_password__value__9QIAQ9TY = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_input['input_text'] >
		,
		ReturnType< $mol_password['value'] >
	>
	type $mol_password__enabled__UMUY0FPQ = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_input['input_enabled_bool'] >
		,
		ReturnType< $mol_password['enabled'] >
	>
	type $mol_search__query__JY6PT23A = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_input['input_text'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__enabled__SCM3L044 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_input['input_enabled_bool'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	export class $hyoo_sketch_element_input extends $hyoo_sketch_element_base {
		input_enabled_bool( ): boolean
		input_number( next?: number ): number
		input_type( next?: string ): string
		Input_type_control( ): $mol_switch
		Input_type_option( ): $hyoo_sketch_option
		input_hint( next?: string ): string
		Input_hint_control( ): $mol_string
		Input_hint_option( ): $hyoo_sketch_option
		input_text( next?: string ): string
		Input_text_control( ): $mol_string
		Input_text_option( ): $hyoo_sketch_option
		input_enabled( next?: string ): string
		Input_enabled_control( ): $mol_switch
		Input_enabled_option( ): $hyoo_sketch_option
		input_options( ): readonly(any)[]
		String( ): $mol_string
		Number( ): $mol_number
		Password( ): $mol_password
		Search( ): $mol_search
		Element( ): $mol_view
		Options( ): ({ 
			'input': ReturnType< $hyoo_sketch_element_input['input_options'] >,
		})  & ReturnType< $hyoo_sketch_element_base['Options'] >
	}
	
}

//# sourceMappingURL=input.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_element_input extends $.$hyoo_sketch_element_input {
        Element(): $mol_view;
        input_number(next?: number): number;
        input_type(next?: string): string;
        input_hint(next?: string): string;
        input_text(next?: string): string;
        input_enabled(next?: string): string;
        input_enabled_bool(): boolean;
        duplicate(elem?: $hyoo_sketch_element): $hyoo_sketch_element;
    }
}

declare namespace $ {

	type $mol_string__value__EB4S0JU0 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_link['link_hint'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $hyoo_sketch_option__name__NCAW8BZ0 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__5ECZA5V9 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_link['Link_hint_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $hyoo_sketch_element_nav__element__TPRQRZC0 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_link['element'] >
		,
		ReturnType< $hyoo_sketch_element_nav['element'] >
	>
	type $hyoo_sketch_element_link_text__element__24S3TT2B = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_link['element'] >
		,
		ReturnType< $hyoo_sketch_element_link_text['element'] >
	>
	type $mol_link__style__U5K67A45 = $mol_type_enforce<
		Record<string, any> & ReturnType< $hyoo_sketch_element_link['text_style'] >
		,
		ReturnType< $mol_link['style'] >
	>
	type $mol_link__uri__2MUASIL9 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_link['link_uri'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__hint__CRR85UBV = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_link['link_hint'] >
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub__M1SSAA2Y = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_link['text_sub'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__style__2CCANH86 = $mol_type_enforce<
		Record<string, any> & ReturnType< $hyoo_sketch_element_link['text_style'] >
		,
		ReturnType< $mol_link['style'] >
	>
	type $mol_link__arg__TIOEMB0U = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_link['link_arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__hint__CL08OWFO = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_link['link_hint'] >
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub__DRNYWSXS = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_link['text_sub'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__click__6E6G2R00 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_link['click'] >
		,
		ReturnType< $mol_link['click'] >
	>
	export class $hyoo_sketch_element_link extends $hyoo_sketch_element_base {
		nav_options( ): ReturnType< ReturnType< $hyoo_sketch_element_link['Nav'] >['nav_options'] >
		text_options( ): ReturnType< ReturnType< $hyoo_sketch_element_link['Text'] >['text_options'] >
		text_sub( ): ReturnType< ReturnType< $hyoo_sketch_element_link['Text'] >['text_sub'] >
		text_style( ): ReturnType< ReturnType< $hyoo_sketch_element_link['Text'] >['style'] >
		Text_option( ): ReturnType< ReturnType< $hyoo_sketch_element_link['Text'] >['Text_option'] >
		link_uri( ): string
		link_arg( ): Record<string, any>
		click( next?: any ): any
		link_hint( next?: string ): string
		Link_hint_control( ): $mol_string
		Link_hint_option( ): $hyoo_sketch_option
		link_options( ): readonly(any)[]
		Nav( ): $hyoo_sketch_element_nav
		Text( ): $hyoo_sketch_element_link_text
		Link_external( ): $mol_link
		Link_internal( ): $mol_link
		Element( ): $mol_link
		Options( ): ({ 
			'link': ReturnType< $hyoo_sketch_element_link['link_options'] >,
			'nav': ReturnType< $hyoo_sketch_element_link['nav_options'] >,
			'text': ReturnType< $hyoo_sketch_element_link['text_options'] >,
		})  & ReturnType< $hyoo_sketch_element_base['Options'] >
	}
	
	export class $hyoo_sketch_element_link_text extends $hyoo_sketch_element_text {
		text_default( next?: string ): string
		padding_default( next?: string ): string
		align_hor_default( next?: string ): string
		align_ver_default( next?: string ): string
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_element_link extends $.$hyoo_sketch_element_link {
        Element(): $.$mol_link;
        click(event: PointerEvent): void;
        link_hint(next?: string): string;
        link_uri(): string;
        duplicate(elem?: $hyoo_sketch_element): $hyoo_sketch_element;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_tick extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=tick.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_check_box extends $mol_check {
		Icon( ): $mol_icon_tick
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__style__JX3YHRIY = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_image2['height'] >,
			'backgroundImage': ReturnType< $mol_image2['background'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_image2 extends $mol_view {
		height( ): string
		background( ): string
		Content( ): $mol_view
		links( ): readonly(any)[]
		aspect( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=image2.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_image2 extends $.$mol_image2 {
        background(): string;
        height(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_string__value__NHKR6QQ3 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_image['image_link'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $hyoo_sketch_option__name__BG5L12VZ = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__KYHMC3VB = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_image['Image_link_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_check_box__title__L7LS1PSY = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__JT01Q4YH = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_image['image_round'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $hyoo_sketch_option__name__E2MZ2DDX = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__GPIDYVO8 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_image['Image_round_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_image2__style__I1E057O7 = $mol_type_enforce<
		({ 
			'borderRadius': ReturnType< $hyoo_sketch_element_image['round'] >,
		}) 
		,
		ReturnType< $mol_image2['style'] >
	>
	type $mol_image2__links__BSXZA56G = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_image2['links'] >
	>
	export class $hyoo_sketch_element_image extends $hyoo_sketch_element_base {
		round( ): string
		image_link_default( ): string
		image_link( next?: ReturnType< $hyoo_sketch_element_image['image_link_default'] > ): ReturnType< $hyoo_sketch_element_image['image_link_default'] >
		Image_link_control( ): $mol_string
		Image_link_option( ): $hyoo_sketch_option
		image_round( next?: boolean ): boolean
		Image_round_control( ): $mol_check_box
		Image_round_option( ): $hyoo_sketch_option
		image_options( ): readonly(any)[]
		Element( ): $mol_image2
		Options( ): ({ 
			'image': ReturnType< $hyoo_sketch_element_image['image_options'] >,
		})  & ReturnType< $hyoo_sketch_element_base['Options'] >
		width_default( ): number
		height_default( ): number
	}
	
}

//# sourceMappingURL=image.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_element_image extends $.$hyoo_sketch_element_image {
        image_link(next?: string): string;
        image_round(next?: boolean): boolean;
        round(): "50%" | "unset";
        image_link_placeholder(): string;
        duplicate(elem: $hyoo_sketch_element): $hyoo_sketch_element;
    }
}

declare namespace $ {

	type $mol_button_minor__click__1JIUFZOZ = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_options['option_clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__1HY1RBZ8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_string__value__C2S2ZWKH = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_options['option_row'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_view__sub__L947Y7EN = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_options['row_sub'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__LF049NJ6 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_options['rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $hyoo_sketch_option__name__5DCG1UF2 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__7B9W5779 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_options['Option_list_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_switch__value__C7XCB10Q = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_options['option_current'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__6T0V0TOK = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_options['option_dict'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $hyoo_sketch_option__name__1SKP2NVM = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__BBXZL63W = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_options['Option_current_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	export class $hyoo_sketch_element_options extends $hyoo_sketch_element_base {
		option_clear( id: any, next?: any ): any
		Row_clear_icon( id: any): $mol_icon_cross
		Row_clear( id: any): $mol_button_minor
		option_row( id: any, next?: string ): string
		Row_string( id: any): $mol_string
		row_sub( id: any): readonly(any)[]
		Row( id: any): $mol_view
		rows( ): readonly(any)[]
		Option_list_control( ): $mol_list
		Option_list_option( ): $hyoo_sketch_option
		option_dict( ): Record<string, any>
		Option_current_control( ): $mol_switch
		Option_current_option( ): $hyoo_sketch_option
		options( ): readonly(any)[]
		option_list_default( ): readonly(any)[]
		option_current( next?: string ): string
		option_list( ): readonly(string)[]
		Options( ): ({ 
			'options': ReturnType< $hyoo_sketch_element_options['options'] >,
		})  & ReturnType< $hyoo_sketch_element_base['Options'] >
	}
	
}

//# sourceMappingURL=options.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_element_options extends $.$hyoo_sketch_element_options {
        option_list(next?: string[]): string[];
        option_current(next?: string): string;
        option_dict(): any;
        rows(): $mol_view[];
        row_sub(index: number): ($mol_button_minor | $.$mol_string)[];
        option_row(index: number, next?: string): string;
        option_clear(index: number): void;
        duplicate(elem: $hyoo_sketch_element): $hyoo_sketch_element;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_select_list_filter_pattern__O7NAP688 = $mol_type_enforce<
		Parameters< $mol_select_list['filter_pattern'] >[0]
		,
		Parameters< ReturnType< $mol_select_list['Pick'] >['filter_pattern'] >[0]
	>
	type $mol_select__event_select__ZWETRALX = $mol_type_enforce<
		ReturnType< $mol_select_list['event_select'] >
		,
		ReturnType< $mol_select['event_select'] >
	>
	type $mol_select__align_hor__OA1JTA4X = $mol_type_enforce<
		ReturnType< $mol_select_list['align_hor'] >
		,
		ReturnType< $mol_select['align_hor'] >
	>
	type $mol_select__options__UTNAWR8B = $mol_type_enforce<
		ReturnType< $mol_select_list['options_pickable'] >
		,
		ReturnType< $mol_select['options'] >
	>
	type $mol_select__value__9EBKRXJB = $mol_type_enforce<
		ReturnType< $mol_select_list['pick'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__option_label__62YGZUVJ = $mol_type_enforce<
		ReturnType< $mol_select_list['option_title'] >
		,
		ReturnType< $mol_select['option_label'] >
	>
	type $mol_select__trigger_enabled__88XKWEIW = $mol_type_enforce<
		ReturnType< $mol_select_list['pick_enabled'] >
		,
		ReturnType< $mol_select['trigger_enabled'] >
	>
	type $mol_select__hint__SEELNBXK = $mol_type_enforce<
		ReturnType< $mol_select_list['pick_hint'] >
		,
		ReturnType< $mol_select['hint'] >
	>
	type $mol_select__Trigger_icon__J0G2YS4G = $mol_type_enforce<
		ReturnType< $mol_select_list['Pick_icon'] >
		,
		ReturnType< $mol_select['Trigger_icon'] >
	>
	type $mol_button_minor__title__VOZ2XJWV = $mol_type_enforce<
		ReturnType< $mol_select_list['badge_title'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click__KPJ2CPSE = $mol_type_enforce<
		ReturnType< $mol_select_list['remove'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__hint__F2XRUINW = $mol_type_enforce<
		ReturnType< $mol_select_list['badge_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled__19ZD7AB1 = $mol_type_enforce<
		ReturnType< $mol_select_list['drop_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_select_list_sub__MFBUW6W5 = $mol_type_enforce<
		ReturnType< $mol_select_list['badges_list'] >[number]
		,
		$mol_view
	>
	export class $mol_select_list extends $mol_view {
		Badges( ): readonly($mol_view)[]
		badge_title( id: any): string
		remove( id: any, next?: any ): any
		badge_hint( ): string
		enabled( ): boolean
		drop_enabled( ): ReturnType< $mol_select_list['enabled'] >
		event_select( id: any, next?: any ): any
		align_hor( ): string
		options( ): readonly(string)[]
		options_pickable( ): ReturnType< $mol_select_list['options'] >
		pick( next?: string ): string
		option_title( id: any): string
		pick_enabled( ): ReturnType< $mol_select_list['enabled'] >
		pick_hint( ): string
		filter_pattern( next?: ReturnType< ReturnType< $mol_select_list['Pick'] >['filter_pattern'] > ): ReturnType< ReturnType< $mol_select_list['Pick'] >['filter_pattern'] >
		Pick_icon( ): $mol_icon_plus
		Pick( ): $mol_select
		value( next?: readonly(string)[] ): readonly(string)[]
		dictionary( ): Record<string, any>
		badges_list( ): ReturnType< $mol_select_list['Badges'] >
		Badge( id: any): $mol_button_minor
		sub( ): readonly($mol_view)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_select_list extends $.$mol_select_list {
        value(val?: readonly string[]): readonly string[];
        pick(key?: string): string;
        event_select(id: string, event?: MouseEvent): void;
        options(): readonly string[];
        options_pickable(): readonly string[];
        option_title(key: string): string;
        badge_title(key: string): string;
        pick_enabled(): boolean;
        Badges(): $mol_button_minor[];
        title(): string;
        remove(key: string): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_switch__value__1V5ZCDA6 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_select['select_type'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__6JSDLEPW = $mol_type_enforce<
		({ 
			'Single': string,
			'List': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $hyoo_sketch_option__name__BJE7OLMA = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__ORPB6R7G = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_select['Select_type_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $hyoo_sketch_element_options__element__W47EV3NS = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_select['element'] >
		,
		ReturnType< $hyoo_sketch_element_options['element'] >
	>
	type $mol_select_list__value__1NV6TSNU = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_select['select_list_value'] >
		,
		ReturnType< $mol_select_list['value'] >
	>
	type $mol_select_list__dictionary__9EYQN59F = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_select['option_dict'] >
		,
		ReturnType< $mol_select_list['dictionary'] >
	>
	type $mol_select__value__WISZJ9XJ = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_select['select_single_value'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__options__IY7CMHW3 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_select['option_list'] >
		,
		ReturnType< $mol_select['options'] >
	>
	export class $hyoo_sketch_element_select extends $hyoo_sketch_element_base {
		option_list( ): ReturnType< ReturnType< $hyoo_sketch_element_select['Option_list'] >['option_list'] >
		option_dict( ): ReturnType< ReturnType< $hyoo_sketch_element_select['Option_list'] >['option_dict'] >
		options( ): ReturnType< ReturnType< $hyoo_sketch_element_select['Option_list'] >['options'] >
		select_list_value( next?: readonly(any)[] ): readonly(any)[]
		select_single_value( next?: string ): string
		select_type_default( ): string
		select_type( next?: ReturnType< $hyoo_sketch_element_select['select_type_default'] > ): ReturnType< $hyoo_sketch_element_select['select_type_default'] >
		Select_type_control( ): $mol_switch
		Select_type_option( ): $hyoo_sketch_option
		select_options( ): readonly(any)[]
		Option_list( ): $hyoo_sketch_element_options
		List( ): $mol_select_list
		Single( ): $mol_select
		Elemet( ): $mol_view
		Options( ): ({ 
			'select': ReturnType< $hyoo_sketch_element_select['select_options'] >,
		})  & ReturnType< $hyoo_sketch_element_base['Options'] >
	}
	
}

//# sourceMappingURL=select.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_element_select extends $.$hyoo_sketch_element_select {
        Element(): $mol_view;
        select_type(next?: string): string;
        duplicate(elem?: $hyoo_sketch_element): $hyoo_sketch_element;
    }
}

declare namespace $ {

	type $mol_switch__value__KIUCE636 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_check['check_type'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__6ZWT9X6W = $mol_type_enforce<
		({ 
			'Check_box': string,
			'Check_icon': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $hyoo_sketch_option__name__SPEWUSK7 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__1G6SOGF9 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_check['Check_type_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_check_box__checked__70HWVJOO = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_check['check_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $hyoo_sketch_option__name__S98WJ253 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__RWR3IWJV = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_check['Check_checked_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_string__value__HAHGZU62 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_check['check_title'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $hyoo_sketch_option__name__3LOZ3TE1 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__Y4QQEGUV = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_check['Check_title_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_check_box__title__J58F5EM5 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_check['check_title'] >
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__4X3Y5LC2 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_check['check_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_icon__Icon__XK3XZC2O = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_check['Checked_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked__K1M4GFVE = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_check['check_checked'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $hyoo_sketch_element_icon__element__4PPIIP4E = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_check['element'] >
		,
		ReturnType< $hyoo_sketch_element_icon['element'] >
	>
	export class $hyoo_sketch_element_check extends $hyoo_sketch_element_base {
		Checked_icon( ): ReturnType< ReturnType< $hyoo_sketch_element_check['Icon'] >['Icon'] >
		icon_options( ): ReturnType< ReturnType< $hyoo_sketch_element_check['Icon'] >['icon_options'] >
		check_type_default( ): string
		check_type( next?: ReturnType< $hyoo_sketch_element_check['check_type_default'] > ): ReturnType< $hyoo_sketch_element_check['check_type_default'] >
		Check_type_control( ): $mol_switch
		Check_type_option( ): $hyoo_sketch_option
		check_checked_default( ): boolean
		check_checked( next?: ReturnType< $hyoo_sketch_element_check['check_checked_default'] > ): ReturnType< $hyoo_sketch_element_check['check_checked_default'] >
		Check_checked_control( ): $mol_check_box
		Check_checked_option( ): $hyoo_sketch_option
		check_title_default( ): string
		check_title( next?: ReturnType< $hyoo_sketch_element_check['check_title_default'] > ): ReturnType< $hyoo_sketch_element_check['check_title_default'] >
		Check_title_control( ): $mol_string
		Check_title_option( ): $hyoo_sketch_option
		check_options( ): readonly(any)[]
		Check_box( ): $mol_check_box
		Check_icon( ): $mol_check_icon
		Element( ): $mol_view
		Icon( ): $hyoo_sketch_element_icon
		Options( ): ({ 
			'check': ReturnType< $hyoo_sketch_element_check['check_options'] >,
		})  & ReturnType< $hyoo_sketch_element_base['Options'] >
		width_default( ): number
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_element_check extends $.$hyoo_sketch_element_check {
        Element(): $mol_view;
        check_type(next?: string): string;
        check_title(next?: string): string;
        check_checked(next?: boolean): boolean;
        duplicate(elem?: $hyoo_sketch_element): $hyoo_sketch_element;
        check_options(): any[];
    }
}

declare namespace $ {

	type $hyoo_sketch_element_switch_value__ABWFSQRB = $mol_type_enforce<
		Parameters< $hyoo_sketch_element_switch['value'] >[0]
		,
		Parameters< ReturnType< $hyoo_sketch_element_switch['Option_list'] >['option_current'] >[0]
	>
	type $hyoo_sketch_element_options__element__41PYW91R = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_switch['element'] >
		,
		ReturnType< $hyoo_sketch_element_options['element'] >
	>
	type $mol_switch__value__V1KOHX2K = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_switch['value'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__T3NP7BWP = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_switch['option_dict'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	export class $hyoo_sketch_element_switch extends $hyoo_sketch_element_base {
		option_dict( ): ReturnType< ReturnType< $hyoo_sketch_element_switch['Option_list'] >['option_dict'] >
		value( next?: ReturnType< ReturnType< $hyoo_sketch_element_switch['Option_list'] >['option_current'] > ): ReturnType< ReturnType< $hyoo_sketch_element_switch['Option_list'] >['option_current'] >
		options( ): ReturnType< ReturnType< $hyoo_sketch_element_switch['Option_list'] >['options'] >
		Option_list( ): $hyoo_sketch_element_options
		Element( ): $mol_switch
		Options( ): ({ 
			'switch': ReturnType< $hyoo_sketch_element_switch['options'] >,
		})  & ReturnType< $hyoo_sketch_element_base['Options'] >
	}
	
}

//# sourceMappingURL=switch.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_element_switch extends $.$hyoo_sketch_element_switch {
        duplicate(elem?: $hyoo_sketch_element): $hyoo_sketch_element;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_stack extends $mol_view {
	}
	
}

//# sourceMappingURL=stack.view.tree.d.ts.map
declare namespace $ {

	export class $mol_text_code_token extends $mol_dimmer {
		type( ): string
		attr( ): ({ 
			'mol_text_code_token_type': ReturnType< $mol_text_code_token['type'] >,
		})  & ReturnType< $mol_dimmer['attr'] >
	}
	
	export class $mol_text_code_token_link extends $mol_text_code_token {
		uri( ): string
		dom_name( ): string
		type( ): string
		attr( ): ({ 
			'href': ReturnType< $mol_text_code_token_link['uri'] >,
			'target': string,
		})  & ReturnType< $mol_text_code_token['attr'] >
	}
	
}

//# sourceMappingURL=token.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {
    class $mol_syntax2<Lexems extends {
        [name: string]: RegExp;
    }> {
        lexems: Lexems;
        constructor(lexems: Lexems);
        rules: {
            regExp: RegExp;
            name: string;
            size: number;
        }[];
        regexp: RegExp;
        tokenize(text: string, handle: (name: string, found: string, chunks: string[], offset: number) => void): void;
        parse(text: string, handlers: {
            [key in keyof Lexems | '']: (found: string, chunks: string[], offset: number) => void;
        }): void;
    }
}

declare namespace $ {
    var $mol_syntax2_md_flow: $mol_syntax2<{
        quote: RegExp;
        header: RegExp;
        list: RegExp;
        code: RegExp;
        'code-indent': RegExp;
        table: RegExp;
        grid: RegExp;
        cut: RegExp;
        block: RegExp;
    }>;
    var $mol_syntax2_md_line: $mol_syntax2<{
        strong: RegExp;
        emphasis: RegExp;
        code: RegExp;
        insert: RegExp;
        delete: RegExp;
        embed: RegExp;
        link: RegExp;
        'image-link': RegExp;
        'text-link': RegExp;
        'text-link-http': RegExp;
    }>;
    const $mol_syntax2_md_code: $mol_syntax2<{
        'code-indent': RegExp;
        'code-docs': RegExp;
        'code-comment-block': RegExp;
        'code-link': RegExp;
        'code-comment-inline': RegExp;
        'code-string': RegExp;
        'code-number': RegExp;
        'code-call': RegExp;
        'code-sexpr': RegExp;
        'code-field': RegExp;
        'code-keyword': RegExp;
        'code-global': RegExp;
        'code-word': RegExp;
        'code-decorator': RegExp;
        'code-tag': RegExp;
        'code-punctuation': RegExp;
    }>;
}

declare namespace $ {

	type $mol_view__sub__MN3P4E20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text_code_token__type__EQND2M1O = $mol_type_enforce<
		ReturnType< $mol_text_code_row['token_type'] >
		,
		ReturnType< $mol_text_code_token['type'] >
	>
	type $mol_text_code_token__haystack__EAVZYN7R = $mol_type_enforce<
		ReturnType< $mol_text_code_row['token_text'] >
		,
		ReturnType< $mol_text_code_token['haystack'] >
	>
	type $mol_text_code_token__needle__HHEAAN6R = $mol_type_enforce<
		ReturnType< $mol_text_code_row['highlight'] >
		,
		ReturnType< $mol_text_code_token['needle'] >
	>
	type $mol_text_code_token_link__haystack__4CRVRMDX = $mol_type_enforce<
		ReturnType< $mol_text_code_row['token_text'] >
		,
		ReturnType< $mol_text_code_token_link['haystack'] >
	>
	type $mol_text_code_token_link__needle__IR9NN186 = $mol_type_enforce<
		ReturnType< $mol_text_code_row['highlight'] >
		,
		ReturnType< $mol_text_code_token_link['needle'] >
	>
	type $mol_text_code_token_link__uri__1V66PDFS = $mol_type_enforce<
		ReturnType< $mol_text_code_row['token_uri'] >
		,
		ReturnType< $mol_text_code_token_link['uri'] >
	>
	export class $mol_text_code_row extends $mol_paragraph {
		numb( ): number
		token_type( id: any): string
		token_text( id: any): string
		highlight( ): string
		token_uri( id: any): string
		text( ): string
		minimal_height( ): number
		numb_showed( ): boolean
		syntax( ): any
		uri_resolve( id: any): string
		Numb( ): $mol_view
		Token( id: any): $mol_text_code_token
		Token_link( id: any): $mol_text_code_token_link
		find_pos( id: any): any
	}
	
}

//# sourceMappingURL=row.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_text_code_row extends $.$mol_text_code_row {
        maximal_width(): number;
        syntax(): $mol_syntax2<{
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-link': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
        tokens(path: number[]): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
        sub(): $mol_view[];
        row_content(path: number[]): $mol_text_code_token[];
        Token(path: number[]): $mol_text_code_token;
        token_type(path: number[]): string;
        token_content(path: number[]): (string | $mol_text_code_token)[];
        token_text(path: number[]): string;
        token_uri(path: number[]): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        find_pos(offset: number): {
            token: $mol_text_code_token;
            offset: number;
        } | null;
        find_token_pos([offset, ...path]: number[]): {
            token: $mol_text_code_token;
            offset: number;
        } | null;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    type $mol_blob = Blob;
    let $mol_blob: {
        new (blobParts?: readonly BlobPart[], options?: BlobPropertyBag): Blob;
        prototype: Blob;
    };
}

declare namespace $ {

	export class $mol_icon_clipboard extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=clipboard.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clipboard_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {
    function $mol_html_encode(text: string): string;
}

declare namespace $ {

	type $mol_blob__TZ7YEF8Z = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	type $mol_blob__G50XFO2V = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	export class $mol_button_copy extends $mol_button_minor {
		text( ): ReturnType< $mol_button_copy['title'] >
		text_blob( next?: $mol_blob ): $mol_blob
		html( ): string
		html_blob( next?: $mol_blob ): $mol_blob
		Icon( ): $mol_icon_clipboard_outline
		title( ): string
		blobs( ): readonly($mol_blob)[]
		data( ): Record<string, any>
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=copy.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button_copy extends $.$mol_button_copy {
        data(): {
            [k: string]: Blob;
        };
        html(): string;
        attachments(): ClipboardItem[];
        click(event?: Event): void;
    }
}

declare namespace $ {

	type $mol_text_code_row__numb_showed__ADU14WO5 = $mol_type_enforce<
		ReturnType< $mol_text_code['sidebar_showed'] >
		,
		ReturnType< $mol_text_code_row['numb_showed'] >
	>
	type $mol_text_code_row__numb__XWYK2N97 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_numb'] >
		,
		ReturnType< $mol_text_code_row['numb'] >
	>
	type $mol_text_code_row__text__NKAM01DB = $mol_type_enforce<
		ReturnType< $mol_text_code['row_text'] >
		,
		ReturnType< $mol_text_code_row['text'] >
	>
	type $mol_text_code_row__syntax__0LFSSVRQ = $mol_type_enforce<
		ReturnType< $mol_text_code['syntax'] >
		,
		ReturnType< $mol_text_code_row['syntax'] >
	>
	type $mol_text_code_row__uri_resolve__S4Z3Z8N6 = $mol_type_enforce<
		ReturnType< $mol_text_code['uri_resolve'] >
		,
		ReturnType< $mol_text_code_row['uri_resolve'] >
	>
	type $mol_text_code_row__highlight__UAZQK1DY = $mol_type_enforce<
		ReturnType< $mol_text_code['highlight'] >
		,
		ReturnType< $mol_text_code_row['highlight'] >
	>
	type $mol_list__render_visible_only__53WKGR5X = $mol_type_enforce<
		ReturnType< $mol_text_code['render_visible_only'] >
		,
		ReturnType< $mol_list['render_visible_only'] >
	>
	type $mol_list__rows__GMY77FRV = $mol_type_enforce<
		ReturnType< $mol_text_code['rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_button_copy__hint__71I30YHF = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['hint'] >
	>
	type $mol_button_copy__text__RJ6PR1UW = $mol_type_enforce<
		ReturnType< $mol_text_code['text_export'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	export class $mol_text_code extends $mol_stack {
		sidebar_showed( ): boolean
		render_visible_only( ): boolean
		row_numb( id: any): number
		row_text( id: any): string
		syntax( ): any
		uri_resolve( id: any): string
		highlight( ): string
		Row( id: any): $mol_text_code_row
		rows( ): readonly(any)[]
		Rows( ): $mol_list
		text_export( ): string
		Copy( ): $mol_button_copy
		attr( ): ({ 
			'mol_text_code_sidebar_showed': ReturnType< $mol_text_code['sidebar_showed'] >,
		})  & ReturnType< $mol_stack['attr'] >
		text( ): string
		text_lines( ): readonly(string)[]
		find_pos( id: any): any
		uri_base( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=code.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_text_code extends $.$mol_text_code {
        render_visible_only(): boolean;
        text_lines(): readonly string[];
        rows(): $.$mol_text_code_row[];
        row_text(index: number): string;
        row_numb(index: number): number;
        find_pos(offset: number): any;
        sub(): ($.$mol_list | $.$mol_button_copy)[];
        syntax(): $mol_syntax2<{
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-link': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
        uri_base(): string;
        uri_resolve(uri: string): string;
        text_export(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_textarea_edit__value__MDZ6SR4G = $mol_type_enforce<
		ReturnType< $mol_textarea['value'] >
		,
		ReturnType< $mol_textarea_edit['value'] >
	>
	type $mol_textarea_edit__hint__XQCPVXUD = $mol_type_enforce<
		ReturnType< $mol_textarea['hint'] >
		,
		ReturnType< $mol_textarea_edit['hint'] >
	>
	type $mol_textarea_edit__enabled__NWD0S91Q = $mol_type_enforce<
		ReturnType< $mol_textarea['enabled'] >
		,
		ReturnType< $mol_textarea_edit['enabled'] >
	>
	type $mol_textarea_edit__spellcheck__KI277OSK = $mol_type_enforce<
		ReturnType< $mol_textarea['spellcheck'] >
		,
		ReturnType< $mol_textarea_edit['spellcheck'] >
	>
	type $mol_textarea_edit__length_max__N23FW979 = $mol_type_enforce<
		ReturnType< $mol_textarea['length_max'] >
		,
		ReturnType< $mol_textarea_edit['length_max'] >
	>
	type $mol_textarea_edit__selection__Y26K3FJB = $mol_type_enforce<
		ReturnType< $mol_textarea['selection'] >
		,
		ReturnType< $mol_textarea_edit['selection'] >
	>
	type $mol_textarea_edit__submit__2VJF78NP = $mol_type_enforce<
		ReturnType< $mol_textarea['submit'] >
		,
		ReturnType< $mol_textarea_edit['submit'] >
	>
	type $mol_textarea_edit__submit_with_ctrl__WEIMRK0U = $mol_type_enforce<
		ReturnType< $mol_textarea['submit_with_ctrl'] >
		,
		ReturnType< $mol_textarea_edit['submit_with_ctrl'] >
	>
	type $mol_text_code__text__POFG6DDY = $mol_type_enforce<
		ReturnType< $mol_textarea['value'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__render_visible_only__GNHOIUBJ = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code['render_visible_only'] >
	>
	type $mol_text_code__row_numb__JQFAPHSG = $mol_type_enforce<
		ReturnType< $mol_textarea['row_numb'] >
		,
		ReturnType< $mol_text_code['row_numb'] >
	>
	type $mol_text_code__sidebar_showed__ADGBTTH4 = $mol_type_enforce<
		ReturnType< $mol_textarea['sidebar_showed'] >
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_text_code__highlight__GLNEXY0K = $mol_type_enforce<
		ReturnType< $mol_textarea['highlight'] >
		,
		ReturnType< $mol_text_code['highlight'] >
	>
	export class $mol_textarea extends $mol_stack {
		clickable( next?: boolean ): boolean
		sidebar_showed( ): boolean
		press( next?: any ): any
		hover( next?: any ): any
		value( next?: string ): string
		hint( ): string
		enabled( ): boolean
		spellcheck( ): boolean
		length_max( ): number
		selection( next?: readonly(number)[] ): readonly(number)[]
		bring( ): ReturnType< ReturnType< $mol_textarea['Edit'] >['bring'] >
		submit( next?: any ): any
		submit_with_ctrl( ): boolean
		Edit( ): $mol_textarea_edit
		row_numb( id: any): number
		highlight( ): string
		View( ): $mol_text_code
		attr( ): ({ 
			'mol_textarea_clickable': ReturnType< $mol_textarea['clickable'] >,
			'mol_textarea_sidebar_showed': ReturnType< $mol_textarea['sidebar_showed'] >,
		})  & ReturnType< $mol_stack['attr'] >
		event( ): ({ 
			keydown( next?: ReturnType< $mol_textarea['press'] > ): ReturnType< $mol_textarea['press'] >,
			pointermove( next?: ReturnType< $mol_textarea['hover'] > ): ReturnType< $mol_textarea['hover'] >,
		}) 
		sub( ): readonly(any)[]
		symbols_alt( ): Record<string, string>
		symbols_alt_ctrl( ): Record<string, string>
		symbols_alt_shift( ): Record<string, string>
	}
	
	export class $mol_textarea_edit extends $mol_string {
		dom_name( ): string
		enter( ): string
		field( ): ({ 
			'scrollTop': number,
		})  & ReturnType< $mol_string['field'] >
	}
	
}

//# sourceMappingURL=textarea.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_textarea extends $.$mol_textarea {
        indent_inc(): void;
        indent_dec(): void;
        symbol_insert(event: KeyboardEvent): void;
        clickable(next?: boolean): boolean;
        hover(event: PointerEvent): void;
        press(event: KeyboardEvent): void;
        row_numb(index: number): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    let $hyoo_crowd_tokenizer: RegExp;
}

declare namespace $ {
    class $hyoo_crowd_text extends $hyoo_crowd_node {
        text(next?: string): string;
        str(next?: string): string;
        write(next: string, str_from?: number, str_to?: number): this;
        point_by_offset(offset: number): readonly [$mol_int62_string, number];
        offset_by_point([self, offset]: [$mol_int62_string, number]): readonly [$mol_int62_string, number];
        selection(peer: $mol_int62_string, next?: number[]): number[];
    }
}

declare namespace $ {

	type $mol_textarea__style__4TVWT92I = $mol_type_enforce<
		({ 
			'height': string,
		}) 
		,
		ReturnType< $mol_textarea['style'] >
	>
	type $mol_textarea__value__6B464R41 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_textarea['text'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $hyoo_sketch_option__name__SR9EMFLD = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__NSWE7NHP = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_textarea['Text_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_string__value__1L1HNYAQ = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_textarea['hint'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $hyoo_sketch_option__name__EVP5T010 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__GN1A8RTX = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_textarea['Hint_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_textarea__hint__MW88CGUG = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_textarea['hint'] >
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value__CKWJBZUZ = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_textarea['text'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	export class $hyoo_sketch_element_textarea extends $hyoo_sketch_element_base {
		text( next?: string ): string
		Text_control( ): $mol_textarea
		Text_option( ): $hyoo_sketch_option
		hint( next?: string ): string
		Hint_control( ): $mol_string
		Hint_option( ): $hyoo_sketch_option
		textarea_options( ): readonly(any)[]
		Element( ): $mol_textarea
		Options( ): ({ 
			'textarea': ReturnType< $hyoo_sketch_element_textarea['textarea_options'] >,
		})  & ReturnType< $hyoo_sketch_element_base['Options'] >
	}
	
}

//# sourceMappingURL=textarea.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_element_textarea extends $.$hyoo_sketch_element_textarea {
        text(next?: string): string;
        hint(next?: string): string;
        duplicate(elem?: $hyoo_sketch_element): $hyoo_sketch_element;
    }
}

declare namespace $ {

	export class $mol_icon_calendar extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=calendar.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_calendar_today extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=today.view.tree.d.ts.map
declare namespace $ {

	export class $mol_format extends $mol_string {
		mask( id: any): string
		allow( ): string
		hint( ): ReturnType< $mol_format['mask'] >
		keyboard( ): string
	}
	
}

//# sourceMappingURL=format.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_format extends $.$mol_format {
        selection([from, to]?: [number, number]): number[];
        value_changed(next?: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_trash_can extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=can.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_trash_can_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=chevron.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron_left extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=left.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron_right extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=right.view.tree.d.ts.map
declare namespace $ {

	export class $mol_hor extends $mol_view {
	}
	
}

//# sourceMappingURL=hor.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_hor extends $.$mol_hor {
        minimal_width(): number;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__minimal_height__EYYQ3941 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__QA4AZZ1S = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__AEXORWHG = $mol_type_enforce<
		ReturnType< $mol_calendar['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_hor__sub__TEZ75WTZ = $mol_type_enforce<
		ReturnType< $mol_calendar['weekdays'] >
		,
		ReturnType< $mol_hor['sub'] >
	>
	type $mol_calendar_day__holiday__ADAVFI7K = $mol_type_enforce<
		ReturnType< $mol_calendar['weekend'] >
		,
		ReturnType< $mol_calendar_day['holiday'] >
	>
	type $mol_calendar_day__sub__DMOVG8I6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_calendar_day['sub'] >
	>
	type $mol_hor__sub__5AVUMQPU = $mol_type_enforce<
		ReturnType< $mol_calendar['week_days'] >
		,
		ReturnType< $mol_hor['sub'] >
	>
	type $mol_calendar_day__ghost__EZ2S0RJG = $mol_type_enforce<
		ReturnType< $mol_calendar['day_ghost'] >
		,
		ReturnType< $mol_calendar_day['ghost'] >
	>
	type $mol_calendar_day__holiday__AGKT24NN = $mol_type_enforce<
		ReturnType< $mol_calendar['day_holiday'] >
		,
		ReturnType< $mol_calendar_day['holiday'] >
	>
	type $mol_calendar_day__selected__ETURT39B = $mol_type_enforce<
		ReturnType< $mol_calendar['day_selected'] >
		,
		ReturnType< $mol_calendar_day['selected'] >
	>
	type $mol_calendar_day__today__TKSNMPUM = $mol_type_enforce<
		ReturnType< $mol_calendar['day_today'] >
		,
		ReturnType< $mol_calendar_day['today'] >
	>
	type $mol_calendar_day__theme__TPWD6LQ9 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_theme'] >
		,
		ReturnType< $mol_calendar_day['theme'] >
	>
	type $mol_calendar_day__sub__I1XLBRIF = $mol_type_enforce<
		ReturnType< $mol_calendar['day_content'] >
		,
		ReturnType< $mol_calendar_day['sub'] >
	>
	export class $mol_calendar extends $mol_list {
		title( ): string
		Title( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		weekdays( ): readonly($mol_view)[]
		Weekdays( ): $mol_hor
		weekend( id: any): boolean
		weekday( id: any): string
		week_days( id: any): readonly($mol_view)[]
		day_ghost( id: any): boolean
		day_holiday( id: any): boolean
		day_selected( id: any): boolean
		day_today( id: any): boolean
		day_theme( id: any): any
		day_text( id: any): string
		day_content( id: any): readonly(any)[]
		sub( ): readonly(any)[]
		weeks( ): readonly($mol_view)[]
		weeks_count( ): number
		Weekday( id: any): $mol_calendar_day
		Week( id: any): $mol_hor
		Day( id: any): $mol_calendar_day
		month_string( ): string
		month_moment( ): $mol_time_moment
	}
	
	export class $mol_calendar_day extends $mol_view {
		holiday( ): boolean
		ghost( ): boolean
		selected( ): boolean
		today( ): boolean
		theme( ): any
		minimal_height( ): number
		minimal_width( ): number
		attr( ): ({ 
			'mol_calendar_holiday': ReturnType< $mol_calendar_day['holiday'] >,
			'mol_calendar_ghost': ReturnType< $mol_calendar_day['ghost'] >,
			'mol_calendar_selected': ReturnType< $mol_calendar_day['selected'] >,
			'mol_calendar_today': ReturnType< $mol_calendar_day['today'] >,
			'mol_theme': ReturnType< $mol_calendar_day['theme'] >,
		}) 
	}
	
}

//# sourceMappingURL=calendar.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_calendar extends $.$mol_calendar {
        month_moment(): $mol_time_moment;
        title(): string;
        day_first(): $mol_time_moment;
        day_last(): $mol_time_moment;
        day_draw_from(): $mol_time_moment;
        weekdays(): $mol_view[];
        weekday(index: number): string;
        weekend(index: number): boolean;
        sub(): any[];
        weeks(): $mol_view[];
        week_days(index: number): $mol_view[];
        day_text(day: string): string;
        day_holiday(day: string): boolean;
        today(): $mol_time_moment;
        day_today(day: string): boolean;
        day_ghost(day: string): boolean;
        day_theme(day: string): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_try<Result>(handler2: () => Result): Result | Error;
}

declare namespace $ {

	type $mol_button_minor__hint__OFMS3AHR = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled__VRVVUL3Q = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click__QWP4KAAG = $mol_type_enforce<
		ReturnType< $mol_date['today_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__7P5C7349 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_date_value_changed__VBB1VUS2 = $mol_type_enforce<
		Parameters< $mol_date['value_changed'] >[0]
		,
		Parameters< ReturnType< $mol_date['Input'] >['value_changed'] >[0]
	>
	type $mol_format__value__H29W0L34 = $mol_type_enforce<
		ReturnType< $mol_date['value'] >
		,
		ReturnType< $mol_format['value'] >
	>
	type $mol_format__mask__8P5YVTDR = $mol_type_enforce<
		ReturnType< $mol_date['input_mask'] >
		,
		ReturnType< $mol_format['mask'] >
	>
	type $mol_format__enabled__UPZFKMBI = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_format['enabled'] >
	>
	type $mol_button_minor__hint__J89M6YIG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled__ES8TUEVE = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click__YGZ2S7NB = $mol_type_enforce<
		ReturnType< $mol_date['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__61X22W3D = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__YLECV6L8 = $mol_type_enforce<
		ReturnType< $mol_date['input_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__hint__23D7J4UY = $mol_type_enforce<
		ReturnType< $mol_date['prev_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__U1OLK93L = $mol_type_enforce<
		ReturnType< $mol_date['prev'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__R5TXQTC5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__hint__KGHTGKHD = $mol_type_enforce<
		ReturnType< $mol_date['next_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__T375FZ81 = $mol_type_enforce<
		ReturnType< $mol_date['next'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__Q15BMW4Z = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__SO2ZRSS7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_date_calendar__enabled__2E9K6AIW = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_date_calendar['enabled'] >
	>
	type $mol_date_calendar__month_moment__GQ337XR6 = $mol_type_enforce<
		ReturnType< $mol_date['month_moment'] >
		,
		ReturnType< $mol_date_calendar['month_moment'] >
	>
	type $mol_date_calendar__day_selected__G0PZTTGQ = $mol_type_enforce<
		ReturnType< $mol_date['day_selected'] >
		,
		ReturnType< $mol_date_calendar['day_selected'] >
	>
	type $mol_date_calendar__day_click__R64M41VM = $mol_type_enforce<
		ReturnType< $mol_date['day_click'] >
		,
		ReturnType< $mol_date_calendar['day_click'] >
	>
	type $mol_date_calendar__head__1UF08C72 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_date_calendar['head'] >
	>
	export class $mol_date extends $mol_pick {
		enabled( ): boolean
		today_click( next?: any ): any
		Today_icon( ): $mol_icon_calendar_today
		Today( ): $mol_button_minor
		value( next?: string ): string
		value_changed( next?: ReturnType< ReturnType< $mol_date['Input'] >['value_changed'] > ): ReturnType< ReturnType< $mol_date['Input'] >['value_changed'] >
		input_mask( id: any): string
		Input( ): $mol_format
		clear( next?: any ): any
		Clear_icon( ): $mol_icon_trash_can_outline
		Clear( ): $mol_button_minor
		input_content( ): readonly(any)[]
		Input_row( ): $mol_view
		month_moment( ): ReturnType< $mol_date['value_moment'] >
		day_selected( id: any): boolean
		day_click( id: any, next?: any ): any
		Calendar_title( ): ReturnType< ReturnType< $mol_date['Calendar'] >['Title'] >
		prev_hint( ): string
		prev( next?: any ): any
		Prev_icon( ): $mol_icon_chevron_left
		Prev( ): $mol_button_minor
		next_hint( ): string
		next( next?: any ): any
		Next_icon( ): $mol_icon_chevron_right
		Next( ): $mol_button_minor
		Calendar_tools( ): $mol_view
		Calendar( ): $mol_date_calendar
		Icon( ): $mol_icon_calendar
		bubble_content( ): readonly(any)[]
		value_number( next?: number ): number
		value_moment( next?: $mol_time_moment ): $mol_time_moment
	}
	
	type $mol_button_minor__title__M9TSX2TZ = $mol_type_enforce<
		ReturnType< $mol_date_calendar['day_text'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__event_click__SQYR5G2Q = $mol_type_enforce<
		ReturnType< $mol_date_calendar['day_click'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__minimal_height__RQDD3JOA = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_height'] >
	>
	type $mol_button_minor__enabled__YGI59Z5X = $mol_type_enforce<
		ReturnType< $mol_date_calendar['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	export class $mol_date_calendar extends $mol_calendar {
		day_click( id: any, next?: any ): any
		enabled( ): boolean
		Day_button( id: any): $mol_button_minor
		day_content( id: any): readonly(any)[]
	}
	
}

//# sourceMappingURL=date.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_date extends $.$mol_date {
        trigger_content(): (string | $mol_icon_calendar)[];
        input_mask(val: string): "____-__-__ __:__" | "____-__-__ ";
        input_content(): ($mol_button_minor | $.$mol_format)[];
        value(val?: string): string;
        value_moment(next?: $mol_time_moment): $mol_time_moment;
        value_number(next?: number): number;
        value_moment_today(): $mol_time_moment;
        clear(): void;
        month_moment(next?: $mol_time_moment): $mol_time_moment;
        day_selected(day: string): boolean;
        day_click(day: string): void;
        prev(): void;
        next(): void;
        today_click(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_date__align__0QHT1ZIB = $mol_type_enforce<
		string
		,
		ReturnType< $mol_date['align'] >
	>
	type $mol_date__value_moment__WUCSLTPO = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_date['date'] >
		,
		ReturnType< $mol_date['value_moment'] >
	>
	type $hyoo_sketch_option__name__LC59BEX3 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__4HSJDFXA = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_date['Date_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_switch__value__1I13OHQ0 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_date['type'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__9KTCAF3E = $mol_type_enforce<
		({ 
			'Picker': string,
			'View': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $hyoo_sketch_option__name__QY15WU96 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__VCMZLBME = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_date['Type_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_string__value__28WXYN4L = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_date['format'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $hyoo_sketch_option__name__5S1ZBAMB = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__NAFR9R4N = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_date['Format_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_date__value_moment__LB87P7M8 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_date['date'] >
		,
		ReturnType< $mol_date['value_moment'] >
	>
	type $mol_view__sub__P8ITBBGM = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $hyoo_sketch_element_date extends $hyoo_sketch_element_base {
		date( next?: $mol_time_moment ): $mol_time_moment
		formated_date( ): string
		Date_control( ): $mol_date
		Date_option( ): $hyoo_sketch_option
		type_default( ): string
		type( next?: ReturnType< $hyoo_sketch_element_date['type_default'] > ): ReturnType< $hyoo_sketch_element_date['type_default'] >
		Type_control( ): $mol_switch
		Type_option( ): $hyoo_sketch_option
		format_default( ): string
		format( next?: ReturnType< $hyoo_sketch_element_date['format_default'] > ): ReturnType< $hyoo_sketch_element_date['format_default'] >
		Format_control( ): $mol_string
		Format_option( ): $hyoo_sketch_option
		date_options( ): readonly(any)[]
		Picker( ): $mol_date
		View( ): $mol_view
		Element( ): $mol_view
		Options( ): ({ 
			'date': ReturnType< $hyoo_sketch_element_date['date_options'] >,
		})  & ReturnType< $hyoo_sketch_element_base['Options'] >
	}
	
}

//# sourceMappingURL=date.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_element_date extends $.$hyoo_sketch_element_date {
        Element(): $mol_view;
        formated_date(): string;
        date(next?: $mol_time_moment): $mol_time_moment;
        type(next?: string): string;
        format(next?: string): string;
        duplicate(elem?: $hyoo_sketch_element): $hyoo_sketch_element;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_image extends $mol_view {
		uri( ): string
		loading( ): string
		decoding( ): string
		cors( ): any
		natural_width( ): number
		natural_height( ): number
		load( next?: any ): any
		dom_name( ): string
		field( ): Record<string, any> & ReturnType< $mol_view['field'] >
		attr( ): Record<string, any> & ReturnType< $mol_view['attr'] >
		event( ): Record<string, any>
		minimal_width( ): number
		minimal_height( ): number
	}
	
}

//# sourceMappingURL=image.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_image extends $.$mol_image {
        natural_width(next?: null): number;
        natural_height(next?: null): number;
        load(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_upload extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=upload.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_open_native__files__OSQ6OSVT = $mol_type_enforce<
		ReturnType< $mol_button_open['files'] >
		,
		ReturnType< $mol_button_open_native['files'] >
	>
	type $mol_button_open_native__accept__TTJ3Z5B9 = $mol_type_enforce<
		ReturnType< $mol_button_open['accept'] >
		,
		ReturnType< $mol_button_open_native['accept'] >
	>
	type $mol_button_open_native__multiple__CTEKHXCT = $mol_type_enforce<
		ReturnType< $mol_button_open['multiple'] >
		,
		ReturnType< $mol_button_open_native['multiple'] >
	>
	export class $mol_button_open extends $mol_button_minor {
		Icon( ): $mol_icon_upload
		files( next?: readonly(any)[] ): readonly(any)[]
		accept( ): string
		multiple( ): boolean
		Native( ): $mol_button_open_native
		sub( ): readonly(any)[]
	}
	
	export class $mol_button_open_native extends $mol_view {
		accept( ): string
		multiple( ): boolean
		picked( next?: any ): any
		dom_name( ): string
		files( next?: readonly(any)[] ): readonly(any)[]
		attr( ): ({ 
			'type': string,
			'accept': ReturnType< $mol_button_open_native['accept'] >,
			'multiple': ReturnType< $mol_button_open_native['multiple'] >,
		}) 
		event( ): ({ 
			change( next?: ReturnType< $mol_button_open_native['picked'] > ): ReturnType< $mol_button_open_native['picked'] >,
		}) 
	}
	
}

//# sourceMappingURL=open.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button_open_native extends $.$mol_button_open_native {
        dom_node(): HTMLInputElement;
        picked(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_row__sub__ALCADKQX = $mol_type_enforce<
		ReturnType< $mol_attach['content'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_image__title__JYM3KIB9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_image__uri__BVTH2HCL = $mol_type_enforce<
		ReturnType< $mol_attach['item_uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_button_open__title__M1WG4ES7 = $mol_type_enforce<
		ReturnType< $mol_attach['attach_title'] >
		,
		ReturnType< $mol_button_open['title'] >
	>
	type $mol_button_open__files__PNEZOKNV = $mol_type_enforce<
		ReturnType< $mol_attach['attach_new'] >
		,
		ReturnType< $mol_button_open['files'] >
	>
	type $mol_button_minor__click__TI6L7WHS = $mol_type_enforce<
		ReturnType< $mol_attach['item_drop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__OSWTYONG = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_attach extends $mol_view {
		content( ): readonly($mol_view)[]
		Content( ): $mol_row
		attach_title( ): string
		attach_new( next?: any ): any
		item_drop( id: any, next?: any ): any
		item_uri( id: any): string
		Image( id: any): $mol_image
		items( next?: readonly(string)[] ): readonly(string)[]
		sub( ): readonly(any)[]
		Add( ): $mol_button_open
		Item( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=attach.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_attach extends $.$mol_attach {
        attach_new(files: File[]): void;
        content(): ($mol_button_minor | $mol_button_open)[];
        item_uri(index: number): string;
        item_drop(index: number, event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_attach__items__11J64M7C = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_attach['files'] >
		,
		ReturnType< $mol_attach['items'] >
	>
	export class $hyoo_sketch_element_attach extends $hyoo_sketch_element_base {
		files( next?: readonly(any)[] ): readonly(any)[]
		Element( ): $mol_attach
		width_default( ): number
		height_default( ): number
	}
	
}

//# sourceMappingURL=attach.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_float extends $mol_view {
		style( ): ({ 
			'minHeight': string,
		})  & ReturnType< $mol_view['style'] >
	}
	
}

//# sourceMappingURL=float.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_expand extends $mol_check {
		level_style( ): string
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		Icon( ): $mol_icon_chevron
		level( ): number
		style( ): ({ 
			'paddingLeft': ReturnType< $mol_check_expand['level_style'] >,
		})  & ReturnType< $mol_check['style'] >
		checked( next?: ReturnType< $mol_check_expand['expanded'] > ): ReturnType< $mol_check_expand['expanded'] >
		enabled( ): ReturnType< $mol_check_expand['expandable'] >
	}
	
}

//# sourceMappingURL=expand.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check_expand extends $.$mol_check_expand {
        level_style(): string;
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_grid_table__sub__VLA0R2IC = $mol_type_enforce<
		ReturnType< $mol_grid['rows'] >
		,
		ReturnType< $mol_grid_table['sub'] >
	>
	type $mol_dimmer__needle__NM8CTWQD = $mol_type_enforce<
		ReturnType< $mol_grid['needle'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack__KC5QSBY2 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_value'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_grid_row__cells__4RM72OGH = $mol_type_enforce<
		ReturnType< $mol_grid['head_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_grid_row__minimal_height__LEX6PKWF = $mol_type_enforce<
		ReturnType< $mol_grid['row_height'] >
		,
		ReturnType< $mol_grid_row['minimal_height'] >
	>
	type $mol_grid_row__minimal_width__22C30201 = $mol_type_enforce<
		ReturnType< $mol_grid['minimal_width'] >
		,
		ReturnType< $mol_grid_row['minimal_width'] >
	>
	type $mol_grid_row__cells__EODDC1HD = $mol_type_enforce<
		ReturnType< $mol_grid['cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_grid_cell__sub__IGTGRHG9 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content_text'] >
		,
		ReturnType< $mol_grid_cell['sub'] >
	>
	type $mol_grid_number__sub__FAX4LO0Y = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content_number'] >
		,
		ReturnType< $mol_grid_number['sub'] >
	>
	type $mol_float__dom_name__U014RB5D = $mol_type_enforce<
		string
		,
		ReturnType< $mol_float['dom_name'] >
	>
	type $mol_float__sub__XNMJ4VYN = $mol_type_enforce<
		ReturnType< $mol_grid['col_head_content'] >
		,
		ReturnType< $mol_float['sub'] >
	>
	type $mol_check_expand__level__NGAFN7TP = $mol_type_enforce<
		ReturnType< $mol_grid['cell_level'] >
		,
		ReturnType< $mol_check_expand['level'] >
	>
	type $mol_check_expand__label__RS4D0JDU = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content'] >
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_check_expand__expanded__7HIHTN78 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_expanded'] >
		,
		ReturnType< $mol_check_expand['expanded'] >
	>
	export class $mol_grid extends $mol_view {
		rows( ): readonly($mol_view)[]
		Table( ): $mol_grid_table
		head_cells( ): readonly($mol_view)[]
		cells( id: any): readonly($mol_view)[]
		cell_content( id: any): readonly($mol_view_content)[]
		cell_content_text( id: any): ReturnType< $mol_grid['cell_content'] >
		cell_content_number( id: any): ReturnType< $mol_grid['cell_content'] >
		col_head_content( id: any): readonly($mol_view_content)[]
		cell_level( id: any): number
		cell_expanded( id: any, next?: boolean ): boolean
		needle( ): string
		cell_value( id: any): string
		Cell_dimmer( id: any): $mol_dimmer
		row_height( ): number
		row_ids( ): readonly(string[])[]
		row_id( id: any): any
		col_ids( ): readonly(any)[]
		records( ): Record<string, any>
		record( id: any): any
		hierarchy( ): any
		hierarchy_col( ): string
		minimal_width( ): number
		sub( ): readonly(any)[]
		Head( ): $mol_grid_row
		Row( id: any): $mol_grid_row
		Cell( id: any): $mol_view
		cell( id: any): any
		Cell_text( id: any): $mol_grid_cell
		Cell_number( id: any): $mol_grid_number
		Col_head( id: any): $mol_float
		Cell_branch( id: any): $mol_check_expand
		Cell_content( id: any): readonly(any)[]
	}
	
	export class $mol_grid_table extends $mol_list {
	}
	
	export class $mol_grid_row extends $mol_view {
		cells( ): readonly($mol_view)[]
		sub( ): ReturnType< $mol_grid_row['cells'] >
	}
	
	export class $mol_grid_cell extends $mol_view {
		minimal_height( ): number
	}
	
	export class $mol_grid_number extends $mol_grid_cell {
	}
	
}

//# sourceMappingURL=grid.view.tree.d.ts.map
declare namespace $.$$ {
    interface $mol_grid_node {
        id: string;
        parent: $mol_grid_node;
        sub: $mol_grid_node[];
    }
    class $mol_grid extends $.$mol_grid {
        head_cells(): readonly $mol_view[];
        col_head_content(colId: string): readonly string[];
        rows(): readonly $mol_view[];
        cells(row_id: string[]): readonly $mol_view[];
        col_type(col_id: string): "number" | "text" | "branch";
        Cell(id: {
            row: string[];
            col: string;
        }): $mol_view;
        cell_content(id: {
            row: string[];
            col: string;
        }): any[];
        cell_content_text(id: {
            row: string[];
            col: string;
        }): any[];
        records(): any;
        record(id: string): any;
        record_ids(): string[];
        row_id(index: number): string;
        col_ids(): readonly string[];
        hierarchy(): {
            [id: string]: $mol_grid_node;
        };
        row_sub_ids(row: string[]): string[][];
        row_root_id(): string[];
        cell_level(id: {
            row: string[];
        }): number;
        row_ids(): readonly string[][];
        row_expanded(row_id: string[], next?: boolean): boolean | null;
        row_expanded_default(row_id: string[]): boolean;
        cell_expanded(id: {
            row: string[];
        }, next?: boolean): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_image__uri__B6YF5TO8 = $mol_type_enforce<
		ReturnType< $mol_link_iconed['icon'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_image__title__T2HA7KMI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_image['title'] >
	>
	export class $mol_link_iconed extends $mol_link {
		icon( ): string
		Icon( ): $mol_image
		title( ): ReturnType< $mol_link_iconed['uri'] >
		sub( ): readonly(any)[]
		content( ): readonly(any)[]
		host( ): string
	}
	
}

//# sourceMappingURL=iconed.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_link_iconed extends $.$mol_link_iconed {
        icon(): string;
        host(): string;
        title(): string;
        sub(): readonly any[];
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_link__uri__ICT1ERBU = $mol_type_enforce<
		ReturnType< $mol_embed_native['uri'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub__IE9GPHX8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_embed_native extends $mol_scroll {
		mime( ): string
		title( ): string
		Fallback( ): $mol_link
		uri_change( next?: any ): any
		uri( next?: string ): string
		dom_name( ): string
		window( ): any
		attr( ): ({ 
			'data': ReturnType< $mol_embed_native['uri'] >,
			'type': ReturnType< $mol_embed_native['mime'] >,
		})  & ReturnType< $mol_scroll['attr'] >
		sub( ): readonly(any)[]
		message( ): ({ 
			hashchange( next?: ReturnType< $mol_embed_native['uri_change'] > ): ReturnType< $mol_embed_native['uri_change'] >,
		}) 
	}
	
}

//# sourceMappingURL=native.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_native extends $.$mol_embed_native {
        window(): Window;
        load(frame: HTMLIFrameElement): Promise<Window>;
        uri_resource(): string;
        message_listener(): $mol_dom_listener;
        message_receive(event?: MessageEvent<[string, string]>): void;
        uri_change(event: MessageEvent<[string, string]>): void;
        auto(): (Window | $mol_dom_listener)[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_youtube extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=youtube.view.tree.d.ts.map
declare namespace $ {

	export class $mol_frame extends $mol_embed_native {
		uri( next?: string ): string
		html( ): any
		allow( ): string
		dom_name( ): string
		attr( ): ({ 
			'data': any,
			'type': any,
			'src': ReturnType< $mol_frame['uri'] >,
			'srcdoc': ReturnType< $mol_frame['html'] >,
			'allow': ReturnType< $mol_frame['allow'] >,
		})  & ReturnType< $mol_embed_native['attr'] >
		fullscreen( ): boolean
		accelerometer( ): boolean
		autoplay( ): boolean
		encription( ): boolean
		gyroscope( ): boolean
		pip( ): boolean
		clipboard_read( ): boolean
		clipboard_write( ): boolean
	}
	
}

//# sourceMappingURL=frame.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_frame extends $.$mol_frame {
        window(): any;
        allow(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_image__title__ZLG8J4NQ = $mol_type_enforce<
		ReturnType< $mol_embed_youtube['title'] >
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_image__uri__E6F040Z5 = $mol_type_enforce<
		ReturnType< $mol_embed_youtube['video_preview'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_frame__title__CPVH1GJX = $mol_type_enforce<
		ReturnType< $mol_embed_youtube['title'] >
		,
		ReturnType< $mol_frame['title'] >
	>
	type $mol_frame__uri__AOENZO5D = $mol_type_enforce<
		ReturnType< $mol_embed_youtube['video_embed'] >
		,
		ReturnType< $mol_frame['uri'] >
	>
	export class $mol_embed_youtube extends $mol_check {
		active( next?: boolean ): boolean
		title( ): string
		video_preview( ): string
		Image( ): $mol_image
		Hint( ): $mol_icon_youtube
		video_embed( ): string
		Frame( ): $mol_frame
		uri( ): string
		video_id( ): string
		checked( next?: ReturnType< $mol_embed_youtube['active'] > ): ReturnType< $mol_embed_youtube['active'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=youtube.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_youtube extends $.$mol_embed_youtube {
        video_embed(): string;
        video_id(): string;
        video_preview(): string;
        sub(): $.$mol_frame[] | ($.$mol_image | $mol_icon_youtube)[];
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_image__title__XCTKCX9R = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_image__uri__V5TY0FGC = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_embed_native__title__GC3WPI8J = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri__UWO6WW5F = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $mol_embed_youtube__title__QLZRC9MN = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_youtube['title'] >
	>
	type $mol_embed_youtube__uri__AT508Y6O = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_youtube['uri'] >
	>
	export class $mol_embed_any extends $mol_view {
		title( ): string
		uri( ): string
		Image( ): $mol_image
		Object( ): $mol_embed_native
		Youtube( ): $mol_embed_youtube
	}
	
}

//# sourceMappingURL=any.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_any extends $.$mol_embed_any {
        type(): "object" | "image" | "youtube";
        sub(): $.$mol_image[] | $.$mol_embed_youtube[] | $.$mol_embed_native[];
    }
}

declare namespace $ {

	type $mol_paragraph__sub__DL33A9Q4 = $mol_type_enforce<
		ReturnType< $mol_text['block_content'] >
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_text__uri_resolve__6T9Y0MUI = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__text__6LG5ZFWT = $mol_type_enforce<
		ReturnType< $mol_text['quote_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__highlight__L666ZTCV = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__auto_scroll__1M24LU4R = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text_list__uri_resolve__BD0GFBRH = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_list['uri_resolve'] >
	>
	type $mol_text_list__type__9C680HMH = $mol_type_enforce<
		ReturnType< $mol_text['list_type'] >
		,
		ReturnType< $mol_text_list['type'] >
	>
	type $mol_text_list__text__G2STBOVI = $mol_type_enforce<
		ReturnType< $mol_text['list_text'] >
		,
		ReturnType< $mol_text_list['text'] >
	>
	type $mol_text_list__highlight__Q99ZUI9Y = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_list['highlight'] >
	>
	type $mol_text_header__minimal_height__7NB50YBS = $mol_type_enforce<
		number
		,
		ReturnType< $mol_text_header['minimal_height'] >
	>
	type $mol_text_header__level__8TNWH77S = $mol_type_enforce<
		ReturnType< $mol_text['header_level'] >
		,
		ReturnType< $mol_text_header['level'] >
	>
	type $mol_text_header__content__12G57O8N = $mol_type_enforce<
		ReturnType< $mol_text['block_content'] >
		,
		ReturnType< $mol_text_header['content'] >
	>
	type $mol_text_header__arg__DPAVJJDD = $mol_type_enforce<
		ReturnType< $mol_text['header_arg'] >
		,
		ReturnType< $mol_text_header['arg'] >
	>
	type $mol_text_code__text__27L0ETWI = $mol_type_enforce<
		ReturnType< $mol_text['pre_text'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__highlight__ENWXO8KK = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_code['highlight'] >
	>
	type $mol_text_code__uri_resolve__HQQL2YQW = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_code['uri_resolve'] >
	>
	type $mol_text_code__sidebar_showed__UTUPV4DN = $mol_type_enforce<
		ReturnType< $mol_text['pre_sidebar_showed'] >
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_view__dom_name__8KB2ZDHU = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_grid__head_cells__N5E7UL3A = $mol_type_enforce<
		ReturnType< $mol_text['table_head_cells'] >
		,
		ReturnType< $mol_grid['head_cells'] >
	>
	type $mol_grid__rows__6NFGX9YI = $mol_type_enforce<
		ReturnType< $mol_text['table_rows'] >
		,
		ReturnType< $mol_grid['rows'] >
	>
	type $mol_grid_row__cells__HFZ4X9JN = $mol_type_enforce<
		ReturnType< $mol_text['table_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_text__auto_scroll__DBTQL3EM = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text__highlight__F3MP3IKU = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__uri_resolve__JVPYJ8BB = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__text__7XK0DMZ1 = $mol_type_enforce<
		ReturnType< $mol_text['table_cell_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_grid__rows__XZEFQEUS = $mol_type_enforce<
		ReturnType< $mol_text['grid_rows'] >
		,
		ReturnType< $mol_grid['rows'] >
	>
	type $mol_grid_row__cells__11G2WC8Q = $mol_type_enforce<
		ReturnType< $mol_text['grid_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_text__auto_scroll__DV14YQ3V = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text__highlight__PEJQS9B5 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__uri_resolve__9W0RBHCB = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__text__A1T4T41U = $mol_type_enforce<
		ReturnType< $mol_text['grid_cell_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_dimmer__dom_name__KR0ZGRJK = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['dom_name'] >
	>
	type $mol_dimmer__needle__1X88KACD = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack__R3UMPB4B = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_text_span__dom_name__EZP8C6EN = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text_span['dom_name'] >
	>
	type $mol_text_span__type__UQIX7ZLD = $mol_type_enforce<
		ReturnType< $mol_text['line_type'] >
		,
		ReturnType< $mol_text_span['type'] >
	>
	type $mol_text_span__sub__LAKG57X7 = $mol_type_enforce<
		ReturnType< $mol_text['line_content'] >
		,
		ReturnType< $mol_text_span['sub'] >
	>
	type $mol_text_code_row__numb_showed__31MX4LXM = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code_row['numb_showed'] >
	>
	type $mol_text_code_row__highlight__IGV7GEZW = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_code_row['highlight'] >
	>
	type $mol_text_code_row__text__7QP6IC8K = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_text_code_row['text'] >
	>
	type $mol_text_code_row__uri_resolve__BKHSS4U4 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_code_row['uri_resolve'] >
	>
	type $mol_text_code_row__syntax__FGIT3AHB = $mol_type_enforce<
		ReturnType< $mol_text['code_syntax'] >
		,
		ReturnType< $mol_text_code_row['syntax'] >
	>
	type $mol_link_iconed__uri__S2FCRGXD = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__content__WY4XGKEP = $mol_type_enforce<
		ReturnType< $mol_text['line_content'] >
		,
		ReturnType< $mol_link_iconed['content'] >
	>
	type $mol_link_iconed__uri__L2W5FTLP = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__content__5FQKL2SD = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link_iconed['content'] >
	>
	type $mol_embed_any__uri__3GAI7QQW = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_embed_any['uri'] >
	>
	type $mol_embed_any__title__BFOTGQUS = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_embed_any['title'] >
	>
	export class $mol_text extends $mol_list {
		auto_scroll( ): any
		block_content( id: any): readonly(any)[]
		uri_resolve( id: any): string
		quote_text( id: any): string
		highlight( ): string
		list_type( id: any): string
		list_text( id: any): string
		header_level( id: any): number
		header_arg( id: any): Record<string, any>
		pre_text( id: any): string
		code_sidebar_showed( ): boolean
		pre_sidebar_showed( ): ReturnType< $mol_text['code_sidebar_showed'] >
		table_head_cells( id: any): readonly(any)[]
		table_rows( id: any): readonly(any)[]
		table_cells( id: any): readonly(any)[]
		table_cell_text( id: any): string
		grid_rows( id: any): readonly(any)[]
		grid_cells( id: any): readonly(any)[]
		grid_cell_text( id: any): string
		line_text( id: any): string
		line_type( id: any): string
		line_content( id: any): readonly(any)[]
		code_syntax( ): any
		link_uri( id: any): string
		link_host( id: any): string
		uri_base( ): string
		text( ): string
		param( ): string
		flow_tokens( ): readonly(any)[]
		block_text( id: any): string
		auto( ): readonly(any)[]
		Paragraph( id: any): $mol_paragraph
		Quote( id: any): $mol_text
		List( id: any): $mol_text_list
		item_index( id: any): number
		Header( id: any): $mol_text_header
		Pre( id: any): $mol_text_code
		Cut( id: any): $mol_view
		Table( id: any): $mol_grid
		Table_row( id: any): $mol_grid_row
		Table_cell( id: any): $mol_text
		Grid( id: any): $mol_grid
		Grid_row( id: any): $mol_grid_row
		Grid_cell( id: any): $mol_text
		String( id: any): $mol_dimmer
		Span( id: any): $mol_text_span
		Code_line( id: any): $mol_text_code_row
		Link( id: any): $mol_link_iconed
		Link_http( id: any): $mol_link_iconed
		Embed( id: any): $mol_embed_any
	}
	
	type $mol_link__arg__E4GD23AV = $mol_type_enforce<
		ReturnType< $mol_text_header['arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__hint__BLFOUWNE = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub__7XS95FSA = $mol_type_enforce<
		ReturnType< $mol_text_header['content'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_text_header extends $mol_paragraph {
		arg( ): Record<string, any>
		content( ): readonly(any)[]
		Link( ): $mol_link
		level( ): number
		sub( ): readonly(any)[]
	}
	
	export class $mol_text_span extends $mol_paragraph {
		type( ): string
		dom_name( ): string
		attr( ): ({ 
			'mol_text_type': ReturnType< $mol_text_span['type'] >,
		})  & ReturnType< $mol_paragraph['attr'] >
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_text extends $.$mol_text {
        flow_tokens(): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
        block_type(index: number): string;
        rows(): ($mol_view | $.$mol_paragraph | $.$mol_text_code | $.$mol_grid)[];
        param(): string;
        header_level(index: number): number;
        header_arg(index: number): {
            [x: string]: string;
        };
        list_type(index: number): string;
        item_index(index: number): number;
        pre_text(index: number): string;
        quote_text(index: number): string;
        list_text(index: number): string;
        cell_content(indexBlock: number): string[][];
        table_rows(blockId: number): $mol_grid_row[];
        table_head_cells(blockId: number): $.$mol_text[];
        table_cells(id: {
            block: number;
            row: number;
        }): $.$mol_text[];
        table_cell_text(id: {
            block: number;
            row: number;
            cell: number;
        }): string;
        grid_content(indexBlock: number): string[][];
        grid_rows(blockId: number): $mol_grid_row[];
        grid_cells(id: {
            block: number;
            row: number;
        }): $.$mol_text[];
        grid_cell_text(id: {
            block: number;
            row: number;
            cell: number;
        }): string;
        uri_base(): string;
        uri_base_abs(): URL;
        uri_resolve(uri: string): string;
        code_syntax(): $mol_syntax2<{
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-link': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
        block_text(index: number): string;
        block_content(index: number): ($.$mol_dimmer | $.$mol_text_code_row | $.$mol_link_iconed | $.$mol_embed_any | $mol_text_span)[];
        line_tokens(path: readonly number[]): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
        line_token(path: readonly number[]): {
            name: string;
            found: string;
            chunks: string[];
        };
        line_type(path: readonly number[]): string;
        line_text(path: readonly number[]): string;
        line_content(path: readonly number[]): ($.$mol_dimmer | $.$mol_text_code_row | $.$mol_link_iconed | $.$mol_embed_any | $mol_text_span)[];
        link_uri(path: readonly number[]): string;
        link_host(path: readonly number[]): string;
        auto_scroll(): void;
    }
    class $mol_text_header extends $.$mol_text_header {
        dom_name(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	type $mol_text_list_item__index__GVBPRNMF = $mol_type_enforce<
		ReturnType< $mol_text_list['item_index'] >
		,
		ReturnType< $mol_text_list_item['index'] >
	>
	type $mol_text_list_item__sub__CXI723U7 = $mol_type_enforce<
		ReturnType< $mol_text_list['block_content'] >
		,
		ReturnType< $mol_text_list_item['sub'] >
	>
	export class $mol_text_list extends $mol_text {
		type( ): string
		auto_scroll( ): any
		attr( ): ({ 
			'mol_text_list_type': ReturnType< $mol_text_list['type'] >,
		})  & ReturnType< $mol_text['attr'] >
		Paragraph( id: any): $mol_text_list_item
	}
	
	export class $mol_text_list_item extends $mol_paragraph {
		index( ): number
		attr( ): ({ 
			'mol_text_list_item_index': ReturnType< $mol_text_list_item['index'] >,
		})  & ReturnType< $mol_paragraph['attr'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	type $mol_textarea__style__PQ6A9E3M = $mol_type_enforce<
		({ 
			'height': string,
		}) 
		,
		ReturnType< $mol_textarea['style'] >
	>
	type $mol_textarea__value__M134D6CZ = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_markdown['text'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_text__text__4YHYQ2JK = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_markdown['text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	export class $hyoo_sketch_element_markdown extends $hyoo_sketch_element_base {
		text_default( ): string
		text( next?: ReturnType< $hyoo_sketch_element_markdown['text_default'] > ): ReturnType< $hyoo_sketch_element_markdown['text_default'] >
		Text_option( ): $mol_textarea
		markdown_options( ): readonly(any)[]
		Element( ): $mol_text
		Options( ): ({ 
			'markdown': ReturnType< $hyoo_sketch_element_markdown['markdown_options'] >,
		})  & ReturnType< $hyoo_sketch_element_base['Options'] >
	}
	
}

//# sourceMappingURL=markdown.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_element_markdown extends $.$hyoo_sketch_element_markdown {
        text(next?: string): string;
        duplicate(elem?: $hyoo_sketch_element): $hyoo_sketch_element;
    }
}

declare namespace $ {

	type $mol_string__value__97Q2CPIN = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_speck['speck_value'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $hyoo_sketch_option__name__JNL6LQ0M = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__426NNETR = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_speck['Speck_value_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_speck__style__XT15NFU5 = $mol_type_enforce<
		({ 
			'width': string,
			'height': string,
			'minWidth': number,
			'minHeight': ReturnType< $hyoo_sketch_element_speck['min_height'] >,
		}) 
		,
		ReturnType< $mol_speck['style'] >
	>
	type $mol_speck__value__NEEP8B03 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_speck['speck_value'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $hyoo_sketch_element_speck extends $hyoo_sketch_element_base {
		min_height( ): string
		speck_value_default( ): string
		speck_value( next?: ReturnType< $hyoo_sketch_element_speck['speck_value_default'] > ): ReturnType< $hyoo_sketch_element_speck['speck_value_default'] >
		Speck_value_control( ): $mol_string
		Speck_value_options( ): $hyoo_sketch_option
		speck_options( ): readonly(any)[]
		Resize( ): any
		Element( ): $mol_speck
		Position_options( ): readonly(any)[]
		Options( ): ({ 
			'speck': ReturnType< $hyoo_sketch_element_speck['speck_options'] >,
		})  & ReturnType< $hyoo_sketch_element_base['Options'] >
		width_default( ): number
		height_default( ): number
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_element_speck extends $.$hyoo_sketch_element_speck {
        speck_value(next?: string): string;
        duplicate(elem?: $hyoo_sketch_element): $hyoo_sketch_element;
        min_height(): any;
    }
}

declare namespace $ {
    class $mol_vector<Value, Length extends number> extends Array<Value> {
        get length(): Length;
        constructor(...values: Value[] & {
            length: Length;
        });
        map<Res>(convert: (value: Value, index: number, array: this) => Res, self?: any): $mol_vector<Res, Length>;
        merged<Patch>(patches: readonly Patch[] & {
            length: Length;
        }, combine: (value: Value, patch: Patch) => Value): this;
        limited(this: $mol_vector<number, Length>, limits: readonly (readonly [number, number])[] & {
            length: Length;
        }): this;
        added0(this: $mol_vector<number, Length>, diff: number): this;
        added1(this: $mol_vector<number, Length>, diff: readonly number[] & {
            length: Length;
        }): this;
        multed0(this: $mol_vector<number, Length>, mult: number): this;
        multed1(this: $mol_vector<number, Length>, mults: readonly number[] & {
            length: Length;
        }): this;
        powered0(this: $mol_vector<number, Length>, mult: number): this;
        expanded1(this: $mol_vector<$mol_vector_range<number>, Length>, point: readonly number[] & {
            length: Length;
        }): this;
        expanded2(this: $mol_vector<$mol_vector_range<number>, Length>, point: readonly (readonly [number, number])[] & {
            length: Length;
        }): this;
        center<Item extends $mol_vector<number, number>>(this: $mol_vector<Item, Length>): Item;
        distance(this: $mol_vector<$mol_vector<number, number>, Length>): number;
        transponed(this: $mol_vector<$mol_vector<number, number>, Length>): $mol_vector<$mol_vector<number, Length>, typeof this[0]['length']>;
        get x(): Value;
        set x(next: Value);
        get y(): Value;
        set y(next: Value);
        get z(): Value;
        set z(next: Value);
    }
    class $mol_vector_1d<Value> extends $mol_vector<Value, 1> {
    }
    class $mol_vector_2d<Value> extends $mol_vector<Value, 2> {
    }
    class $mol_vector_3d<Value> extends $mol_vector<Value, 3> {
    }
    class $mol_vector_range<Value> extends $mol_vector<Value, 2> {
        0: Value;
        1: Value;
        constructor(min: Value, max?: Value);
        get min(): Value;
        set min(next: Value);
        get max(): Value;
        set max(next: Value);
        get inversed(): $mol_vector_range<Value>;
        expanded0(value: Value): $mol_vector_range<Value>;
    }
    let $mol_vector_range_full: $mol_vector_range<number>;
    class $mol_vector_matrix<Width extends number, Height extends number> extends $mol_vector<readonly number[] & {
        length: Width;
    }, Height> {
        added2(diff: readonly (readonly number[] & {
            length: Width;
        })[] & {
            length: Height;
        }): this;
        multed2(diff: readonly (readonly number[] & {
            length: Width;
        })[] & {
            length: Height;
        }): this;
    }
}

declare namespace $ {
    type $mol_type_unary_func = ((param: any) => any);
    type $mol_type_unary_class = new (param: any) => any;
    type $mol_type_unary = $mol_type_unary_func | $mol_type_unary_class;
}

declare namespace $ {
    type $mol_type_param<Func, Index extends number> = Func extends (...params: infer Params) => any ? Params[Index] : Func extends new (...params: infer Params2) => any ? Params2[Index] : never;
}

declare namespace $ {
    function $mol_func_is_class<Func extends Function>(func: Func): func is Func & (new (...args: any[]) => any);
}

declare namespace $ {
    type $mol_type_result<Func> = Func extends (...params: any) => infer Result ? Result : Func extends new (...params: any) => infer Result ? Result : never;
}

declare namespace $ {
    type Guard_value<Funcs extends $mol_type_unary[], Index extends keyof Funcs> = $mol_type_param<Index extends keyof $mol_type_tail<Funcs> ? $mol_type_tail<Funcs>[Index] : any, 0>;
    type Guard<Funcs extends $mol_type_unary[]> = {
        [Index in keyof Funcs]: (Funcs[Index] extends $mol_type_unary_func ? (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index> : new (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index>);
    };
    export function $mol_data_pipe<Funcs extends $mol_type_unary[]>(...funcs: Funcs & Guard<Funcs>): ((this: any, input: $mol_type_param<Funcs[0], 0>) => $mol_type_result<$mol_type_foot<Funcs>>) & {
        config: {
            funcs: Funcs & Guard<Funcs>;
        };
        Value: $mol_type_result<$mol_type_foot<Funcs>>;
    };
    export {};
}

declare namespace $ {
    let $mol_data_string: (val: string) => string;
}

declare namespace $ {
    function $mol_data_array<Sub extends $mol_data_value>(sub: Sub): ((val: readonly Parameters<Sub>[0][]) => readonly ReturnType<Sub>[]) & {
        config: Sub;
        Value: readonly ReturnType<Sub>[];
    };
}

declare namespace $ {
    type $mol_type_partial_undefined<Val> = $mol_type_merge<$mol_type_override<Partial<Val>, Pick<Val, {
        [Field in keyof Val]: undefined extends Val[Field] ? never : Field;
    }[keyof Val]>>>;
}

declare namespace $ {
    function $mol_data_record<Sub extends Record<string, $mol_data_value>>(sub: Sub): ((val: $mol_type_merge<$mol_type_override<Partial<{ [key in keyof Sub]: Parameters<Sub[key]>[0]; }>, Pick<{ [key in keyof Sub]: Parameters<Sub[key]>[0]; }, { [Field in keyof { [key in keyof Sub]: Parameters<Sub[key]>[0]; }]: undefined extends { [key in keyof Sub]: Parameters<Sub[key]>[0]; }[Field] ? never : Field; }[keyof Sub]>>>) => Readonly<$mol_type_merge<$mol_type_override<Partial<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }>, Pick<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }, { [Field_1 in keyof { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }]: undefined extends { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }[Field_1] ? never : Field_1; }[keyof Sub]>>>>) & {
        config: Sub;
        Value: Readonly<$mol_type_merge<$mol_type_override<Partial<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }>, Pick<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }, { [Field_1 in keyof { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }]: undefined extends { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }[Field_1] ? never : Field_1; }[keyof Sub]>>>>;
    };
}

declare namespace $ {
    let $mol_geo_search_attribution: string;
    function $mol_geo_search({ query, count }: {
        query: string;
        count?: number;
    }): {
        coord: $mol_vector_2d<number>;
        box: $mol_vector_2d<$mol_vector_range<number>>;
    }[];
}

declare namespace $ {

	type $mol_vector_range__987DZ097 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__2XK6ZX25 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_2d__9RS7FAB7 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__APQY2Z5P = $mol_type_enforce<
		[ ReturnType< $mol_map_yandex_mark['box_lat'] >, ReturnType< $mol_map_yandex_mark['box_lon'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	export class $mol_map_yandex_mark extends $mol_object {
		box_lat( ): $mol_vector_range<number>
		box_lon( ): $mol_vector_range<number>
		address( ): string
		pos( ): $mol_vector_2d<number>
		box( ): $mol_vector_2d<$mol_vector_range<number>>
		hint( ): string
		title( ): ReturnType< $mol_map_yandex_mark['address'] >
		content( ): string
		object( ): any
	}
	
}

//# sourceMappingURL=mark.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_map_yandex_mark extends $.$mol_map_yandex_mark {
        object(): any;
        found(): {
            coord: $mol_vector_2d<number>;
            box: $mol_vector_2d<$mol_vector_range<number>>;
        };
        pos(): $mol_vector_2d<number>;
        box(): $mol_vector_2d<$mol_vector_range<number>>;
    }
}

declare namespace $ {
    class $mol_import extends $mol_object2 {
        static module(uri: string): any;
        static module_async(uri: string): Promise<any>;
        static script(uri: string): any;
        static script_async(uri: string): Promise<any>;
        static style(uri: string): any;
        static style_async(uri: string): any;
    }
}

declare namespace $ {
    class $mol_mem_force extends Object {
        constructor();
        $mol_mem_force: boolean;
        static $mol_mem_force: boolean;
        static toString(): string;
    }
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    class $mol_mem_force_update extends $mol_mem_force {
    }
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
}

declare namespace $ {
    function $mol_fiber_defer<Value = void>(calculate: () => Value): $mol_wire_task<{}, [], Value>;
    function $mol_fiber_root<Calculate extends (this: This, ...args: any[]) => Result, Result = void, This = void>(calculate: Calculate): Calculate;
    function $mol_fiber_sync<Args extends any[], Value = void, This = void>(request: (this: This, ...args: Args) => PromiseLike<Value>): (...args: Args) => Value;
    function $mol_fiber_warp(): Promise<void>;
    class $mol_fiber_solid extends $mol_wrapper {
        static func<This, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    }
    class $mol_fiber {
        static method: typeof $mol_wire_method;
    }
}

declare namespace $ {

	export class $mol_map_yandex extends $mol_view {
		zoom( next?: number ): number
		center( next?: readonly(any)[] ): readonly(any)[]
		objects( ): readonly($mol_map_yandex_mark)[]
	}
	
}

//# sourceMappingURL=yandex.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_map_yandex extends $.$mol_map_yandex {
        static api_key(): string;
        static api(): any;
        wait_ready(ymaps: any): Promise<unknown>;
        api(next?: any, force?: $mol_mem_force): any;
        update(event?: any): void;
        bounds_updated(): boolean;
        center(next?: readonly [number, number], force?: $mol_mem_force): $mol_vector_2d<number> | readonly [number, number];
        render(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_map_yandex_mark__title__MK0B4MJK = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_map['place_title'] >
		,
		ReturnType< $mol_map_yandex_mark['title'] >
	>
	type $mol_map_yandex_mark__address__ODWNE8GU = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_map['place_addres'] >
		,
		ReturnType< $mol_map_yandex_mark['address'] >
	>
	type $mol_map_yandex_mark__content__OTN8EXPV = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_map['place_content'] >
		,
		ReturnType< $mol_map_yandex_mark['content'] >
	>
	type $hyoo_sketch_element_map_my__center__Z7M0ONIL = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_sketch_element_map_my['center'] >
	>
	type $hyoo_sketch_element_map_my__zoom__JM2QN50A = $mol_type_enforce<
		number
		,
		ReturnType< $hyoo_sketch_element_map_my['zoom'] >
	>
	type $hyoo_sketch_element_map_my__objects__6J925CIY = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_sketch_element_map_my['objects'] >
	>
	export class $hyoo_sketch_element_map extends $hyoo_sketch_element_base {
		place_title( ): string
		place_addres( ): string
		place_content( ): string
		Place( ): $mol_map_yandex_mark
		Element( ): $hyoo_sketch_element_map_my
		width_default( ): number
		height_default( ): number
	}
	
	export class $hyoo_sketch_element_map_my extends $mol_map_yandex {
	}
	
}

//# sourceMappingURL=map.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_element_map extends $.$hyoo_sketch_element_map {
    }
    class $hyoo_sketch_element_map_my extends $.$hyoo_sketch_element_map_my {
        api(next?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $ {

	type $mol_string__value__KW5TKUZJ = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_header['title'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $hyoo_sketch_option__name__S6YZ0XFI = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__Y7KUEDLY = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_header['Title_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_page__title__879Z2RLJ = $mol_type_enforce<
		ReturnType< $hyoo_sketch_element_header['title'] >
		,
		ReturnType< $mol_page['title'] >
	>
	export class $hyoo_sketch_element_header extends $hyoo_sketch_element_base {
		Head( ): ReturnType< ReturnType< $hyoo_sketch_element_header['Page'] >['Head'] >
		title_default( ): string
		title( next?: ReturnType< $hyoo_sketch_element_header['title_default'] > ): ReturnType< $hyoo_sketch_element_header['title_default'] >
		Title_control( ): $mol_string
		Title_option( ): $hyoo_sketch_option
		header_options( ): readonly(any)[]
		Page( ): $mol_page
		Element( ): ReturnType< $hyoo_sketch_element_header['Head'] >
		height_default( ): number
		width_default( ): number
		Options( ): ({ 
			'header': ReturnType< $hyoo_sketch_element_header['header_options'] >,
		})  & ReturnType< $hyoo_sketch_element_base['Options'] >
	}
	
}

//# sourceMappingURL=header.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_element_header extends $.$hyoo_sketch_element_header {
        title(next?: string): string;
        title_default(): string;
        duplicate(elem?: $hyoo_sketch_element): $hyoo_sketch_element;
    }
}

declare namespace $ {

	type $hyoo_sketch_editor_width__OJ2M4AVE = $mol_type_enforce<
		Parameters< $hyoo_sketch_editor['width'] >[0]
		,
		Parameters< ReturnType< $hyoo_sketch_editor['page'] >['width'] >[0]
	>
	type $hyoo_sketch_editor_height__OUBIV1VG = $mol_type_enforce<
		Parameters< $hyoo_sketch_editor['height'] >[0]
		,
		Parameters< ReturnType< $hyoo_sketch_editor['page'] >['height'] >[0]
	>
	type $hyoo_sketch_editor_grid__1LY9XDNY = $mol_type_enforce<
		Parameters< $hyoo_sketch_editor['grid'] >[0]
		,
		Parameters< ReturnType< $hyoo_sketch_editor['page'] >['grid'] >[0]
	>
	type $mol_link__hint__C4GLZ250 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub__TUDA55BK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__target__DQ6FQDYA = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['target'] >
	>
	type $mol_link__arg__6S3WXAVM = $mol_type_enforce<
		({ 
			'demo': ReturnType< $hyoo_sketch_editor['page_current_id'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_check_icon__hint__ION9LCHH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__Icon__4BA7451H = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['Page_preview_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked__ZHHDM1WE = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['preview'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_string__value__GFPNN238 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['page_name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $hyoo_sketch_option__name__CXEIGHOD = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__FUN8LQ78 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['Name'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_number__value__YXJ0BUXM = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['width'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $hyoo_sketch_option__name__O30F5VTJ = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__691YO1SZ = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['Width'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_number__value__HD4XDL4V = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['height'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $hyoo_sketch_option__name__GRFY3F0I = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__H7D4MV9F = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['Height'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_switch__value__BNCV27D6 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['grid_str'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__F17GJSKR = $mol_type_enforce<
		({ 
			'4': string,
			'8': string,
			'16': string,
			'32': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $hyoo_sketch_option__name__EYN8F16P = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__V86SMRQ2 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['Grid'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_button_major__click__2P8D234E = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['page_delete'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__title__8SMCEJCY = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $hyoo_sketch_option__name__OEZDQFKM = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_option['name'] >
	>
	type $hyoo_sketch_option__Control__HZOX4V6K = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['Delete_control'] >
		,
		ReturnType< $hyoo_sketch_option['Control'] >
	>
	type $mol_view__sub__XQRTPS91 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['elements'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $hyoo_sketch_editor_paper__page__ZA22RGPM = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['page'] >
		,
		ReturnType< $hyoo_sketch_editor_paper['page'] >
	>
	type $hyoo_sketch_editor_paper__width__BZ6QQ8ML = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['width'] >
		,
		ReturnType< $hyoo_sketch_editor_paper['width'] >
	>
	type $hyoo_sketch_editor_paper__height__IM2MWD84 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['height'] >
		,
		ReturnType< $hyoo_sketch_editor_paper['height'] >
	>
	type $hyoo_sketch_editor_paper__grid__NOS488J1 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['grid'] >
		,
		ReturnType< $hyoo_sketch_editor_paper['grid'] >
	>
	type $hyoo_sketch_editor_paper__preview__CITTHA4S = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['preview'] >
		,
		ReturnType< $hyoo_sketch_editor_paper['preview'] >
	>
	type $hyoo_sketch_editor_paper__selected__W8HIQCVS = $mol_type_enforce<
		ReturnType< $hyoo_sketch_editor['paper_selected'] >
		,
		ReturnType< $hyoo_sketch_editor_paper['selected'] >
	>
	type $hyoo_sketch_editor_paper__content__OP8E163L = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_sketch_editor_paper['content'] >
	>
	export class $hyoo_sketch_editor extends $mol_page {
		domain( ): ReturnType< ReturnType< $hyoo_sketch_editor['page'] >['domain'] >
		project( ): ReturnType< ReturnType< $hyoo_sketch_editor['page'] >['project'] >
		width( next?: ReturnType< ReturnType< $hyoo_sketch_editor['page'] >['width'] > ): ReturnType< ReturnType< $hyoo_sketch_editor['page'] >['width'] >
		height( next?: ReturnType< ReturnType< $hyoo_sketch_editor['page'] >['height'] > ): ReturnType< ReturnType< $hyoo_sketch_editor['page'] >['height'] >
		grid( next?: ReturnType< ReturnType< $hyoo_sketch_editor['page'] >['grid'] > ): ReturnType< ReturnType< $hyoo_sketch_editor['page'] >['grid'] >
		editor_title( ): string
		Project_demo_icon( ): $mol_icon_television_play
		page_current_id( ): string
		Project_demo( ): $mol_link
		Page_preview_icon( ): $mol_icon_play_circle
		preview( next?: boolean ): boolean
		Page_preview( ): $mol_check_icon
		page_name( next?: string ): string
		Name( ): $mol_string
		Page_name( ): $hyoo_sketch_option
		Width( ): $mol_number
		Page_width( ): $hyoo_sketch_option
		Height( ): $mol_number
		Page_height( ): $hyoo_sketch_option
		grid_str( next?: string ): string
		Grid( ): $mol_switch
		Page_grid( ): $hyoo_sketch_option
		page_delete( next?: any ): any
		Delete_control( ): $mol_button_major
		Page_delete( ): $hyoo_sketch_option
		paper_selected( next?: boolean ): boolean
		elements( ): readonly(any)[]
		Elements( ): $mol_view
		Paper( ): $hyoo_sketch_editor_paper
		page( ): $hyoo_sketch_page
		Element( id: any): $hyoo_sketch_element_base
		style( ): ({ 
			'minWidth': number,
		})  & ReturnType< $mol_page['style'] >
		selected( next?: string ): string
		title( ): ReturnType< $hyoo_sketch_editor['editor_title'] >
		tools( ): readonly(any)[]
		Page_options( ): readonly(any)[]
		Delete_options( ): readonly(any)[]
		Options( ): Record<string, any>
		body( ): readonly(any)[]
		Element_base( id: any): $hyoo_sketch_element_base
		Element_text( id: any): $hyoo_sketch_element_text
		Element_icon( id: any): $hyoo_sketch_element_icon
		Element_nav( id: any): $hyoo_sketch_element_nav
		Element_button( id: any): $hyoo_sketch_element_button
		Element_input( id: any): $hyoo_sketch_element_input
		Element_link( id: any): $hyoo_sketch_element_link
		Element_image( id: any): $hyoo_sketch_element_image
		Element_select( id: any): $hyoo_sketch_element_select
		Element_check( id: any): $hyoo_sketch_element_check
		Element_switch( id: any): $hyoo_sketch_element_switch
		Element_options( id: any): $hyoo_sketch_element_options
		Element_textarea( id: any): $hyoo_sketch_element_textarea
		Element_date( id: any): $hyoo_sketch_element_date
		Element_attach( id: any): $hyoo_sketch_element_attach
		Element_markdown( id: any): $hyoo_sketch_element_markdown
		Element_speck( id: any): $hyoo_sketch_element_speck
		Element_map( id: any): $hyoo_sketch_element_map
		Element_header( id: any): $hyoo_sketch_element_header
	}
	
}

//# sourceMappingURL=editor.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_editor extends $.$hyoo_sketch_editor {
        element(id: $mol_int62_string): $hyoo_sketch_element;
        grid_str(next?: string): string;
        Element(id: $mol_int62_string): $hyoo_sketch_element_base;
        element_render(obj: $hyoo_sketch_element_base): $mol_view | $hyoo_sketch_element_base_editor;
        elements(): ($mol_view | $hyoo_sketch_element_base_editor)[];
        page_name(next?: string): string;
        editor_title(): string;
        selected(id?: $mol_int62_string): `${string}_${string}`;
        paper_selected(next?: boolean): boolean;
        element_selected(id: $mol_int62_string, next?: boolean): boolean;
        Options(): {
            position: readonly any[];
        } | {
            page: readonly any[];
            delete: readonly any[];
        } | {
            page?: undefined;
            delete?: undefined;
        };
        preview(next?: boolean): boolean;
        editing(): boolean;
        page_current_id(): `${string}_${string}`;
        project_name(next?: string): string;
        page_delete(): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $hyoo_sketch_page extends $hyoo_sketch_entity {
        project(next?: $hyoo_sketch_project): $hyoo_sketch_project;
        name(next?: string): string;
        width(next?: number): number;
        height(next?: number): number;
        grid(next?: number): number;
        elements_node(): $hyoo_crowd_list;
        elements(next?: $hyoo_sketch_element[]): $hyoo_sketch_element[];
        element_add(obj: $hyoo_sketch_element): void;
        element_delete(obj: $hyoo_sketch_element): void;
        duplicate(): $hyoo_sketch_page;
    }
}

declare namespace $ {

	type $mol_link__arg__FJQP3N6Z = $mol_type_enforce<
		({ 
			'person': ReturnType< $hyoo_sketch_project_list['person_id'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__hint__VQI6CZDM = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub__I9AOSUDA = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_button_minor__hint__A2NMQIAQ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__BSMLENMM = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_list['project_add'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__ATOAGUH3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows__ZE5917W3 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_list['projects'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $hyoo_sync_online__yard__FJ9SO90C = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_list['yard'] >
		,
		ReturnType< $hyoo_sync_online['yard'] >
	>
	type $mol_link_source__uri__K3GAPNJM = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_link__arg__7J7KSW2Q = $mol_type_enforce<
		({ 
			'project': ReturnType< $hyoo_sketch_project_list['project_id'] >,
			'page': any,
			'selected': any,
			'preview': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title__2NB5ULKB = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_list['project_name'] >
		,
		ReturnType< $mol_link['title'] >
	>
	export class $hyoo_sketch_project_list extends $mol_page {
		domain( ): ReturnType< ReturnType< $hyoo_sketch_project_list['person'] >['domain'] >
		person_id( ): string
		Person_icon( ): $mol_icon_account
		Person_link( ): $mol_link
		project_add( next?: any ): any
		Project_add_icon( ): $mol_icon_plus
		Project_add( ): $mol_button_minor
		projects( ): readonly(any)[]
		List( ): $mol_list
		yard( ): $hyoo_sync_client
		Online( ): $hyoo_sync_online
		Source( ): $mol_link_source
		Lights( ): $mol_lights_toggle
		project_id( id: any): string
		project_name( id: any): string
		person( ): $hyoo_sketch_person
		title( ): string
		project_name_default( ): string
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
		foot( ): readonly(any)[]
		Project( id: any): $mol_link
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_project_list extends $.$hyoo_sketch_project_list {
        project_add(): void;
        projects(): $.$mol_link[];
        project_id(id: $mol_int62_string): `${string}_${string}`;
        project_name(id: $mol_int62_string): string;
        yard(): $hyoo_sync_client;
        person_id(): `${string}_${string}`;
    }
}

declare namespace $ {

	type $mol_check_expand__checked__VBHVG32I = $mol_type_enforce<
		ReturnType< $mol_expander['expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	type $mol_check_expand__expandable__Z6IDFUFY = $mol_type_enforce<
		ReturnType< $mol_expander['expandable'] >
		,
		ReturnType< $mol_check_expand['expandable'] >
	>
	type $mol_check_expand__label__96ZWPHN1 = $mol_type_enforce<
		ReturnType< $mol_expander['label'] >
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_view__sub__FQG25MUK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__2PU298K0 = $mol_type_enforce<
		ReturnType< $mol_expander['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_expander extends $mol_list {
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		label( ): readonly(any)[]
		Trigger( ): $mol_check_expand
		Tools( ): any
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_list
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=expander.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_expander extends $.$mol_expander {
        rows(): $mol_view[];
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub__I79GTC0Y = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_form_field extends $mol_labeler {
		name( ): string
		bid( ): string
		Bid( ): $mol_view
		control( ): any
		bids( ): readonly(string)[]
		label( ): readonly(any)[]
		content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=field.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_form_field extends $.$mol_form_field {
        bid(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_bar extends $mol_view {
	}
	
}

//# sourceMappingURL=bar.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_content_copy extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=copy.view.tree.d.ts.map
declare namespace $ {

	type $mol_list__sub__9NTMSGKO = $mol_type_enforce<
		ReturnType< $mol_form['body'] >
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_row__sub__KH6FF579 = $mol_type_enforce<
		ReturnType< $mol_form['foot'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $mol_form extends $mol_list {
		keydown( next?: any ): any
		form_fields( ): readonly($mol_form_field)[]
		body( ): ReturnType< $mol_form['form_fields'] >
		Body( ): $mol_list
		buttons( ): readonly($mol_view)[]
		foot( ): ReturnType< $mol_form['buttons'] >
		Foot( ): $mol_row
		submit_allowed( ): boolean
		submit_blocked( ): boolean
		event( ): ({ 
			keydown( next?: ReturnType< $mol_form['keydown'] > ): ReturnType< $mol_form['keydown'] >,
		})  & ReturnType< $mol_list['event'] >
		submit( next?: any ): any
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=form.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_form extends $.$mol_form {
        form_fields(): readonly $mol_form_field[];
        submit_allowed(): boolean;
        submit_blocked(): boolean;
        keydown(next: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $hyoo_sketch_project_page_project_name__27YEREPW = $mol_type_enforce<
		Parameters< $hyoo_sketch_project_page['project_name'] >[0]
		,
		Parameters< ReturnType< $hyoo_sketch_project_page['project'] >['name'] >[0]
	>
	type $mol_check_icon__hint__98VGS7CH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__Icon__N223I7C2 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['Project_pin_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked__PNHWRNWB = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['project_pin'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_link__hint__NXJQARK9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__arg__JAYFJXYU = $mol_type_enforce<
		({ 
			'page': any,
			'project': any,
			'selected': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__GQP18QTP = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_list__rows__LD1TMIVQ = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['pages'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_button_minor__hint__LBQCWQ75 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__3Y8WQZ54 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['page_add'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__7RE3XXE4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__BCMA6PQR = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_expander__title__DCU83NWW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_expander['title'] >
	>
	type $mol_expander__content__MCFFKHRJ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['content'] >
	>
	type $mol_expander__expanded__4JNAZE9X = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['pages_expanded'] >
		,
		ReturnType< $mol_expander['expanded'] >
	>
	type $mol_expander__Tools__RCHWRJZP = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['Settings_tools'] >
		,
		ReturnType< $mol_expander['Tools'] >
	>
	type $mol_string__value__W73E33R6 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['project_name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name__QILV3HQ1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__control__T90BIPC5 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['Project_name_control'] >
		,
		ReturnType< $mol_form_field['control'] >
	>
	type $mol_string__hint__5VKAI3M7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__V0DANON0 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['editor_add_id'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_button_major__enabled__F4U4Q76G = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['editor_add_submut_enabled'] >
		,
		ReturnType< $mol_button_major['enabled'] >
	>
	type $mol_button_major__click__T9DQFRUQ = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['editor_add_submit'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub__ITB2AD8P = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_bar__sub__K8EOI6AG = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_bar['sub'] >
	>
	type $mol_button_minor__title__KYCCROVT = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click__YQH9UIML = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['editor_fill_all'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_list__rows__DUWJ9FTZ = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['editor_add_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_form_field__name__3IAUBTT2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__bid__9QNKESZ7 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['editor_add_bid'] >
		,
		ReturnType< $mol_form_field['bid'] >
	>
	type $mol_form_field__Content__W5H5265P = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['Editor_add_form'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $hyoo_sketch_person_avatar__person__KGNQ16YJ = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['person'] >
		,
		ReturnType< $hyoo_sketch_person_avatar['person'] >
	>
	type $mol_link__arg__14INXAGO = $mol_type_enforce<
		({ 
			'person': ReturnType< $hyoo_sketch_project_page['editor_id'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__15DOEEGM = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_list__rows__O8O2QM6Z = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['editor_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_form_field__name__TUEOZB3L = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content__P2ULVO0U = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['Editor_list'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_expander__title__1TAYJGL7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_expander['title'] >
	>
	type $mol_expander__expanded__AU7LDF34 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['settings_expanded'] >
		,
		ReturnType< $mol_expander['expanded'] >
	>
	type $mol_expander__content__C8YPDY9E = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['content'] >
	>
	type $mol_link__arg__GB6PL8EQ = $mol_type_enforce<
		({ 
			'page': ReturnType< $hyoo_sketch_project_page['page_id'] >,
			'selected': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title__4M34RZGL = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['page_name'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_button_minor__click__65RU9LXW = $mol_type_enforce<
		ReturnType< $hyoo_sketch_project_page['page_copy'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__IOQF2EA8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_bar__sub__M9ACPBMK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_bar['sub'] >
	>
	export class $hyoo_sketch_project_page extends $mol_page {
		project_name( next?: ReturnType< ReturnType< $hyoo_sketch_project_page['project'] >['name'] > ): ReturnType< ReturnType< $hyoo_sketch_project_page['project'] >['name'] >
		domain( ): ReturnType< ReturnType< $hyoo_sketch_project_page['project'] >['domain'] >
		Project_pin_icon( ): $mol_icon_eye
		project_pin( next?: boolean ): boolean
		Project_pin( ): $mol_check_icon
		Project_close_icon( ): $mol_icon_cross
		Project_close( ): $mol_link
		pages( ): readonly(any)[]
		List( ): $mol_list
		pages_expanded( next?: boolean ): boolean
		page_add( next?: any ): any
		Page_add_icon( ): $mol_icon_plus
		Page_add( ): $mol_button_minor
		Settings_tools( ): $mol_view
		Pages( ): $mol_expander
		settings_expanded( next?: boolean ): boolean
		Project_name_control( ): $mol_string
		Project_name_field( ): $mol_form_field
		editor_add_bid( ): string
		editor_add_id( next?: string ): string
		Editor_add_id( ): $mol_string
		editor_add_submut_enabled( ): boolean
		editor_add_submit( next?: any ): any
		Editor_add_icon( ): $mol_icon_plus
		Editor_add_submit( ): $mol_button_major
		Editor_add_bar( ): $mol_bar
		editor_fill_all( next?: any ): any
		Editor_fill_all( ): $mol_button_minor
		editor_add_rows( ): readonly(any)[]
		Editor_add_form( ): $mol_list
		Editor_add_field( ): $mol_form_field
		editor_id( id: any): string
		person( id: any): $hyoo_sketch_person
		Editor_avatar( id: any): $hyoo_sketch_person_avatar
		Editor_link( id: any): $mol_link
		editor_list( ): readonly(any)[]
		Editor_list( ): $mol_list
		Editor_list_field( ): $mol_form_field
		Settings( ): $mol_expander
		page_id( id: any): string
		page_name( id: any): string
		Link( id: any): $mol_link
		page_copy( id: any, next?: any ): any
		Copy_icon( id: any): $mol_icon_content_copy
		Copy( id: any): $mol_button_minor
		project( ): $hyoo_sketch_project
		title( ): ReturnType< $hyoo_sketch_project_page['project_name'] >
		page_name_default( ): string
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
		label_allowed_anyone( ): string
		Row( id: any): $mol_bar
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $.$$ {
    class $hyoo_sketch_project_page extends $.$hyoo_sketch_project_page {
        user(): $hyoo_sketch_person;
        person(id: $mol_int62_string): $hyoo_sketch_person;
        pages(): $mol_bar[];
        page_id(id: $mol_int62_string): `${string}_${string}`;
        page_name(id: $mol_int62_string): string;
        project_name(next?: $mol_int62_string): string;
        page_add(): void;
        project_pin(next?: boolean): boolean;
        page_copy(id: $mol_int62_string): void;
        editor_list(): $.$mol_link[];
        editor_id(id: $mol_int62_string): `${string}_${string}`;
        editor_add_bid(): string;
        editor_fill_all(): void;
        editor_add_submit_enabled(): boolean;
        editor_add_rows(): ($mol_button_minor | $mol_bar)[];
        editor_add_submit(): void;
    }
}

declare namespace $ {

	type $mol_list__rows__14GBANXN = $mol_type_enforce<
		ReturnType< $hyoo_sketch_option_page['items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_expander__label__122X6F2A = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['label'] >
	>
	type $mol_expander__content__CHZKMO1N = $mol_type_enforce<
		ReturnType< $hyoo_sketch_option_page['tab_rows'] >
		,
		ReturnType< $mol_expander['content'] >
	>
	type $mol_expander__expanded__J1V1IXPS = $mol_type_enforce<
		ReturnType< $hyoo_sketch_option_page['expanded'] >
		,
		ReturnType< $mol_expander['expanded'] >
	>
	export class $hyoo_sketch_option_page extends $mol_page {
		items( ): readonly(any)[]
		List( ): $mol_list
		tab_title( id: any): string
		tab_rows( id: any): readonly($mol_view)[]
		expanded( id: any, next?: boolean ): boolean
		title( ): string
		Options( ): Record<string, any>
		body( ): readonly(any)[]
		Expander( id: any): $mol_expander
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_option_page extends $.$hyoo_sketch_option_page {
        keys(): string[];
        items(): $.$mol_expander[];
        tab_title(key: string): string;
        tab_rows(key: string): $mol_view[];
        expanded(key: string, next?: boolean): boolean;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_button_minor__title__VOT8YEQI = $mol_type_enforce<
		ReturnType< $hyoo_sketch_palette['row_title'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click__2XATT6YP = $mol_type_enforce<
		ReturnType< $hyoo_sketch_palette['element_add'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_list__rows__BMD99RPZ = $mol_type_enforce<
		ReturnType< $hyoo_sketch_palette['rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $hyoo_sketch_palette extends $mol_page {
		domain( ): ReturnType< ReturnType< $hyoo_sketch_palette['page'] >['domain'] >
		row_title( id: any): string
		element_add( id: any, next?: any ): any
		Row( id: any): $mol_button_minor
		rows( ): readonly(any)[]
		List( ): $mol_list
		page( ): $hyoo_sketch_page
		title( ): string
		body( ): readonly(any)[]
		type_list( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=palette.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_palette extends $.$hyoo_sketch_palette {
        rows(): $mol_button_minor[];
        row_title(type: string): string;
        Element_base(element: $hyoo_sketch_element): $hyoo_sketch_element_base;
        highest_top(): number;
        element_add(type: string): void;
    }
}

declare namespace $ {

	type $hyoo_sketch_person_page_name__RXFUS4W4 = $mol_type_enforce<
		Parameters< $hyoo_sketch_person_page['name'] >[0]
		,
		Parameters< ReturnType< $hyoo_sketch_person_page['person'] >['name'] >[0]
	>
	type $mol_button_copy__text__6JDZ7W5D = $mol_type_enforce<
		ReturnType< $hyoo_sketch_person_page['id'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	type $mol_button_copy__hint__B4IBYT5V = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['hint'] >
	>
	type $mol_link__arg__PVUK2VDS = $mol_type_enforce<
		({ 
			'person': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__VZQJXYXV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_string__value__G6D7W74Q = $mol_type_enforce<
		ReturnType< $hyoo_sketch_person_page['name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__enabled__955E3AA5 = $mol_type_enforce<
		ReturnType< $hyoo_sketch_person_page['editable'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_form_field__name__M67VBDK1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__control__PSUZ84XF = $mol_type_enforce<
		ReturnType< $hyoo_sketch_person_page['Name_control'] >
		,
		ReturnType< $mol_form_field['control'] >
	>
	export class $hyoo_sketch_person_page extends $mol_page {
		name( next?: ReturnType< ReturnType< $hyoo_sketch_person_page['person'] >['name'] > ): ReturnType< ReturnType< $hyoo_sketch_person_page['person'] >['name'] >
		id( ): ReturnType< ReturnType< $hyoo_sketch_person_page['person'] >['id'] >
		domain( ): ReturnType< ReturnType< $hyoo_sketch_person_page['person'] >['domain'] >
		Id_copy( ): $mol_button_copy
		Close_icon( ): $mol_icon_cross
		Close( ): $mol_link
		editable( ): boolean
		Name_control( ): $mol_string
		Name( ): $mol_form_field
		person( ): $hyoo_sketch_person
		tools( ): readonly(any)[]
		title( ): string
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch_person_page extends $.$hyoo_sketch_person_page {
        editable(): boolean;
    }
}

declare namespace $ {
    function $mol_offline(): void;
}

declare namespace $ {
    function $mol_offline_web(): void;
}

declare namespace $ {
}

declare namespace $ {

	type $hyoo_sketch_project__SAI2XN1Q = $mol_type_enforce<
		Parameters< $hyoo_sketch['project'] >[0]
		,
		Parameters< ReturnType< $hyoo_sketch['domain'] >['project'] >[0]
	>
	type $hyoo_sketch_page__BPLFK3K0 = $mol_type_enforce<
		Parameters< $hyoo_sketch['page'] >[0]
		,
		Parameters< ReturnType< $hyoo_sketch['domain'] >['page'] >[0]
	>
	type $hyoo_sketch_project_list__title__CVS02H3P = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_sketch_project_list['title'] >
	>
	type $hyoo_sketch_project_list__person__VT5LHMSM = $mol_type_enforce<
		ReturnType< $hyoo_sketch['user'] >
		,
		ReturnType< $hyoo_sketch_project_list['person'] >
	>
	type $hyoo_sketch_project_page__project__IKFX4ND0 = $mol_type_enforce<
		ReturnType< $hyoo_sketch['project_opened'] >
		,
		ReturnType< $hyoo_sketch_project_page['project'] >
	>
	type $hyoo_sketch_Element__GGN1OZEH = $mol_type_enforce<
		Parameters< $hyoo_sketch['Element'] >[0]
		,
		Parameters< ReturnType< $hyoo_sketch['Editor'] >['Element'] >[0]
	>
	type $hyoo_sketch_editor__page__2DY0EK23 = $mol_type_enforce<
		ReturnType< $hyoo_sketch['page_opened'] >
		,
		ReturnType< $hyoo_sketch_editor['page'] >
	>
	type $hyoo_sketch_option_page__Options__2FFP3K60 = $mol_type_enforce<
		ReturnType< $hyoo_sketch['Options'] >
		,
		ReturnType< $hyoo_sketch_option_page['Options'] >
	>
	type $hyoo_sketch_palette__page__VITB5ZKN = $mol_type_enforce<
		ReturnType< $hyoo_sketch['page_opened'] >
		,
		ReturnType< $hyoo_sketch_palette['page'] >
	>
	type $hyoo_sketch_person_page__person__YK6P2D48 = $mol_type_enforce<
		ReturnType< $hyoo_sketch['person_opened'] >
		,
		ReturnType< $hyoo_sketch_person_page['person'] >
	>
	type $mol_view__style__3BBZU1Q6 = $mol_type_enforce<
		({ 
			'width': ReturnType< $hyoo_sketch['demo_page_width'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub__TEY5QHO7 = $mol_type_enforce<
		ReturnType< $hyoo_sketch['demo_page_elements'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_page__title__DRGUDBTD = $mol_type_enforce<
		ReturnType< $hyoo_sketch['demo_page_title'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__Head__XCUES5MD = $mol_type_enforce<
		any
		,
		ReturnType< $mol_page['Head'] >
	>
	type $mol_page__body__SLGN1T1L = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	export class $hyoo_sketch extends $mol_book2 {
		user( ): ReturnType< ReturnType< $hyoo_sketch['domain'] >['user'] >
		project( id: any): ReturnType< ReturnType< $hyoo_sketch['domain'] >['project'] >
		page( id: any): ReturnType< ReturnType< $hyoo_sketch['domain'] >['page'] >
		Theme( ): $mol_theme_auto
		cursor_move( next?: any ): any
		Projects( ): $hyoo_sketch_project_list
		project_opened( ): $hyoo_sketch_project
		Project( ): $hyoo_sketch_project_page
		page_opened( ): $hyoo_sketch_page
		Options( ): ReturnType< ReturnType< $hyoo_sketch['Editor'] >['Options'] >
		Element( id: any): ReturnType< ReturnType< $hyoo_sketch['Editor'] >['Element'] >
		Editor( ): $hyoo_sketch_editor
		Option_page( ): $hyoo_sketch_option_page
		Palette( ): $hyoo_sketch_palette
		person_opened( ): $hyoo_sketch_person
		Person( ): $hyoo_sketch_person_page
		demo_page_title( id: any): string
		demo_page_width( id: any): number
		demo_page_elements( id: any): readonly(any)[]
		Demo_page_content( id: any): $mol_view
		domain( ): $hyoo_sketch_domain
		plugins( ): readonly(any)[]
		event( ): ({ 
			mousemove( next?: ReturnType< $hyoo_sketch['cursor_move'] > ): ReturnType< $hyoo_sketch['cursor_move'] >,
		})  & ReturnType< $mol_book2['event'] >
		pages( ): readonly(any)[]
		Demo_page( id: any): $mol_page
	}
	
}

//# sourceMappingURL=sketch.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sketch extends $.$hyoo_sketch {
        person(id: $mol_int62_string): $hyoo_sketch_person;
        arg(): {
            project: `${string}_${string}`;
            page: `${string}_${string}`;
            person: `${string}_${string}`;
        };
        project_opened(): $hyoo_sketch_project;
        page_opened(): $hyoo_sketch_page;
        person_opened(): $hyoo_sketch_person;
        pages(): $mol_page[] | ($.$hyoo_sketch_editor | $.$hyoo_sketch_project_list | $.$hyoo_sketch_project_page | $.$hyoo_sketch_option_page | $.$hyoo_sketch_palette | $.$hyoo_sketch_person_page)[];
        demo_page_title(id: $mol_int62_string): string;
        demo_page_width(id: $mol_int62_string): number;
        demo_page_elements(id: $mol_int62_string): $mol_view[];
    }
}

declare namespace $.$$ {
}

export = $;
//# sourceMappingURL=web.d.ts.map
