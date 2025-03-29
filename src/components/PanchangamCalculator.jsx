import React, { useState } from 'react';
import { Check, AlertCircle, Star, Moon, Calendar, Clock, Award, Info, ChevronDown, ChevronUp } from 'lucide-react';

const PanchangamCalculator = () => {
  const translations = {
    title: "🔱 ஓம் மகா கணபதி நம: 🔱",
    subtitle: "✨ பஞ்சாங்க முகூர்த்த கணிப்பு ✨",
    thithi: "திதி",
    varam: "வாரம்",
    nakshatra: "இன்றைய நட்சத்திரம்",
    birthStar: "ஜென்ம நட்சத்திரம்",
    lagna: "லக்கினம்",
    birthMoon: "ஜென்ம ராசி",
    currentMoon: "இன்றைய ராசி",
    timeOfDay: "நேரம்",
    day: "பகல்",
    night: "இரவு",
    calculate: "🔍 கணக்கிடு",
    reset: "🔄 மீட்டமை",
    results: "📜 முடிவுகள்",
    summary: "📊 சுருக்கமான முடிவுகள்",
    taraBala: "⭐ தாரா பலம்",
    chandraBala: "🌙 சந்திர பலம்",
    pachakam: "📆 பஞ்சகம்",
    auspicious: "✅ சுப முகூர்த்தம்",
    notAuspicious: "❌ சுபம் இல்லை",
    chandrashtama: "⚠️ சந்திராஷ்டமம் ⚠️",
    inputSummary: "📋 உள்ளீடு விவரங்கள்",
    nakshatraNumber: "நட்சத்திர எண்",
    rashiNumber: "ராசி எண்",
    dhruvaNumber: "துருவ எண்",
    lagnaNumber: "லக்ன எண்",
    parikaram: "பரிகாரம்",
    parikarams: "⚠️ பரிகாரங்கள்",
    compatibility: "இணக்கம்",
    calculation: "கணக்கீடு",
    status: "நிலை",
    numbers: "எண்கள்",
    overallResult: "📊 முடிவு",
    showMore: "மேலும் விவரங்கள் காட்டு",
    hideDetails: "விவரங்களை மறைக்க",
    benefic: "சுபம்",
    malefic: "அசுபம்",
    position: "நிலை",
    remainder: "மிகுதி"
  };

  const nakshatras = [
    "அஸ்வினி", "பரணி", "கார்த்திகை", "ரோகிணி", "மிருகசீரிஷம்", "திருவாதிரை",
    "புனர்பூசம்", "பூசம்", "ஆயில்யம்", "மகம்", "பூரம்", "உத்திரம்",
    "அஸ்தம்", "சித்திரை", "சுவாதி", "விசாகம்", "அனுஷம்", "கேட்டை",
    "மூலம்", "பூராடம்", "உத்திராடம்", "திருவோணம்", "அவிட்டம்", "சதயம்",
    "பூரட்டாதி", "உத்திரட்டாதி", "ரேவதி"
  ];
  
  const rashis = [
    "மேஷம்", "ரிஷபம்", "மிதுனம்", "கடகம்", "சிம்மம்", "கன்னி",
    "துலாம்", "விருச்சிகம்", "தனுசு", "மகரம்", "கும்பம்", "மீனம்"
  ];

  const lagnaDhruvaValues = {
    "மேஷம்": "5",
    "ரிஷபம்": "7",
    "மிதுனம்": "0",
    "கடகம்": "0",
    "சிம்மம்": "0",
    "கன்னி": "0",
    "துலாம்": "0",
    "விருச்சிகம்": "0",
    "தனுசு": "0",
    "மகரம்": "2",
    "கும்பம்": "4",
    "மீனம்": "6"
  };

  const lagnas = [...rashis];
  
  const varams = [
    "ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"
  ];
  
  const thithis = [
    "பிரதமை", "துவிதியை", "திருதியை", "சதுர்த்தி", "பஞ்சமி", 
    "சஷ்டி", "சப்தமி", "அஷ்டமி", "நவமி", "தசமி",
    "ஏகாதசி", "துவாதசி", "திரயோதசி", "சதுர்தசி", "பௌர்ணமி/அமாவாசை"
  ];

  const panchagamParikaras = {
    1: "மிரிது பஞ்சகம் - பரிகாரம்: ரத்தின தானம்",
    2: "அக்னி பஞ்சகம் - பரிகாரம்: சந்தன தானம்",
    4: "ராஜ பஞ்சகம் - பரிகாரம்: எலுமிச்சை தானம்",
    6: "சோர பஞ்சகம் - பரிகாரம்: தீப தானம்",
    8: "ரோக பஞ்சகம் - பரிகாரம்: தான்ய தானம்"
  };

  const [values, setValues] = useState({
    thithi: '',
    varam: '',
    nakshatra: '',
    janmaNakshatra: '',
    lagna: '',
    janmaRashi: '',
    timeOfDay: 'day',
    currentRashi: ''
  });

  const [results, setResults] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setValues({
      thithi: '',
      varam: '',
      nakshatra: '',
      janmaNakshatra: '',
      lagna: '',
      janmaRashi: '',
      timeOfDay: 'day',
      currentRashi: ''
    });
    setResults(null);
    setShowDetails(false);
  };

  const calculateTaraBala = (janmaNakshatra, currentNakshatra) => {
    if (!janmaNakshatra || !currentNakshatra) return { isAuspicious: false };
    
    const janmaIndex = nakshatras.indexOf(janmaNakshatra);
    const currentIndex = nakshatras.indexOf(currentNakshatra);
    
    // Position calculation - handling edge cases correctly
    const position = (currentIndex - janmaIndex + 27) % 27 + 1;
    const nakshatraNumber1 = janmaIndex + 1;
    const nakshatraNumber2 = currentIndex + 1;
    
    // Calculate remainder when divided by 9
    const remainder = position % 9 || 9; // If remainder is 0, use 9 instead
    
    // Define benefic, malefic, and neutral stars based on remainder
    const beneficRemainders = [2, 4, 8, 9]; // Benefic (Shubha)
    const maleficRemainders = [3, 5, 7];    // Malefic (Ashubha)
    const neutralRemainders = [1, 6];      // Neutral (Samata)
    
    const chandrashtamaNakshatra = 17; // The 17th nakshatra from birth star is highly malefic
    
    let status = '';
    let isAuspicious = false;
    let compatibilityInfo = '';
    const isChandrashtamaNakshatra = position === chandrashtamaNakshatra;

    if (isChandrashtamaNakshatra) {
      status = 'சந்திராஷ்டம நட்சத்திரம் (17-வது நிலை) - மிகவும் அசுபம்';
      isAuspicious = false;
      compatibilityInfo = 'ஜென்ம நட்சத்திரத்திலிருந்து 17-வது நட்சத்திரம் - தவிர்க்கவும்';
    } else if (beneficRemainders.includes(remainder)) {
      status = 'சுபகரமான தாரை (Benefic - Shubha Tara)';
      isAuspicious = true;
      compatibilityInfo = 'மிகவும் நல்லது - புதிய முயற்சிகளுக்கு ஏற்றது';
    } else if (maleficRemainders.includes(remainder)) {
      status = 'அசுபகரமான தாரை (Malefic - Ashubha Tara)';
      compatibilityInfo = 'தவிர்க்கவும் - முக்கியமான பணிகளுக்கு ஏற்றதல்ல';
    } else if (neutralRemainders.includes(remainder)) {
      status = 'நடுநிலை தாரை (Neutral - Samata Tara)';
      isAuspicious = true;
      compatibilityInfo = 'பரவாயில்லை - அன்றாட பணிகளுக்கு ஏற்றது';
    } else {
      status = 'மற்ற தாரை - சாதாரணமானது';
      compatibilityInfo = 'சாதாரண செயல்களுக்கு ஏற்றது';
    }
    
    let parikaram = "";
    if (!isAuspicious) {
      parikaram = "தாரா பலம் சரியில்லை - வேறு நேரத்தை தேர்ந்தெடுக்கவும்";
    }
    
    return { 
      isAuspicious,
      position,
      remainder,
      status,
      nakshatraNumber1,
      nakshatraNumber2,
      compatibilityInfo,
      parikaram,
      isChandrashtamaNakshatra
    };
  };

  const calculateChandraBala = (janmaRashi, currentRashi, timeOfDay) => {
    if (!janmaRashi || !currentRashi) return { isAuspicious: false, strength: 0, isChandrashtama: false };
    
    const janmaIndex = rashis.indexOf(janmaRashi);
    const currentIndex = rashis.indexOf(currentRashi);
    
    // Calculate position from birth rashi to current rashi (1-12)
    const position = ((currentIndex - janmaIndex + 12) % 12) + 1;
    const rashiNumber1 = janmaIndex + 1;
    const rashiNumber2 = currentIndex + 1;
    
    // Calculate remainder when divided by 9
    // If remainder is 0, use 9 instead
    let remainder = position % 9 || 9;
    
    // For positions 10, 11, 12, use remainders 1, 2, 3 respectively
    if (position === 10) remainder = 1;
    if (position === 11) remainder = 2;
    if (position === 12) remainder = 3;
    
    // Define position meanings in Tamil
    const positionMeanings = {
      1: "தேக சௌக்கியம்", // Deha sowkiyam (Body wellness)
      2: "தன ஹானி", // Danahaani (Loss of wealth)
      3: "திரவ்ய லாபம்", // Dhravya laabam (Gain of wealth)
      4: "ரோக பயம்", // Roha bayam (Fear of illness)
      5: "கார்ய விகல்பம்", // Kaarya vikalpam (Work-related issues)
      6: "சத்ரு நாசம்", // Chatrunaasam (Destruction of enemies)
      7: "சௌக்ய வ்ருத்தி", // Sowkya vruddi (Increase in happiness)
      8: "ரோக வ்ருத்தி", // Roha vruddi (Increase in illness)
      9: "கார்ய தாமதம்", // Kaarya tamadam (Delay in work)
      10: "உத்யோக வ்ருத்தி", // Voodyoga vruddi (Career growth)
      11: "இஷ்ட சித்தி", // Ishta siddi (Fulfillment of desires)
      12: "தன விரயம்" // Dana virayam (Waste of wealth)
    };
    
    // Define benefic positions (good)
    const beneficPositions = [1, 3, 6, 7, 10, 11];
    
    // Define malefic positions (bad)
    const maleficPositions = [4, 8, 12];
    
    // Define medium positions
    const mediumPositions = [2, 5, 9];
    
    // Get the meaning for the current position
    const positionMeaning = positionMeanings[position] || "";
    
    // Check for Chandrashtama - 8th house from birth rashi
    const isChandrashtama = position === 8;
    
    let status = '';
    let isAuspicious = false;
    let compatibilityInfo = '';
    let strengthLevel = '';
    
    if (isChandrashtama) {
      status = 'சந்திராஷ்டமம் (8-ம் இடம்) - ' + positionMeaning;
      isAuspicious = false;
      strengthLevel = 'இல்லை'; // Illai (No)
      compatibilityInfo = 'மிகவும் அசுபம் - எல்லா நிகழ்வுகளையும் தவிர்க்கவும்';
    } else if (beneficPositions.includes(position)) {
      status = 'சுபகரமான இடம் (' + position + ') - ' + positionMeaning;
      isAuspicious = true;
      strengthLevel = 'உண்டு'; // Undu (Yes)
      compatibilityInfo = 'மிகவும் நல்லது - அனைத்து நல்ல காரியங்களுக்கும் ஏற்றது';
    } else if (maleficPositions.includes(position)) {
      status = 'அசுபகரமான இடம் (' + position + ') - ' + positionMeaning;
      isAuspicious = false;
      strengthLevel = 'இல்லை'; // Illai (No)
      compatibilityInfo = 'தவிர்க்கவும் - முக்கியமான பணிகளுக்கு ஏற்றதல்ல';
    } else if (mediumPositions.includes(position)) {
      // Medium positions
      status = 'நடுநிலை இடம் (' + position + ') - ' + positionMeaning;
      isAuspicious = timeOfDay === 'night'; // Consider medium positions auspicious only at night
      strengthLevel = 'மத்திமம்'; // Mathimam (Medium)
      compatibilityInfo = 'பரவாயில்லை - சாதாரண செயல்களுக்கு ஏற்றது';
    }
    
    let parikaram = "";
    if (isChandrashtama) {
      parikaram = "சந்திராஷ்டமம் - முக்கியமான பணிகளை தவிர்க்கவும்";
    } else if (!isAuspicious) {
      parikaram = "சந்திர பலம் இல்லை - வேறு நேரத்தை தேர்ந்தெடுக்கவும்";
    }
    
    return { 
      isAuspicious, 
      strength: isAuspicious ? 100 : 0, 
      isChandrashtama,
      position,
      remainder,
      rashiNumber1,
      rashiNumber2,
      status,
      positionMeaning,
      strengthLevel,
      compatibilityInfo,
      parikaram
    };
  };

  const calculatePanchagam = () => {
    // Basic check for required values
    if (!values.thithi || !values.varam || !values.nakshatra || !values.lagna) {
      return { 
        isAuspicious: false,
        parikaram: "அனைத்து மதிப்புகளையும் உள்ளிடவும்" 
      };
    }
    
    const thithiIndex = thithis.indexOf(values.thithi) + 1;
    const varamIndex = varams.indexOf(values.varam) + 1;
    const nakshatraIndex = nakshatras.indexOf(values.nakshatra) + 1;
    
    // Get lagna durva value
    const dhruvaValue = parseInt(lagnaDhruvaValues[values.lagna] || '0');
    
    // Get lagna number (1-12) based on its position in rashis array
    // This is the critical addition for correct panchagam calculation
    const lagnaIndex = rashis.indexOf(values.lagna) + 1;
    
    // Sum includes both lagna number and durva value
    const sum = thithiIndex + varamIndex + nakshatraIndex + lagnaIndex + dhruvaValue;
    const remainder = sum % 9 || 9; // If remainder is 0, use 9 instead
    
    // Define favorable remainders
    const favorableRemainders = [1, 4, 7, 9]; // These are good panchakam values
    const isAuspicious = favorableRemainders.includes(remainder);
    
    let parikaramInfo = '';
    if (!isAuspicious && panchagamParikaras[remainder]) {
      parikaramInfo = panchagamParikaras[remainder];
    }
    
    let compatibilityInfo = '';
    if (isAuspicious) {
      compatibilityInfo = 'நல்ல சுப முகூர்த்தம் - அனைத்து நல்ல காரியங்களுக்கும் ஏற்றது';
    } else {
      switch(remainder) {
        case 2:
          compatibilityInfo = 'அக்னி பஞ்சகம் - தீ தொடர்பான பணிகளை தவிர்க்கவும்';
          break;
        case 3:
          compatibilityInfo = 'ராஜ பஞ்சகம் - அரசு சார்ந்த பணிகளை தவிர்க்கவும்';
          break;
        case 5:
          compatibilityInfo = 'சோர பஞ்சகம் - பணம் சார்ந்த செயல்களை தவிர்க்கவும்';
          break;
        case 6:
          compatibilityInfo = 'ரோக பஞ்சகம் - சுகாதார சார்ந்த செயல்களை தவிர்க்கவும்';
          break;
        case 8:
          compatibilityInfo = 'மிரிது பஞ்சகம் - புதிதாக எதையும் தொடங்க தவிர்க்கவும்';
          break;
        default:
          compatibilityInfo = 'பஞ்சகம் சரியில்லை - வேறு நேரத்தை தேர்ந்தெடுக்கவும்';
      }
    }
    
    return { 
      isAuspicious,
      remainder,
      thithiIndex,
      varamIndex,
      nakshatraIndex,
      lagnaIndex, // Added lagna number
      dhruvaValue,
      sum, // Total sum for debugging
      parikaramInfo,
      compatibilityInfo
    };
  };

  const handleCalculate = () => {
    const taraBala = calculateTaraBala(values.janmaNakshatra, values.nakshatra);
    const chandraBala = calculateChandraBala(values.janmaRashi, values.currentRashi, values.timeOfDay);
    const panchagam = calculatePanchagam();
    setResults({ taraBala, chandraBala, panchagam, inputValues: {...values} });
    setShowDetails(false);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const SelectField = ({ label, name, value, options, icon, onChange }) => (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2 flex items-center">
        {icon}
        <span className="ml-2">{label}</span>
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        <option value="">-- தேர்ந்தெடு --</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  const RadioGroup = ({ label, name, value, options, onChange, icon }) => (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2 flex items-center">
        {icon}
        <span className="ml-2">{label}</span>
      </label>
      <div className="flex space-x-4">
        {Object.entries(options).map(([key, text]) => (
          <label key={key} className="inline-flex items-center">
            <input
              type="radio"
              name={name}
              value={key}
              checked={value === key}
              onChange={onChange}
              className="form-radio h-4 w-4 text-yellow-600"
            />
            <span className="ml-2">{text}</span>
          </label>
        ))}
      </div>
    </div>
  );

  // Helper function to get all necessary remedies
  const getParikarams = () => {
    if (!results) return [];
    
    const parikarams = [];
    
    if (results.taraBala && !results.taraBala.isAuspicious && results.taraBala.parikaram) {
      parikarams.push(results.taraBala.parikaram);
    }
    
    if (results.chandraBala && !results.chandraBala.isAuspicious && results.chandraBala.parikaram) {
      parikarams.push(results.chandraBala.parikaram);
    }
    
    if (results.panchagam && !results.panchagam.isAuspicious && results.panchagam.parikaramInfo) {
      parikarams.push(results.panchagam.parikaramInfo);
    }
    
    return parikarams;
  };

  // Check if overall result is auspicious
  const isOverallAuspicious = results && 
    results.taraBala?.isAuspicious && 
    results.chandraBala?.isAuspicious && 
    results.panchagam?.isAuspicious;

  // Render remedies section conditionally
  const renderRemedies = () => {
    const parikarams = getParikarams();
    
    if (parikarams.length === 0) {
      return null;
    }
    
    return (
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
          <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
          {translations.parikarams}
        </h3>
        
        <div className="p-3 bg-red-50 rounded-lg text-sm text-red-800">
          <ul className="space-y-1 list-disc list-inside">
            {parikarams.map((parikaram, index) => (
              <li key={index}>{parikaram}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-md mx-auto px-2 sm:px-4 lg:px-6">
      <div className="bg-yellow-50 rounded-lg shadow-lg overflow-hidden w-full">
        <div className="bg-orange-500 p-4 text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-white break-words whitespace-normal">
            {translations.title}
          </h1>
          <h2 className="text-base sm:text-lg text-white break-words whitespace-normal">
            {translations.subtitle}
          </h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 gap-4">
            <SelectField
              label={translations.birthStar}
              name="janmaNakshatra"
              value={values.janmaNakshatra}
              options={nakshatras}
              onChange={handleChange}
              icon={<Star className="w-5 h-5 text-yellow-500" />}
            />
            
            <SelectField
              label={translations.nakshatra}
              name="nakshatra"
              value={values.nakshatra}
              options={nakshatras}
              onChange={handleChange}
              icon={<Star className="w-5 h-5 text-yellow-500" />}
            />
            
            <SelectField
              label={translations.birthMoon}
              name="janmaRashi"
              value={values.janmaRashi}
              options={rashis}
              onChange={handleChange}
              icon={<Moon className="w-5 h-5 text-blue-500" />}
            />
            
            <SelectField
              label={translations.currentMoon}
              name="currentRashi"
              value={values.currentRashi}
              options={rashis}
              onChange={handleChange}
              icon={<Moon className="w-5 h-5 text-blue-500" />}
            />
            
            <SelectField
              label={translations.thithi}
              name="thithi"
              value={values.thithi}
              options={thithis}
              onChange={handleChange}
              icon={<Calendar className="w-5 h-5 text-green-500" />}
            />
            
            <SelectField
              label={translations.varam}
              name="varam"
              value={values.varam}
              options={varams}
              onChange={handleChange}
              icon={<Calendar className="w-5 h-5 text-green-500" />}
            />
            
            <SelectField
              label={translations.lagna}
              name="lagna"
              value={values.lagna}
              options={lagnas}
              onChange={handleChange}
              icon={<Calendar className="w-5 h-5 text-green-500" />}
            />
            
            <RadioGroup
              label={translations.timeOfDay}
              name="timeOfDay"
              value={values.timeOfDay}
              options={{ day: translations.day, night: translations.night }}
              onChange={handleChange}
              icon={<Clock className="w-5 h-5 text-blue-500" />}
            />

            <div className="flex space-x-2 mt-2">
              <button 
                onClick={handleCalculate} 
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded flex items-center justify-center"
                disabled={!values.janmaNakshatra || !values.nakshatra || !values.janmaRashi || !values.currentRashi}
              >
                {translations.calculate}
              </button>
              <button 
                onClick={handleReset} 
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded flex items-center justify-center"
              >
                {translations.reset}
              </button>
            </div>
          </div>
          
          {results && (
            <div className="mt-6 p-4 bg-white rounded-lg shadow border border-yellow-200">
              {/* Input Summary */}
              <div className="mb-4">
                <div className="flex justify-between items-center cursor-pointer" onClick={toggleDetails}>
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                    <Info className="w-5 h-5 text-blue-500 mr-2" />
                    {translations.inputSummary}
                  </h3>
                  {showDetails ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
                
                {showDetails && (
                  <div className="mt-2 p-3 bg-gray-50 rounded-lg text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p><strong>{translations.birthStar}:</strong> {results.inputValues.janmaNakshatra}</p>
                        <p><strong>{translations.nakshatra}:</strong> {results.inputValues.nakshatra}</p>
                        <p><strong>{translations.birthMoon}:</strong> {results.inputValues.janmaRashi}</p>
                        <p><strong>{translations.currentMoon}:</strong> {results.inputValues.currentRashi}</p>
                      </div>
                      <div>
                        <p><strong>{translations.thithi}:</strong> {results.inputValues.thithi || "-"}</p>
                        <p><strong>{translations.varam}:</strong> {results.inputValues.varam || "-"}</p>
                        <p><strong>{translations.lagna}:</strong> {results.inputValues.lagna || "-"}</p>
                        <p><strong>{translations.timeOfDay}:</strong> {
                          results.inputValues.timeOfDay === 'day' ? translations.day : translations.night
                        }</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Overall Result */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <Award className="w-5 h-5 text-yellow-500 mr-2" />
                  {translations.overallResult}
                </h3>
                
                <div className={`p-4 rounded-lg text-center ${isOverallAuspicious ? 'bg-green-100' : 'bg-red-100'}`}>
                  <div className="text-2xl font-bold mb-1">
                    {isOverallAuspicious ? '✅ ' + translations.auspicious : '⚠️ ' + translations.notAuspicious}
                  </div>
                  <div className={`text-sm ${isOverallAuspicious ? 'text-green-800' : 'text-red-800'}`}>
                    {isOverallAuspicious 
                      ? 'இந்த நேரம் அனைத்து நல்ல காரியங்களுக்கும் ஏற்றது'
                      : 'இந்த நேரத்தில் முக்கியமான முடிவுகளை தவிர்க்கவும்'}
                  </div>
                </div>
              </div>
              
              {/* Results Table */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <Award className="w-5 h-5 text-yellow-500 mr-2" />
                  {translations.summary}
                </h3>
                
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-3 py-2 text-sm font-medium text-gray-500">{translations.calculation}</th>
                        <th scope="col" className="px-3 py-2 text-sm font-medium text-gray-500">{translations.status}</th>
                        <th scope="col" className="px-3 py-2 text-sm font-medium text-gray-500">{translations.position}/{translations.remainder}</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-2 text-sm font-medium text-gray-800">{translations.taraBala}</td>
                        <td className="px-3 py-2 text-sm">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            results.taraBala?.isAuspicious ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {results.taraBala?.isAuspicious ? '✅' : '❌'}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-sm text-gray-500">
                          {translations.position}: {results.taraBala?.position} / {translations.remainder}: {results.taraBala?.remainder} 
                          ({results.taraBala?.isAuspicious ? translations.benefic : translations.malefic})
                          {results.taraBala?.isChandrashtamaNakshatra && ' ⚠️'}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-sm font-medium text-gray-800">{translations.chandraBala}</td>
                        <td className="px-3 py-2 text-sm">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            results.chandraBala?.isAuspicious ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {results.chandraBala?.isAuspicious ? '✅' : '❌'}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-sm text-gray-500">
                          {translations.position}: {results.chandraBala?.position} - {results.chandraBala?.positionMeaning}
                          <br />
                          <span className="font-semibold">
                            சந்திர பலம்: {results.chandraBala?.strengthLevel}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-sm font-medium text-gray-800">{translations.pachakam}</td>
                        <td className="px-3 py-2 text-sm">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            results.panchagam?.isAuspicious ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {results.panchagam?.isAuspicious ? '✅' : '❌'}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-sm text-gray-500">
                          {translations.remainder}: {results.panchagam?.remainder} ({results.panchagam?.isAuspicious ? translations.benefic : translations.malefic})
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Render remedies using the function */}
              {renderRemedies()}
              
              {/* Toggle Details Button */}
              <button
                onClick={toggleDetails}
                className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded flex items-center justify-center"
              >
                {showDetails ? (
                  <div className="flex items-center">
                    <ChevronUp className="w-4 h-4 mr-1" />
                    {translations.hideDetails}
                  </div>
                ) : (
                  <div className="flex items-center">
                    <ChevronDown className="w-4 h-4 mr-1" />
                    {translations.showMore}
                  </div>
                )}
              </button>
              
              {/* Detailed Results */}
              {showDetails && (
                <div className="mt-4 space-y-3">
                  {/* Tara Bala Details */}
                  <div className="p-2 rounded bg-gray-50">
                    <div className="font-medium text-gray-800 mb-1">{translations.taraBala}</div>
                    <div className="text-sm grid grid-cols-2 gap-2">
                      <div className="text-gray-600">
                        <p><strong>{translations.nakshatraNumber} (ஜென்ம):</strong> {results.taraBala?.nakshatraNumber1}</p>
                        <p><strong>{translations.nakshatraNumber} (இன்று):</strong> {results.taraBala?.nakshatraNumber2}</p>
                        <p><strong>{translations.position}:</strong> {results.taraBala?.position}</p>
                        <p><strong>{translations.remainder}:</strong> {results.taraBala?.remainder}</p>
                      </div>
                      <div className="text-gray-600">
                        <p><strong>நிலை:</strong> {results.taraBala?.status}</p>
                        <p className={results.taraBala?.isAuspicious ? "text-green-600" : "text-red-600"}>
                          <strong>{translations.compatibility}:</strong> {results.taraBala?.compatibilityInfo}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chandra Bala Details */}
                  <div className="p-2 rounded bg-gray-50">
                    <div className="font-medium text-gray-800 mb-1">{translations.chandraBala}</div>
                    <div className="text-sm grid grid-cols-2 gap-2">
                      <div className="text-gray-600">
                        <p><strong>{translations.rashiNumber} (ஜென்ம):</strong> {results.chandraBala?.rashiNumber1}</p>
                        <p><strong>{translations.rashiNumber} (இன்று):</strong> {results.chandraBala?.rashiNumber2}</p>
                        <p><strong>{translations.position}:</strong> {results.chandraBala?.position}</p>
                        <p><strong>பலன்:</strong> {results.chandraBala?.positionMeaning}</p>
                        <p><strong>சந்திர பலம்:</strong> {results.chandraBala?.strengthLevel}</p>
                      </div>
                      <div className="text-gray-600">
                        <p><strong>நிலை:</strong> {results.chandraBala?.status}</p>
                        <p className={results.chandraBala?.isAuspicious ? "text-green-600" : "text-red-600"}>
                          <strong>{translations.compatibility}:</strong> {results.chandraBala?.compatibilityInfo}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Panchagam Details */}
                  <div className="p-2 rounded bg-gray-50">
                    <div className="font-medium text-gray-800 mb-1">{translations.pachakam}</div>
                    <div className="text-sm grid grid-cols-2 gap-2">
                      <div className="text-gray-600">
                        <p><strong>திதி எண்:</strong> {results.panchagam?.thithiIndex}</p>
                        <p><strong>வாரம் எண்:</strong> {results.panchagam?.varamIndex}</p>
                        <p><strong>{translations.nakshatraNumber}:</strong> {results.panchagam?.nakshatraIndex}</p>
                        <p><strong>{translations.lagnaNumber}:</strong> {results.panchagam?.lagnaIndex}</p>
                      </div>
                      <div className="text-gray-600">
                        <p><strong>{translations.dhruvaNumber}:</strong> {results.panchagam?.dhruvaValue}</p>
                        <p><strong>கூட்டுத்தொகை:</strong> {results.panchagam?.sum}</p>
                        <p><strong>{translations.remainder}:</strong> {results.panchagam?.remainder}</p>
                        <p className={results.panchagam?.isAuspicious ? "text-green-600" : "text-red-600"}>
                          <strong>{translations.compatibility}:</strong> {results.panchagam?.compatibilityInfo}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PanchangamCalculator;