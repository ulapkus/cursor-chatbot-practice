# User Acceptance Testing (UAT) Script

## Devil's Advocate Chatbot

---

## Preconditions

### Environment Setup

- [ ] Development server running on `http://localhost:3000`
- [ ] `.env.local` file exists with valid `OPENAI_API_KEY`
- [ ] All dependencies installed (`npm install`)
- [ ] No console errors on page load

### Browser Requirements

- [ ] Test in Chrome/Edge (Chromium-based)
- [ ] Test in Safari (WebKit)
- [ ] Test in Firefox (if time permits)
- [ ] Mobile viewport testing (375px width minimum)

---

## Test Matrix: Intensity Levels

### TC-001: Intensity Selection - Mild

**Objective:** Verify Mild intensity selection and behavior

| Step | Action                               | Expected Result                                       | Status |
| ---- | ------------------------------------ | ----------------------------------------------------- | ------ |
| 1    | Navigate to app                      | Intensity selector screen displays                    | ☐      |
| 2    | Verify Mild button styling           | Green border/hover, emoji 😊 visible                  | ☐      |
| 3    | Click "Mild" button                  | Chat screen loads, badge shows "Mild"                 | ☐      |
| 4    | Enter: "Climate change is overblown" | AI responds with gentle language                      | ☐      |
| 5    | Verify tone                          | Contains phrases like "Have you considered..."        | ☐      |
| 6    | Check response structure             | Includes: acknowledgment, counter, evidence, question | ☐      |

---

### TC-002: Intensity Selection - Moderate

**Objective:** Verify Moderate intensity selection and behavior

| Step | Action                                 | Expected Result                                       | Status |
| ---- | -------------------------------------- | ----------------------------------------------------- | ------ |
| 1    | Refresh page                           | Intensity selector reappears                          | ☐      |
| 2    | Verify Moderate button styling         | Yellow border/hover, emoji 🤔 visible                 | ☐      |
| 3    | Click "Moderate" button                | Chat screen loads, badge shows "Moderate"             | ☐      |
| 4    | Enter: "Social media benefits society" | AI responds with firm but respectful opposition       | ☐      |
| 5    | Verify tone                            | Contains phrases like "I disagree because..."         | ☐      |
| 6    | Check response structure               | Includes: acknowledgment, counter, evidence, question | ☐      |

---

### TC-003: Intensity Selection - Intense

**Objective:** Verify Intense intensity selection and behavior

| Step | Action                                | Expected Result                                      | Status |
| ---- | ------------------------------------- | ---------------------------------------------------- | ------ |
| 1    | Refresh page                          | Intensity selector reappears                         | ☐      |
| 2    | Verify Intense button styling         | Red border/hover, emoji 🔥 visible                   | ☐      |
| 3    | Click "Intense" button                | Chat screen loads, badge shows "Intense"             | ☐      |
| 4    | Enter: "Democracy is the best system" | AI responds with strong, passionate counterarguments | ☐      |
| 5    | Verify tone                           | Contains phrases like "That's completely wrong..."   | ☐      |
| 6    | Check no personal attacks             | Response challenges idea, not the person             | ☐      |

---

## Streaming Behavior

### TC-004: Response Streaming

**Objective:** Verify real-time streaming functionality

| Step | Action                | Expected Result                             | Status |
| ---- | --------------------- | ------------------------------------------- | ------ |
| 1    | Select any intensity  | Chat loads successfully                     | ☐      |
| 2    | Enter a statement     | Loading indicator appears (3 bouncing dots) | ☐      |
| 3    | Wait for response     | Text streams in gradually, not all at once  | ☐      |
| 4    | Observe UI            | Stop button visible during streaming        | ☐      |
| 5    | Verify completion     | Stop button disappears when done            | ☐      |
| 6    | Check message display | AI message appears in left-aligned bubble   | ☐      |

---

### TC-005: Stop Streaming

**Objective:** Verify ability to interrupt AI response

| Step | Action                         | Expected Result                 | Status |
| ---- | ------------------------------ | ------------------------------- | ------ |
| 1    | Enter a complex statement      | AI begins streaming response    | ☐      |
| 2    | Click "Stop" button mid-stream | Streaming stops immediately     | ☐      |
| 3    | Verify partial response        | Partial message visible in chat | ☐      |
| 4    | Enter new statement            | New response begins normally    | ☐      |

