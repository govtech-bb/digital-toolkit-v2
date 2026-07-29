---
layout: layouts/article.njk
title: Service patterns
lede: The nine standard pages every alpha.gov.bb service follows, the reusable field blocks that sit within them, and the Barbados-specific field standards that apply across all forms.
---
This page defines the nine standard pages every alpha.gov.bb service follows, the reusable field blocks that sit within them, and the Barbados-specific field standards that apply across all forms. Use it when analysing a paper form, designing a new digital service, or reviewing an existing one.

The service pattern is not a rigid template — it is a shared language. Every service is different, but by mapping its questions to the same nine pages and the same set of reusable blocks, teams can design consistently, review quickly, and build forms that people can actually complete.

> The two most common problems on today's alpha.gov.bb forms are missing format hints on ID and phone fields, and eligibility checks placed after personal details. The pages below are designed to prevent both — with guidance called out at the relevant page.

The reusable field blocks referenced below (P-01, P-02, and so on) are the building blocks of a forthcoming pattern library. That library is not yet published — but the block names and codes are stable, so treat them as a shared vocabulary when talking to GovTech about a service you are designing.

## 1. Start page

**What this page does**

Sets expectations before the user commits to starting. Tells them what the service is, who it is for, what they need to have ready, how long it takes, and what it costs.

**What to put on this page**

- Name and plain-English description of the service
- Who this service is for (citizens, residents, employers, third parties)
- What the user needs before starting — documents, IDs, fees
- A brief eligibility summary — who qualifies — but no questions yet
- Processing time: how long before the user hears back
- Cost of the service, if applicable, and how payment is made

**Barbados examples**

**Get a Birth Certificate (Barbados Registration Department):** "You will need your National Registration Number (NRN), the full name and date of birth of the person named on the certificate, and your reason for ordering. Fee: BBD$10. Processing: 3–5 working days."

**Jobstart Plus Programme (Ministry of Education and Technological and Vocational Training):** "This programme is open to Barbadian citizens and permanent residents aged 18–35 who are currently unemployed. You will need your NRN, NIS number, and bank account details for payment. Applications are reviewed within 10 working days."

**Apply for a Conductor Licence (Transport Authority):** "You must hold a valid driving licence and have no disqualifications in the past 5 years. Fee: BBD$25. You will need your NRN and a recent police certificate of character from the Royal Barbados Police Force."

> This is where the user decides whether to continue. If the eligibility summary is vague or the document list is incomplete, users start the form unprepared and abandon it partway through or submit with the wrong documents. Be specific.

## 2. Eligibility page

**What this page does**

Asks first-level filtering questions to determine whether the user can continue. If they fail any check, they are stopped immediately with a clear explanation and signposted to alternatives. No personal data is collected before this point.

**What to put on this page**

- Can the user use this service?
- Are they applying for themselves or on behalf of someone else?
- High-level blockers: age, citizenship, residency, employment status
- One question per screen — do not bundle eligibility checks on a single page

**Barbados examples**

Programme and benefit forms — eligibility questions come here, before the applicant details page:

*"Are you a Barbadian citizen or permanent resident?"*

*"Are you aged between 18 and 35?"*

*"Are you currently unemployed or seeking employment?"*

Certificate and licence forms — simpler gatekeeping questions:

*"Are you applying for your own birth certificate, or on behalf of someone else?"*

*"Do you have a valid National Registration Number (NRN)?"*

*"Do you hold a valid Barbados driving licence?"*

> On several current alpha.gov.bb programme forms — Jobstart Plus, Community Sports, the Youth Opportunity applications — eligibility checks were placed *after* applicant details. Users spent time filling in their name and ID before discovering they did not qualify. Run eligibility checks on this page, before the applicant details page. Use the Eligibility Screener Gate (P-38).

## 3. Applicant details page

**What this page does**

Collects the personal information needed to identify the person applying. This page is about who they are, not about the service yet. It draws entirely from the standardised field blocks (P-01 through P-04) defined in the pattern library.

**What to put on this page**

- Full name (P-01 Name Block)
- Personal identifiers: NRN, NIS Number, Date of Birth, Gender, Marital Status (P-03 Personal Details Block)
- Home address including parish (P-02 Barbados Address Block)
- Contact details: phone and email (P-04 Contact Block)
- Confirmation that the user is the one submitting (if required)

**Barbados field standards**

