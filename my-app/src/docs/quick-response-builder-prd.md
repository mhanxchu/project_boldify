# Quick Response Builder - PRD

## Objective
Enable job seekers and early-career professionals to build structured, confident interview answers using guided prompts and real-time feedback, reducing anxiety through immediate actionable help.

## Scope

### In-Scope
- Question template library (10-15 common interview questions)
- Text editor for building responses with real-time word count
- STAR method structure checker and visual feedback
- Example responses and best practice tips
- Copy/export functionality for completed responses
- Client-side state management (React state, optional localStorage)
- Responsive design for mobile and desktop
- Basic validation and error handling

### Out-of-Scope
- AI-powered feedback or suggestions
- Voice recording or speech-to-text
- User accounts or cloud storage
- Sharing or PDF export
- Calendar or interview scheduling integration
- Advanced analytics or progress tracking
- Multi-language support
- Collaborative features

## User Stories

1. **As a job seeker**, I want to select a common interview question and see example responses, so that I understand what a good answer looks like before I start writing.

2. **As an early-career professional**, I want to build my answer with guided STAR method prompts, so that I structure my response clearly and highlight my achievements effectively.

3. **As a nervous interviewee**, I want real-time feedback on my answer's length, structure, and completeness, so that I can improve it before the interview and feel more confident.

## Acceptance Criteria

### Story 1: Question Selection
- **Given** I'm on the Quick Response Builder page
- **When** I view the question library
- **Then** I see 10-15 common interview questions organized by category
- **And** I can click a question to see an example response
- **And** I can select a question to start building my own answer

### Story 2: STAR Method Building
- **Given** I've selected an interview question
- **When** I start building my answer
- **Then** I see guided prompts for Situation, Task, Action, and Result sections
- **And** I can type my response in each section
- **And** I see visual indicators showing which STAR components I've completed

### Story 3: Real-Time Feedback
- **Given** I'm typing my answer
- **When** I write in any section
- **Then** I see word count updating in real-time
- **And** I see structure completeness indicators (checkmarks/badges)
- **And** I see length recommendations (e.g., "Good length" or "Consider adding more detail")
- **And** I can copy my completed answer to clipboard

## Implementation Plan

### Stage 1: UI Design Only

**Goal:** Build UI shells, components, and flows with mocked/placeholder data. Focus on UX, visuals, and interactions.

1. Create route/page structure: `src/app/quick-response-builder/page.tsx` with basic layout using Card components
2. Build question library component: `src/components/quick-response-builder/question-library.tsx` with static question data array
3. Create question selector UI: Display questions in Card grid, add click handler to select question (state only)
4. Build STAR method editor shell: `src/components/quick-response-builder/star-editor.tsx` with 4 textarea sections (Situation, Task, Action, Result)
5. Add word count display: Show character/word count below each textarea using Badge component
6. Create structure indicator component: `src/components/quick-response-builder/structure-indicator.tsx` showing 4 checkmarks for STAR completion
7. Build example response viewer: Modal or expandable section showing example when question selected
8. Add copy button: Button component with copy-to-clipboard placeholder (no real functionality yet)
9. Create tips/guidelines panel: Sidebar or collapsible Card with STAR method explanation and best practices
10. Validate: Run lint, typecheck, manual click-through of all UI states

**Files to create:**
- `src/app/quick-response-builder/page.tsx`
- `src/components/quick-response-builder/question-library.tsx`
- `src/components/quick-response-builder/star-editor.tsx`
- `src/components/quick-response-builder/structure-indicator.tsx`
- `src/lib/data/interview-questions.ts` (static data)

### Stage 2: Real Functionality

**Goal:** Wire up real logic, data flow, and interactions. Connect UI to actual functionality.

1. Implement question selection logic: Connect question-library click to star-editor state, pass selected question data
2. Add real-time word counting: Calculate and update word/character count on textarea input change
3. Build STAR structure detection: `src/lib/utils/star-analyzer.ts` - simple pattern matching to detect if each section has content
4. Wire structure indicators: Connect star-analyzer results to structure-indicator component, update checkmarks dynamically
5. Implement copy-to-clipboard: Use browser Clipboard API in copy button, show success toast/feedback
6. Add localStorage persistence: Save current response to localStorage on input, restore on page load
7. Create response validation: Check minimum word counts, show warnings for incomplete sections
8. Add length recommendations: Calculate ideal length (150-300 words), show color-coded feedback (Badge variants)
9. Implement example response display: Show/hide example based on selected question from static data
10. Add error handling: Try-catch for clipboard API, localStorage errors, show user-friendly messages

**Files to create/modify:**
- `src/lib/utils/star-analyzer.ts` (new)
- `src/lib/hooks/use-local-storage.ts` (new, optional)
- Update all Stage 1 components with real logic

### Stage 3: Test, Debug, and Safety Checks

**Goal:** Verify stories and AC, fix issues, add guards and validation.

1. Test user story 1: Verify question selection flow, example display, all questions accessible
2. Test user story 2: Verify STAR editor works, prompts visible, sections save independently
3. Test user story 3: Verify real-time feedback updates, word count accurate, structure indicators work
4. Add input sanitization: Trim whitespace, validate text length limits, prevent XSS in copy output
5. Handle edge cases: Empty responses, very long responses, localStorage quota exceeded
6. Accessibility audit: Keyboard navigation, screen reader labels, focus management, ARIA attributes
7. Mobile responsiveness check: Test on small screens, ensure textareas usable, layout doesn't break
8. Performance check: Verify no lag on typing, efficient re-renders, localStorage operations don't block UI
9. Error boundary: Add error boundary component for graceful failure handling
10. Final validation: Run full test suite, verify all AC met, fix any remaining issues

**Files to create/modify:**
- `src/components/quick-response-builder/error-boundary.tsx` (new)
- Add validation functions to existing components
- Update components with accessibility attributes

## References
- Concept: `src/docs/quick-response-builder-concept.md`
- Background: `src/docs/concept.md`


