/* A function I use a lot to make it easier to assign properties to an HTML element when we create it */
const createElementWithOptions = (type, options = {}) =>
  Object.assign(document.createElement(type), options);

/* Asynchronous JavaScript  (including "await") is very important, but definitely an intermediate topic */
const response = await fetch("/json/faq-questions.json");
const faqData = await response.json();

/* looping through each category - I'm making use of "destructuring assignment") */
for (const [category, { icon, items }] of Object.entries(faqData)) {
  /* this is something we'll use to make our classes & ids unique */
  const categorySlug = category.toLowerCase().replace(" ", "-");

  const categorySection = createElementWithOptions("section", {
    className: categorySlug
  });

  const categoryIcon = createElementWithOptions("i", {
    className: icon
  });

  const categoryHeading = createElementWithOptions("h2", {
    textContent: category
  });

  const categoryAccordion = createElementWithOptions("div", {
    className: "accordion",
    id: `accordion-${categorySlug}`
  });

  /* loop through our question and answers array for this category */
  const accordionItems = items.map(({ q, a }, i) => {
    const accordionItem = createElementWithOptions("div", {
      className: "accordion-item"
    });

    const itemHeader = createElementWithOptions("h3", {
      className: "accordion-header",
      id: `heading-${categorySlug}-${i}`
    });

    const itemButton = createElementWithOptions("button", {
      className: "accordion-button collapsed",
      type: "button",
      textContent: q
    });

    itemButton.setAttribute("data-bs-toggle", "collapse");
    itemButton.setAttribute("data-bs-target", `#collapse-${categorySlug}-${i}`);
    itemButton.setAttribute("aria-expanded", "false");
    itemButton.setAttribute("aria-controls", `collapse-${categorySlug}-${i}`);

    const itemCollapse = createElementWithOptions("div", {
      className: "accordion-collapse collapse",
      id: `collapse-${categorySlug}-${i}`
    });

    itemCollapse.setAttribute(
      "data-bs-parent",
      `#accordion-${categorySlug}-${i}`
    );
    itemCollapse.setAttribute(
      "aria-labelledby",
      `heading-${categorySlug}-${i}`
    );

    const itemBody = createElementWithOptions("div", {
      className: "accordion-body",
      textContent: a
    });

    /* We've created everything we need to, so we can now start putting elements inside each other */

    itemHeader.append(itemButton);
    itemCollapse.append(itemBody);
    accordionItem.append(itemHeader, itemCollapse);
    return accordionItem;
  });

  categoryAccordion.append(...accordionItems);
  categorySection.append(categoryIcon, categoryHeading, categoryAccordion);
  document.querySelector("main").append(categorySection);
}