| Field | Format | Required hint text | Example to show |
| :---- | :---- | :---- | :---- |
| National Registration Number (NRN) | YYMMDD-XXXX | Yes, show format | e.g. 970315-1234 |
| Telephone / Mobile Number | 246-XXX-XXXX | Yes, show format | e.g. 246-430-1234 |
| Postal Code | BB + 5 digits | Yes, show format | e.g. BB11000 |
| Date of Birth | DD/MM/YYYY | Yes, label the format | e.g. 15/03/1997 |
| Parish | Dropdown — 11 options | Placeholder: "Select a parish…" | Christ Church, St. Michael, etc. |
| NIS Number | 6-digit numeric | Yes, with source hint | "Find this on your NIS card or payslip" |

**Parish dropdown options (Barbados — all 11)**

Christ Church · St. Andrew · St. George · St. James · St. John · St. Joseph · St. Lucy · St. Michael · St. Peter · St. Philip · St. Thomas

> The NRN, telephone, and postcode fields are the most-failed fields on alpha.gov.bb: users guess the format and are rejected. Show the example hint beneath every field — "e.g. 970315-1234", "e.g. 246-430-1234", "e.g. BB11000".

## 4. Criteria and entitlement page

**What this page does**

Goes deeper than the eligibility page. Asks behaviour- or status-based questions that determine whether the applicant is entitled to the specific service they are requesting. These questions may reveal disqualifications, conditions, or legal requirements that affect what happens next.

**What to put on this page**

- Past offences, disqualifications, endorsements
- Status-based conditions that may affect entitlement
- High-level yes/no triggers that open further question branches
- These determine entitlement before gathering supporting evidence

**Barbados examples**

*"Have you ever been disqualified from holding a conductor licence in Barbados or any other country?"*

*"Have you received any NIS benefit payments in the past 12 months?"*

*"Is the person whose death certificate you are requesting a Barbadian citizen?"*

*"Are you currently receiving an employer pension in addition to NIS benefits?"*

*"Has your NIS benefit claim been previously rejected?"*

> This page always precedes the evidence-based questions page. A "Yes" here is what triggers a follow-up evidence page. A "No" may mean the evidence page is skipped entirely. Design the flow so that only relevant follow-up questions are shown.

## 5. Evidence-based questions page

**What this page does**

Collects the detailed information needed to verify a claim, rule, or condition flagged on the criteria and entitlement page. This page only appears when there is something to follow up on from the previous page.

**What to put on this page**

- Structured details triggered by a "Yes" answer on the criteria and entitlement page
- Court name, date, period (if they declared a disqualification)
- Description of the relationship to the deceased (death certificate)
- Employer and employment period details (Jobstart, NIS forms)
- Specific structured evidence questions required for back-end checks

**Barbados examples**

*"Which court issued the disqualification, and on what date?"* [Conductor Licence]

*"What is your relationship to the deceased?"* [Death Certificate]

*"Name your most recent employer and the dates of your employment."* [Jobstart Plus]

*"Which educational institution are you currently attending, and what programme are you enrolled in?"* [Youth Opportunity BTU]

> This page always follows from something asked on the criteria and entitlement page. If nothing was flagged there, this page does not appear. Never use this page to ask general background questions — it is specifically for follow-up evidence.

## 6. External evidence upload page

**What this page does**

Allows the user to upload documents the government system cannot verify digitally. Keep this page as short as possible — only ask for documents that are genuinely required and cannot be obtained through system integration.

**What to put on this page**

- National Registration Number card (both sides) or valid passport
- Police Certificate of Character — from the Royal Barbados Police Force (RBPF)
- Birth certificate of the person named (for third-party certificate requests)
- Proof of death — where required for survivor's benefit or estate applications
- NIS contribution statement (for employment history verification)
- Educational certificates (for Youth Opportunity BTU and similar programmes)
- Bank statement or passbook showing account name and number (for direct deposit)
- Passport photographs (for licence and ID applications)
- Employer letter confirming employment status or termination

**Accepted file formats — standard across all alpha.gov.bb services**

PDF, JPG, PNG · Maximum file size: 5MB per document · Scanned documents must be legible and unobstructed

> Only request documents the agency cannot obtain internally. If NIS can verify NIS numbers from their own system, do not ask for an NIS card upload. If the Barbados Registration Department can verify birth registration, do not ask for a birth certificate to be uploaded. Work with the MDA to establish what can be verified automatically.

## 7. Check your answers page

**What this page does**

Shows the user a complete, readable summary of everything they have entered. Gives them the opportunity to review and correct before submitting. No new questions are asked here.

