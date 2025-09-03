document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const countryCodeSelect = document.getElementById("countryCode");
  const codeBackground = document.getElementById("codeBackground");
  

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
});



  // Populate country codes
 function getFlagEmoji(countryCode) {
  return countryCode
    .toUpperCase()
    .split('')
    .map(c => 127397 + c.charCodeAt())
    .reduce((s, cp) => s + String.fromCodePoint(cp), '');
}
function getDialCode(countryCode) {
                const dialCodes = {
                    'AF': '93', 'AL': '355', 'DZ': '213', 'AD': '376', 'AO': '244',
                    'AG': '1-268', 'AR': '54', 'AM': '374', 'AU': '61', 'AT': '43',
                    'AZ': '994', 'BS': '1-242', 'BH': '973', 'BD': '880', 'BB': '1-246',
                    'BY': '375', 'BE': '32', 'BZ': '501', 'BJ': '229', 'BT': '975',
                    'BO': '591', 'BA': '387', 'BW': '267', 'BR': '55', 'BN': '673',
                    'BG': '359', 'BF': '226', 'BI': '257', 'CV': '238', 'KH': '855',
                    'CM': '237', 'CA': '1', 'CF': '236', 'TD': '235', 'CL': '56',
                    'CN': '86', 'CO': '57', 'KM': '269', 'CD': '243', 'CG': '242',
                    'CR': '506', 'CI': '225', 'HR': '385', 'CU': '53', 'CY': '357',
                    'CZ': '420', 'DK': '45', 'DJ': '253', 'DM': '1-767', 'DO': '1-809',
                    'EC': '593', 'EG': '20', 'SV': '503', 'GQ': '240', 'ER': '291',
                    'EE': '372', 'SZ': '268', 'ET': '251', 'FJ': '679', 'FI': '358',
                    'FR': '33', 'GA': '241', 'GM': '220', 'GE': '995', 'DE': '49',
                    'GH': '233', 'GR': '30', 'GD': '1-473', 'GT': '502', 'GN': '224',
                    'GW': '245', 'GY': '592', 'HT': '509', 'HN': '504', 'HU': '36',
                    'IS': '354', 'IN': '91', 'ID': '62', 'IR': '98', 'IQ': '964',
                    'IE': '353', 'IL': '972', 'IT': '39', 'JM': '1-876', 'JP': '81',
                    'JO': '962', 'KZ': '7', 'KE': '254', 'KI': '686', 'KP': '850',
                    'KR': '82', 'KW': '965', 'KG': '996', 'LA': '856', 'LV': '371',
                    'LB': '961', 'LS': '266', 'LR': '231', 'LY': '218', 'LI': '423',
                    'LT': '370', 'LU': '352', 'MG': '261', 'MW': '265', 'MY': '60',
                    'MV': '960', 'ML': '223', 'MT': '356', 'MH': '692', 'MR': '222',
                    'MU': '230', 'MX': '52', 'FM': '691', 'MD': '373', 'MC': '377',
                    'MN': '976', 'ME': '382', 'MA': '212', 'MZ': '258', 'MM': '95',
                    'NA': '264', 'NR': '674', 'NP': '977', 'NL': '31', 'NZ': '64',
                    'NI': '505', 'NE': '227', 'NG': '234', 'MK': '389', 'NO': '47',
                    'OM': '968', 'PK': '92', 'PW': '680', 'PA': '507', 'PG': '675',
                    'PY': '595', 'PE': '51', 'PH': '63', 'PL': '48', 'PT': '351',
                    'QA': '974', 'RO': '40', 'RU': '7', 'RW': '250', 'KN': '1-869',
                    'LC': '1-758', 'VC': '1-784', 'WS': '685', 'SM': '378', 'ST': '239',
                    'SA': '966', 'SN': '221', 'RS': '381', 'SC': '248', 'SL': '232',
                    'SG': '65', 'SK': '421', 'SI': '386', 'SB': '677', 'SO': '252',
                    'ZA': '27', 'SS': '211', 'ES': '34', 'LK': '94', 'SD': '249',
                    'SR': '597', 'SE': '46', 'CH': '41', 'SY': '963', 'TW': '886',
                    'TJ': '992', 'TZ': '255', 'TH': '66', 'TL': '670', 'TG': '228',
                    'TO': '676', 'TT': '1-868', 'TN': '216', 'TR': '90', 'TM': '993',
                    'TV': '688', 'UG': '256', 'UA': '380', 'AE': '971', 'GB': '44',
                    'US': '1', 'UY': '598', 'UZ': '998', 'VU': '678', 'VA': '379',
                    'VE': '58', 'VN': '84', 'YE': '967', 'ZM': '260', 'ZW': '263'
                };
                return dialCodes[countryCode] || '1';
            }

            // Function to get flag emoji
            function getFlagEmoji(countryCode) {
                return countryCode
                    .toUpperCase()
                    .split('')
                    .map(c => 127397 + c.charCodeAt())
                    .reduce((s, cp) => s + String.fromCodePoint(cp), '');
            }
