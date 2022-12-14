import React, { /* useState, */useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
import ChartContainer from './components/ChartContainer.jsx';
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

const appID = '#app-root-2022-a_double_burden';

function App() {
  // Data states.
  // const [data, setData] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions,func-names
    !(function () {
      // eslint-disable-next-line no-restricted-syntax,no-void,guard-for-in
      window.addEventListener('message', ((e) => { if (void 0 !== e.data['datawrapper-height']) { const t = document.querySelectorAll(`${appID} iframe`); for (const a in e.data['datawrapper-height']) for (let r = 0; r < t.length; r++) { if (t[r].contentWindow === e.source)t[r].style.height = `${e.data['datawrapper-height'][a]}px`; } } }));
    }());
  }, []);

  return (
    <div className="app">
      {
        // Banner container
      }
      <div className="background cover" style={{ paddingBottom: 0 }}>
        <div className="content_container wide">
          <h2 className="title">A Double Burden</h2>
          <h3 className="subtitle highlight">The effects of food price increases and</h3>
          <h3 className="subtitle">currency depreciations on food import bills</h3>
          <h4 className="date">16 December 2022</h4>
        </div>
        <div className="cover_background">
          <div className="flex">
            <div className="unctad_logo_container">
              <img src="https://unctad.org/sites/default/files/2022-11/unctad_logo_white.svg" alt="UNCTAD logo" />
            </div>
            <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0" />
              <path className="a2" d="M0 20 L30 52 L60 20" />
              <path className="a3" d="M0 40 L30 72 L60 40" />
            </svg>
          </div>
        </div>
      </div>
      <p className="button_container"><a href="https://unctad.org/webflyer/double-burden-effects-food-price-increases-and-currency-depreciations-food-import-bills" className="button_blue">Download the report in PDF</a></p>
      {
      // Acknowledgements container
      }
      {/*      <div className="content_container">
        <h4 className="title">Acknowledgements</h4>
        <p>
          This document was prepared under supervision of Miho Shirotori with the contribution of Julien Bliesener, Rodrigo Carcamo, Jeanelle Clarke, Stefan Csordas, Taisuke Ito, Christian Knebel, Graham Mott, Alessandro Nicita, Janvier Nkurunziza, Romain Perez, Ralf Peters, Carlos Razo and Mesut Saygili.
          <br />
          Graphic design and desktop publishing were done by Nadege Hadj??mian.
        </p>
      </div> */}
      {
      // Introduction container
      }
      <div className="content_container">
        <p><strong>The price of food has increased everywhere, reaching historic levels in 2022, as stated by the Global Crisis Response Group. This is a challenge for food security globally, but particularly for net food-importing developing countries. And unlike in previous food crises, they now face a double burden. They not only pay higher prices for the food they import, but the price increase is exacerbated by the depreciation of their currency vis-??-vis the US dollar. This erodes the fiscal space that many developing countries need to face the concomitant challenges of recovering from the COVID-19 pandemic, the cost-of-living crisis, and the climate emergency.</strong></p>
        <p><strong>This note assesses the potential effect of high prices of wheat and concurrent currency devaluations on the import bills of selected developing countries.</strong></p>
      </div>
      {
      // Section 1 container
      }
      <div className="section_banner_container section_banner_container_1">
        <div className="section_banner"><div className="number">1</div></div>
        <div className="heading_wrapper"><h3>The emergence of the double burden: historically high food prices coupled with a strong US dollar</h3></div>
      </div>
      <div className="content_container">
        <p>In the current century, the world has suffered three major food price spikes. The first two happened in 2007???2008 and 2010???2012. The third one is happening now. Brought on by the COVID-19 pandemic and the war in Ukraine, food prices have risen to historic heights (Figure 1).</p>
        <p>But there is a major difference among these price spikes, with severe consequences for net food-importing developing countries. During the first two spikes, as food prices went up, the value of the US dollar, the main currency used in international trade transactions, went down. The depreciation of the US dollar and the consequent appreciation of other currencies made imports cheaper and provided some ease to food import bills for many developing countries.</p>
        <p>However, the current price spike is different. In an attempt to combat high inflation in the United States of America, the Federal Reserve increased its interest rates causing the US dollar to appreciate some 24 per cent between May 2021 and October 2022 (Figure 1). This made the US dollar and the food that developing countries buy with it more expensive.</p>
        <p>
          For net food-importing developing countries, the international market for food is a lifeline. And as it becomes more expensive to buy US dollars, it also becomes harder for these countries to prevent millions of people from going hungry. These countries face a double burden of high food prices and a depreciation of their local currency against the US dollar.
          {' '}
          <a href="https://unctad.org/tdr2022">With national budgets stretched thin, net food importers are placed in a vulnerable position.</a>
        </p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/gjM4F/" title="A double burden: high food prices and a strong US dollar" />
      </div>
      {
      // Section 2 container
      }
      <div className="section_banner_container section_banner_container_2">
        <div className="section_banner"><div className="number">2</div></div>
        <div className="heading_wrapper"><h3>The impact of high food prices and currency depreciations on net food-importing developing countries</h3></div>
      </div>
      <div className="content_container">
        <p>
          Research shows that exchange rates can have a significant impact on food prices. Take for example the price effects on wheat, the most widely cultivated crop in the world, for six countries: Egypt, Ethiopia, Mauritius, Pakistan, Peru and Thailand.
          <sup title="Thailand is a net wheat-importer but not classified as net food importer by FAO.">1</sup>
        </p>
        <p>Since 2020 wheat prices have increased substantially (Figure 2). As of October 2022, the average price was 89 per cent higher than the average in 2020. During the same period, the average US dollar exchange rate vis-??-vis the respective national currencies rose between 10 and 46 per cent.</p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/DsY5r/" title="The upward trend of wheat prices" />
      </div>
      <div className="content_container">
        <p>Changes in international prices and exchange rates have an impact on wheat import prices. Figure 3 shows that even when international prices are the same, the exchange rate effect makes a difference. The estimated price increases range between 106 and 176 per cent ??? more than double the price in 2020.</p>
        <p>This illustrates that the exchange rate effect is a significant driver of rising food import bills, contributing to inflation, loss of purchasing power and food insecurity.</p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/qDOy6/" title="Exchange rates can increase wheat import prices" />
      </div>
      <div className="content_container">
        <p>In addition, to import the same volume of wheat as in 2020, import bills in 2022 would rise sharply (Table 1). Take for example the case of Egypt, the world???s largest importer of wheat in 2020, with a total of 13.2 million tons. This accounted for nearly one-fifth of Egypt???s food import bill. To import the same amount in 2022, they would have to pay an additional US$ 3 billion. This increase is equivalent to 20 per cent of Egypt???s food import bill in 2020.</p>
        <p>Wheat is but one example of many staple food items that developing countries rely on. This price increase places more financial strain on budgets of families and governments. The poor in developing countries, who spend a significant share of their income on foodstuffs, are most affected.</p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/ANs2y/" title="Countries are paying more for the same amount of wheat" />
      </div>
      {
      // Section 3 container
      }
      <div className="last_section">
        <div className="section_banner_container section_banner_container_3">
          <div className="section_banner"><div className="number">3</div></div>
        </div>
        <div className="content_container">
          <div className="heading_wrapper"><h3>What should be done?</h3></div>
          <p className="highlight">The double burden of high food prices and an appreciating US dollar is a toxic blend for net food-importing developing countries. To address these challenges, and following on the Global Crisis Response Group proposals, three broad areas emerge for policy action:</p>
          <h4 className="recommendations_header recommendations_header_1"><span className="highlight">Easing financial constraints</span></h4>
          <ul>
            <li>
              <span className="highlight">Providing targeted and sustained social protection programmes</span>
              {' '}
              <span className="not_highlight">to shield vulnerable households in developing countries.</span>
            </li>
            <li>
              <span className="highlight">Supporting multilateral emergency solutions to provide liquidity to developing countries.</span>
              {' '}
              <span className="not_highlight">A good step forward is the new International Monetary Fund???s Food Shock Window. This initiative is based largely on the Food and Agriculture Organization???s proposal for a Food Import Financing Facility and it provides emergency financing for countries facing urgent challenges related to balance-of-payments and the global food crisis. But more and faster support is urgently needed.</span>
            </li>
            <li>
              <span className="highlight">Relieving developing countries from their financial burden</span>
              {' '}
              <span className="not_highlight">
                to avoid a widespread debt crisis. The
                {' '}
                <a href="https://unctad.org/system/files/official-document/un-gcrg-ukraine-brief-no-1_en.pdf">Global Crisis Response Group</a>
                , and UNCTAD, call on international financial institutions to increase liquidity for developing countries and use existing channels to increase accessibility of these resources to those in need. Debt issues must move higher in the political agenda, and with realistic estimations of the nature and magnitude of the debt relief needed. A revised and implementable G20 common framework is also necessary to provide timely debt restructuring to countries in need.
              </span>
            </li>
          </ul>
          <h4 className="recommendations_header recommendations_header_2"><span className="highlight">Ensuring open trade and access to staple foods</span></h4>
          <ul>
            <li>
              <span className="highlight">Maintaining open international markets</span>
              {' '}
              <span className="not_highlight">can help to facilitate a stable and secure supply of food around the world. The Global Crisis Response Group has urged all countries to keep markets open, resist unjustified and unnecessary export restrictions, and make reserves available to countries at risk of hunger and famine.</span>
            </li>
            <li>
              <span className="highlight">Accelerating transport and trade facilitation initiatives</span>
              {' '}
              <span className="not_highlight">can help to improve delivery of staple food items in domestic markets. UNCTAD has insisted that streamlining customs procedures and trade related regulations can help to ease the burden of compliance, reduce inefficiencies and partially offset high prices.</span>
            </li>
          </ul>
          <h4 className="recommendations_header recommendations_header_3"><span className="highlight">Increasing food availability nationally and internationally</span></h4>
          <ul>
            <li>
              <span className="highlight">Strengthening domestic food production in net food-importing developing countries</span>
              {' '}
              <span className="not_highlight">can help reduce the heavy reliance on food imports. This can be achieved through targeted financial support and technical cooperation to increase agricultural production.</span>
            </li>
            <li>
              <span className="highlight">Reintegrating Ukrainian and Russian food and fertilizer to global markets</span>
              {' '}
              <span className="not_highlight">can help to increase the availability and affordability of food worldwide. To this end, all parties should support the agreements signed in Istanbul, T??rkiye, last July:</span>
              <ol>
                <li>
                  <span className="highlight">the memorandum of understanding between</span>
                  {' '}
                  <span className="not_highlight">the UN and the Russian Federation to facilitate the unimpeded access for their food and fertilizer exports to global markets and</span>
                </li>
                <li>
                  <span className="highlight">the Black Sea Grain Initiative</span>
                  {' '}
                  <span className="not_highlight">signed by the UN, the Russian Federation, T??rkiye and Ukraine to resume Ukrainian grain exports via the Black Sea amid the war.</span>
                </li>
              </ol>
            </li>
          </ul>
        </div>
        <p className="button_container"><a href="https://unctad.org/webflyer/double-burden-effects-food-price-increases-and-currency-depreciations-food-import-bills" className="button">Download the report in PDF</a></p>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
