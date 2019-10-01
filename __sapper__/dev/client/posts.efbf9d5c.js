import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, e as element, t as text, c as claim_element, b as children, f as claim_text, g as detach_dev, k as add_location, j as attr_dev, m as insert_dev, p as append_dev, n as noop, I as add_render_callback, J as create_bidirectional_transition } from './index.45d09493.js';
import { f as fade } from './index.d64858ba.js';

/* src\routes\posts.svelte generated by Svelte v3.12.1 */

const file = "src\\routes\\posts.svelte";

function create_fragment(ctx) {
	var main, h1, t, main_transition, current;

	const block = {
		c: function create() {
			main = element("main");
			h1 = element("h1");
			t = text("posts");
			this.h();
		},

		l: function claim(nodes) {
			main = claim_element(nodes, "MAIN", { class: true }, false);
			var main_nodes = children(main);

			h1 = claim_element(main_nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t = claim_text(h1_nodes, "posts");
			h1_nodes.forEach(detach_dev);
			main_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			add_location(h1, file, 6, 2, 126);
			attr_dev(main, "class", "main svelte-k5z55r");
			add_location(main, file, 5, 0, 69);
		},

		m: function mount(target, anchor) {
			insert_dev(target, main, anchor);
			append_dev(main, h1);
			append_dev(h1, t);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			add_render_callback(() => {
				if (!main_transition) main_transition = create_bidirectional_transition(main, fade, {duration: 150}, true);
				main_transition.run(1);
			});

			current = true;
		},

		o: function outro(local) {
			if (!main_transition) main_transition = create_bidirectional_transition(main, fade, {duration: 150}, false);
			main_transition.run(0);

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(main);
				if (main_transition) main_transition.end();
			}
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

class Posts extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Posts", options, id: create_fragment.name });
	}
}

export default Posts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuZWZiZjlkNWMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcG9zdHMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHsgZmFkZSB9IGZyb20gJ3N2ZWx0ZS90cmFuc2l0aW9uJ1xyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48bWFpbiBjbGFzcz1cIm1haW5cIiB0cmFuc2l0aW9uOmZhZGU9e3tkdXJhdGlvbjogMTUwfX0+XHJcbiAgPGgxPnBvc3RzPC9oMT5cclxuPC9tYWluPlxyXG5cclxuPHN0eWxlPlxyXG5cclxuLm1haW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IDAgMTUwcHg7XHJcbn1cclxuXHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUtvQyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Ozs7Ozs7O3VGQUFmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
