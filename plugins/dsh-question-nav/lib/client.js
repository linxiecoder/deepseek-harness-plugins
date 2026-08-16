window.__ModuleLoader__.load({
	id: "dsh-question-nav",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		const React = require("react");

		const name = "question-nav";

		const CSS = `
			.qnav-root {
				position: fixed;
				right: 12px;
				top: 64px;
				z-index: 10;
				pointer-events: none;
				font-family: inherit;
			}
			.qnav-panel {
				pointer-events: auto;
				width: 268px;
				max-height: calc(100vh - 92px);
				display: flex;
				flex-direction: column;
				background: var(--dsw-alias-bg-base, #ffffff);
				border: 1px solid var(--dsw-alias-border-l1, rgba(0, 0, 0, 0.12));
				border-radius: 10px;
				box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);
				overflow: hidden;
			}
			.qnav-head {
				display: flex;
				align-items: center;
				gap: 8px;
				padding: 10px 12px;
				border-bottom: 1px solid var(--dsw-alias-border-l1, rgba(0, 0, 0, 0.12));
				flex: none;
			}
			.qnav-title {
				flex: none;
				font-size: 13px;
				font-weight: 600;
				color: var(--dsw-alias-label-primary, #1a1a1a);
			}
			.qnav-count {
				flex: none;
				font-size: 11px;
				line-height: 18px;
				padding: 0 7px;
				border-radius: 9px;
				background: var(--dsw-alias-interactive-bg-hover-solid, rgba(127, 127, 127, 0.16));
				color: var(--dsw-alias-label-secondary, #666666);
			}
			.qnav-toggle {
				margin-left: auto;
				flex: none;
				border: none;
				background: transparent;
				color: var(--dsw-alias-label-secondary, #666666);
				cursor: pointer;
				font-size: 16px;
				line-height: 1;
				padding: 4px 7px;
				border-radius: 6px;
			}
			.qnav-toggle:hover {
				background: var(--dsw-alias-interactive-bg-hover-solid, rgba(127, 127, 127, 0.16));
				color: var(--dsw-alias-label-primary, #1a1a1a);
			}
			.qnav-list {
				overflow-y: auto;
				padding: 6px;
				display: flex;
				flex-direction: column;
				gap: 2px;
			}
			.qnav-empty {
				padding: 14px 10px;
				font-size: 12px;
				color: var(--dsw-alias-label-secondary, #666666);
				text-align: center;
			}
			.qnav-item {
				display: flex;
				gap: 8px;
				align-items: baseline;
				text-align: left;
				border: none;
				background: transparent;
				cursor: pointer;
				padding: 6px 8px;
				border-radius: 6px;
				color: var(--dsw-alias-label-primary, #1a1a1a);
				font-size: 12px;
				line-height: 18px;
				font-family: inherit;
			}
			.qnav-item:hover,
			.qnav-item-active {
				background: var(--dsw-alias-interactive-bg-hover-solid, rgba(127, 127, 127, 0.16));
			}
			.qnav-item:focus-visible {
				outline: 1px solid var(--dsw-alias-brand-primary, #4d6bfe);
				outline-offset: -1px;
			}
			.qnav-index {
				flex: none;
				min-width: 18px;
				text-align: right;
				font-size: 11px;
				font-variant-numeric: tabular-nums;
				color: var(--dsw-alias-label-secondary, #999999);
			}
			.qnav-text {
				min-width: 0;
				flex: 1;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.qnav-steer .qnav-text {
				color: var(--dsw-alias-label-secondary, #666666);
			}
			.qnav-pop {
				position: fixed;
				pointer-events: auto;
				z-index: 5;
				transform: translateX(-100%);
				margin-left: -10px;
				width: 360px;
				max-width: 360px;
				max-height: 320px;
				overflow-y: auto;
				display: flex;
				flex-direction: column;
				gap: 6px;
				padding: 10px 12px;
				background: var(--dsw-alias-bg-base, #ffffff);
				border: 1px solid var(--dsw-alias-border-l1, rgba(0, 0, 0, 0.12));
				border-radius: 10px;
				box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
			}
			.qnav-pop-kind {
				font-size: 11px;
				line-height: 16px;
				color: var(--dsw-alias-label-secondary, #666666);
			}
			.qnav-pop-text {
				font-size: 12px;
				line-height: 18px;
				color: var(--dsw-alias-label-primary, #1a1a1a);
				white-space: pre-wrap;
				word-break: break-word;
			}
			.qnav-collapsed {
				pointer-events: auto;
				border: 1px solid var(--dsw-alias-border-l1, rgba(0, 0, 0, 0.12));
				background: var(--dsw-alias-bg-base, #ffffff);
				color: var(--dsw-alias-label-secondary, #666666);
				cursor: pointer;
				font-size: 12px;
				line-height: 20px;
				padding: 5px 10px;
				border-radius: 10px;
				box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
				font-family: inherit;
			}
			.qnav-collapsed:hover {
				color: var(--dsw-alias-label-primary, #1a1a1a);
				background: var(--dsw-alias-bg-layer-1, #f7f7f7);
			}
		`;

		function injectCss(ctx) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-question-nav";
			tag.textContent = CSS;
			document.head.appendChild(tag);
			ctx.effect(() => () => tag.remove(), "question-nav: stylesheet");
		}

		/** Subscribe to an ObservableSnapshot source with only useState/useEffect. */
		function useSnapshot(source) {
			const [snap, setSnap] = React.useState(() => source.getSnapshot());
			React.useEffect(() => {
				setSnap(source.getSnapshot());
				return source.subscribe(() => setSnap(source.getSnapshot()));
			}, [source]);
			return snap;
		}

		/** Text parts of one user node's content blocks (images as markers). */
		function textPartsOf(data) {
			const content = data !== null && typeof data === "object" ? data.content : undefined;
			const parts = [];
			if (Array.isArray(content)) {
				for (const block of content) {
					if (block !== null && typeof block === "object") {
						if (block.type === "text" && typeof block.text === "string") parts.push(block.text);
						else if (block.type === "image") parts.push("[图片]");
					}
				}
			}
			return parts;
		}

		/** Collect the in-window user/steering questions in flow order. */
		function questionsOf(snap) {
			const items = [];
			const nodes = snap.chat.nodes;
			for (const key of snap.chat.order) {
				const node = nodes.get(key);
				if (node === undefined || node.visibility === "hidden") continue;
				if (node.kind !== "user" && node.kind !== "steering") continue;
				const parts = textPartsOf(node.data);
				items.push({
					key: node.key,
					kind: node.kind,
					text: parts.join(" ").trim(),
					full: parts.join("\n"),
				});
			}
			return items;
		}

		/** Find the rendered chat row by its stable anchor key. */
		function findRow(key) {
			const rows = document.querySelectorAll("[data-chat-anchor-key]");
			for (let i = 0; i < rows.length; i++) {
				if (rows[i].dataset.chatAnchorKey === key) return rows[i];
			}
			return null;
		}

		/** Smooth-scroll the conversation scrollport so the row lands near the top. */
		function jumpTo(key) {
			const row = findRow(key);
			if (row === null) return;
			let scroller = row.closest("[data-conversation-scroll]");
			if (scroller === null) {
				let el = row.parentElement;
				while (el !== null) {
					if (el.scrollHeight > el.clientHeight + 1) {
						const overflow = getComputedStyle(el).overflowY;
						if (overflow === "auto" || overflow === "scroll") { scroller = el; break; }
					}
					el = el.parentElement;
				}
			}
			if (scroller !== null) {
				const top = Math.max(0, scroller.scrollTop + row.getBoundingClientRect().top - scroller.getBoundingClientRect().top - 12);
				try { scroller.scrollTo({ top: top, behavior: "smooth" }); return; } catch (err) {}
				scroller.scrollTop = top;
				return;
			}
			try { row.scrollIntoView({ block: "start", behavior: "smooth" }); } catch (err) { row.scrollIntoView(); }
		}

		function QuestionList(props) {
			const snap = useSnapshot(props.face);
			const items = questionsOf(snap);
			const [hover, setHover] = React.useState(null);
			React.useEffect(() => {
				setHover(null);
				if (!props.open) return;
				const list = document.querySelector("[data-qnav-list]");
				if (list !== null) list.scrollTop = list.scrollHeight;
			}, [items.length, props.open]);
			if (!props.open) {
				return React.createElement("div", { className: "qnav-root" },
					React.createElement("button", {
						className: "qnav-collapsed",
						type: "button",
						title: "展开提问导航",
						onClick: props.onToggle,
					}, "‹ 提问"));
			}
			const hoverItem = hover !== null && items[hover.index] !== undefined ? items[hover.index] : null;
			const popTop = hover !== null
				? Math.max(8, Math.min(hover.top, Math.max(8, (typeof window !== "undefined" && window.innerHeight ? window.innerHeight : 800) - 320)))
				: 0;
			return React.createElement("div", {
				className: "qnav-root",
				onMouseLeave: () => setHover(null),
			},
				React.createElement("div", { className: "qnav-panel" },
					React.createElement("div", {
						className: "qnav-head",
						onMouseEnter: () => setHover(null),
					},
						React.createElement("span", { className: "qnav-title" }, "用户提问"),
						React.createElement("span", { className: "qnav-count" }, String(items.length)),
						React.createElement("button", {
							className: "qnav-toggle",
							type: "button",
							title: "折叠",
							onClick: props.onToggle,
						}, "›")
					),
					React.createElement("div", { className: "qnav-list", "data-qnav-list": "true" },
						items.length === 0
							? React.createElement("div", { className: "qnav-empty" }, "暂无提问")
							: items.map((item, index) => {
								const fallback = item.kind === "steering" ? "[打断提问]" : "[空提问]";
								const label = item.text !== "" ? item.text : fallback;
								return React.createElement("button", {
									key: item.key,
									type: "button",
									className: (item.kind === "steering" ? "qnav-item qnav-steer" : "qnav-item") + (hover !== null && hover.index === index ? " qnav-item-active" : ""),
									onMouseEnter: (e) => {
										const rect = e.currentTarget.getBoundingClientRect();
										setHover({ index: index, top: rect.top, left: rect.left });
									},
									onClick: () => jumpTo(item.key),
								},
									React.createElement("span", { className: "qnav-index" }, String(index + 1)),
									React.createElement("span", { className: "qnav-text" }, label));
							})
					)
				),
				hoverItem !== null && React.createElement("div", {
					className: "qnav-pop",
					style: { top: popTop, left: hover.left },
				},
					React.createElement("div", { className: "qnav-pop-kind" }, hoverItem.kind === "steering" ? "打断提问 · 完整预览" : "用户提问 · 完整预览"),
					React.createElement("div", { className: "qnav-pop-text" }, hoverItem.full !== "" ? hoverItem.full : "[空提问]"))
			);
		}

		function QuestionPanel(props) {
			const useSessions = props.useSessions;
			const currentId = typeof useSessions === "function" ? useSessions((s) => s.current) : undefined;
			const [open, setOpen] = React.useState(true);
			if (currentId === undefined) return null;
			const binding = props.sessions.binding(currentId);
			if (binding === undefined || binding.session === undefined) return null;
			return React.createElement(QuestionList, {
				key: currentId,
				face: binding.session,
				open: open,
				onToggle: () => setOpen((v) => !v),
			});
		}

		function apply(ctx) {
			const sessions = ctx.sessions;
			injectCss(ctx);
			ctx.slots.inject("shell.overlay", () => ctx.slots.register(
				{ name: "shell.overlay", id: "question-nav", order: 50 },
				(props) => React.createElement(QuestionPanel, { useSessions: props.useSessions, sessions: sessions }),
			));
		}

		exports.apply = apply;
		exports.inject = ["slots", "sessions"];
		exports.name = name;
		return module.exports;
	}
});
