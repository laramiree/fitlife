export default function HealthyFood(){
    return(
        <main> 
            <header>
                <h1>The Essential Guide to Whole, Nutrient-Dense Food</h1>
                <p>explore essential food categories curated by registered dietitians to boost baseline vitality,promote deep cellular recovery,and fuel everyday physical conditioning</p><br></br>
                <label htmlFor="food-search">Search foods</label><br></br>
                <input id="food-search" type="search" placeholder="Search foods"></input>
                <nav>
                    <a href="#fruits">Fruits</a><br></br>
                    <a href="#vegetables">vegetables</a><br></br>
                    <a href="#proteins">proteins</a><br></br>
                    <a href="#grains">grains & carbs</a><br></br>
                    <a href="#fats">Healthy Fats</a><br></br>
                </nav>
            </header>
            <section id="proteins">
                <h2>Clean & Lean Proteins</h2>
                <p >the fundemental building blocks for muscle protein synthesis, tissue recovery , and endocrine balance</p>
                <p>4 Core Selections</p>
                <div>
      <span>wild caught</span>
      <span>25g protein/100g</span>
    </div>
               <article><h3>Wild Alaskan Salamon</h3>
                <p>It's rich with EPA /DHA marine lipids and pure bioavailable proteins</p>
                <ul>
                <li>Vitamin D3</li>
                <li>Astaxanthin</li>
                <li>B12 Cobalamin</li>
                <p>Cook:Pan-sear skin side 4 min</p>
            </ul>
            </article>
            <div>
      <span>Pasture-Raised</span>
      <span>31g protein/100g</span>
    </div>
    <img src="/image/chicken.jpg" alt="A bowl of wild berries" width={320}/>
            <article><h3>Pasture Chicken Breast</h3>
        <p>It's a high-protein and low-fat food that support muscle growth and repair as part of a balanced diet</p>
            <ul>
                <li>High leucine</li>
                <li>Niacin</li>
                <li>Selenium</li>
            </ul>
            <p>cook:Sous-vide or brake at 375 F</p></article>
           <article>
    <div>
      <span>Fermented</span>
      <span>19g protein/100g</span>
    </div>
  <h3>Sprouted Tempeh & Tofu</h3>
<img src="/image/tofu.jpg" alt="A bowl of wild berries" width={320}/>
  <p>
    Tempeh and tofu are versatile soybean foods that provide
   all nine essential amino acids.
  </p>
  <ul>
    <li>Isoflavones</li>
    <li>Plant Iron</li>
    <li>Probiotics</li>
  </ul>

  <p>
   cook: air-fry 12 min at 400 F
  </p>
</article>

<article>
   <div>
      <span>Cultured Diary</span>
      <span>17g protein/cup</span>
    </div>
    <img src="/image/eggs.jpg" alt="A bowl of wild berries" width={320}/>
  <h3>Eggs & Greek Yogurt</h3>

  <p>
    Eggs and Greek yogurt offer convenient protein options,
   combining Choline-packed yolks paired with slow digesting casein.
  </p>
  <ul>
    <li>Choline from Eggs</li>
    <li>L-Glutamine</li>
    <li>Live Cultured</li>
  </ul>

  <p>
   cook: 6.5 min soft boil
  </p>
</article>
            </section>
<section id="grains">
  <h2>Whole Grains & Complex Carbs</h2>

  <p>
    Sustained glycemic release without insulin crashes to power aerobic and anarobic energy systems.
  </p>
  
  <p>Slow-Release Energy</p>

  <article>
    <div>
      <span>satiety:88/100</span>
      <span>Low GI(42)
      </span>
    </div>
    <img src="/image/oats.jpg" alt="oats" width={320}/>
    <h3>Steel-Cut Oats</h3>

    <p>
      unrefined groats rich in cholesterol-binding beta-glucan,
      a type of soluble fiber.
    </p>

    <ul>
      <li>Beta-Glucan</li>
      <li>Thiamine (B1)</li>
      <li>Sg Fiber</li>
    </ul>
    <p>
     Cardiovascular health marker.
    </p>
  </article>
  <article>
    <div>
      <span>satiety:82/100</span>
      <span>Low GI(53)
      </span>
    </div>
    <img src="/image/quinoa.jpg" alt="quinoa" width={320}/>
    <h3>Tri-Color Quinoa</h3>

    <p>
      A naturally gluten-free Andean pseudograin that provides
      all nine essential amino acids.
    </p>

    <ul>
      <li>Complete Protein</li>
      <li>Iron</li>
      <li>Manganese</li>
    </ul>

    <p>
      pre-workout fuel index.
    </p>
  </article>

  <article>
    <div>
      <span>satiety:76/100</span>
      <span>Low GI(50)
      </span>
    </div>
    <img src="/image/rice.jpg" alt="A bowl of wild berries" width={320}/>
    <h3>Brown Basmati Rice</h3>

    <p>
      An aromatic, long-grain rice that retains its bran
      and germ layers.
    </p>

    <ul>
      <li>resistant stratch</li>
      <li>Magnesium</li>
      <li>Phosphorus</li>
    </ul>

    <p>
    Clycogen replenishing.
    </p>
  </article>

  <article>
    <div>
      <span>satiety:91/100</span>
      <span>Low GI(25)
      </span>
    </div>
    <img src="/image/barley.jpg" alt="Sprouted Farro & Barley" width={320}/>
    <h3>Sprouted Farro & Barley</h3>
    <p>
     Ancient Grains engineered by nature with unmatched chew and fiber density.
    </p>

    <ul>
      <li>11g Fiber</li>
      <li>Zinc</li>
      <li>lignans</li>
    </ul>

    <p>
      Microbiome fuel source.
    </p>
  </article>
</section>
<section id="fruits">
  <h2>Vibrant Fruits</h2>
  <p>
    Rich in antioxidants, essential vitamins, natural hydration,
    and digestive polyphenols.
  </p>
  <p>4 Core Selections</p>

  <article>
    <div>
      <span>Summer Peak</span>
      <span>Low GI (25)</span>
    </div>
<img src="/image/wildberries.jpg" alt="A bowl of wild berries" width={320}/>
    <h3>Wild Berries</h3>
    <p>Wild blueberries, blackberries & red raspberries.</p>

    <ul>
      <li>Anthocyanins</li>
      <li>Vitamin C</li>
      <li>5.3 g Fiber</li>
    </ul>

    <p>Brain & Cellular Defense</p>
  </article>

  <article>
    <div>
      <span>Winter / Spring</span>
      <span>Low GI (33)</span>
    </div>
< img src="/image/citrusmedley.jpg" alt="A bowl of wild berries" width={320}/>
    <h3>Citrus Medley</h3>
    <p>Ruby red grapefruit, Cara Cara oranges & Meyer lemons.</p>

    <ul>
      <li>Bioflavonoids</li>
      <li>High Vitamin C</li>
      <li>Hesperidin</li>
    </ul>

    <p>Collagen & Iron Uptake</p>
  </article>

  <article>
    <div>
      <span>Year-Round</span>
      <span>Med GI (50)</span>
    </div>
<img src="/image/papaya.jpg" alt="A bowl of wild berries" width={320}/>
    

    <h3>Papaya & Golden Kiwi</h3>
    <p>Enzyme-dense tropical fruits for gut health.</p>

    <ul>
      <li>Papain Enzyme</li>
      <li>Folate</li>
      <li>Potassium</li>
    </ul>

    <p>Digestion & Recovery</p>
  </article>

  <article>
    <div>
      <span>Autumn Peak</span>
      <span>Low GI (36)</span>
    </div>
<img src="/image/apples&pears.jpg" alt="A bowl of wild berries" width={320}/>
    <h3>Heritage Apples & Pears</h3>
    <p>Crisp unpeeled fruit high in soluble pectin.</p>

    <ul>
      <li>Pectin Fiber</li>
      <li>Quercetin</li>
      <li>Boron</li>
    </ul>

    <p>Microbiome Prebiotic</p>
  </article>
</section>

<section id="vegetables">
  <h2>Nutrient-Dense Vegetables</h2>
  <p>
    Leafy greens, cruciferous powerhouses, and mineral-dense
    garden vegetables for structural strength.
  </p>
  <p>4 Core Selections</p>

  <article>
    <div>
      <span>Year-Round</span>
      <span>3.8 g Fiber / Cup</span>
    </div>

<img src="/image/greens.jpg" alt="A bowl of wild berries" width={320}/>
    <h3>Dark Leafy Greens</h3>
    <p>Lacinato kale, baby spinach, and Swiss chard.</p>

    <ul>
      <li>Vitamin K1</li>
      <li>Lutein</li>
      <li>Magnesium</li>
    </ul>

    <p>
      Prep Tip: Lightly sauté with extra virgin olive oil or
      lemon to unlock fat-soluble vitamin absorption.
    </p>
  </article>

  <article>
    <div>
      <span>Autumn / Winter</span>
      <span>4.1 g Fiber / Cup</span>
    </div>

<img src="/image/trio.jpg" alt="A bowl of wild berries" width={320}/>
    <h3>Cruciferous Trio</h3>
    <p>Broccoli florets, Brussels sprouts & Romanesco.</p>

    <ul>
      <li>Sulforaphane</li>
      <li>Indole-3-Carbinol</li>
      <li>Calcium</li>
    </ul>

    <p>
      Prep Tip: Chop and let rest 10 minutes prior to cooking
      to maximize sulforaphane synthesis.
    </p>
  </article>

  <article>
    <div>
      <span>Summer / Fall</span>
      <span>Low GI (15)</span>
    </div>

    <img src="/image/peppers.jpg" alt="A bowl of wild berries" width={320}/>

    <h3>Colorful Peppers</h3>
    <p>Thick-walled bell peppers & roasted root varieties.</p>

    <ul>
      <li>Capsanthin</li>
      <li>Beta-Carotene</li>
      <li>B6 Complex</li>
    </ul>

    <p>
      Prep Tip: Enjoy raw for peak Vitamin C; roast lightly
      for enhanced lycopene absorption.
    </p>
  </article>

  <article>
    <div>
      <span>Spring Peak</span>
      <span>Low GI (15)</span>
    </div>
<img src="/image/asparagus.jpg" alt="A bowl of wild berries" width={320}/>
    
    <h3>Asparagus & Zucchini</h3>
    <p>Natural diuretic botanicals high in glutathione.</p>

    <ul>
      <li>Glutathione</li>
      <li>Folate</li>
      <li>Copper</li>
    </ul>

    <p>
      Prep Tip: Flash grill or steam for 3–4 minutes to keep
      a crisp, tender snap.
    </p>
  </article>
</section><section id="fats">
  <h2>Heart-Healthy Essential Fats</h2>

  <p>
    Crucial for neurological myelination, sterol hormone
    synthesis, and cellular membrane flexibility.
  </p>

  <p>Cellular & Brain Health</p>

  <article>
    <div>
      <span>First Cold-Press</span>
      <span>Smoke Pt: 405°F</span>
    </div>

    <img src="/image/oil.jpg" alt="A bowl of wild berries" width={320}/>
    <h3>Extra Virgin Olive Oil</h3>

    <p>
      High-polyphenol unrefined liquid gold rich in
      oleic acid (Omega-9).
    </p>

    <ul>
      <li>Oleocanthal</li>
      <li>Vitamin E</li>
      <li>73% Monounsaturated</li>
    </ul>

    <p>Best for salads & medium sauté.</p>
  </article>

  <article>
    <div>
      <span>Raw & Unsalted</span>
      <span>2.5 g ALA / 28 g</span>
    </div>

  
<img src="/image/almonds.jpg" alt="Raw Walnuts & Almonds" width={320}/>
    <h3>Raw Walnuts & Almonds</h3>

    <p>
      High ALA plant omega-3s supporting neurocognition
      and vascular elasticity.
    </p>

    <ul>
      <li>Alpha-Linolenic Acid</li>
      <li>Biotin</li>
      <li>Magnesium</li>
    </ul>

    <p>Daily optimal: 1 closed handful.</p>
  </article>

  <article>
    <div>
      <span>Super Seeds</span>
      <span>10 g Fiber / 2 tbsp</span>
    </div>

    <img src="/image/seeds.jpg" alt="Chia & Flax Seeds" width={320}/>

    <h3>Chia & Flax Seeds</h3>

    <p>
      Hydrophilic gel-forming mucilage fiber with dense
      Omega-3 ALA content.
    </p>

    <ul>
      <li>Mucilage Fiber</li>
      <li>Lignans</li>
      <li>Phosphorus</li>
    </ul>

    <p>Use ground for maximum nutrient release.</p>
  </article>

  <article>
    <div>
      <span>Whole Wholefood Fat</span>
      <span>Low GI (10)</span>
    </div>

   <img src="/image/avocado.jpg" alt="Fresh Hass Avocado" width={320}/>
    <h3>Fresh Hass Avocado</h3>

    <p>
      Loaded with monounsaturated oleic acid and more
      potassium than a banana.
    </p>

    <ul>
      <li>Oleic Acid</li>
      <li>Potassium</li>
      <li>Lutein</li>
    </ul>

    <p>Enhances carotenoid absorption 4×.</p>
  </article>
</section>
        </main>
    )
}