---

## Conversation Flow

### TC-006: Multi-Turn Conversation

**Objective:** Verify conversation context is maintained

| Step | Action                               | Expected Result                             | Status |
| ---- | ------------------------------------ | ------------------------------------------- | ------ |
| 1    | Select Moderate intensity            | Chat loads                                  | ☐      |
| 2    | Enter: "Remote work is better"       | AI responds with counterargument            | ☐      |
| 3    | Enter: "But what about flexibility?" | AI response references previous context     | ☐      |
| 4    | Enter third message                  | Conversation maintains coherence            | ☐      |
| 5    | Scroll through history               | All messages visible and properly formatted | ☐      |
| 6    | Verify intensity persists            | All responses maintain selected intensity   | ☐      |

---

## Error Handling

### TC-007: Network Error Recovery

**Objective:** Verify graceful error handling

| Step | Action                          | Expected Result                    | Status |
| ---- | ------------------------------- | ---------------------------------- | ------ |
| 1    | Disable network/stop dev server | -                                  | ☐      |
| 2    | Try to send message             | Error message appears with ⚠️ icon | ☐      |
| 3    | Verify error UI                 | Red-tinted error card displays     | ☐      |
| 4    | Check "Retry" button            | Button is visible and styled       | ☐      |
| 5    | Restore network                 | -                                  | ☐      |
| 6    | Click "Retry"                   | Request resends, response received | ☐      |

---

### TC-008: Invalid API Key

**Objective:** Verify API key error handling

| Step | Action                              | Expected Result              | Status |
| ---- | ----------------------------------- | ---------------------------- | ------ |
| 1    | Set invalid API key in `.env.local` | -                            | ☐      |
| 2    | Restart dev server                  | -                            | ☐      |
| 3    | Send a message                      | Error state appears          | ☐      |
| 4    | Verify error message                | Clear error indication shown | ☐      |
| 5    | Restore valid API key               | -                            | ☐      |
| 6    | Restart and verify                  | Normal operation resumes     | ☐      |

---

## Input Validation

### TC-009: Empty Input

**Objective:** Verify empty input is prevented

| Step | Action                    | Expected Result              | Status |
| ---- | ------------------------- | ---------------------------- | ------ |
| 1    | Select any intensity      | Chat loads                   | ☐      |
| 2    | Click send without typing | Nothing happens, no API call | ☐      |
| 3    | Type only spaces          | Send button remains disabled | ☐      |
| 4    | Type actual text          | Send button becomes enabled  | ☐      |
| 5    | Click send                | Message sends successfully   | ☐      |

---

### TC-010: Very Long Input

**Objective:** Verify handling of long user input

| Step | Action                    | Expected Result                         | Status |
| ---- | ------------------------- | --------------------------------------- | ------ |
| 1    | Select any intensity      | Chat loads                              | ☐      |
| 2    | Paste 500+ word statement | Input accepts full text                 | ☐      |
| 3    | Send message              | Message displays properly (wrapped)     | ☐      |
| 4    | Wait for AI response      | AI responds appropriately to long input | ☐      |
| 5    | Check message bubble      | Text wraps, no horizontal scroll        | ☐      |
| 6    | Verify readability        | Line height and spacing appropriate     | ☐      |

---

### TC-011: Special Characters

**Objective:** Verify special character handling

| Step | Action                                 | Expected Result                           | Status |
| ---- | -------------------------------------- | ----------------------------------------- | ------ |
| 1    | Enter text with emojis: "AI is 🔥🔥🔥" | Message displays correctly                | ☐      |
| 2    | Enter code: `const x = 5;`             | Backticks and code preserved              | ☐      |
| 3    | Enter quotes: "He said 'no way'"       | Quotes display correctly                  | ☐      |
| 4    | Enter special chars: @#$%^&\*          | Characters render properly                | ☐      |
| 5    | Verify AI response                     | Response handles special chars gracefully | ☐      |

---

## Rate Limiting & Performance