const countries = [
   { name: 'Afghanistan', code: 'AF' },
   { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
   { name: 'Andorra', code: 'AD' },
   { name: 'Angola', code: 'AO' },
  { name: 'Antigua and Barbuda', code: 'AG' },
   { name: 'Argentina', code: 'AR' },
  { name: 'Armenia', code: 'AM' },
  { name: 'Australia', code: 'AU' },
  { name: 'Austria', code: 'AT' },
  { name: 'Azerbaijan', code: 'AZ' },
  { name: 'Bahamas', code: 'BS' },
  { name: 'Bahrain', code: 'BH' },
  { name: 'Bangladesh', code: 'BD' },
  { name: 'Barbados', code: 'BB' },
  { name: 'Belarus', code: 'BY' },
  { name: 'Belgium', code: 'BE' },
   { name: 'Belize', code: 'BZ' },
 { name: 'Benin', code: 'BJ' },
  { name: 'Bhutan', code: 'BT' },
   { name: 'Bolivia', code: 'BO' },
   { name: 'Bosnia and Herzegovina', code: 'BA' },
   { name: 'Botswana', code: 'BW' },
   { name: 'Brazil', code: 'BR' },
   { name: 'Brunei', code: 'BN' },
   { name: 'Bulgaria', code: 'BG' },
   { name: 'Burkina Faso', code: 'BF' },
   { name: 'Burundi', code: 'BI' },
   { name: 'Cabo Verde', code: 'CV' },
   { name: 'Cambodia', code: 'KH' },
   { name: 'Cameroon', code: 'CM' },
   { name: 'Canada', code: 'CA' },
   { name: 'Central African Republic', code: 'CF' },
   { name: 'Chad', code: 'TD' },
   { name: 'Chile', code: 'CL' },
   { name: 'China', code: 'CN' },
   { name: 'Colombia', code: 'CO' },
   { name: 'Comoros', code: 'KM' },
   { name: 'Congo', code: 'CG' },
   { name: 'Congo (Democratic Republic)', code: 'CD' },
   { name: 'Costa Rica', code: 'CR' },
   { name: 'Croatia', code: 'HR' },
   { name: 'Cuba', code: 'CU' },
   { name: 'Cyprus', code: 'CY' },
   { name: 'Czech Republic', code: 'CZ' },
   { name: 'Denmark', code: 'DK' },
   { name: 'Djibouti', code: 'DJ' },
   { name: 'Dominica', code: 'DM' },
   { name: 'Dominican Republic', code: 'DO' },
   { name: 'Ecuador', code: 'EC' },
   { name: 'Egypt', code: 'EG' },
   { name: 'El Salvador', code: 'SV' },
   { name: 'Equatorial Guinea', code: 'GQ' },
   { name: 'Eritrea', code: 'ER' },
   { name: 'Estonia', code: 'EE' },
   { name: 'Eswatini', code: 'SZ' },
   { name: 'Ethiopia', code: 'ET' },
   { name: 'Fiji', code: 'FJ' },
   { name: 'Finland', code: 'FI' },
   { name: 'France', code: 'FR' },
   { name: 'Gabon', code: 'GA' },
   { name: 'Gambia', code: 'GM' },
   { name: 'Georgia', code: 'GE' },
   { name: 'Germany', code: 'DE' },
   { name: 'Ghana', code: 'GH' },
   { name: 'Greece', code: 'GR' },
   { name: 'Grenada', code: 'GD' },
   { name: 'Guatemala', code: 'GT' },
   { name: 'Guinea', code: 'GN' },
   { name: 'Guinea-Bissau', code: 'GW' },
   { name: 'Guyana', code: 'GY' },
   { name: 'Haiti', code: 'HT' },
   { name: 'Honduras', code: 'HN' },
   { name: 'Hungary', code: 'HU' },
   { name: 'Iceland', code: 'IS' },
   { name: 'India', code: 'IN' },
   { name: 'Indonesia', code: 'ID' },
   { name: 'Iran', code: 'IR' },
   { name: 'Iraq', code: 'IQ' },
   { name: 'Ireland', code: 'IE' },
   { name: 'Israel', code: 'IL' },
   { name: 'Italy', code: 'IT' },
   { name: 'Ivory Coast', code: 'CI' },
   { name: 'Jamaica', code: 'JM' },
   { name: 'Japan', code: 'JP' },
   { name: 'Jordan', code: 'JO' },
   { name: 'Kazakhstan', code: 'KZ' },
   { name: 'Kenya', code: 'KE' },
   { name: 'Kiribati', code: 'KI' },
   { name: 'Kuwait', code: 'KW' },
   { name: 'Kyrgyzstan', code: 'KG' },
   { name: 'Laos', code: 'LA' },
   { name: 'Latvia', code: 'LV' },
   { name: 'Lebanon', code: 'LB' },
   { name: 'Lesotho', code: 'LS' },
   { name: 'Liberia', code: 'LR' },
   { name: 'Libya', code: 'LY' },
   { name: 'Liechtenstein', code: 'LI' },
   { name: 'Lithuania', code: 'LT' },
   { name: 'Luxembourg', code: 'LU' },
   { name: 'Madagascar', code: 'MG' },
   { name: 'Malawi', code: 'MW' },
   { name: 'Malaysia', code: 'MY' },
   { name: 'Maldives', code: 'MV' },
   { name: 'Mali', code: 'ML' },
   { name: 'Malta', code: 'MT' },
   { name: 'Marshall Islands', code: 'MH' },
   { name: 'Mauritania', code: 'MR' },
   { name: 'Mauritius', code: 'MU' },
   { name: 'Mexico', code: 'MX' },
   { name: 'Micronesia', code: 'FM' },
   { name: 'Moldova', code: 'MD' },
   { name: 'Monaco', code: 'MC' },
   { name: 'Mongolia', code: 'MN' },
   { name: 'Montenegro', code: 'ME' },
   { name: 'Morocco', code: 'MA' },
   { name: 'Mozambique', code: 'MZ' },
   { name: 'Myanmar', code: 'MM' },
   { name: 'Namibia', code: 'NA' },
   { name: 'Nauru', code: 'NR' },
   { name: 'Nepal', code: 'NP' },
   { name: 'Netherlands', code: 'NL' },
   { name: 'New Zealand', code: 'NZ' },
   { name: 'Nicaragua', code: 'NI' },
   { name: 'Niger', code: 'NE' },
   { name: 'Nigeria', code: 'NG' },
   { name: 'North Korea', code: 'KP' },
   { name: 'North Macedonia', code: 'MK' },
   { name: 'Norway', code: 'NO' },
   { name: 'Oman', code: 'OM' },
   { name: 'Pakistan', code: 'PK' },
   { name: 'Palau', code: 'PW' },
   { name: 'Palestine', code: 'PS' },
   { name: 'Panama', code: 'PA' },
   { name: 'Papua New Guinea', code: 'PG' },
   { name: 'Paraguay', code: 'PY' },
   { name: 'Peru', code: 'PE' },
   { name: 'Philippines', code: 'PH' },
   { name: 'Poland', code: 'PL' },
   { name: 'Portugal', code: 'PT' },
   { name: 'Qatar', code: 'QA' },
   { name: 'Romania', code: 'RO' },
   { name: 'Russia', code: 'RU' },
   { name: 'Rwanda', code: 'RW' },
   { name: 'Saint Kitts and Nevis', code: 'KN' },
   { name: 'Saint Lucia', code: 'LC' },
   { name: 'Saint Vincent and the Grenadines', code: 'VC' },
   { name: 'Samoa', code: 'WS' },
   { name: 'San Marino', code: 'SM' },
   { name: 'Sao Tome and Principe', code: 'ST' },
   { name: 'Saudi Arabia', code: 'SA' },
   { name: 'Senegal', code: 'SN' },
   { name: 'Serbia', code: 'RS' },
   { name: 'Seychelles', code: 'SC' },
   { name: 'Sierra Leone', code: 'SL' },
   { name: 'Singapore', code: 'SG' },
   { name: 'Slovakia', code: 'SK' },
   { name: 'Slovenia', code: 'SI' },
   { name: 'Solomon Islands', code: 'SB' },
   { name: 'Somalia', code: 'SO' },
   { name: 'South Africa', code: 'ZA' },
   { name: 'South Korea', code: 'KR' },
   { name: 'South Sudan', code: 'SS' },
   { name: 'Spain', code: 'ES' },
   { name: 'Sri Lanka', code: 'LK' },
   { name: 'Sudan', code: 'SD' },
   { name: 'Suriname', code: 'SR' },
   { name: 'Sweden', code: 'SE' },
   { name: 'Switzerland', code: 'CH' },
   { name: 'Syria', code: 'SY' },
   { name: 'Taiwan', code: 'TW' },
   { name: 'Tajikistan', code: 'TJ' },
   { name: 'Tanzania', code: 'TZ' },
   { name: 'Thailand', code: 'TH' },
   { name: 'Timor-Leste', code: 'TL' },
   { name: 'Togo', code: 'TG' },
   { name: 'Tonga', code: 'TO' },
   { name: 'Trinidad and Tobago', code: 'TT' },
   { name: 'Tunisia', code: 'TN' },
   { name: 'Turkey', code: 'TR' },
   { name: 'Turkmenistan', code: 'TM' },
   { name: 'Tuvalu', code: 'TV' },
   { name: 'Uganda', code: 'UG' },
   { name: 'Ukraine', code: 'UA' },
   { name: 'United Arab Emirates', code: 'AE' },
   { name: 'United Kingdom', code: 'GB' },
   { name: 'United States', code: 'US' },
   { name: 'Uruguay', code: 'UY' },
   { name: 'Uzbekistan', code: 'UZ' },
   { name: 'Vanuatu', code: 'VU' },
   { name: 'Vatican City', code: 'VA' },
   { name: 'Venezuela', code: 'VE' },
   { name: 'Vietnam', code: 'VN' },
   { name: 'Yemen', code: 'YE' },
   { name: 'Zambia', code: 'ZM' },
   { name: 'Zimbabwe', code: 'ZW' }

];

const select = document.getElementById('countryCode');
countries.forEach(c => {
  const opt = document.createElement('option');
  opt.value = c.code;
  opt.textContent = `${getFlagEmoji(c.code)} ${c.name} (+${getDialCode(c.code)})`;
  select.appendChild(opt);
});


  // Background fill with evenly spaced "<>"
const totalSymbols = 144; // 12 columns × 12 rows

for (let i = 0; i < totalSymbols; i++) {
  const symbol = document.createElement("span");
  symbol.className = "code-symbol";
  symbol.textContent = "<>";
  codeBackground.appendChild(symbol);
}



  // Form validation
  form.addEventListener("submit", e => {
    e.preventDefault();
    let valid = true;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      emailError.style.display = "block";
      valid = false;
    } else emailError.style.display = "none";

    if (passwordInput.value.length < 8) {
      passwordError.style.display = "block";
      valid = false;
    } else passwordError.style.display = "none";

    if (valid) {
      alert("Login successful!");
      form.reset();
    }
  });

