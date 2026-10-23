window.__ModuleLoader__.load({
  id: "dsh-ayanami-theme",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

    const NAME = "dsh-ayanami-theme";
    const ATTR = "data-dsh-ayanami";
    const ARTWORK_URL = "/dsh-ayanami-theme/background.jpg";
    const SMILE_URL = "/dsh-ayanami-theme/smile.mp4";
    const MARK_URL = "/dsh-ayanami-theme/mark.png";
    const ART_SCALE = 1;
    const ART_X = 0.05;
    const ART_Y = 0.24;

    /**
     * Color tokens only. Every entry is a { light, dark } pair because the
     * theme service refuses a single value: one palette would go unreadable
     * when the user switches appearance.
     *
     * The alphas are deliberately low on the conversation shell so the
     * artwork reads through it; menus and popovers stay close to opaque.
     */
    const TOKENS = {
      "--dsw-alias-bg-base": { light: "rgba(244,249,255,0.46)", dark: "rgba(18,32,50,0.01)" },
      "--dsw-alias-bg-layer-1": { light: "rgba(255,255,255,0.66)", dark: "rgba(26,42,62,0.50)" },
      "--dsw-alias-bg-layer-2": { light: "rgba(248,252,255,0.74)", dark: "rgba(34,52,74,0.60)" },
      "--dsw-alias-bg-layer-3": { light: "rgba(240,247,255,0.80)", dark: "rgba(44,64,88,0.68)" },
      "--dsw-alias-bg-module-platform": { light: "rgba(250,253,255,0.78)", dark: "rgba(26,42,62,0.58)" },
      "--dsw-alias-bg-overlay": { light: "rgba(255,255,255,0.96)", dark: "rgba(20,32,48,0.95)" },
      "--dsw-alias-bg-document-preview": { light: "rgba(248,252,255,0.92)", dark: "rgba(22,36,52,0.92)" },
      "--dsw-alias-label-document-preview": { light: "#263b4d", dark: "#d8e8f7" },
      "--dsw-alias-label-primary": { light: "#0f1f2d", dark: "#f3f8ff" },
      "--dsw-alias-label-primary-dimmed": { light: "#263b4d", dark: "#d8e8f7" },
      "--dsw-alias-label-secondary": { light: "#3b5368", dark: "#c9dbee" },
      "--dsw-alias-label-tertiary": { light: "#5d778e", dark: "#a3bad0" },
      "--dsw-alias-label-caption": { light: "#6f879b", dark: "#92aac0" },
      "--dsw-alias-label-shimmer": { light: "rgba(15,31,45,0.28)", dark: "rgba(243,248,255,0.40)" },
      "--dsw-alias-label-deep-diving": { light: "#2f6fa8", dark: "#b3e0ff" },
      "--dsw-alias-label-deep-diving-shimmer": { light: "rgba(47,111,168,0.30)", dark: "rgba(179,224,255,0.45)" },
      "--dsw-alias-border-l1": { light: "rgba(40,80,120,0.14)", dark: "rgba(150,205,255,0.14)" },
      "--dsw-alias-border-l2": { light: "rgba(40,80,120,0.22)", dark: "rgba(150,205,255,0.22)" },
      "--dsw-alias-border-l3": { light: "rgba(40,80,120,0.32)", dark: "rgba(150,205,255,0.32)" },
      "--dsw-alias-border-l4": { light: "rgba(40,80,120,0.44)", dark: "rgba(150,205,255,0.44)" },
      "--dsw-alias-brand-primary": { light: "#2f6fa8", dark: "#9ed3ff" },
      "--dsw-alias-brand-primary-invert": { light: "#ffffff", dark: "#0a1624" },
      "--dsw-alias-brand-text": { light: "#1d4f7a", dark: "#d8edff" },
      "--dsw-alias-link": { light: "#1f6feb", dark: "#9ed3ff" },
      "--dsw-alias-state-business-primary": { light: "#2f6fa8", dark: "#9ed3ff" },
      "--dsw-alias-state-business-tertiary": { light: "rgba(47,111,168,0.12)", dark: "rgba(158,211,255,0.18)" },
      "--dsw-alias-button-primary-fill": { light: "#2f6fa8", dark: "#3a7dc6" },
      "--dsw-alias-button-primary-hover": { light: "#245a8b", dark: "#4a91dd" },
      "--dsw-alias-button-floating-fill": { light: "rgba(255,255,255,0.78)", dark: "rgba(26,42,62,0.72)" },
      "--dsw-alias-button-floating-hover": { light: "rgba(232,242,255,0.92)", dark: "rgba(40,58,80,0.90)" },
      "--dsw-alias-button-tool-bar-fill": { light: "rgba(255,255,255,0.56)", dark: "rgba(26,42,62,0.46)" },
      "--dsw-alias-button-tool-bar-hover": { light: "rgba(232,242,255,0.78)", dark: "rgba(40,58,80,0.72)" },
      "--dsw-alias-interactive-bg-hover": { light: "rgba(47,111,168,0.08)", dark: "rgba(158,211,255,0.12)" },
      "--dsw-alias-interactive-bg-active": { light: "rgba(47,111,168,0.14)", dark: "rgba(158,211,255,0.20)" },
      "--dsw-alias-interactive-bg-hover-solid": { light: "#e6f1ff", dark: "#263c54" },
      "--dsw-alias-menu-icon": { light: "#274158", dark: "#d8ecff" },
      "--dsw-alias-menu-group-header-fill": { light: "rgba(250,253,255,0.98)", dark: "rgba(22,36,52,0.98)" },
      "--dsw-menu-surface-fill": { light: "rgba(255,255,255,0.96)", dark: "rgba(20,32,48,0.96)" },
      "--dsw-specific-menu": { light: "rgba(255,255,255,0.97)", dark: "rgba(20,32,48,0.97)" },
      "--dsw-specific-selector": { light: "rgba(248,252,255,0.94)", dark: "rgba(28,44,62,0.94)" },
      "--dsw-specific-sidebar-fill": { light: "rgba(250,253,255,0.6)", dark: "rgba(20,34,52,0.1)" },
      "--dsw-specific-sidebar-nav-item-active": { light: "rgba(47,111,168,0.14)", dark: "rgba(158,211,255,0.24)" },
      "--dsw-specific-sidebar-nav-item-active-accent": { light: "#2f6fa8", dark: "#9ed3ff" },
      "--dsw-specific-sidebar-nav-item-hover": { light: "rgba(47,111,168,0.07)", dark: "rgba(158,211,255,0.14)" },
      "--dsw-specific-tip": { light: "#e6f1ff", dark: "#263c54" },
      "--dsw-specific-bubble": { light: "rgba(232,242,255,0.66)", dark: "rgba(38,56,78,0.52)" },
      "--dsw-specific-bubble-highlight": { light: "rgba(219,235,255,0.78)", dark: "rgba(50,72,98,0.66)" },
      "--dsw-specific-input-major": { light: "rgba(255,255,255,0.70)", dark: "rgba(26,42,60,0.52)" },
      "--dsw-input-solid": { light: "rgba(255,255,255,0.84)", dark: "rgba(24,38,54,0.66)" }
    };

    const tokenDeclarations = (mode) =>
      Object.entries(TOKENS)
        .map(([name, value]) => `${name}: ${value[mode]} !important;`)
        .join("\n        ");

    const CSS = `
      html {
        background: #0a1624;
      }

      body[${ATTR}] {
        ${tokenDeclarations("dark")}
        min-height: 100vh;
        background-color: #0a1624 !important;
      }

      body[${ATTR}]:not([data-ds-dark-theme]) {
        ${tokenDeclarations("light")}
        background-color: #eef5ff !important;
      }

      body[${ATTR}] #root {
        position: relative;
        z-index: 1;
        background: transparent !important;
      }

      #dsh-ayanami-canvas,
      #dsh-ayanami-veil {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
      }

      #dsh-ayanami-canvas {
        filter: brightness(1.07) saturate(1.05) contrast(1.02);
      }

      #dsh-ayanami-video {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 28%;
        z-index: 0;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.8s ease;
        filter: brightness(1.04) saturate(1.04);
      }

      #dsh-ayanami-video.is-ready {
        opacity: 1;
      }

      #dsh-ayanami-mark {
        position: fixed;
        left: 2.2vw;
        bottom: 6.5vh;
        width: min(22.95vw, 391px);
        height: auto;
        z-index: 0;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.8s ease;
        filter: drop-shadow(0 0 12px rgba(158, 12, 16, 0.35));
      }

      #dsh-ayanami-mark.is-ready {
        opacity: 0.92;
      }

      #dsh-ayanami-veil {
        background:
          linear-gradient(90deg, rgba(10, 20, 34, 0.70) 0%, rgba(10, 20, 34, 0.32) 24%, rgba(10, 20, 34, 0.00) 58%, rgba(10, 20, 34, 0.18) 100%),
          linear-gradient(180deg, rgba(10, 20, 34, 0.30) 0%, rgba(10, 20, 34, 0.00) 32%, rgba(10, 20, 34, 0.04) 72%, rgba(10, 20, 34, 0.54) 100%);
      }

      body[${ATTR}]:not([data-ds-dark-theme]) #dsh-ayanami-veil {
        background:
          linear-gradient(90deg, rgba(246, 251, 255, 0.92) 0%, rgba(246, 251, 255, 0.66) 28%, rgba(246, 251, 255, 0.26) 62%, rgba(246, 251, 255, 0.62) 100%),
          linear-gradient(180deg, rgba(246, 251, 255, 0.60) 0%, rgba(246, 251, 255, 0.10) 35%, rgba(246, 251, 255, 0.22) 75%, rgba(246, 251, 255, 0.78) 100%);
      }

      body[${ATTR}] button[class*="_newSession"] {
        background: rgba(30, 50, 72, 0.72) !important;
        color: #e8f4ff !important;
        border-color: rgba(150, 205, 255, 0.30) !important;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }

      body[${ATTR}] button[class*="_newSession"]:hover {
        background: rgba(44, 66, 92, 0.86) !important;
        border-color: rgba(158, 211, 255, 0.44) !important;
      }

      body[${ATTR}]:not([data-ds-dark-theme]) button[class*="_newSession"] {
        background: rgba(47, 111, 168, 0.12) !important;
        color: #0f1f2d !important;
        border-color: rgba(40, 80, 120, 0.22) !important;
      }

      body[${ATTR}]:not([data-ds-dark-theme]) button[class*="_newSession"]:hover {
        background: rgba(47, 111, 168, 0.20) !important;
      }

      body[${ATTR}] [class*="_collapsed"] button[class*="_newSession"] {
        background: transparent !important;
        border-color: transparent !important;
        color: #c9dbee !important;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
      }

      body[${ATTR}] ::selection {
        background: rgba(140, 200, 255, 0.35);
        color: #ffffff;
      }
    `;

    function applyTokens(scope) {
      if (!scope || !scope.theme || typeof scope.theme.overrideTokens !== "function") return;
      if (typeof scope.effect === "function") {
        scope.effect(
          () => scope.theme.overrideTokens(NAME, TOKENS),
          "dsh-ayanami-theme: token layer"
        );
      } else {
        scope.theme.overrideTokens(NAME, TOKENS);
      }
    }

    function apply(ctx) {
      if (typeof document === "undefined" || !document.body) return;
      const body = document.body;

      const install = () => {
        body.setAttribute(ATTR, "");

        const canvas = document.createElement("canvas");
        canvas.id = "dsh-ayanami-canvas";
        canvas.setAttribute("aria-hidden", "true");

        const video = document.createElement("video");
        video.id = "dsh-ayanami-video";
        video.muted = true;
        video.loop = false;
        video.autoplay = true;
        video.playsInline = true;
        video.preload = "auto";
        video.setAttribute("aria-hidden", "true");

        const veil = document.createElement("div");
        veil.id = "dsh-ayanami-veil";
        veil.setAttribute("aria-hidden", "true");

        const mark = document.createElement("img");
        mark.id = "dsh-ayanami-mark";
        mark.alt = "";
        mark.setAttribute("aria-hidden", "true");

        for (const id of [
          "dsh-ayanami-canvas",
          "dsh-ayanami-video",
          "dsh-ayanami-veil",
          "dsh-ayanami-mark",
        ]) {
          document.getElementById(id)?.remove();
        }

        body.insertBefore(veil, body.firstChild);
        body.insertBefore(video, veil);
        body.insertBefore(canvas, video);
        body.insertBefore(mark, veil.nextSibling);

        const style = document.createElement("style");
        style.setAttribute("data-dsh-ayanami-theme", "");
        style.textContent = CSS;
        document.head.appendChild(style);

        let bitmap = null;
        let videoUrl = null;
        let markUrl = null;
        let replayTimer = null;
        let disposed = false;

        const draw = () => {
          if (disposed) return;
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          const vw = window.innerWidth;
          const vh = window.innerHeight;
          canvas.width = Math.max(1, Math.round(vw * dpr));
          canvas.height = Math.max(1, Math.round(vh * dpr));
          const context = canvas.getContext("2d");
          if (!context) return;
          context.setTransform(dpr, 0, 0, dpr, 0, 0);
          context.clearRect(0, 0, vw, vh);
          if (bitmap === null) return;
          const scale = Math.max(vw / bitmap.width, vh / bitmap.height) * ART_SCALE;
          const width = bitmap.width * scale;
          const height = bitmap.height * scale;
          context.drawImage(bitmap, (vw - width) * ART_X, (vh - height) * ART_Y, width, height);
        };

        const loadArtwork = async () => {
          try {
            const response = await fetch(ARTWORK_URL, { cache: "no-store" });
            if (!response.ok) return;
            const blob = await response.blob();
            const loaded =
              typeof createImageBitmap === "function"
                ? await createImageBitmap(blob)
                : await new Promise((resolve, reject) => {
                    const image = new Image();
                    const url = URL.createObjectURL(blob);
                    image.onload = () => {
                      URL.revokeObjectURL(url);
                      resolve(image);
                    };
                    image.onerror = reject;
                    image.src = url;
                  });
            if (disposed) {
              loaded.close?.();
              return;
            }
            bitmap = loaded;
            draw();
          } catch {
            // Keep the gradient veil; the shell still has its own palette.
          }
        };

        window.addEventListener("resize", draw);
        void loadArtwork();

        const loadMark = async () => {
          try {
            const response = await fetch(MARK_URL, { cache: "no-store" });
            if (!response.ok) return;
            const blob = await response.blob();
            if (disposed) return;
            markUrl = URL.createObjectURL(blob);
            mark.src = markUrl;
          } catch {
            // The static artwork still carries its baked-in mark.
          }
        };

        const scheduleReplay = () => {
          if (disposed) return;
          const delay = 500;
          replayTimer = window.setTimeout(() => {
            replayTimer = null;
            if (disposed) return;
            video.currentTime = 0;
            void video.play().catch(() => {});
          }, delay);
        };

        const loadSmile = async () => {
          try {
            const response = await fetch(SMILE_URL, { cache: "no-store" });
            if (!response.ok) return;
            const blob = await response.blob();
            if (disposed) return;
            videoUrl = URL.createObjectURL(blob);
            video.addEventListener(
              "canplay",
              () => {
                if (disposed) return;
                video.classList.add("is-ready");
                mark.classList.add("is-ready");
                void video.play().catch(() => {});
              },
              { once: true }
            );
            video.addEventListener("ended", scheduleReplay);
            video.src = videoUrl;
            video.load();
          } catch {
            // The static artwork remains as the fallback.
          }
        };

        const syncPlayback = () => {
          if (document.hidden) {
            video.pause();
            return;
          }
          if (video.ended) {
            if (replayTimer === null) scheduleReplay();
            return;
          }
          void video.play().catch(() => {});
        };
        document.addEventListener("visibilitychange", syncPlayback);
        void loadMark();
        void loadSmile();

        if (typeof ctx.inject === "function") ctx.inject(["theme"], applyTokens);
        else applyTokens(ctx);

        return () => {
          disposed = true;
          window.removeEventListener("resize", draw);
          document.removeEventListener("visibilitychange", syncPlayback);
          if (replayTimer !== null) {
            window.clearTimeout(replayTimer);
            replayTimer = null;
          }
          video.removeEventListener("ended", scheduleReplay);
          video.pause();
          video.removeAttribute("src");
          video.load();
          video.remove();
          mark.remove();
          if (videoUrl !== null) {
            URL.revokeObjectURL(videoUrl);
            videoUrl = null;
          }
          if (markUrl !== null) {
            URL.revokeObjectURL(markUrl);
            markUrl = null;
          }
          bitmap?.close?.();
          bitmap = null;
          canvas.remove();
          veil.remove();
          style.remove();
          body.removeAttribute(ATTR);
        };
      };

      if (typeof ctx.effect === "function") ctx.effect(install, "dsh-ayanami-theme: backdrop");
      else install();
    }

    exports.name = NAME;
    exports.apply = apply;
    return module.exports;
  }
});
