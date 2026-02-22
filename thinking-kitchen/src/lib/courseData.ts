export interface ModuleData {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  week: number;
  status: "completed" | "current" | "locked";
  hasLiveSession: boolean;
  liveSessionTitle?: string;
  liveSessionDuration?: string;
  purpose: string;
  objectives: string[];
  cognitiveShift: { from: string; to: string };
  deliveryMode: { async: string[]; sync: string | null; syncRationale: string | null };
  learnContent: {
    videos: { title: string; duration: string; description: string; scriptOutline: string[] }[];
    visuals: { title: string; type: string; description: string }[];
    readings: { title: string; description: string }[];
    interactives: { title: string; tool: string; description: string; mechanics: string }[];
  };
  doActivities: {
    title: string;
    type: "kitchen" | "reflection" | "observation" | "experiment" | "case-study";
    description: string;
    instructions: string[];
  }[];
  discussPrompt: { prompt: string; peerRequirement: string };
  assessments: {
    title: string;
    type: "quiz" | "journal" | "scenario" | "peer" | "portfolio";
    description: string;
  }[];
}

export const courseInfo = {
  title: "The Thinking Kitchen",
  subtitle: "Reasoning, Observation & Experimentation Through Everyday Cooking",
  description:
    "A six-week blended e-learning course that uses everyday cooking to develop structured observation, causal reasoning, adaptive decision-making, and experimental thinking. This is not a cooking skills course — it treats your kitchen as a laboratory for learning to think.",
  facilitator: "Course Facilitator",
  duration: "6 weeks",
  effort: "3–5 hours/week",
  format: "Blended Online (Async + 4 Live Sessions)",
  liveSessions: [
    { week: 1, title: "Recipe Failure Stories & Variability Mapping", duration: "60 min", module: 1 },
    { week: 3, title: "Observation Lab — Cook Together, See Together", duration: "75 min", module: 3 },
    { week: 5, title: "Kitchen Dilemmas — Decision-Making Workshop", duration: "60 min", module: 5 },
    { week: 6, title: "Experiment Showcase & Course Closing", duration: "75 min", module: 6 },
  ],
  announcements: [
    {
      date: "Week 1 — Monday",
      title: "Welcome to The Thinking Kitchen!",
      excerpt: "Your first module is now live. Start by watching the intro video, then write about a time a recipe failed you...",
    },
    {
      date: "Week 1 — Wednesday",
      title: "Live Session 1 Reminder",
      excerpt: "Join us tomorrow evening for our first live discussion. Come ready to share your recipe failure story!",
    },
  ],
};