### TC-012: Rapid Message Sending

**Objective:** Verify handling of quick successive messages

| Step | Action                          | Expected Result                     | Status |
| ---- | ------------------------------- | ----------------------------------- | ------ |
| 1    | Send first message              | Streaming begins                    | ☐      |
| 2    | Immediately send second message | Input disabled during streaming     | ☐      |
| 3    | Wait for completion             | Input re-enabled                    | ☐      |
| 4    | Send third message              | Processes normally                  | ☐      |
| 5    | Check message order             | Messages appear in correct sequence | ☐      |

---

### TC-013: API Rate Limit (429 Error)

**Objective:** Verify rate limit error handling

| Step | Action                         | Expected Result                      | Status |
| ---- | ------------------------------ | ------------------------------------ | ------ |
| 1    | Send multiple messages rapidly | If rate limited, error appears       | ☐      |
| 2    | Verify error message           | Clear indication of rate limit issue | ☐      |
| 3    | Click retry after delay        | Request succeeds                     | ☐      |
| 4    | Continue normal usage          | App recovers gracefully              | ☐      |

---

## UI/UX Testing

### TC-014: Empty State

**Objective:** Verify empty state appearance and functionality

| Step | Action               | Expected Result                              | Status |
| ---- | -------------------- | -------------------------------------------- | ------ |
| 1    | Select any intensity | Empty state displays                         | ☐      |
| 2    | Verify icon          | Custom SVG icon visible (w-32 h-32)          | ☐      |
| 3    | Check heading        | "Ready to Challenge Your Ideas?" visible     | ☐      |
| 4    | Verify description   | Text mentions current intensity mode         | ☐      |
| 5    | Check centering      | Content centered vertically and horizontally | ☐      |
| 6    | Send first message   | Empty state disappears                       | ☐      |

---

### TC-015: Message Styling

**Objective:** Verify message bubble appearance

| Step | Action               | Expected Result                        | Status |
| ---- | -------------------- | -------------------------------------- | ------ |
| 1    | Send user message    | User bubble: blue tint, right-aligned  | ☐      |
| 2    | Wait for AI response | AI bubble: dark purple, left-aligned   | ☐      |
| 3    | Check user icon      | 👤 emoji with "You" label              | ☐      |
| 4    | Check AI icon        | 🎭 emoji with "Devil's Advocate" label | ☐      |
| 5    | Verify borders       | Subtle borders visible on both bubbles | ☐      |
| 6    | Check shadows        | Card shadows applied                   | ☐      |

---

### TC-016: Header & Badge

**Objective:** Verify header and intensity badge

| Step | Action                   | Expected Result                          | Status |
| ---- | ------------------------ | ---------------------------------------- | ------ |
| 1    | Select Mild intensity    | -                                        | ☐      |
| 2    | Verify header            | "🎭 Devil's Advocate" with gradient text | ☐      |
| 3    | Check badge              | "Mild" badge with green styling          | ☐      |
| 4    | Refresh, select Moderate | Badge shows "Moderate" with yellow       | ☐      |
| 5    | Refresh, select Intense  | Badge shows "Intense" with red           | ☐      |
| 6    | Scroll chat              | Header remains sticky at top             | ☐      |

---

## Responsive Design

### TC-017: Mobile Viewport (375px)

**Objective:** Verify mobile responsiveness

| Step | Action                | Expected Result                     | Status |
| ---- | --------------------- | ----------------------------------- | ------ |
| 1    | Resize to 375px width | Intensity selector fits screen      | ☐      |
| 2    | Select intensity      | Chat loads properly                 | ☐      |
| 3    | Check header          | Title and badge fit in single row   | ☐      |
| 4    | Send message          | Message bubbles max 85% width       | ☐      |
| 5    | Check input           | Input field full width with padding | ☐      |
| 6    | Verify send button    | Button visible and clickable        | ☐      |
| 7    | Test scrolling        | Messages scroll smoothly            | ☐      |

---

### TC-018: Tablet Viewport (768px)

**Objective:** Verify tablet responsiveness