**What to put on this page**

- A section-by-section read-only summary of all answers
- "Change" links next to each section heading (not each individual field)
- Uploaded file names with a link to replace each one
- Total fee due (if applicable), clearly stated before submission
- The legal declaration and consent checkbox — directly above the submit button

**Declaration text — standard for Barbados government services**

The standard declaration reads: *"I declare that the information I have provided on this form is true and correct to the best of my knowledge and belief. I understand that providing false information may result in prosecution under the laws of Barbados."*

For NIS forms carrying a penalty, add: *"WARNING: Any person who makes a false statement is liable to a fine or term of imprisonment or both."* Display this above the submit button.

> On several live forms the declaration checkbox is being missed at submission time. Make it easy to see and easy to tap: at least 44×44px on mobile, visually separated from the declaration text, and never buried at the bottom of a long paragraph. For long declarations, show a short summary and let the user expand for detail.

## 8. Payment and submit page

**What this page does**

Allows the user to pay for the service (when applicable) and make their final submission. Even when there is no fee, there is always a submit step on this page.

**What to put on this page**

- Fee amount, clearly stated in BBD$ before the user enters payment details
- Accepted payment methods — currently EZ Pay for government services
- Payment confirmation before submission is triggered
- Final declaration (if not already on the check your answers page)
- Submit button — labelled specifically, e.g. "Submit Application", "Pay and Submit", "Submit Certificate Request"

**Barbados payment notes**

Government services on alpha.gov.bb currently accept payment via EZ Pay. Do not show a payment page for services that are free of charge — go directly to submission. Where a service has tiered fees (e.g. different certificate types), state the correct fee on the check your answers page before the user reaches this step.

> Not every service requires payment, but every service has a submit step. The submit button label should reflect what the action does — "Submit Application" for a programme form, "Pay and Submit" for a fee-bearing service, "Submit Certificate Request" for a records request.

## 9. Confirmation and next steps page

**What this page does**

Confirms the submission and tells the user clearly what will happen next, in what timeframe, and who to contact if they need help. No form fields appear on this page — it is entirely output.

**What to put on this page**

- "Your application has been submitted." — clear, direct, prominent
- Application reference number — bold, easy to copy or screenshot
- Email confirmation: "A confirmation has been sent to [email address]."
- Expected processing time — be specific where possible
- What the applicant should do if their circumstances change
- MDA contact details for follow-up enquiries
- Any follow-up steps the applicant needs to take (e.g. attend in person, await a call)

**Barbados examples**

**Get Birth Certificate:** "Your certificate request has been submitted. Reference: BRD-2026-XXXXXX. Processing takes 3–5 working days. Your certificate will be available for collection at the Barbados Registration Department, Coleridge Street, Bridgetown. You will receive an email when it is ready."

**Jobstart Plus Programme:** "Your application has been submitted. Reference: JSP-2026-XXXXXX. The Ministry of Education and Technological and Vocational Training will review your application within 10 working days. You will be contacted at the phone number or email you provided."

> If a service generates a legal document with multiple parties — for example, the Termination of Service form which must reach both the employee and NIS within 7 days — the confirmation page must make the distribution and deadline explicit. "A copy has been sent to [recipient]. NIS must receive their copy within 7 days of the termination date."

## Standardised field blocks

Each block maps to a pattern in the forthcoming pattern library, which will hold field-level specifications, validation rules, and design notes. The library is not yet published; the codes below are stable references you can use in the meantime.