export const modules: ModuleData[] = [
  {
    id: 1,
    slug: "why-recipes-fail",
    title: "Understanding Why Recipes Fail — Variability",
    shortTitle: "Why Recipes Fail",
    week: 1,
    status: "current",
    hasLiveSession: true,
    liveSessionTitle: "Recipe Failure Stories & Variability Mapping",
    liveSessionDuration: "60 min",
    purpose:
      "To disrupt the assumption that recipes are reliable instructions and awaken learners to the reality that cooking outcomes are shaped by variable, context-dependent factors that can be identified and reasoned about.",
    objectives: [
      "Identify at least three sources of variability that cause identical recipes to produce different outcomes",
      "Distinguish between controllable factors (technique, timing, proportion) and uncontrollable factors (humidity, ingredient batch, altitude)",
      "Articulate why procedural instructions alone are insufficient for consistent cooking outcomes",
    ],
    cognitiveShift: {
      from: "I followed the recipe, so it should work",
      to: "Recipes are starting points — outcomes depend on many factors I can learn to notice",
    },
    deliveryMode: {
      async: [
        "Pre-recorded video lesson on recipe variability",
        "Reading: The gap between procedure and principle",
        "Interactive variability sorting activity",
        "Personal recipe failure reflection (300 words)",
        "Post-session forum discussion",
      ],
      sync: "Live group discussion — share recipe failure stories, collectively identify and categorise variability patterns (60 min)",
      syncRationale:
        "Sharing personal failure stories and co-constructing understanding of variability requires real-time facilitation. The vulnerability of admitting failure is better supported in live, facilitated settings where the facilitator can normalise the experience.",
    },
    learnContent: {
      videos: [
        {
          title: "The Recipe Promise — And Why It Breaks",
          duration: "7 min",
          description:
            "An engaging introduction framing the core question: if you followed the recipe exactly, why did it turn out differently? Uses three relatable kitchen scenarios (bread that didn't rise, rice that turned mushy, cookies that spread flat) without explaining the science — instead prompting curiosity.",
          scriptOutline: [
            "HOOK (0:00–0:45): 'You followed every step. Measured every ingredient. Set the timer. And it still didn't work. Sound familiar?'",
            "SCENARIO 1 (0:45–2:30): Visual montage of bread-making — same recipe, two kitchens, two very different loaves. Narrator asks: 'Same recipe. Different results. What changed?'",
            "SCENARIO 2 (2:30–4:00): Rice cooking comparison — same brand, same pot, different days, different textures. 'Is the recipe wrong? Or is something else going on?'",
            "SCENARIO 3 (4:00–5:30): Cookie baking — one batch spreads, one holds shape. Close-up visuals of the differences.",
            "REFRAME (5:30–6:30): 'What if the problem isn't you — and it isn't the recipe? What if there are invisible factors that recipes never mention?' Introduction of the concept of variability.",
            "CALL TO ACTION (6:30–7:00): 'This week, you're going to investigate your own recipe failure. Not to fix it — but to understand what was really going on.'",
          ],
        },
      ],
      visuals: [
        {
          title: "The Variability Map",
          type: "Interactive Infographic",
          description:
            "A visual map showing four categories of variability: Ingredient Factors (freshness, brand, water content), Environmental Factors (altitude, humidity, ambient temperature), Equipment Factors (pan material, oven calibration, burner intensity), and Technique Factors (mixing speed, cutting size, timing precision). Learners can click each category to see 3-4 specific examples with brief explanations.",
        },
      ],
      readings: [
        {
          title: "Why Recipes Don't Tell the Whole Story",
          description:
            "A facilitator-authored 800-word text exploring the gap between procedural instruction and contextual reasoning. Argues that recipes assume a standardised kitchen that doesn't exist — every kitchen is a unique environment with its own variables. Uses the analogy of driving directions that don't account for traffic, weather, or road conditions.",
        },
      ],
      interactives: [
        {
          title: "Variability Sorting Challenge",
          tool: "Genially",
          description: "Drag-and-drop activity where learners sort 12 cooking factors into four categories: Ingredient, Environmental, Equipment, and Technique variability.",
          mechanics:
            "12 cards appear on screen with factors like 'oven temperature accuracy', 'egg size', 'kitchen altitude', 'how finely you chopped the onion'. Learners drag each to the correct category. Immediate feedback on each placement with a brief explanation of why it belongs there. Score shown at end with option to retry.",
        },
      ],
    },
    doActivities: [
      {
        title: "My Recipe Failure Story",
        type: "reflection",
        description: "A personal written reflection on a time a recipe produced unexpected results.",
        instructions: [
          "Think of a specific time you followed a recipe and the result was not what you expected — it could be a spectacular failure or a subtle disappointment.",
          "Write 300 words describing: (1) What you were making, (2) What you did (as specifically as you can remember), (3) What happened that was unexpected, (4) What you thought went wrong at the time.",
          "Don't worry about being 'right' about the cause — we'll revisit your thinking later in the course.",
        ],
      },
      {
        title: "Live Session Prep: Your Failure in One Sentence",
        type: "reflection",
        description: "Prepare a one-sentence summary of your recipe failure to share during the live discussion.",
        instructions: [
          "Distill your recipe failure story into one sentence: 'I tried to make ___, but ___ happened because ___.'",
          "Bring this sentence to the live session — you'll share it with the group.",
        ],
      },
    ],
    discussPrompt: {
      prompt:
        "After our live session, what surprised you most about the group's recipe failure stories? Did you notice any patterns in the types of variability people identified? Share one insight that changed how you think about why recipes fail.",
      peerRequirement: "Respond to at least two peers' posts with a question or a connection to your own experience.",
    },
    assessments: [
      {
        title: "Recipe Failure Reflection",
        type: "journal",
        description: "Written reflection (300 words) analysing a personal recipe failure — assessed for quality of variability identification.",
      },
      {
        title: "Variability Sorting Quiz",
        type: "quiz",
        description: "Auto-graded sorting activity identifying and categorising sources of cooking variability.",
      },
      {
        title: "Live Discussion Contribution",
        type: "peer",
        description: "Active participation in live session — sharing story, asking questions, contributing to group categorisation.",
      },
    ],
  },
  {
    id: 2,
    slug: "invisible-forces",
    title: "Exploring Invisible Forces Influencing Cooking Outcomes",
    shortTitle: "Invisible Forces",
    week: 2,
    status: "locked",
    hasLiveSession: false,
    purpose:
      "To introduce learners to the idea that cooking is governed by forces they cannot directly see — heat transfer, chemical reactions, moisture movement, microbial activity — and to develop a vocabulary for reasoning about these forces.",
    objectives: [
      "Identify at least four invisible forces that operate during common cooking processes",
      "Connect observable kitchen phenomena (browning, thickening, rising, wilting) to underlying invisible processes",
      "Write a 'beneath the surface' description of a cooking process, reasoning about what is happening that cannot be directly seen",
    ],
    cognitiveShift: {
      from: "Things just happen when I cook",
      to: "There are underlying forces I can learn to reason about",
    },
    deliveryMode: {
      async: [
        "Animated visual explainer on invisible forces",
        "Interactive matching activity",
        "Guided home observation task",
        "Beneath the surface write-up",
        "Peer forum discussion",
      ],
      sync: null,
      syncRationale: "Conceptual content about invisible forces benefits from self-paced processing. Learners need time to digest abstract ideas and connect them to personal observation. Optional Q&A drop-in available.",
    },
    learnContent: {
      videos: [
        {
          title: "What You Can't See Is Cooking Your Food",
          duration: "8 min",
          description:
            "An animated explainer showing four categories of invisible forces at work in everyday cooking: heat transfer (conduction, convection, radiation), chemical transformations (Maillard-type browning, caramelisation), moisture dynamics (evaporation, absorption, steam), and microbial/enzymatic activity (fermentation, tenderisation).",
          scriptOutline: [
            "HOOK (0:00–0:40): 'When you watch food cook, you see colour change, steam rise, liquids thicken. But what's actually happening beneath what you can see?'",
            "FORCE 1 — HEAT (0:40–2:30): Animation showing how heat moves through food — from pan surface into onion cells, from boiling water into pasta, from oven air around bread. 'Heat doesn't just make things hot — it triggers everything else.'",
            "FORCE 2 — CHEMICAL CHANGE (2:30–4:30): Browning as a visible signal of invisible chemistry. Animation of surface molecules rearranging. 'That golden colour isn't just pretty — it's evidence of hundreds of new flavour compounds being created.'",
            "FORCE 3 — MOISTURE (4:30–6:00): Water as the hidden player — evaporating to create crispness, being absorbed to create softness, turning to steam to create rise. 'Water is doing more work in your cooking than any ingredient you add.'",
            "FORCE 4 — LIVING PROCESSES (6:00–7:30): Fermentation and enzymatic activity — bread rising, yoghurt thickening, meat tenderising over time. 'Sometimes the most powerful force in your kitchen is alive.'",
            "CLOSE (7:30–8:00): 'This week, your job is to cook something and ask: what can't I see that's making this happen?'",
          ],
        },
      ],
      visuals: [
        {
          title: "The Invisible Forces Field Guide",
          type: "Interactive Infographic",
          description:
            "A four-quadrant interactive visual. Each quadrant (Heat, Chemical Change, Moisture, Living Processes) contains 3 everyday cooking examples. Hovering/clicking reveals the invisible force at work behind the visible change. E.g., clicking 'onions turning brown' reveals a description of sugar-protein reactions at high heat.",
        },
      ],
      readings: [
        {
          title: "Seeing the Unseen: A Cook's Guide to Invisible Processes",
          description:
            "A facilitator-authored 900-word reading that reframes common kitchen observations as evidence of invisible forces. Uses a detective metaphor: visible changes are clues, invisible forces are the explanation. Encourages learners to become 'kitchen detectives' who read visible evidence to infer invisible causes.",
        },
      ],
      interactives: [
        {
          title: "Match the Force",
          tool: "Nearpod",
          description:
            "An interactive matching activity where learners connect 10 observable kitchen events to the primary invisible force responsible.",
          mechanics:
            "Left column: observable events (e.g., 'bread dough doubles in size', 'onion turns golden', 'sauce thickens as it simmers'). Right column: invisible forces (heat transfer, chemical transformation, moisture dynamics, microbial activity). Learners draw lines to match. Instant feedback with explanations for each correct/incorrect match.",
        },
      ],
    },
    doActivities: [
      {
        title: "Beneath the Surface",
        type: "observation",
        description: "Cook something simple at home and write a description of what you think is happening beneath what you can see.",
        instructions: [
          "Choose a simple cooking task — boiling water for pasta, toasting bread, sautéing vegetables, or anything you do regularly.",
          "As you cook, pause at three moments and observe closely: What do you see? What do you hear? What do you smell?",
          "For each moment, write a 'beneath the surface' paragraph: based on what you observed, what invisible force(s) do you think are at work? Why?",
          "Submit your three paragraphs (total ~400 words) with optional photos.",
        ],
      },
    ],
    discussPrompt: {
      prompt:
        "Share your 'Beneath the Surface' observation from this week. What invisible force did you find most surprising or difficult to identify? Read your peers' observations — did anyone identify a force you missed in your own cooking?",
      peerRequirement: "Respond to at least two peers with a question about their reasoning or an alternative interpretation of what they observed.",
    },
    assessments: [
      {
        title: "Match the Force Quiz",
        type: "quiz",
        description: "Interactive matching activity — auto-scored with feedback on force identification accuracy.",
      },
      {
        title: "Beneath the Surface Write-Up",
        type: "journal",
        description: "Three-paragraph observation write-up assessed for reasoning quality — are visible observations connected to plausible invisible forces?",
      },
    ],
  },
  {
    id: 3,
    slug: "texture-transformation",
    title: "Interpreting Structural and Texture Transformations",
    shortTitle: "Texture & Structure",
    week: 3,
    status: "locked",
    hasLiveSession: true,
    liveSessionTitle: "Observation Lab — Cook Together, See Together",
    liveSessionDuration: "75 min",
    purpose:
      "To train learners to observe and interpret the structural and textural changes that occur during cooking — treating these changes as meaningful data rather than incidental phenomena.",
    objectives: [
      "Observe and describe at least three structural or textural changes during a cooking process using specific descriptive language",
      "Interpret these changes as indicators of underlying processes rather than merely noting them",
      "Distinguish between surface-level description ('it got brown') and analytical interpretation ('the surface is caramelising, suggesting high-heat sugar-protein interaction')",
    ],
    cognitiveShift: {
      from: "Passively experiencing texture changes",
      to: "Actively interpreting structural changes as evidence of deeper processes",
    },
    deliveryMode: {
      async: [
        "Pre-recorded observation demo video",
        "Reading on structure-process relationships",
        "Self-paced sensory observation protocol",
      ],
      sync: "Live 'Observation Lab' — learners cook simultaneously on video while facilitator guides attention to textural changes (75 min)",
      syncRationale:
        "Sensory observation develops markedly faster with guided, shared attention. The facilitator's ability to say 'notice what's happening to the edges right now' in real time cannot be replicated asynchronously.",
    },
    learnContent: {
      videos: [
        {
          title: "How to See What You're Cooking",
          duration: "8 min",
          description:
            "A demonstration video where the facilitator cooks a simple process (e.g., caramelising onions) and narrates every observable change in real time — modelling the descriptive vocabulary and analytical thinking the course develops.",
          scriptOutline: [
            "INTRO (0:00–0:45): 'Most of us look at food while it cooks. But looking isn't the same as seeing. Today I'm going to show you what it means to really observe.'",
            "DEMONSTRATION (0:45–6:00): Facilitator cooks onions from raw to caramelised, narrating: 'The edges are beginning to turn translucent... I can hear a gentle sizzle — that's moisture leaving the cells... The colour is shifting from white to pale gold — this is the beginning of sugar breakdown...' Camera shows close-ups at each stage.",
            "VOCABULARY MODELLING (6:00–7:00): 'Notice I didn't just say \"the onions are cooking.\" I described what I saw, what I heard, and what I think is happening beneath the surface. That's the difference between looking and observing.'",
            "CALL TO ACTION (7:00–8:00): 'In our live session this week, we'll cook together and practise this. Your job is to describe what you observe as precisely as you can.'",
          ],
        },
      ],
      visuals: [
        {
          title: "The Texture Transformation Timeline",
          type: "Interactive Visual",
          description:
            "A horizontal timeline showing a common cooking process (e.g., heating butter) with clickable stages. At each stage, learners see: a photograph, a list of observable changes (visual, auditory, olfactory), and an interpretation of what the changes indicate about underlying processes.",
        },
      ],
      readings: [
        {
          title: "Structure Tells a Story",
          description:
            "An 800-word reading on how texture and structural changes in food are not random but follow patterns dictated by the forces explored in Module 2. The key message: if you can read the structural changes, you can understand what's happening inside the food — and predict what comes next.",
        },
      ],
      interactives: [
        {
          title: "Sensory Observation Protocol",
          tool: "Nearpod (interactive form)",
          description: "A structured digital form that guides learners through systematic sensory observation during cooking.",
          mechanics:
            "Form has three sections (Beginning, Midpoint, End) each with fields for: What I see, What I hear, What I smell, What I feel (texture if touching), and My interpretation of what's happening. Used during both the live lab (Section A) and self-paced cooking (Section B). Submitted via LMS.",
        },
      ],
    },
    doActivities: [
      {
        title: "Live Observation Lab Participation",
        type: "observation",
        description: "Cook simultaneously with peers during the live session while the facilitator guides your attention.",
        instructions: [
          "Prepare the ingredients and equipment listed in the prep sheet (sent before the session).",
          "During the live session, cook along and fill in Section A of the Sensory Observation Protocol.",
          "Narrate what you observe when the facilitator prompts you.",
          "Participate in the closing debrief: What was hardest to notice? What surprised you?",
        ],
      },
      {
        title: "Independent Observation Session",
        type: "observation",
        description: "Cook something of your choosing and complete Section B of the observation protocol on your own.",
        instructions: [
          "Choose any cooking process you do regularly.",
          "Complete Section B of the Sensory Observation Protocol at three points during cooking: beginning, midpoint, end.",
          "Try to apply the observation techniques practised in the live lab.",
          "Submit your completed protocol (Sections A + B) via the LMS.",
        ],
      },
    ],
    discussPrompt: {
      prompt:
        "During the live lab, what was the most surprising thing you noticed? How was the experience of observing deliberately different from how you normally cook? Share one specific moment where you noticed something you would have missed before.",
      peerRequirement: "Read and comment on at least one peer's reflection — did they notice something you missed?",
    },
    assessments: [
      {
        title: "Sensory Observation Protocol (Sections A + B)",
        type: "journal",
        description: "Completed observation form — assessed for precision, specificity, and interpretive depth. Facilitator looks for improvement between guided (A) and independent (B) sections.",
      },
      {
        title: "Live Lab Participation",
        type: "peer",
        description: "Active participation in live observation lab — narrating observations, responding to facilitator prompts, contributing to debrief.",
      },
    ],
  },
  {
    id: 4,
    slug: "flavour-layering",
    title: "Understanding Flavour Development as a Layered Process",
    shortTitle: "Flavour Layering",
    week: 4,
    status: "locked",
    hasLiveSession: false,
    purpose:
      "To move learners beyond single-ingredient thinking toward understanding that flavour is constructed through the interaction, sequencing, and layering of multiple components over time.",
    objectives: [
      "Describe flavour as an emergent property shaped by interaction of components, not just addition of ingredients",
      "Conduct a comparative tasting that isolates one variable and describe the resulting flavour difference",
      "Evaluate how changes in sequence, timing, or proportion alter the flavour outcome",
    ],
    cognitiveShift: {
      from: "Flavour comes from adding ingredients",
      to: "Flavour emerges from how components interact across time and process",
    },
    deliveryMode: {
      async: [
        "Visual explainer on flavour layering concepts",
        "Comparative tasting activity at home",
        "Peer discussion forum on flavour observations",
      ],
      sync: null,
      syncRationale: "Comparative tasting requires unhurried, individual attention to sensory nuance. Asynchronous discussion allows more thoughtful, considered flavour descriptions than real-time conversation would permit.",
    },
    learnContent: {
      videos: [
        {
          title: "Flavour Isn't What You Add — It's What Happens",
          duration: "7 min",
          description:
            "A visual explainer showing how flavour builds in layers through a cooking process — from base flavours established through technique (browning, toasting) to aromatic layers added at different points to finishing elements that provide contrast and brightness.",
          scriptOutline: [
            "HOOK (0:00–0:40): 'If flavour came from ingredients, then every dish with garlic would taste the same. But it doesn't. Raw garlic, toasted garlic, slow-cooked garlic, and burnt garlic are four completely different experiences. Why?'",
            "CONCEPT — LAYERING (0:40–3:00): Animation showing flavour building in three layers: (1) Foundation — flavours created by technique (heat, time), (2) Architecture — flavours added at specific moments during cooking, (3) Finishing — elements added at the end for contrast. 'Flavour isn't a list of ingredients — it's a timeline of decisions.'",
            "CONCEPT — SEQUENCE MATTERS (3:00–5:00): Same three ingredients added in different orders produce different results. Animation demonstrates: 'When you add something changes what it becomes.'",
            "CONCEPT — PROPORTION & BALANCE (5:00–6:30): The idea that flavour is about relationships between components, not absolute amounts. 'A pinch of salt in sweet dough doesn't make it salty — it makes the sweetness more complex.'",
            "CALL TO ACTION (6:30–7:00): 'This week, you're going to conduct your own comparative tasting — changing one thing and seeing what happens to the flavour.'",
          ],
        },
      ],
      visuals: [
        {
          title: "The Flavour Layer Model",
          type: "Interactive Infographic",
          description:
            "A vertical layered diagram showing Foundation → Architecture → Finishing layers. Clickable examples in each layer. Interactive slider showing how changing the timing of adding one element shifts the overall flavour profile.",
        },
      ],
      readings: [
        {
          title: "The Flavour You Didn't Plan",
          description:
            "A 700-word reading on emergent flavour — the idea that the final taste of a dish is not simply the sum of its ingredients but the product of their interactions. Uses a music analogy: individual notes vs. chord vs. melody.",
        },
      ],
      interactives: [
        {
          title: "Flavour Sequence Explorer",
          tool: "Genially",
          description: "An interactive branching visual where learners explore how changing the order of three flavour additions changes the outcome.",
          mechanics:
            "Learners select an order for adding three generic flavour types (aromatic, acid, heat) to a base. Each sequence shows a different flavour outcome description. Learners explore all possible sequences and reflect on why order matters.",
        },
      ],
    },
    doActivities: [
      {
        title: "Comparative Tasting Experiment",
        type: "experiment",
        description: "A structured at-home tasting where you change one variable and observe the flavour difference.",
        instructions: [
          "Choose a simple process where you can change ONE timing variable. Examples: (a) Add a spice at the start vs. at the end of cooking. (b) Toast a seed/nut before adding vs. adding raw. (c) Add acid (lemon/vinegar) during cooking vs. as a finishing element.",
          "Prepare two small batches — identical except for the one variable you changed.",
          "Taste both. Write a description of each: What flavours do you notice? How do they differ? Which do you prefer and why?",
          "Write a 300-word comparison posting: What I changed → What I observed → What I think this tells me about how flavour develops.",
        ],
      },
    ],
    discussPrompt: {
      prompt:
        "Share your comparative tasting results. What variable did you change? What flavour difference did you observe? Was the result what you expected? What does this tell you about how flavour develops over time?",
      peerRequirement: "Respond to at least two peers — compare your findings and discuss whether sequence/timing had a bigger effect than you expected.",
    },
    assessments: [
      {
        title: "Comparative Tasting Write-Up",
        type: "journal",
        description: "300-word comparison assessed for multi-variable reasoning — is flavour analysed as interaction rather than simple addition?",
      },
      {
        title: "Flavour Sequence Quiz",
        type: "quiz",
        description: "Interactive quiz on flavour layering concepts — assessing understanding of sequence, timing, and proportion effects.",
      },
    ],
  },
  {
    id: 5,
    slug: "decision-making",
    title: "Building Decision-Making Ability in Cooking",
    shortTitle: "Decision-Making",
    week: 5,
    status: "locked",
    hasLiveSession: true,
    liveSessionTitle: "Kitchen Dilemmas — Decision-Making Workshop",
    liveSessionDuration: "60 min",
    purpose:
      "To develop learners' capacity to make principled, reasoned cooking decisions when facing constraints, substitutions, or unexpected outcomes — shifting from 'what does the recipe say?' to 'what makes sense given what I know?'",
    objectives: [
      "Analyse a cooking dilemma by identifying the function of each component before deciding on a substitution or adaptation",
      "Make and justify a reasoned cooking decision when facing a constraint, using principled reasoning rather than guesswork",
      "Evaluate competing approaches to a cooking problem, articulating trade-offs and justifying a preferred solution",
    ],
    cognitiveShift: {
      from: "I can't make this because I'm missing an ingredient",
      to: "I can reason about what to substitute and why, based on the function it serves",
    },
    deliveryMode: {
      async: [
        "Interactive branching decision scenarios",
        "Constraint challenge: cook with a deliberate limitation",
        "Reflection journal on decision-making process",
      ],
      sync: "Live 'Kitchen Dilemmas' workshop — real-time decision scenarios and group debate (60 min)",
      syncRationale:
        "Decision-making under uncertainty is a dialogic skill — defending reasoning, hearing alternatives, and receiving facilitator probing require real-time interaction that written activities cannot replicate.",
    },
    learnContent: {
      videos: [
        {
          title: "Thinking Like a Cook Who Doesn't Need a Recipe",
          duration: "6 min",
          description:
            "A video that reframes cooking decisions from 'follow vs. deviate' to 'understand the function, then decide.' Introduces the idea that every ingredient and step in a recipe serves a function — and that understanding the function is the key to making good adaptations.",
          scriptOutline: [
            "HOOK (0:00–0:30): 'You're halfway through making something. You open the fridge and realise you're missing a key ingredient. What do you do?'",
            "THE WRONG QUESTION (0:30–2:00): 'Most people ask: What can I substitute? But that's the wrong question. The right question is: What was that ingredient DOING?'",
            "FUNCTION THINKING (2:00–4:00): Three examples of functional analysis. 'Eggs in a cake aren't just eggs — they're binding, leavening, and adding moisture. So the right substitute depends on which function you need most.'",
            "DECISION FRAMEWORK (4:00–5:30): 'When you face a cooking decision: (1) What is the function? (2) What are my options? (3) What trade-offs does each option create? (4) What makes the most sense given my specific situation?'",
            "CLOSE (5:30–6:00): 'This week, you'll practise this kind of thinking — in scenarios, in your own kitchen, and in our live Kitchen Dilemmas session.'",
          ],
        },
      ],
      visuals: [
        {
          title: "The Decision Framework",
          type: "Visual Reference Card",
          description:
            "A clean, printable visual showing the four-step decision process: Identify Function → Generate Options → Evaluate Trade-offs → Decide and Justify. Designed to be referenced during the constraint challenge and live session.",
        },
      ],
      readings: [
        {
          title: "Beyond Substitution Charts",
          description:
            "A 700-word reading arguing that generic substitution lists ('use X instead of Y') are unhelpful because they ignore context. The key idea: the best substitute depends on what the ingredient is doing in THIS specific dish, not on a universal equivalence table.",
        },
      ],
      interactives: [
        {
          title: "Kitchen Dilemma Branching Scenarios",
          tool: "Articulate Storyline",
          description:
            "Three branching scenarios where learners face a cooking decision point and must choose a path. Each choice leads to a consequence and an explanation of the reasoning.",
          mechanics:
            "Scenario 1: Missing a binding agent mid-recipe — choose from 3 substitutes, each with different consequences. Scenario 2: Your dish is too salty — choose a corrective strategy. Scenario 3: You only have 20 minutes instead of 60 — what do you change? Each path shows the outcome and explains the reasoning behind better/worse choices. Learners can replay to explore all paths.",
        },
      ],
    },
    doActivities: [
      {
        title: "The Constraint Challenge",
        type: "experiment",
        description: "Deliberately cook with a limitation and document your reasoning process.",
        instructions: [
          "Choose a dish you know how to make well.",
          "Impose ONE constraint: remove a key ingredient, change the equipment, halve the time, or adapt for a dietary restriction you don't normally accommodate.",
          "Before cooking, write down: What is the function of the element I'm removing/changing? What are my options? What trade-offs does each create? What am I going to try and why?",
          "Cook the adapted version. Document the result (photos + notes).",
          "Write a 300-word reflection: What happened? Was my reasoning sound? What would I do differently?",
        ],
      },
    ],
    discussPrompt: {
      prompt:
        "Share your Constraint Challenge. What limitation did you impose? How did you reason about the adaptation? Did the result match your expectations? What did the constraint force you to think about that you normally take for granted?",
      peerRequirement: "Respond to at least two peers — evaluate whether their adaptations were well-reasoned and suggest an alternative approach they might not have considered.",
    },
    assessments: [
      {
        title: "Branching Scenario Responses",
        type: "scenario",
        description: "Tracked completion of all three branching scenarios with decision justification captured at each branch point.",
      },
      {
        title: "Constraint Challenge Documentation",
        type: "journal",
        description: "Pre-cooking reasoning + post-cooking reflection assessed for decision justification quality — principled or arbitrary?",
      },
      {
        title: "Live Kitchen Dilemmas Participation",
        type: "peer",
        description: "Active participation in live workshop — defending reasoning, evaluating alternatives, engaging in group debate.",
      },
    ],
  },
  {
    id: 6,
    slug: "experimentation",
    title: "Designing Personal Cooking Experiments",
    shortTitle: "Experiment Design",
    week: 6,
    status: "locked",
    hasLiveSession: true,
    liveSessionTitle: "Experiment Showcase & Course Closing",
    liveSessionDuration: "75 min",
    purpose:
      "To scaffold learners into designing, executing, and reflecting on their own simple cooking experiments — the capstone expression of the entire course's cognitive arc from procedural imitation to principled experimentation.",
    objectives: [
      "Formulate a clear, testable question about a cooking process",
      "Design a simple controlled experiment with identified variables, a method, and an observation plan",
      "Execute the experiment, document results systematically, and draw evidence-based conclusions",
      "Reflect on the experimental process itself — what worked, what surprised, what would change",
      "Communicate findings clearly to peers and provide constructive feedback on a peer's experiment",
    ],
    cognitiveShift: {
      from: "Following prescribed learning activities",
      to: "Independently generating knowledge through self-directed experimentation",
    },
    deliveryMode: {
      async: [
        "Scaffolded experiment design template",
        "Home experiment execution and documentation",
        "Structured write-up with results and reflection",
        "Peer review of one classmate's experiment",
      ],
      sync: "Live 'Experiment Showcase' — volunteer presentations, group discussion, course closing reflection (75 min)",
      syncRationale:
        "Presenting work publicly deepens integration and metacognition. Hearing others' experiments extends understanding. The course-closing reflection benefits from the emotional and social dimension of shared live experience.",
    },
    learnContent: {
      videos: [
        {
          title: "From Curiosity to Experiment: A Simple Framework",
          duration: "7 min",
          description:
            "A video walking through the process of turning a kitchen curiosity into a structured experiment. Uses a non-cooking example first (to model the process without predetermining cooking experiments), then shows how the same framework applies in the kitchen.",
          scriptOutline: [
            "HOOK (0:00–0:30): 'You've been observing, explaining, tasting, and deciding for five weeks. Now it's time to ask your own question — and find your own answer.'",
            "THE FRAMEWORK (0:30–3:00): Question → Hypothesis → Variables (what you change, what you measure, what you keep the same) → Method → Observation Plan → Results → Reflection. Walked through with a non-cooking example: 'Does the colour of a mug affect how hot people think a drink is?'",
            "KITCHEN APPLICATION (3:00–5:30): 'Now let's apply this to cooking.' Walk through an example: 'Does resting time affect how juicy a piece of meat is?' Show how to set up the question, hypothesis, variables, and method.",
            "COMMON PITFALLS (5:30–6:30): 'The three most common experiment design mistakes: (1) Changing too many things at once, (2) Not having a clear way to observe the result, (3) Forgetting to document what you actually did.'",
            "CLOSE (6:30–7:00): 'This week, you design your experiment, get feedback, then run it. At the end, you'll have something to show for every skill you've built in this course.'",
          ],
        },
      ],
      visuals: [
        {
          title: "The Experiment Design Canvas",
          type: "Interactive Template",
          description:
            "A visually structured one-page canvas with labelled sections: My Question, My Hypothesis, What I'll Change (independent variable), What I'll Observe (dependent variable), What I'll Keep the Same (controlled variables), My Method (step by step), How I'll Document Results. Printable and fillable digitally.",
        },
      ],
      readings: [
        {
          title: "Your Kitchen Is a Laboratory",
          description:
            "A 600-word reading reframing the home kitchen as a space for structured inquiry. Emphasises that experiments don't need to be complex or 'scientific-looking' — they need a clear question, a fair comparison, and honest observation. The key message: the value is in the process of thinking, not the outcome.",
        },
      ],
      interactives: [
        {
          title: "Experiment Design Builder",
          tool: "Articulate Rise",
          description:
            "A step-by-step interactive walkthrough that guides learners through each element of experiment design, with embedded check-your-understanding prompts and 'dig deeper' expandable sections.",
          mechanics:
            "Progressive disclosure format — learners complete one section (e.g., 'My Question') before the next section ('My Hypothesis') expands. Each section includes: brief instruction, an example, a check prompt ('Is your question testable? Can you observe the result?'), and an optional 'dig deeper' section for more experienced learners.",
        },
      ],
    },
    doActivities: [
      {
        title: "Experiment Design Submission (Mid-Week)",
        type: "experiment",
        description: "Submit your completed experiment design for facilitator feedback before executing.",
        instructions: [
          "Complete the Experiment Design Canvas — either the printable version or the digital interactive version.",
          "Submit by Wednesday for facilitator feedback. You'll receive feedback within 24 hours.",
          "Review and revise your design based on feedback before conducting your experiment.",
        ],
      },
      {
        title: "Experiment Execution and Documentation",
        type: "experiment",
        description: "Conduct your experiment at home and document everything.",
        instructions: [
          "Conduct your experiment following your revised design.",
          "Document with photos and/or short video clips at each stage.",
          "Record observations systematically — what you did, what you saw, any deviations from your plan.",
          "Note anything surprising or unexpected.",
        ],
      },
      {
        title: "Experiment Write-Up and Reflection",
        type: "reflection",
        description: "Write your structured experiment report and reflective essay.",
        instructions: [
          "Complete your experiment write-up: (1) What I Did — brief method summary, (2) What I Observed — results with photos/descriptions, (3) What I Conclude — evidence-based interpretation, (4) What Surprised Me — unexpected findings.",
          "Write your Reflective Essay (500–700 words): How has your thinking about cooking changed across the course? What reasoning skills did you develop? What would you do differently if you ran this experiment again? What skills from this course could you apply outside the kitchen?",
          "Complete a Peer Review of one assigned classmate's experiment using the provided rubric.",
        ],
      },
    ],
    discussPrompt: {
      prompt:
        "After presenting (or watching) experiments in the live showcase, share your biggest takeaway. What did you learn from someone else's experiment that you hadn't considered? How has the course changed how you think about cooking — and about thinking itself?",
      peerRequirement: "This is the final forum — respond to as many peers as you wish. Celebrate what you've all built.",
    },
    assessments: [
      {
        title: "Experiment Design Worksheet",
        type: "portfolio",
        description: "Submitted mid-week for feedback — assessed for clarity of question, hypothesis, variable identification, and method feasibility.",
      },
      {
        title: "Personal Experiment Portfolio (Summative)",
        type: "portfolio",
        description:
          "Final portfolio comprising: Experiment Design (20%), Process Documentation (15%), Results & Reasoning (25%), Reflective Essay (25%), Peer Review Contribution (15%). Graded using published rubric.",
      },
    ],
  },
];