| Step | Action                | Expected Result                       | Status |
| ---- | --------------------- | ------------------------------------- | ------ |
| 1    | Resize to 768px width | Layout adapts appropriately           | ☐      |
| 2    | Check max-width       | Content max-width 4xl (896px) applied | ☐      |
| 3    | Verify spacing        | Adequate padding on sides             | ☐      |
| 4    | Send messages         | Bubbles scale appropriately           | ☐      |

---

### TC-019: Desktop (1440px+)

**Objective:** Verify desktop experience

| Step | Action                   | Expected Result                   | Status |
| ---- | ------------------------ | --------------------------------- | ------ |
| 1    | Full screen desktop view | Content centered with max-width   | ☐      |
| 2    | Check intensity selector | Buttons properly sized and spaced | ☐      |
| 3    | Verify chat              | Messages don't stretch too wide   | ☐      |
| 4    | Test hover states        | All hover effects work smoothly   | ☐      |

---

## Accessibility

### TC-020: Keyboard Navigation

**Objective:** Verify full keyboard accessibility

| Step | Action                            | Expected Result                    | Status |
| ---- | --------------------------------- | ---------------------------------- | ------ |
| 1    | Tab through intensity buttons     | Focus visible with purple ring     | ☐      |
| 2    | Press Enter on Moderate           | Intensity selected, chat loads     | ☐      |
| 3    | Tab to input field                | Focus ring visible                 | ☐      |
| 4    | Type message, press Enter         | Message sends                      | ☐      |
| 5    | Tab to Stop button (if streaming) | Button focusable with visible ring | ☐      |
| 6    | Test Retry button on error        | Keyboard accessible                | ☐      |

---

### TC-021: Focus Indicators

**Objective:** Verify all focus states are visible

| Step | Action                               | Expected Result                      | Status |
| ---- | ------------------------------------ | ------------------------------------ | ------ |
| 1    | Tab through all interactive elements | 2px purple ring visible on each      | ☐      |
| 2    | Check ring offset                    | 2px offset from element border       | ☐      |
| 3    | Verify contrast                      | Ring visible against all backgrounds | ☐      |
| 4    | Test disabled states                 | Disabled elements skip in tab order  | ☐      |

---

### TC-022: Screen Reader (Optional)

**Objective:** Verify basic screen reader compatibility

| Step | Action                                   | Expected Result                     | Status |
| ---- | ---------------------------------------- | ----------------------------------- | ------ |
| 1    | Enable VoiceOver (Mac) or NVDA (Windows) | -                                   | ☐      |
| 2    | Navigate intensity buttons               | Button labels announced clearly     | ☐      |
| 3    | Check input field                        | Placeholder text announced          | ☐      |
| 4    | Test send button                         | "Send message" ARIA label announced | ☐      |
| 5    | Navigate messages                        | User/AI labels distinguishable      | ☐      |

---

### TC-023: Color Contrast

**Objective:** Verify WCAG AA compliance

| Step | Action                         | Expected Result                    | Status |
| ---- | ------------------------------ | ---------------------------------- | ------ |
| 1    | Check foreground on background | Text clearly readable              | ☐      |
| 2    | Verify muted text              | Still meets AA standard (4.5:1)    | ☐      |
| 3    | Check intensity badges         | Text on badge backgrounds readable | ☐      |
| 4    | Test button states             | Disabled buttons visually distinct | ☐      |
| 5    | Use contrast checker tool      | All text meets WCAG AA minimum     | ☐      |

---

## Browser Compatibility

### TC-024: Cross-Browser Testing

**Objective:** Verify consistent behavior across browsers

| Browser | Version | Intensity Selection | Streaming | Styling | Notes | Status |
| ------- | ------- | ------------------- | --------- | ------- | ----- | ------ |
| Chrome  | Latest  | ☐                   | ☐         | ☐       |       | ☐      |
| Safari  | Latest  | ☐                   | ☐         | ☐       |       | ☐      |
| Firefox | Latest  | ☐                   | ☐         | ☐       |       | ☐      |
| Edge    | Latest  | ☐                   | ☐         | ☐       |       | ☐      |

---

## Performance

### TC-025: Page Load Performance

**Objective:** Verify acceptable load times

