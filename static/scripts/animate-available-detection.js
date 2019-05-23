const AnimationAvailability = (function() {
    let animation_availibility = {
        onAvailable: function() {
            return {
                then: this._register,
                catch: this._register_error
            };
        },
        _register: function(callback) {
            if (callback && typeof callback === 'function') {
                this._callbacks.push(callback);
            }
            this._playback();
        },
        _register_error: function(callback) {
            if (callback && typeof callback === 'function') {
                this._error_callbacks.push(callback);
            }
            this._playback_error();
        },
        _report: function() {
            for (let i = 0; i < this._callbacks.length; i++) {
                this._callbacks[i]();
            }
            this._available = true;
            this._error = false;
            this._callbacks.length = 0;
            this._error_callbacks.length = 0;
        },
        _report_error: function() {
            for (let i = 0; i < this._error_callbacks.length; i++) {
                this._error_callbacks[i]();
            }
            this._available = false;
            this._error = true;
            this._callbacks.length = 0;
            this._error_callbacks.length = 0;
        },
        _playback: function() {
            if (this._available) {
                this._report();
            }
        },
        _playback_error: function() {
            if (this._error) {
                this._report_error();
            }
        },
        _available: false,
        _error: false,
        _callbacks: [],
        _error_callbacks: []
    };
    animation_availibility.onAvailable.bind(animation_availibility);
    animation_availibility._register.bind(animation_availibility);
    animation_availibility._register_error.bind(animation_availibility);
    animation_availibility._report.bind(animation_availibility);
    animation_availibility._report_error.bind(animation_availibility);

    const report_availability = function() {
        animation_availibility._report.apply(animation_availibility);
        window.removeEventListener('scroll', report_availability, false);
    }

    // Logic to detect animation availability
    let window_check = setInterval(function() {
        try {
            window.addEventListener('scroll', report_availability, false);
            clearInterval(window_check);
        } catch (error) {}
    }, 10);

    return animation_availibility;
})();
