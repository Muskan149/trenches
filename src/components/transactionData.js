export const transactions = [
    {"date": "2025-03-01", "merchant": "Netflix", "amount": -15.99, "category": "Subscription", "type": "Unhealthy"},
    {"date": "2025-03-02", "merchant": "DoorDash", "amount": -32.45, "category": "Food Delivery", "type": "Unhealthy"},
    {"date": "2025-03-03", "merchant": "Walmart", "amount": -85.30, "category": "Groceries", "type": "Necessary"},
    {"date": "2025-03-05", "merchant": "Airbnb", "amount": -220.00, "category": "Travel", "type": "Unhealthy"},
    {"date": "2025-03-06", "merchant": "Netflix", "amount": -15.99, "category": "Subscription", "type": "Unhealthy"},
    {"date": "2025-03-07", "merchant": "DoorDash", "amount": -27.89, "category": "Food Delivery", "type": "Unhealthy"},
    {"date": "2025-03-08", "merchant": "Walmart", "amount": -92.15, "category": "Groceries", "type": "Necessary"},
    {"date": "2025-03-09", "merchant": "Airbnb", "amount": -315.00, "category": "Travel", "type": "Unhealthy"},
    {"date": "2025-03-10", "merchant": "Netflix", "amount": -15.99, "category": "Subscription", "type": "Unhealthy"},
    {"date": "2025-03-11", "merchant": "DoorDash", "amount": -45.99, "category": "Food Delivery", "type": "Unhealthy"},
    {"date": "2025-03-12", "merchant": "Walmart", "amount": -78.20, "category": "Groceries", "type": "Necessary"},
    {"date": "2025-03-13", "merchant": "Airbnb", "amount": -410.00, "category": "Travel", "type": "Unhealthy"},
    {"date": "2025-03-14", "merchant": "Netflix", "amount": -15.99, "category": "Subscription", "type": "Unhealthy"},
    {"date": "2025-03-15", "merchant": "DoorDash", "amount": -29.99, "category": "Food Delivery", "type": "Unhealthy"},
    {"date": "2025-03-16", "merchant": "Walmart", "amount": -66.75, "category": "Groceries", "type": "Necessary"},
    {"date": "2025-03-17", "merchant": "Airbnb", "amount": -195.00, "category": "Travel", "type": "Unhealthy"},
    {"date": "2025-03-18", "merchant": "Netflix", "amount": -15.99, "category": "Subscription", "type": "Unhealthy"},
    {"date": "2025-03-19", "merchant": "DoorDash", "amount": -38.45, "category": "Food Delivery", "type": "Unhealthy"},
    {"date": "2025-03-20", "merchant": "Walmart", "amount": -54.80, "category": "Groceries", "type": "Necessary"},
]

export const roasts = [
      "Are you trying to personally fund Netflix's next season, or did you forget you already paid them... four times this month?",
      "Based on this history, your main food groups seem to be 'Delivered' and 'Whatever Airbnb stocks in the mini-fridge'.",
      "You're like a squirrel hoarding nuts, but instead of nuts, you're hoarding unused Netflix and Hulu subscriptions."
]

export const instances = [
      "Multiple potentially redundant charges for the same subscription service (Netflix) within a single month (Mar 1, 6, 10, 14, 18). This suggests either duplicate accounts, billing errors not caught, or poor subscription management.",
      "Frequent spending on food delivery (DoorDash) on Mar 2, 7, 11, 15, 19. While convenient, relying heavily on delivery services is significantly more expensive than cooking meals.",
      "High frequency and significant amounts spent on travel/accommodation (Airbnb) within a short period (Mar 5, 9, 13, 17), totalling over $1100 in less than two weeks. This suggests potentially impulsive or poorly budgeted travel spending.",
      "Overall high proportion of spending categorized as 'Unhealthy' compared to 'Necessary' groceries, indicating a potential imbalance in budgeting priorities."
    ]
    
export const questions = [
      {
        "question": "You have multiple Netflix charges within the same month. What's the *best* first step to address this?",
        "options": [
          "Review your bank statement and Netflix account(s) to identify and cancel any duplicate subscriptions or dispute erroneous charges.",
          "Assume you just really like Netflix and accept the charges.",
          "Switch to a different streaming service immediately.",
          "Block all future charges from Netflix via your bank."
        ],
        "correctAnswer": 0,
        "justification": "Taking time to review and identify the root cause (duplicate subscriptions or billing errors) is the most responsible first step before making any drastic changes."
      },
      {
        "question": "Spending on DoorDash multiple times a week significantly impacts your budget. What's a more financially sound approach to meals?",
        "options": [
          "Only order from the cheapest restaurants on DoorDash.",
          "Plan meals for the week, buy groceries accordingly, and cook at home more often.",
          "Limit DoorDash orders to once a week.",
          "Try using Uber Eats instead to see if it's cheaper."
        ],
        "correctAnswer": 1,
        "justification": "Planning meals and cooking at home is typically 3-4 times cheaper than delivery services, plus it gives you better control over nutrition and portions."
      },
      {
        "question": "Frequent, high-cost Airbnb spending suggests significant travel expenses. How could you better manage this 'Travel' category?",
        "options": [
          "Always look for the cheapest possible Airbnb, regardless of location or reviews.",
          "Only travel during the absolute off-season.",
          "Create a dedicated travel savings fund, set a budget per trip, and plan/book travel further in advance.",
          "Decide to never travel again."
        ],
        "correctAnswer": 2,
        "justification": "Creating a dedicated fund and planning ahead helps prevent impulsive spending while still allowing for meaningful travel experiences within your budget."
      },
      {
        "question": "Looking at your spending patterns, what's the most effective way to improve your financial health?",
        "options": [
          "Cancel all subscriptions and never spend on entertainment again.",
          "Create a monthly budget that allocates specific amounts to each category, with a focus on reducing 'Unhealthy' spending.",
          "Only shop at Walmart since it's marked as 'Necessary'.",
          "Take out a loan to cover your expenses."
        ],
        "correctAnswer": 1,
        "justification": "A balanced budget that includes both necessary and discretionary spending is more sustainable than extreme measures, helping you maintain financial health long-term."
      },
      {
        "question": "Your grocery spending varies significantly between trips ($54-$92). What's the best way to stabilize this?",
        "options": [
          "Always buy the same items every time.",
          "Create a meal plan, make a detailed shopping list, and stick to it while shopping.",
          "Only shop when items are on sale.",
          "Switch to a different grocery store."
        ],
        "correctAnswer": 1,
        "justification": "Planning meals and using a shopping list helps prevent impulse purchases and ensures you only buy what you need, leading to more consistent spending."
      }
    ]