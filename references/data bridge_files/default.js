Eos = {
	addLoadEvent: function(f) {
		var oo = window.onload; 
		if (typeof window.onload != 'function') { 
			window.onload = f; 
		} else { 
			window.onload = function() { 
				if (oo) oo(); 
				f(); 
			} 
		} 
	},
	search: {
		d: null,
		init: function() {
			var s = document.getElementById('SearchQuery');
			Eos.search.d = s.value;
			s.onfocus = function() {
				if (this.value == Eos.search.d)
					this.value = '';
			};
			s.onblur = function() {
				if (this.value == '')
					this.value = Eos.search.d;
			}
		}
	},
	//Dropdown for IE6
	dd: function() {
		var els = document.getElementById("HeaderMenu").getElementsByTagName("LI");
		for (var i=0; i<els.length; i++) {
			els[i].onmouseover = function() {
				this.className += " jHover";
				this.style.zIndex = '2';
			};
			els[i].onmouseout = function() {
				this.className = this.className.replace(new RegExp(" jHover\\b"), "");
				this.style.zIndex = '1';
			};
		}

		var els = document.getElementById("HeaderSubMenu").getElementsByTagName("LI");
		for (var i=0; i<els.length; i++) {
			els[i].onmouseover = function() {
				this.className += " jHover";
				this.style.zIndex = '2';
			};
			els[i].onmouseout = function() {
				this.className = this.className.replace(new RegExp(" jHover\\b"), "");
				this.style.zIndex = '1';
			};
		}

	}
};

Eos.addLoadEvent(Eos.search.init);
Eos.addLoadEvent(Eos.dd);
