# EP01 H-1: newspaper issue/page access and resignation claim

Date: 2026-10-16
Status: DOCUMENTARY_SOURCE_INDEX_ONLY / ORIGINAL_NEWSPAPER_PAGES_NOT_INSPECTED / NOT APPROVED

## New primary-page retrieval request

**The New York Times**, Thursday 18 October 1956, printed **p.44**: a modern collector identifies a contemporaneous chess report of the Byrne–Fischer match. The collector's 2018 index describes the report as Fischer defeating Byrne and **Byrne resigning**, but we have not inspected the actual NYT page. Do **not** assert that a modern collector's descriptive heading is identical to the printed NYT headline, or that the article itself mentions a specific final move.

Modern collector's bibliographic index:
https://bobby-fischer-1956.blogspot.com/2018/03/articles-from-1956-index.html
Page locator:
https://vindication-of-bobby-fischer.blogspot.com/2018/01/chess-wonder-of-brooklyn-december-30.html

The newspaper's official TimesMachine covers original scanned issues from 1851–2002, but access requires a qualifying subscription. Original-page access from this environment has not succeeded. Publisher policy restricts noncommercial personal usage and requires separate permissions for other copying or storage.
https://thenewyorktimeshelpcenter.helpjuice.com/115014772767-New-York-Times-Archived-Articles-and-TimesMachine

**The New York Public Library** independently confirms access to indexed original NYT full-page images covering 1851–2022 and specifically invites researchers with a date/page citation to email the General Research Division about requesting a scan. The official email is `generalresearch@nypl.org`.
https://libguides.nypl.org/newspapers
https://libguides.nypl.org/usnewspapers/planyourvisit

On 2026-10-16 a targeted **research-only** email was SENT through the project inquiry account, message id `1a1466170e418eb4`, to `generalresearch@nypl.org`. Its subject: `Research-only newspaper inquiry — NYT 18 October 1956 p.44 (Byrne–Fischer)`. Sent-message readback confirmed recipient, subject, body and SENT label. It asks for lawful consultation of the historical newspaper item, exact headline/byline and whether the printed text reports resignation, mate, or an exact last move. It requests fee approval **before** any paid order; it does not ask for commercial reproduction permission. No actual archivist reply or original scan has been received; no files copied to GitHub.

## Date cross-reference still second-hand

**The Journal News**, White Plains, Fri **19 Oct 1956**, printed p.3, `Reshevsky Leads in Chess Tourney`: a modern collector transcribes the victory as being in **Wednesday's competitions**. The Wednesday immediately preceding publication is **17 October 1956**, consistent with multiple later historical chronologies. The article's original page is **NOT inspected**. This is additional close-in-time reporting, not independent adjudication of an over-the-board terminal move. Collector:
https://bobby-fischer-1956.blogspot.com/2018/03/articles-from-1956-index.html

**The Journal Times**, Racine, Sun **25 Nov 1956**, printed p.39, `Byrne-Fischer Match`, is transcribed by the same collector as saying Fischer won **in 41 moves**. That is a periodical **move-count statement**, not sufficient evidence that printed `41...Rc2#` occurred physically. The collector page also refers to Fischer as **14** in that item, which is incorrect for Oct/Nov 1956 (born March 1943). Source transcription:
https://bobby-fischer-1956.blogspot.com/2018/03/byrne-fischer-at-rosenwald-memorial.html

These collector transcriptions share a **single modern intermediary**, even though they refer to different 1956 publishers. The original publishers may provide independent event reporting, but independent print inspection is outstanding. Do NOT count the blog index itself as multiple directly inspected primary witnesses.

## H-1 adjudication state

- `1956_CHESS_REVIEW_MATE_AS_PRINTED`: DIRECT US CHESS COPY, IMAGE INSPECTED, NONBLIND.
- `1956_NYT_RESIGNATION`: MODERN COLLECTOR INDEX, ORIGINAL PRINTED PAGE NOT VIEWED.
- `1956_JOURNAL_NEWS_DATE`: MODERN COLLECTOR TRANSCRIPTION, ORIGINAL PRINTED PAGE NOT VIEWED.
- `1956_JOURNAL_TIMES_MOVE_COUNT`: MODERN COLLECTOR TRANSCRIPTION, ORIGINAL PRINTED PAGE NOT VIEWED.
- `1956_RUSSELL_SCORESHEET_CONFLICT`: FIRSTHAND MANUSCRIPT-EXAMINATION TESTIMONY PUBLISHED IN 1992, ORIGINAL MANUSCRIPTS NOT ACCESSED.
- `MATE_PLAYED_PHYSICALLY`, `EXACT_LAST_MOVE`, `FORMAL_GAME_TERMINATION`: UNKNOWN / NOT VERIFIED.

Potential coexistence: a contemporary paper can say “resigned” after a game that was editorially printed through a forced mate continuation, without establishing exactly when a gesture of resignation occurred. This is a source-critical possibility, not an adjudicated chronology.

## Production consequence and freezes

EP01's frozen T12 at ply50 is **nonterminal** and explicitly says the game continues; it does not require a final-mate animation, and avoiding the historical endpoint does not itself validate any displayed earlier SAN/FEN. No newspaper scan, historical photo, article body or Kmoch prose is approved for use in a monetized Short.

E5B4D remains `STRICT_GUARANTEES_INCOMPATIBLE_UNDER_STATED_MODEL`, NO-GO under M; Policy B: every relevant process terminated and termination confirmed strictly before 120 seconds, separate stdout and stderr <=1,048,576 bytes emitted AND accepted over lifetime. 66 semantic and 77 router negative cases and independent chess legality oracle NOT_RUN; R6 PENDING; IVV_GLOBAL and CASE_APPROVAL NOT APPROVED. No production engine, validator, Actions, renderer, media, rights grant, merge or change to main / PR #12 / CASE / OVER1.