| Block | Pattern | Optimal page | Notes |
| :---- | :---- | :---- | :---- |
| Name Block | P-01 | Applicant details | Title, first name, middle name(s), last name. Pre-fill after login where possible. |
| Barbados Address Block | P-02 | Applicant details | Street address, district (village/area), parish (dropdown — 11 options), postal code (BB + 5 digits). Show hint text on postcode. |
| Personal Details Block | P-03 | Applicant details | NRN (YYMMDD-XXXX — show format example), NIS Number, Date of Birth, Gender, Marital Status. High candidate for pre-fill. |
| Contact Block | P-04 | Applicant details | Telephone (246-XXX-XXXX — show format example), mobile, email. At least one of telephone/mobile required. |
| Eligibility Screener Gate | P-38 | Eligibility | Age range, citizenship, residency, programme-specific questions. Comes before applicant details on programme forms. Added July 2026. |
| Eligibility Block | P-12, P-16 | Eligibility | ID type gate, termination type gate. Simple yes/no. Stop ineligible users immediately with a clear explanation and alternatives. |
| Employer Identity Block | P-06 | Applicant / Criteria | Employer name and NIS registration number. Can pre-populate from employer login. Format TBC with NIS (Q-01). |
| Employment History Block | P-07 | Evidence-based | Occupation, employment dates, termination and last paid dates. Validate the dates in sequence. |
| Business Details Block | P-11 | Applicant / Criteria | Business name, CAIPO (Corporate Affairs and Intellectual Property Office) registration number, nature of business, estimated monthly income. |
| Evidence Upload Block | P-09, P-12 | External evidence upload | NRN card, passport, police certificate (RBPF), NIS statement, bank passbook, educational certificates. PDF/JPG/PNG, max 5MB. |
| Declaration Block | P-05 | Check your answers | Legal statement + consent checkbox + date. Penalty-carrying forms: add legal warning above checkbox. 44px minimum tap target. |
| Payment Block | — | Payment and submit | EZ Pay integration. Display fee clearly before the user enters payment. State the exact BBD$ amount. |
| Official Use Block | P-14 | Admin view only | Internal officer fields. Never visible to citizens. Requires separate MDA officer UI spec. |
| Banking Details Block | P-08 | Applicant details | Bank, branch, account type, account number. Required when claimant elects direct deposit. Upload bank statement as proof. |
| Alternate Payee / Nominee Block | P-09 | Applicant details | Mirrors full applicant details for a nominated third party. Requires empowerment instrument upload. |

## AI prompt — form analysis

Use this prompt when analysing a paper form or an existing digital form to categorise its questions into the service pattern structure.

> Using the attached alpha.gov.bb Service Patterns document, analyse the attached form and do the following:
>
> 1. Categorise each question or field into the correct service pattern page (start page, eligibility page, applicant details, criteria and entitlement, evidence-based questions, external evidence upload, check your answers, payment and submit, confirmation).
> 2. Flag any questions that are in the wrong position — for example, eligibility checks that appear after personal details, or evidence questions that appear before criteria questions.
> 3. Note any fields that are missing Barbados-specific format guidance: NRN (YYMMDD-XXXX), telephone (246-XXX-XXXX), postcode (BB + 5 digits), date of birth (DD/MM/YYYY).
> 4. Identify which standardised blocks (P-01 through P-38) apply, and note any fields that deviate from the block specification.
> 5. Produce a summary table showing: Field / Current Page / Correct Page / Issue (if any).
>
> [Attach this document and the form to analyse]

## Common design errors to avoid

These are the design errors most likely to break a form on alpha.gov.bb. Each is common, avoidable, and worth checking for before you ship.

### 1. Eligibility checks placed after personal details

The most disruptive error. Users fill in their name, address, and ID, then discover they don't qualify. Move all age, citizenship, and programme eligibility checks to the eligibility page (page 2), before the applicant details page (page 3). Use the Eligibility Screener Gate (P-38).

### 2. Missing format hints on ID, phone, and postcode fields

The NRN, telephone, and postcode fields all have specific Barbadian formats. Without an example, users guess and get rejected. "e.g. 970315-1234", "e.g. 246-430-1234", and "e.g. BB11000" belong on every implementation of these fields.

### 3. Shared templates deployed without field-level testing

The 10 Youth Opportunity forms share a common template. When the template had field guidance gaps, those gaps appeared on all 10 forms. Test any template on its own before deploying it as the basis for multiple forms.

### 4. Declaration checkboxes that are easy to miss

The declaration checkbox fails when it is too small to tap on mobile, or sits at the bottom of a long text block that users skip. Visually separate it from the declaration text and ensure a minimum 44×44px tap target.

### 5. Launching without user testing

Five people attempting a form out loud before it goes live would catch format hint problems and eligibility placement errors in a single afternoon. Informal testing is the cheapest quality check available for a government service — and it will catch problems that would otherwise ship.

## Where to get help

- Contact GovTech at [{{ site.email }}](mailto:{{ site.email }}) if you are analysing a paper form, designing a new service, or want a review against these patterns.
- Read [what kind of service are you building?](/getting-started/what-kind-of-service/) to check whether the service you are working on is a simple service (the type these patterns apply to most directly).
- The [Barbados Government Design System](https://govtech-bb.github.io/design-system/) provides the components that these patterns are built from. See [using the design system](/design-and-build/using-the-design-system/) for how to install it.
