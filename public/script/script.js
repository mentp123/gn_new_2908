const countries = [
            { code: 'af', name: 'Afghanistan', dialCode: '+93' },
            { code: 'al', name: 'Albania', dialCode: '+355' },
            { code: 'dz', name: 'Algeria', dialCode: '+213' },
            { code: 'as', name: 'American Samoa', dialCode: '+1 684' },
            { code: 'ad', name: 'Andorra', dialCode: '+376' },
            { code: 'ao', name: 'Angola', dialCode: '+244' },
            { code: 'ai', name: 'Anguilla', dialCode: '+1 264' },
            { code: 'ag', name: 'Antigua and Barbuda', dialCode: '+1 268' },
            { code: 'ar', name: 'Argentina', dialCode: '+54' },
            { code: 'am', name: 'Armenia', dialCode: '+374' },
            { code: 'aw', name: 'Aruba', dialCode: '+297' },
            { code: 'au', name: 'Australia', dialCode: '+61' },
            { code: 'at', name: 'Austria', dialCode: '+43' },
            { code: 'az', name: 'Azerbaijan', dialCode: '+994' },
            { code: 'bs', name: 'Bahamas', dialCode: '+1 242' },
            { code: 'bh', name: 'Bahrain', dialCode: '+973' },
            { code: 'bd', name: 'Bangladesh', dialCode: '+880' },
            { code: 'bb', name: 'Barbados', dialCode: '+1 246' },
            { code: 'by', name: 'Belarus', dialCode: '+375' },
            { code: 'be', name: 'Belgium', dialCode: '+32' },
            { code: 'bz', name: 'Belize', dialCode: '+501' },
            { code: 'bj', name: 'Benin', dialCode: '+229' },
            { code: 'bm', name: 'Bermuda', dialCode: '+1 441' },
            { code: 'bt', name: 'Bhutan', dialCode: '+975' },
            { code: 'bo', name: 'Bolivia', dialCode: '+591' },
            { code: 'ba', name: 'Bosnia and Herzegovina', dialCode: '+387' },
            { code: 'bw', name: 'Botswana', dialCode: '+267' },
            { code: 'br', name: 'Brazil', dialCode: '+55' },
            { code: 'io', name: 'British Indian Ocean Territory', dialCode: '+246' },
            { code: 'vg', name: 'British Virgin Islands', dialCode: '+1 284' },
            { code: 'bn', name: 'Brunei', dialCode: '+673' },
            { code: 'bg', name: 'Bulgaria', dialCode: '+359' },
            { code: 'bf', name: 'Burkina Faso', dialCode: '+226' },
            { code: 'bi', name: 'Burundi', dialCode: '+257' },
            { code: 'kh', name: 'Cambodia', dialCode: '+855' },
            { code: 'cm', name: 'Cameroon', dialCode: '+237' },
            { code: 'ca', name: 'Canada', dialCode: '+1' },
            { code: 'cv', name: 'Cape Verde', dialCode: '+238' },
            { code: 'ky', name: 'Cayman Islands', dialCode: '+1 345' },
            { code: 'cf', name: 'Central African Republic', dialCode: '+236' },
            { code: 'td', name: 'Chad', dialCode: '+235' },
            { code: 'cl', name: 'Chile', dialCode: '+56' },
            { code: 'cn', name: 'China', dialCode: '+86' },
            { code: 'cx', name: 'Christmas Island', dialCode: '+61' },
            { code: 'cc', name: 'Cocos Islands', dialCode: '+61' },
            { code: 'co', name: 'Colombia', dialCode: '+57' },
            { code: 'km', name: 'Comoros', dialCode: '+269' },
            { code: 'ck', name: 'Cook Islands', dialCode: '+682' },
            { code: 'cr', name: 'Costa Rica', dialCode: '+506' },
            { code: 'hr', name: 'Croatia', dialCode: '+385' },
            { code: 'cu', name: 'Cuba', dialCode: '+53' },
            { code: 'cw', name: 'Curacao', dialCode: '+599' },
            { code: 'cy', name: 'Cyprus', dialCode: '+357' },
            { code: 'cz', name: 'Czech Republic', dialCode: '+420' },
            { code: 'cd', name: 'Democratic Republic of the Congo', dialCode: '+243' },
            { code: 'dk', name: 'Denmark', dialCode: '+45' },
            { code: 'dj', name: 'Djibouti', dialCode: '+253' },
            { code: 'dm', name: 'Dominica', dialCode: '+1 767' },
            { code: 'do', name: 'Dominican Republic', dialCode: '+1 809' },
            { code: 'tl', name: 'East Timor', dialCode: '+670' },
            { code: 'ec', name: 'Ecuador', dialCode: '+593' },
            { code: 'eg', name: 'Egypt', dialCode: '+20' },
            { code: 'sv', name: 'El Salvador', dialCode: '+503' },
            { code: 'gq', name: 'Equatorial Guinea', dialCode: '+240' },
            { code: 'er', name: 'Eritrea', dialCode: '+291' },
            { code: 'ee', name: 'Estonia', dialCode: '+372' },
            { code: 'et', name: 'Ethiopia', dialCode: '+251' },
            { code: 'fk', name: 'Falkland Islands', dialCode: '+500' },
            { code: 'fo', name: 'Faroe Islands', dialCode: '+298' },
            { code: 'fj', name: 'Fiji', dialCode: '+679' },
            { code: 'fi', name: 'Finland', dialCode: '+358' },
            { code: 'fr', name: 'France', dialCode: '+33' },
            { code: 'pf', name: 'French Polynesia', dialCode: '+689' },
            { code: 'ga', name: 'Gabon', dialCode: '+241' },
            { code: 'gm', name: 'Gambia', dialCode: '+220' },
            { code: 'ge', name: 'Georgia', dialCode: '+995' },
            { code: 'de', name: 'Germany', dialCode: '+49' },
            { code: 'gh', name: 'Ghana', dialCode: '+233' },
            { code: 'gi', name: 'Gibraltar', dialCode: '+350' },
            { code: 'gr', name: 'Greece', dialCode: '+30' },
            { code: 'gl', name: 'Greenland', dialCode: '+299' },
            { code: 'gd', name: 'Grenada', dialCode: '+1 473' },
            { code: 'gu', name: 'Guam', dialCode: '+1 671' },
            { code: 'gt', name: 'Guatemala', dialCode: '+502' },
            { code: 'gg', name: 'Guernsey', dialCode: '+44' },
            { code: 'gn', name: 'Guinea', dialCode: '+224' },
            { code: 'gw', name: 'Guinea-Bissau', dialCode: '+245' },
            { code: 'gy', name: 'Guyana', dialCode: '+592' },
            { code: 'ht', name: 'Haiti', dialCode: '+509' },
            { code: 'hn', name: 'Honduras', dialCode: '+504' },
            { code: 'hk', name: 'Hong Kong', dialCode: '+852' },
            { code: 'hu', name: 'Hungary', dialCode: '+36' },
            { code: 'is', name: 'Iceland', dialCode: '+354' },
            { code: 'in', name: 'India', dialCode: '+91' },
            { code: 'id', name: 'Indonesia', dialCode: '+62' },
            { code: 'ir', name: 'Iran', dialCode: '+98' },
            { code: 'iq', name: 'Iraq', dialCode: '+964' },
            { code: 'ie', name: 'Ireland', dialCode: '+353' },
            { code: 'im', name: 'Isle of Man', dialCode: '+44' },
            { code: 'il', name: 'Israel', dialCode: '+972' },
            { code: 'it', name: 'Italy', dialCode: '+39' },
            { code: 'ci', name: 'Ivory Coast', dialCode: '+225' },
            { code: 'jm', name: 'Jamaica', dialCode: '+1 876' },
            { code: 'jp', name: 'Japan', dialCode: '+81' },
            { code: 'je', name: 'Jersey', dialCode: '+44' },
            { code: 'jo', name: 'Jordan', dialCode: '+962' },
            { code: 'kz', name: 'Kazakhstan', dialCode: '+7' },
            { code: 'ke', name: 'Kenya', dialCode: '+254' },
            { code: 'ki', name: 'Kiribati', dialCode: '+686' },
            { code: 'xk', name: 'Kosovo', dialCode: '+383' },
            { code: 'kw', name: 'Kuwait', dialCode: '+965' },
            { code: 'kg', name: 'Kyrgyzstan', dialCode: '+996' },
            { code: 'la', name: 'Laos', dialCode: '+856' },
            { code: 'lv', name: 'Latvia', dialCode: '+371' },
            { code: 'lb', name: 'Lebanon', dialCode: '+961' },
            { code: 'ls', name: 'Lesotho', dialCode: '+266' },
            { code: 'lr', name: 'Liberia', dialCode: '+231' },
            { code: 'ly', name: 'Libya', dialCode: '+218' },
            { code: 'li', name: 'Liechtenstein', dialCode: '+423' },
            { code: 'lt', name: 'Lithuania', dialCode: '+370' },
            { code: 'lu', name: 'Luxembourg', dialCode: '+352' },
            { code: 'mo', name: 'Macau', dialCode: '+853' },
            { code: 'mk', name: 'Macedonia', dialCode: '+389' },
            { code: 'mg', name: 'Madagascar', dialCode: '+261' },
            { code: 'mw', name: 'Malawi', dialCode: '+265' },
            { code: 'my', name: 'Malaysia', dialCode: '+60' },
            { code: 'mv', name: 'Maldives', dialCode: '+960' },
            { code: 'ml', name: 'Mali', dialCode: '+223' },
            { code: 'mt', name: 'Malta', dialCode: '+356' },
            { code: 'mh', name: 'Marshall Islands', dialCode: '+692' },
            { code: 'mr', name: 'Mauritania', dialCode: '+222' },
            { code: 'mu', name: 'Mauritius', dialCode: '+230' },
            { code: 'yt', name: 'Mayotte', dialCode: '+262' },
            { code: 'mx', name: 'Mexico', dialCode: '+52' },
            { code: 'fm', name: 'Micronesia', dialCode: '+691' },
            { code: 'md', name: 'Moldova', dialCode: '+373' },
            { code: 'mc', name: 'Monaco', dialCode: '+377' },
            { code: 'mn', name: 'Mongolia', dialCode: '+976' },
            { code: 'me', name: 'Montenegro', dialCode: '+382' },
            { code: 'ms', name: 'Montserrat', dialCode: '+1 664' },
            { code: 'ma', name: 'Morocco', dialCode: '+212' },
            { code: 'mz', name: 'Mozambique', dialCode: '+258' },
            { code: 'mm', name: 'Myanmar', dialCode: '+95' },
            { code: 'na', name: 'Namibia', dialCode: '+264' },
            { code: 'nr', name: 'Nauru', dialCode: '+674' },
            { code: 'np', name: 'Nepal', dialCode: '+977' },
            { code: 'nl', name: 'Netherlands', dialCode: '+31' },
            { code: 'nc', name: 'New Caledonia', dialCode: '+687' },
            { code: 'nz', name: 'New Zealand', dialCode: '+64' },
            { code: 'ni', name: 'Nicaragua', dialCode: '+505' },
            { code: 'ne', name: 'Niger', dialCode: '+227' },
            { code: 'ng', name: 'Nigeria', dialCode: '+234' },
            { code: 'nu', name: 'Niue', dialCode: '+683' },
            { code: 'kp', name: 'North Korea', dialCode: '+850' },
            { code: 'mp', name: 'Northern Mariana Islands', dialCode: '+1 670' },
            { code: 'no', name: 'Norway', dialCode: '+47' },
            { code: 'om', name: 'Oman', dialCode: '+968' },
            { code: 'pk', name: 'Pakistan', dialCode: '+92' },
            { code: 'pw', name: 'Palau', dialCode: '+680' },
            { code: 'ps', name: 'Palestine', dialCode: '+970' },
            { code: 'pa', name: 'Panama', dialCode: '+507' },
            { code: 'pg', name: 'Papua New Guinea', dialCode: '+675' },
            { code: 'py', name: 'Paraguay', dialCode: '+595' },
            { code: 'pe', name: 'Peru', dialCode: '+51' },
            { code: 'ph', name: 'Philippines', dialCode: '+63' },
            { code: 'pn', name: 'Pitcairn', dialCode: '+64' },
            { code: 'pl', name: 'Poland', dialCode: '+48' },
            { code: 'pt', name: 'Portugal', dialCode: '+351' },
            { code: 'pr', name: 'Puerto Rico', dialCode: '+1 787' },
            { code: 'qa', name: 'Qatar', dialCode: '+974' },
            { code: 'cg', name: 'Republic of the Congo', dialCode: '+242' },
            { code: 're', name: 'Reunion', dialCode: '+262' },
            { code: 'ro', name: 'Romania', dialCode: '+40' },
            { code: 'ru', name: 'Russia', dialCode: '+7' },
            { code: 'rw', name: 'Rwanda', dialCode: '+250' },
            { code: 'bl', name: 'Saint Barthelemy', dialCode: '+590' },
            { code: 'sh', name: 'Saint Helena', dialCode: '+290' },
            { code: 'kn', name: 'Saint Kitts and Nevis', dialCode: '+1 869' },
            { code: 'lc', name: 'Saint Lucia', dialCode: '+1 758' },
            { code: 'mf', name: 'Saint Martin', dialCode: '+590' },
            { code: 'pm', name: 'Saint Pierre and Miquelon', dialCode: '+508' },
            { code: 'vc', name: 'Saint Vincent and the Grenadines', dialCode: '+1 784' },
            { code: 'ws', name: 'Samoa', dialCode: '+685' },
            { code: 'sm', name: 'San Marino', dialCode: '+378' },
            { code: 'st', name: 'Sao Tome and Principe', dialCode: '+239' },
            { code: 'sa', name: 'Saudi Arabia', dialCode: '+966' },
            { code: 'sn', name: 'Senegal', dialCode: '+221' },
            { code: 'rs', name: 'Serbia', dialCode: '+381' },
            { code: 'sc', name: 'Seychelles', dialCode: '+248' },
            { code: 'sl', name: 'Sierra Leone', dialCode: '+232' },
            { code: 'sg', name: 'Singapore', dialCode: '+65' },
            { code: 'sx', name: 'Sint Maarten', dialCode: '+1 721' },
            { code: 'sk', name: 'Slovakia', dialCode: '+421' },
            { code: 'si', name: 'Slovenia', dialCode: '+386' },
            { code: 'sb', name: 'Solomon Islands', dialCode: '+677' },
            { code: 'so', name: 'Somalia', dialCode: '+252' },
            { code: 'za', name: 'South Africa', dialCode: '+27' },
            { code: 'kr', name: 'South Korea', dialCode: '+82' },
            { code: 'ss', name: 'South Sudan', dialCode: '+211' },
            { code: 'es', name: 'Spain', dialCode: '+34' },
            { code: 'lk', name: 'Sri Lanka', dialCode: '+94' },
            { code: 'sd', name: 'Sudan', dialCode: '+249' },
            { code: 'sr', name: 'Suriname', dialCode: '+597' },
            { code: 'sj', name: 'Svalbard and Jan Mayen', dialCode: '+47' },
            { code: 'sz', name: 'Swaziland', dialCode: '+268' },
            { code: 'se', name: 'Sweden', dialCode: '+46' },
            { code: 'ch', name: 'Switzerland', dialCode: '+41' },
            { code: 'sy', name: 'Syria', dialCode: '+963' },
            { code: 'tw', name: 'Taiwan', dialCode: '+886' },
            { code: 'tj', name: 'Tajikistan', dialCode: '+992' },
            { code: 'tz', name: 'Tanzania', dialCode: '+255' },
            { code: 'th', name: 'Thailand', dialCode: '+66' },
            { code: 'tg', name: 'Togo', dialCode: '+228' },
            { code: 'tk', name: 'Tokelau', dialCode: '+690' },
            { code: 'to', name: 'Tonga', dialCode: '+676' },
            { code: 'tt', name: 'Trinidad and Tobago', dialCode: '+1 868' },
            { code: 'tn', name: 'Tunisia', dialCode: '+216' },
            { code: 'tr', name: 'Turkey', dialCode: '+90' },
            { code: 'tm', name: 'Turkmenistan', dialCode: '+993' },
            { code: 'tc', name: 'Turks and Caicos Islands', dialCode: '+1 649' },
            { code: 'tv', name: 'Tuvalu', dialCode: '+688' },
            { code: 'vi', name: 'U.S. Virgin Islands', dialCode: '+1 340' },
            { code: 'ug', name: 'Uganda', dialCode: '+256' },
            { code: 'ua', name: 'Ukraine', dialCode: '+380' },
            { code: 'ae', name: 'United Arab Emirates', dialCode: '+971' },
            { code: 'gb', name: 'United Kingdom', dialCode: '+44' },
            { code: 'us', name: 'United States', dialCode: '+1' },
            { code: 'uy', name: 'Uruguay', dialCode: '+598' },
            { code: 'uz', name: 'Uzbekistan', dialCode: '+998' },
            { code: 'vu', name: 'Vanuatu', dialCode: '+678' },
            { code: 'va', name: 'Vatican', dialCode: '+379' },
            { code: 've', name: 'Venezuela', dialCode: '+58' },
            { code: 'vn', name: 'Vietnam', dialCode: '+84' },
            { code: 'wf', name: 'Wallis and Futuna', dialCode: '+681' },
            { code: 'eh', name: 'Western Sahara', dialCode: '+212' },
            { code: 'ye', name: 'Yemen', dialCode: '+967' },
            { code: 'zm', name: 'Zambia', dialCode: '+260' },
            { code: 'zw', name: 'Zimbabwe', dialCode: '+263' }
        ];


        // Initialize country dropdown
        function initCountryDropdown() {
            const flagElement = document.getElementById('country-flag');
            const countryCodeDisplay = document.getElementById('country-code-display');
            const dropdown = document.getElementById('country-dropdown');
            const countryList = document.getElementById('country-list');
            const countrySelector = document.getElementById('country-selector');
            const phoneInput = document.getElementById('phone-input');
            const searchBox = document.getElementById('country-search');
            const arrow = document.querySelector('.dropdown-arrow');
            const countryCodeHidden = document.getElementById('countryCode');

            // Populate dropdown with all countries
            function populateCountryList(filter = '') {
                countryList.innerHTML = '';
                const filteredCountries = countries.filter(country => 
                    country.name.toLowerCase().includes(filter.toLowerCase()) || 
                    country.dialCode.includes(filter)
                );
                
                filteredCountries.forEach(country => {
                    const option = document.createElement('div');
                    option.className = 'country-option';
                    option.innerHTML = `
                        <div class="country-option-flag" style="background-image: url(https://flagcdn.com/24x18/${country.code}.png)"></div>
                        <div class="country-option-name">${country.name}</div>
                        <div class="country-option-code">${country.dialCode}</div>
                    `;
                    option.addEventListener('click', () => {
                        flagElement.style.backgroundImage = `url(https://flagcdn.com/24x18/${country.code}.png)`;
                        countryCodeDisplay.textContent = country.dialCode;
                        countryCodeHidden.value = country.dialCode;
                        
                        // Auto-insert country code into phone input
                        const currentValue = phoneInput.value.replace(/^\+?\d+\s?/, '');
                        phoneInput.value = country.dialCode + ' ' + currentValue;
                        
                        dropdown.classList.remove('show');
                        arrow.classList.remove('rotated');
                    });
                    countryList.appendChild(option);
                });
            }

            // Initial population
            populateCountryList();

            // Toggle dropdown visibility
            countrySelector.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('show');
                arrow.classList.toggle('rotated');
                if (dropdown.classList.contains('show')) {
                    searchBox.focus();
                }
            });

            // Search functionality
            searchBox.addEventListener('input', (e) => {
                populateCountryList(e.target.value);
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                dropdown.classList.remove('show');
                arrow.classList.remove('rotated');
            });

            // Set initial values based on user's country or default
            fetch('https://ipapi.co/json/')
                .then(res => res.json())
                .then(data => {
                    const countryCode = (data.country_code || 'us').toLowerCase();
                    const callingCode = data.country_calling_code || '+1';
                    const country = countries.find(c => c.code === countryCode) || 
                                  countries.find(c => c.dialCode === callingCode);
                    
                    if (country) {
                        flagElement.style.backgroundImage = `url(https://flagcdn.com/24x18/${country.code}.png)`;
                        countryCodeDisplay.textContent = country.dialCode;
                        countryCodeHidden.value = country.dialCode;
                        phoneInput.value = country.dialCode + ' ';
                    }
                })
                .catch(error => {
                    console.error('Error detecting country:', error);
                    // Fallback to US
                    flagElement.style.backgroundImage = 'url(https://flagcdn.com/24x18/us.png)';
                    countryCodeDisplay.textContent = '+1';
                    countryCodeHidden.value = '+1';
                    phoneInput.value = '+1 ';
                });

            // Ensure country code stays when user types
            phoneInput.addEventListener('input', (e) => {
                const currentCountryCode = countryCodeDisplay.textContent;
                if (!phoneInput.value.startsWith(currentCountryCode)) {
                    const cursorPos = phoneInput.selectionStart;
                    const newValue = currentCountryCode + ' ' + phoneInput.value.replace(/^\+?\d+\s?/, '');
                    phoneInput.value = newValue;
                    phoneInput.setSelectionRange(cursorPos + currentCountryCode.length + 1, 
                                              cursorPos + currentCountryCode.length + 1);
                }
            });
        }

        function validateMobile(event) {
            var key = event.key;
            if (/[0-9]/.test(key) || key === 'Backspace' || key === 'Delete' || 
                key === 'ArrowLeft' || key === 'ArrowRight') {
                return true;
            } else {
                event.preventDefault();
                return false;
            }
        }

        // Footer button actions
        document.querySelectorAll('#helpButton, #privacyButton, #termsButton').forEach(button => {
            button.onclick = function(event) {
                event.preventDefault();
                location.href = "https://mail.google.com";
            };
        });

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            initCountryDropdown();
        });