| Step | Action                    | Expected Result                 | Status |
| ---- | ------------------------- | ------------------------------- | ------ |
| 1    | Open DevTools Network tab | -                               | ☐      |
| 2    | Navigate to app           | Page loads < 3 seconds          | ☐      |
| 3    | Check initial render      | Intensity selector visible < 1s | ☐      |
| 4    | Verify no console errors  | Console clean                   | ☐      |

---

### TC-026: Memory Leaks

**Objective:** Verify no obvious memory issues

| Step | Action                           | Expected Result                | Status |
| ---- | -------------------------------- | ------------------------------ | ------ |
| 1    | Open DevTools Memory/Performance | -                              | ☐      |
| 2    | Send 10+ messages                | No significant memory increase | ☐      |
| 3    | Refresh page multiple times      | Memory releases properly       | ☐      |
| 4    | Long conversation (20+ messages) | Scroll remains smooth          | ☐      |

---

## Edge Cases

### TC-027: Page Refresh Mid-Conversation

**Objective:** Verify behavior on refresh

| Step | Action                           | Expected Result                     | Status |
| ---- | -------------------------------- | ----------------------------------- | ------ |
| 1    | Start conversation (5+ messages) | -                                   | ☐      |
| 2    | Refresh page (F5)                | Intensity selector reappears        | ☐      |
| 3    | Check conversation history       | History cleared (expected behavior) | ☐      |
| 4    | Select intensity and continue    | Fresh conversation starts           | ☐      |

---

### TC-028: Browser Back/Forward

**Objective:** Verify navigation behavior

| Step | Action                         | Expected Result                          | Status |
| ---- | ------------------------------ | ---------------------------------------- | ------ |
| 1    | Navigate to app                | Intensity selector shows                 | ☐      |
| 2    | Select intensity, send message | Chat active                              | ☐      |
| 3    | Click browser back button      | Behavior documented (stays or goes back) | ☐      |
| 4    | If went back, click forward    | Returns to app state                     | ☐      |

---

### TC-029: Simultaneous Tabs

**Objective:** Verify independent tab behavior

| Step | Action                  | Expected Result              | Status |
| ---- | ----------------------- | ---------------------------- | ------ |
| 1    | Open two browser tabs   | -                            | ☐      |
| 2    | Select Mild in tab 1    | -                            | ☐      |
| 3    | Select Intense in tab 2 | -                            | ☐      |
| 4    | Send messages in both   | Each maintains own intensity | ☐      |
| 5    | Verify independence     | No cross-tab interference    | ☐      |

---

## Sign-Off

### Test Summary

| Category         | Tests Passed | Tests Failed | Blocked | Notes |
| ---------------- | ------------ | ------------ | ------- | ----- |
| Intensity Levels | /3           |              |         |       |
| Streaming        | /2           |              |         |       |
| Conversation     | /1           |              |         |       |
| Error Handling   | /2           |              |         |       |
| Input Validation | /3           |              |         |       |
| Rate Limiting    | /2           |              |         |       |
| UI/UX            | /3           |              |         |       |
| Responsive       | /3           |              |         |       |
| Accessibility    | /4           |              |         |       |
| Browser Compat   | /1           |              |         |       |
| Performance      | /2           |              |         |       |
| Edge Cases       | /3           |              |         |       |
| **TOTAL**        | **/29**      |              |         |       |

### Critical Issues Found

- [ ] None
- [ ] List issues here

### Non-Critical Issues

- [ ] None
- [ ] List issues here

### Recommendations

- [ ] None
- [ ] List recommendations here

### Sign-Off

- **Tester Name:** **\*\*\*\***\_\_\_**\*\*\*\***
- **Date:** **\*\*\*\***\_\_\_**\*\*\*\***
- **Status:** ☐ PASS | ☐ PASS WITH MINOR ISSUES | ☐ FAIL
- **Signature:** **\*\*\*\***\_\_\_**\*\*\*\***

---

## Notes

- This UAT should be performed in a clean environment (clear browser cache/cookies)
- Each test should be run independently to avoid state conflicts
- Document any unexpected behaviors in the notes column
- For production deployment, ensure all critical tests pass
- Screenshots of failures should be attached separately
