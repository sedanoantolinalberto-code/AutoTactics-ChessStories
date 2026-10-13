/**
 * Chess Stories — EP01 cross-layer routing guard v0.1 (UNEXECUTED DRAFT)
 *
 * SOURCE ONLY. This function neither imports an oracle nor performs chess
 * replay, FEN verification, I/O, rendering, tests, or external process calls.
 * The case and overlay inputs must be trusted, schema-validated ordinary JSON
 * records supplied by an independently qualified caller.
 *
 * A consistent routing plan is NOT permission to execute, render or publish.
 */
const EP01 = "ED-CASE-REAL-01";
const EVENT_IDS = Object.freeze([
  "T01","T02","T03","T04","T05","T06",
  "T07","T08","T09","T10","T11","T12"
]);
const KIND = Object.freeze({
  SET_POSITION:"INITIALIZE_DECLARED_BOARD_ONLY",
  REAL_MOVE:"QUALIFIED_RULES_ORACLE_SINGLE_MOVE_REQUIRED",
  REWIND:"EDITORIAL_REWIND_NOT_CHESS_MOVE",
  ENTER_HYPOTHETICAL:"EDITORIAL_HYPOTHETICAL_CONTEXT_SWITCH",
  HYPOTHETICAL_MOVE:"QUALIFIED_RULES_ORACLE_UNPLAYED_SINGLE_MOVE_REQUIRED",
  RETURN_TO_REAL:"EDITORIAL_EXACT_ANCHOR_RESTORE",
  ELLIPSIS:"INCONCLUSIVE_UNTIL_FULL_ATTESTED_GAP_REPLAY",
  SEQUENCE_END:"EDITORIAL_CLOSURE_NOT_GAME_TERMINATION"
});
const FROZEN = Object.freeze({
  "IVV-01": "PASS LIMITED",
  "IVV-02": "PASS LIMITED",
  "IVV-03": "PENDING",
  "IVV-04": "PASS LIMITED",
  "IVV-05": "PENDING",
  "IVV-06": "PENDING",
  "IVV-07": "PASS LIMITED",
  "IVV-08": "PASS LIMITED",
  "IVV-09": "PENDING",
  "IVV-10": "PENDING",
  "IVV-11": "PASS LIMITED",
  "IVV-12": "PENDING",
  "R6": "PENDING",
  "IVV_GLOBAL": "NOT APPROVED",
  "ED-CASE-REAL-01": "NOT APPROVED",
  "CASE_APPROVAL": "NOT APPROVED",
  "MOTION_GATE_2": "NOT PASSED",
  "GATE_3": "NOT RUN",
  "SI-G0": "NOT RUN",
  "E5B4D": "NO-GO under failure model M",
  "FOOTBALL_P1": "NO-GO",
  "PERMISSION_TO_PUBLISH": false
});
const EXEC_POLICY = Object.freeze({
  "policy": "STRICT_POLICY_B",
  "failure_model": "M",
  "execution_authorized": false,
  "runner_qualification": "NOT_ESTABLISHED",
  "termination_requirement": "ALL_RELEVANT_PROCESSES_TERMINATED_AND_TERMINATION_CONFIRMED_BEFORE_DEADLINE",
  "termination_deadline_seconds_exclusive": 120,
  "stdout_lifetime_emitted_accepted_limit_bytes": 1048576,
  "stderr_lifetime_emitted_accepted_limit_bytes": 1048576,
  "stream_limits_independent": true,
  "schema_validation_establishes_compliance": false
});
const PINNED_STATE_DECLARATIONS = Object.freeze({
  "V-P1": {
    "branch_id": "MAIN",
    "factuality": "REAL",
    "ply": 33,
    "fen": "r3r1k1/pp3pbp/1qp3p1/2B5/2BP2b1/Q1n2N2/P4PPP/3R1K1R b - - 3 17"
  },
  "V-EV1": {
    "branch_id": "MAIN",
    "factuality": "REAL",
    "ply": 34,
    "fen": "r3r1k1/pp3pbp/1qp1b1p1/2B5/2BP4/Q1n2N2/P4PPP/3R1K1R w - - 4 18"
  },
  "V-REAL": {
    "branch_id": "MAIN",
    "factuality": "REAL",
    "ply": 35,
    "fen": "r3r1k1/pp3pbp/1Bp1b1p1/8/2BP4/Q1n2N2/P4PPP/3R1K1R b - - 0 18"
  },
  "V-HYP": {
    "branch_id": "ALT_QD8",
    "factuality": "HYPOTHETICAL",
    "ply": 34,
    "fen": "r2qr1k1/pp3pbp/2p3p1/2B5/2BP2b1/Q1n2N2/P4PPP/3R1K1R w - - 4 18"
  },
  "V-PRE-EV2": {
    "branch_id": "MAIN",
    "factuality": "REAL",
    "ply": 49,
    "fen": "4r1k1/1p3pbp/1Qp3p1/8/r1b5/2n2N2/P4PPP/3R2KR b - - 0 25"
  },
  "V-EV2": {
    "branch_id": "MAIN",
    "factuality": "REAL",
    "ply": 50,
    "fen": "4r1k1/1p3pbp/1Qp3p1/8/r1b5/5N2/P4PPP/3n2KR w - - 0 26"
  }
});
const PINNED_EVENT_KINDS = Object.freeze([
  "SET_POSITION",
  "REAL_MOVE",
  "REAL_MOVE",
  "REWIND",
  "ENTER_HYPOTHETICAL",
  "HYPOTHETICAL_MOVE",
  "RETURN_TO_REAL",
  "REAL_MOVE",
  "REAL_MOVE",
  "ELLIPSIS",
  "REAL_MOVE",
  "SEQUENCE_END"
]);
const PINNED_EVENT_DECLARATIONS = Object.freeze([
  {
    "kind": "SET_POSITION",
    "from_branch_id": null,
    "to_branch_id": "MAIN",
    "from_state": null,
    "to_state": "V-P1",
    "move": null,
    "omitted_plies": null
  },
  {
    "kind": "REAL_MOVE",
    "from_branch_id": "MAIN",
    "to_branch_id": "MAIN",
    "from_state": "V-P1",
    "to_state": "V-EV1",
    "move": {
      "san": "Be6",
      "from": "g4",
      "to": "e6",
      "moving_piece": "B",
      "moving_color": "black",
      "special_move": "NONE"
    },
    "omitted_plies": null
  },
  {
    "kind": "REAL_MOVE",
    "from_branch_id": "MAIN",
    "to_branch_id": "MAIN",
    "from_state": "V-EV1",
    "to_state": "V-REAL",
    "move": {
      "san": "Bxb6",
      "from": "c5",
      "to": "b6",
      "moving_piece": "B",
      "moving_color": "white",
      "special_move": "NONE",
      "capture": {
        "captured_piece": "Q",
        "captured_color": "black",
        "capture_square": "b6"
      }
    },
    "omitted_plies": null
  },
  {
    "kind": "REWIND",
    "from_branch_id": "MAIN",
    "to_branch_id": "MAIN",
    "from_state": "V-REAL",
    "to_state": "V-P1",
    "move": null,
    "omitted_plies": null
  },
  {
    "kind": "ENTER_HYPOTHETICAL",
    "from_branch_id": "MAIN",
    "to_branch_id": "ALT_QD8",
    "from_state": "V-P1",
    "to_state": "V-P1",
    "move": null,
    "omitted_plies": null
  },
  {
    "kind": "HYPOTHETICAL_MOVE",
    "from_branch_id": "ALT_QD8",
    "to_branch_id": "ALT_QD8",
    "from_state": "V-P1",
    "to_state": "V-HYP",
    "move": {
      "san": "Qd8",
      "from": "b6",
      "to": "d8",
      "moving_piece": "Q",
      "moving_color": "black",
      "special_move": "NONE"
    },
    "omitted_plies": null
  },
  {
    "kind": "RETURN_TO_REAL",
    "from_branch_id": "ALT_QD8",
    "to_branch_id": "MAIN",
    "from_state": "V-HYP",
    "to_state": "V-P1",
    "move": null,
    "omitted_plies": null
  },
  {
    "kind": "REAL_MOVE",
    "from_branch_id": "MAIN",
    "to_branch_id": "MAIN",
    "from_state": "V-P1",
    "to_state": "V-EV1",
    "move": {
      "san": "Be6",
      "from": "g4",
      "to": "e6",
      "moving_piece": "B",
      "moving_color": "black",
      "special_move": "NONE"
    },
    "omitted_plies": null
  },
  {
    "kind": "REAL_MOVE",
    "from_branch_id": "MAIN",
    "to_branch_id": "MAIN",
    "from_state": "V-EV1",
    "to_state": "V-REAL",
    "move": {
      "san": "Bxb6",
      "from": "c5",
      "to": "b6",
      "moving_piece": "B",
      "moving_color": "white",
      "special_move": "NONE",
      "capture": {
        "captured_piece": "Q",
        "captured_color": "black",
        "capture_square": "b6"
      }
    },
    "omitted_plies": null
  },
  {
    "kind": "ELLIPSIS",
    "from_branch_id": "MAIN",
    "to_branch_id": "MAIN",
    "from_state": "V-REAL",
    "to_state": "V-PRE-EV2",
    "move": null,
    "omitted_plies": {
      "first": 36,
      "last": 49,
      "semantics": "INCLUSIVE_MOVES_NOT_SHOWN"
    }
  },
  {
    "kind": "REAL_MOVE",
    "from_branch_id": "MAIN",
    "to_branch_id": "MAIN",
    "from_state": "V-PRE-EV2",
    "to_state": "V-EV2",
    "move": {
      "san": "Nxd1",
      "from": "c3",
      "to": "d1",
      "moving_piece": "N",
      "moving_color": "black",
      "special_move": "NONE",
      "capture": {
        "captured_piece": "R",
        "captured_color": "white",
        "capture_square": "d1"
      }
    },
    "omitted_plies": null
  },
  {
    "kind": "SEQUENCE_END",
    "from_branch_id": "MAIN",
    "to_branch_id": "MAIN",
    "from_state": "V-EV2",
    "to_state": "V-EV2",
    "move": null,
    "omitted_plies": null
  }
]);
// v0.2 defines anchor keys by event kind. Pin the EP01 values as well as
// their presence, so an otherwise schema-shaped context switch cannot drift.
const PINNED_EVENT_ANCHORS = Object.freeze({
  "T05": Object.freeze({shared_anchor_state_id:"V-P1",return_anchor_state_id:"V-P1"}),
  "T07": Object.freeze({return_anchor_state_id:"V-P1"})
});
const ANCHOR_FIELDS = Object.freeze(["shared_anchor_state_id","return_anchor_state_id"]);

/** EP01 documentary source identity pins: fixture integrity, not a qualification of the underlying witnesses or rights. */
const PINNED_EP01_SOURCE_RECORDS=Object.freeze({
  "title": "Chess Stories: Donald Byrne vs Bobby Fischer, New York, 1956",
  "players": {
    "white": {
      "id": "PLAYER-DONALD-BYRNE",
      "display_name": "Donald Byrne",
      "evidence_refs": [
        "EVID-SUPPLIED-CASE-CONTEXT"
      ]
    },
    "black": {
      "id": "PLAYER-BOBBY-FISCHER",
      "display_name": "Bobby Fischer",
      "evidence_refs": [
        "EVID-SUPPLIED-CASE-CONTEXT"
      ]
    }
  },
  "branches": [
    {
      "id": "MAIN",
      "factuality": "REAL",
      "anchor_state_id": "V-P1",
      "evidence_refs": [
        "EVID-LEDGER-R2",
        "EVID-R2-RESULTS"
      ]
    },
    {
      "id": "ALT_QD8",
      "factuality": "HYPOTHETICAL",
      "parent_branch_id": "MAIN",
      "shared_anchor_state_id": "V-P1",
      "return_anchor_state_id": "V-P1",
      "source_divergence_ply": 33,
      "evidence_refs": [
        "EVID-LEDGER-R2",
        "EVID-SUPPLIED-CASE-CONTEXT"
      ]
    }
  ],
  "evidence": [
    {
      "id": "EVID-LEDGER-R2",
      "source": {
        "source_id": "SOURCE-SUPPLIED-V01-CASE",
        "title": "User-supplied immutable v0.1 case JSON carrying EVID-LEDGER-R2 references",
        "source_class": "USER_SUPPLIED_DECLARATION",
        "creator": null,
        "publication_date": null,
        "origin_description": "Literal source case JSON pasted in CHESS-CODEX-03. This entry preserves the supplied evidence identifier and identifies the available declaration; the underlying R2 ledger document was not supplied or inspected."
      },
      "locator": {
        "kind": "SUPPLIED_TEXT_SECTION",
        "value": "CHESS-CODEX-03 / Source case JSON (immutable candidate data) / states, timeline, and case_end"
      },
      "declared_hash": null,
      "supported_assertions": [
        "The supplied case declares six named positions and their exact FEN strings, branch ownership, factuality, ply numbers, and SAN labels.",
        "The supplied case declares events T01 through T12, including rewind, hypothetical entry, explicit return to the real anchor, and editorial closure.",
        "V-HYP declares 17...Qd8 as hypothetical; it is not declared to be a historically played move.",
        "T10 declares an inclusive omitted range of plies 36 through 49, and case_end declares that the sequence ending at ply 50 is not the historical game ending."
      ],
      "verification": {
        "declared_level": "SECONDARY_CANDIDATE",
        "original_historical_authentication": "NOT_VERIFIED",
        "verification_record_refs": [],
        "scope": "Available evidence is the user-pasted candidate declaration. The preserved ledger reference is not an independently inspected original ledger or historical score.",
        "limitations": [
          "The underlying EVID-LEDGER-R2 document is unavailable in this task.",
          "No independent legal replay or original 1956 source authentication was performed.",
          "The hypothetical FEN is preserved as supplied, not independently established through legal replay."
        ]
      }
    },
    {
      "id": "EVID-R2-RESULTS",
      "source": {
        "source_id": "SOURCE-R2-RESULTS",
        "title": "User-supplied technical R2 checkpoint excerpts",
        "source_class": "TECHNICAL_REPLAY",
        "creator": null,
        "publication_date": null,
        "origin_description": "Technical R2 checkpoint excerpts pasted in CHESS-CODEX-03, together with the replay-results hash declaration in the supplied v0.1 case. The full replay-results artifact was not supplied or inspected."
      },
      "locator": {
        "kind": "SUPPLIED_TEXT_SECTION",
        "value": "CHESS-CODEX-03 / Technical R2 checkpoint excerpts (limited secondary candidate evidence) / plies 33, 34, 35, 49, 50, 51, and 82"
      },
      "declared_hash": {
        "algorithm": "SHA-256",
        "digest": "bea694cdfda7f8a8467430d71f993ad1b121fcf29b507daf74deca6e112b31b8",
        "object_identity": "R2 replay-results artifact referenced by source.replay_results_sha256 in the supplied v0.1 case",
        "byte_scope": "Declared digest of the referenced replay-results artifact. Original bytes and serialization are unavailable; this digest is not asserted to identify the pasted excerpts or this v0.2 fixture.",
        "check_status": "DECLARED_NOT_CHECKED",
        "check_evidence_refs": []
      },
      "supported_assertions": [
        "The supplied excerpts give exact real-line checkpoints at plies 33, 34, 35, 49, and 50.",
        "The supplied excerpts identify 17...Be6 at ply 34, 18.Bxb6 at ply 35, and 25...Nxd1 at ply 50.",
        "The supplied excerpts declare continuation at ply 51 with 26.h3 and a candidate ending at ply 82 with 41...Rc2#."
      ],
      "verification": {
        "declared_level": "SAME_LIBRARY_REPRODUCIBILITY_REPORTED",
        "original_historical_authentication": "NOT_VERIFIED",
        "verification_record_refs": [],
        "scope": "The supplied context reports an R2 legal-replay candidate with 82/82 plies and same-library reproducibility using chess.js@1.4.0. This task only preserves the supplied excerpts and report.",
        "limitations": [
          "No replay or test was executed in this task.",
          "The full replay-results artifact and its bytes were not inspected.",
          "The reported reproducibility is not independent chess-rule validation.",
          "No original contemporary historical source was authenticated."
        ]
      }
    },
    {
      "id": "EVID-R2-PGN-DECLARATION",
      "source": {
        "source_id": "SOURCE-R2-PGN",
        "title": "R2 secondary handoff PGN declaration",
        "source_class": "PGN",
        "creator": null,
        "publication_date": null,
        "origin_description": "The PGN is referenced in the user-supplied CHESS-CODEX-03 source metadata and technical excerpts. Its complete text and bytes were not provided for this task."
      },
      "locator": {
        "kind": "SUPPLIED_TEXT_SECTION",
        "value": "CHESS-CODEX-03 / Source case JSON / source; Technical R2 checkpoint excerpts / candidate PGN ending and source PGN SHA256"
      },
      "declared_hash": {
        "algorithm": "SHA-256",
        "digest": "42f2d04cc2bcd20386f40ca1c97770b2d54e8b1ad5547b5b0cb9f4756a8dc2c8",
        "object_identity": "R2 secondary handoff PGN referenced by source.pgn_sha256",
        "byte_scope": "Declared digest of the referenced source PGN bytes. Original bytes, encoding, and line endings are unavailable; this is not a hash of this fixture.",
        "check_status": "DECLARED_NOT_CHECKED",
        "check_evidence_refs": []
      },
      "supported_assertions": [
        "The supplied context identifies the source as a secondary handoff PGN.",
        "The supplied context declares that the candidate PGN contains 82 plies and ends with 41...Rc2#.",
        "The supplied context expressly does not authenticate the original 1956 score."
      ],
      "verification": {
        "declared_level": "SECONDARY_CANDIDATE",
        "original_historical_authentication": "NOT_VERIFIED",
        "verification_record_refs": [],
        "scope": "Source identity, declared digest, length, and ending are preserved from the supplied context, without accessing the PGN.",
        "limitations": [
          "The PGN text and bytes are unavailable in this task.",
          "No byte identity check or independent historical authentication was performed.",
          "No explicit PGN result tag was supplied; the historical ending result remains UNKNOWN in this fixture."
        ]
      }
    },
    {
      "id": "EVID-SUPPLIED-CASE-CONTEXT",
      "source": {
        "source_id": "SOURCE-SUPPLIED-CASE-CONTEXT",
        "title": "User-supplied Chess Stories case identity and pilot constraints",
        "source_class": "USER_SUPPLIED_DECLARATION",
        "creator": null,
        "publication_date": null,
        "origin_description": "Case identity, player colors, historical-versus-hypothetical classification, and frozen restrictions supplied directly in this conversation."
      },
      "locator": {
        "kind": "SUPPLIED_TEXT_SECTION",
        "value": "CHESS-CODEX-01 / Existing Chess Stories context; CHESS-CODEX-03 / Frozen restrictions; CHESS-CODEX-05B / Preserve original pilot facts"
      },
      "declared_hash": null,
      "supported_assertions": [
        "The pilot identifies ED-CASE-REAL-01 as Donald Byrne playing white against Bobby Fischer playing black in New York in 1956.",
        "17...Qd8 is an explicitly hypothetical alternative and was not played in the historical game.",
        "25...Nxd1 at ply 50 is not the historical ending.",
        "F03 prohibits an unsupported assertion that 24...Ra4 was uniquely best."
      ],
      "verification": {
        "declared_level": "UNVERIFIED",
        "original_historical_authentication": "NOT_VERIFIED",
        "verification_record_refs": [],
        "scope": "Directly supplied case declarations and pilot restrictions, not original-source authentication.",
        "limitations": [
          "No contemporary historical document or original score was supplied.",
          "No independent legal, historical, or rights review was performed in this task."
        ]
      }
    }
  ],
  "assets": [
    {
      "id": "ASSET-SUPPLIED-POSITION-DATA",
      "medium": "DATA",
      "description": "The six FEN position declarations and associated move metadata supplied as literal text in the v0.1 case; no rendered board, image, audio, or video asset is supplied.",
      "provenance": {
        "status": "DECLARED_UNVERIFIED",
        "origin_description": "Literal case JSON pasted by the user in CHESS-CODEX-03 and preserved as reference declarations in CHESS-CODEX-04.",
        "source_identity": "SOURCE-SUPPLIED-V01-CASE",
        "creator": null,
        "rights_holder": null,
        "evidence_refs": [
          "EVID-LEDGER-R2",
          "EVID-R2-RESULTS"
        ]
      },
      "license": {
        "basis": "UNKNOWN",
        "identifier_or_terms": null,
        "evidence_refs": [],
        "attribution": null,
        "restrictions": []
      },
      "uses": [
        {
          "medium": "Documentary JSON data",
          "platform": "Platform not selected",
          "purpose": "Isolated Chess Stories documentary contract review",
          "territory": null,
          "validity_description": null,
          "clearance_status": "PENDING",
          "clearance_evidence_refs": []
        }
      ]
    }
  ]
});

/** Exact EP01-only documentary assertions, not independently authenticated evidence. */
const PINNED_CASE_CLAIMS=Object.freeze([
  {
    "id": "CLAIM-CASE-IDENTITY",
    "category": "HISTORY_FACT",
    "text": "The supplied pilot context identifies ED-CASE-REAL-01 as Donald Byrne, white, versus Bobby Fischer, black, in New York in 1956. Original historical authentication remains unverified.",
    "subject": "ED-CASE-REAL-01",
    "predicate": "SUPPLIED_CASE_IDENTITY",
    "scope": {
      "state_refs": [],
      "event_refs": [],
      "branch_refs": [
        "MAIN"
      ]
    },
    "evidence_refs": [
      "EVID-SUPPLIED-CASE-CONTEXT"
    ],
    "admissibility_status": "PENDING_REVIEW",
    "admissibility_review_refs": []
  },
  {
    "id": "CLAIM-REAL-MOVES",
    "category": "HISTORY_FACT",
    "text": "The supplied secondary candidate identifies 17...Be6 at ply 34, 18.Bxb6 at ply 35, and 25...Nxd1 at ply 50 as played moves on the real line. This declaration is not original 1956 source authentication.",
    "subject": "MAIN",
    "predicate": "SOURCE_DECLARED_PLAYED_MOVES",
    "scope": {
      "state_refs": [
        "V-EV1",
        "V-REAL",
        "V-EV2"
      ],
      "event_refs": [
        "T02",
        "T03",
        "T08",
        "T09",
        "T11"
      ],
      "branch_refs": [
        "MAIN"
      ]
    },
    "evidence_refs": [
      "EVID-LEDGER-R2",
      "EVID-R2-RESULTS"
    ],
    "admissibility_status": "PENDING_REVIEW",
    "admissibility_review_refs": []
  },
  {
    "id": "CLAIM-HYPOTHETICAL-QD8",
    "category": "HYPOTHETICAL",
    "text": "17...Qd8 is the supplied alternative on ALT_QD8 and was not historically played. Its supplied position and move declaration do not establish independently verified chess legality.",
    "subject": "17...Qd8",
    "predicate": "HYPOTHETICAL_NOT_PLAYED",
    "scope": {
      "state_refs": [
        "V-P1",
        "V-HYP"
      ],
      "event_refs": [
        "T05",
        "T06"
      ],
      "branch_refs": [
        "ALT_QD8"
      ]
    },
    "evidence_refs": [
      "EVID-LEDGER-R2",
      "EVID-SUPPLIED-CASE-CONTEXT"
    ],
    "admissibility_status": "PENDING_REVIEW",
    "admissibility_review_refs": []
  },
  {
    "id": "CLAIM-CONTINUATION",
    "category": "HISTORY_FACT",
    "text": "The supplied R2 excerpt declares 26.h3 at ply 51 after 25...Nxd1 at ply 50. Accordingly, ply 50 is not the ending of the supplied candidate game.",
    "subject": "25...Nxd1",
    "predicate": "SOURCE_DECLARED_GAME_CONTINUES",
    "scope": {
      "state_refs": [
        "V-EV2"
      ],
      "event_refs": [
        "T11",
        "T12"
      ],
      "branch_refs": [
        "MAIN"
      ]
    },
    "evidence_refs": [
      "EVID-R2-RESULTS"
    ],
    "admissibility_status": "PENDING_REVIEW",
    "admissibility_review_refs": []
  },
  {
    "id": "CLAIM-SOURCE-ENDING",
    "category": "HISTORY_FACT",
    "text": "The supplied secondary PGN declaration places its terminal move at ply 82, 41...Rc2#. The original historical score and the full PGN have not been authenticated in this task.",
    "subject": "SOURCE-R2-PGN",
    "predicate": "SOURCE_DECLARED_TERMINAL_PLY",
    "scope": {
      "state_refs": [],
      "event_refs": [],
      "branch_refs": [
        "MAIN"
      ]
    },
    "evidence_refs": [
      "EVID-R2-PGN-DECLARATION",
      "EVID-R2-RESULTS"
    ],
    "admissibility_status": "PENDING_REVIEW",
    "admissibility_review_refs": []
  },
  {
    "id": "CLAIM-EDITORIAL-ELLIPSIS",
    "category": "INTERPRETATION",
    "text": "The supplied editorial sequence omits moves at plies 36 through 49 inclusive. V-PRE-EV2 is the technical-only destination position after ply 49; those omitted moves are not presented as shown events.",
    "subject": "T10",
    "predicate": "EDITORIAL_OMISSION_INCLUSIVE",
    "scope": {
      "state_refs": [
        "V-REAL",
        "V-PRE-EV2"
      ],
      "event_refs": [
        "T10"
      ],
      "branch_refs": [
        "MAIN"
      ]
    },
    "evidence_refs": [
      "EVID-LEDGER-R2",
      "EVID-R2-RESULTS"
    ],
    "admissibility_status": "PENDING_REVIEW",
    "admissibility_review_refs": []
  },
  {
    "id": "CLAIM-EDITORIAL-END",
    "category": "INTERPRETATION",
    "text": "T12 closes the editorial sequence at V-EV2 after ply 50. This editorial closure does not represent the historical game ending.",
    "subject": "T12",
    "predicate": "EDITORIAL_CLOSURE_ONLY",
    "scope": {
      "state_refs": [
        "V-EV2"
      ],
      "event_refs": [
        "T12"
      ],
      "branch_refs": [
        "MAIN"
      ]
    },
    "evidence_refs": [
      "EVID-LEDGER-R2",
      "EVID-R2-RESULTS"
    ],
    "admissibility_status": "PENDING_REVIEW",
    "admissibility_review_refs": []
  }
]);
const PINNED_CASE_ADMISSIBILITY=Object.freeze({
  "mapping_id": "CHESS-STORIES-ADMISSIBILITY-0.2-DRAFT",
  "review_status": "PENDING_INDEPENDENT_REVIEW",
  "independent_review_evidence_refs": [],
  "rules": [
    {
      "category": "HISTORY_FACT",
      "requirement": "Require evidence competent for the exact historical assertion and its scope. Secondary declarations must remain identified as secondary; legal replay, a matching hash declaration, or an engine recommendation does not authenticate original historical play.",
      "review_evidence_refs": []
    },
    {
      "category": "CHESS_LEGALITY",
      "requirement": "Require separately qualified legal-replay evidence for the exact before-position, move, and after-position. FEN occupancy consistency, structural validation, and same-library reproducibility alone do not establish independent legal verification.",
      "review_evidence_refs": []
    },
    {
      "category": "ENGINE_ANALYSIS",
      "requirement": "Require identified engine, configuration, position, analysis scope, and competent review. Engine output is not historical evidence and does not by itself prove uniqueness, player intentions, or forced outcomes. F03 applies without category exemption.",
      "review_evidence_refs": []
    },
    {
      "category": "INTERPRETATION",
      "requirement": "Require explicit interpretive or editorial framing and support for underlying factual premises. This category must not conceal historical assertions, unsupported uniqueness, inferred player intentions, or unverified forced outcomes.",
      "review_evidence_refs": []
    },
    {
      "category": "HYPOTHETICAL",
      "requirement": "Require explicit non-played classification and a matching hypothetical branch. Any legality, uniqueness, intention, or forced-outcome assertion needs its own competent evidence and review; the hypothetical label grants no exemption.",
      "review_evidence_refs": []
    }
  ],
  "f03": {
    "rule_id": "F03",
    "protected_case_id": "ED-CASE-REAL-01",
    "protected_move": "24...Ra4",
    "rule": "NO_UNIQUE_BEST_CLAIM_WITHOUT_COMPETENT_PROOF_AND_INDEPENDENT_REVIEW",
    "category_exemption_allowed": false
  }
});
const PINNED_HISTORICAL_END=Object.freeze({
  "status": "SOURCE_DECLARED",
  "source_id": "SOURCE-R2-PGN",
  "final_ply": 82,
  "final_san": "Rc2#",
  "result": "UNKNOWN",
  "termination_description": "The supplied secondary candidate declares its ending as 41...Rc2# at ply 82. No explicit PGN result tag or authenticated original score was supplied.",
  "original_historical_authentication": "NOT_VERIFIED",
  "evidence_refs": [
    "EVID-R2-PGN-DECLARATION",
    "EVID-R2-RESULTS"
  ]
});
const PINNED_SEQUENCE_END=Object.freeze({
  "event_id": "T12",
  "state_id": "V-EV2",
  "closure": "EDITORIAL_ONLY",
  "historical_relation": "GAME_CONTINUES",
  "evidence_refs": [
    "EVID-LEDGER-R2",
    "EVID-R2-RESULTS"
  ]
});

const PINNED_EVENT_PROVENANCE = Object.freeze({
  "disclosure": [
    "PARTIDA REAL",
    "PARTIDA REAL",
    "PARTIDA REAL",
    "REBOBINADO A 17.Kf1",
    "ALTERNATIVA NO JUGADA",
    "VARIANTE HIPOTÉTICA — NO JUGADA",
    "VOLVEMOS A LA PARTIDA REAL: 17.Kf1",
    "PARTIDA REAL",
    "PARTIDA REAL",
    "SALTO TEMPORAL: SE OMITEN JUGADAS DE LA PARTIDA REAL",
    "PARTIDA REAL — LA PARTIDA CONTINÚA",
    "CIERRE EDITORIAL: NO ES EL FINAL DE LA PARTIDA"
  ],
  "claim_refs": [
    [],
    [
      "CLAIM-REAL-MOVES"
    ],
    [
      "CLAIM-REAL-MOVES"
    ],
    [],
    [
      "CLAIM-HYPOTHETICAL-QD8"
    ],
    [
      "CLAIM-HYPOTHETICAL-QD8"
    ],
    [],
    [
      "CLAIM-REAL-MOVES"
    ],
    [
      "CLAIM-REAL-MOVES"
    ],
    [
      "CLAIM-EDITORIAL-ELLIPSIS"
    ],
    [
      "CLAIM-REAL-MOVES",
      "CLAIM-CONTINUATION"
    ],
    [
      "CLAIM-CONTINUATION",
      "CLAIM-EDITORIAL-END"
    ]
  ],
  "evidence_refs": [
    [
      "EVID-LEDGER-R2"
    ],
    [
      "EVID-LEDGER-R2",
      "EVID-R2-RESULTS"
    ],
    [
      "EVID-LEDGER-R2",
      "EVID-R2-RESULTS"
    ],
    [
      "EVID-LEDGER-R2"
    ],
    [
      "EVID-LEDGER-R2",
      "EVID-SUPPLIED-CASE-CONTEXT"
    ],
    [
      "EVID-LEDGER-R2",
      "EVID-SUPPLIED-CASE-CONTEXT"
    ],
    [
      "EVID-LEDGER-R2"
    ],
    [
      "EVID-LEDGER-R2",
      "EVID-R2-RESULTS"
    ],
    [
      "EVID-LEDGER-R2",
      "EVID-R2-RESULTS"
    ],
    [
      "EVID-R2-RESULTS",
      "EVID-LEDGER-R2"
    ],
    [
      "EVID-R2-RESULTS"
    ],
    [
      "EVID-LEDGER-R2",
      "EVID-R2-RESULTS"
    ]
  ],
  "asset_refs": [
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ],
    [
      "ASSET-SUPPLIED-POSITION-DATA"
    ]
  ],
  "timing": [
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    },
    {
      "status": "TIMING_UNSPECIFIED"
    }
  ]
});
const PINNED_VISUAL_TRUTH = Object.freeze([
  {
    "id": "T01",
    "label": "PARTIDA REAL",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "NOT_APPLICABLE"
  },
  {
    "id": "T02",
    "label": "PARTIDA REAL",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "NOT_APPLICABLE"
  },
  {
    "id": "T03",
    "label": "PARTIDA REAL",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "NOT_APPLICABLE"
  },
  {
    "id": "T04",
    "label": "REBOBINADO · PARTIDA REAL",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "NOT_APPLICABLE"
  },
  {
    "id": "T05",
    "label": "HIPOTÉTICA · NO JUGADA",
    "persistent_hypothetical": true,
    "audio_independent_factuality_label": true,
    "release_rule": "NEVER_DURING_HYPOTHETICAL_FRAMES"
  },
  {
    "id": "T06",
    "label": "HIPOTÉTICA · NO JUGADA",
    "persistent_hypothetical": true,
    "audio_independent_factuality_label": true,
    "release_rule": "NEVER_DURING_HYPOTHETICAL_FRAMES"
  },
  {
    "id": "T07",
    "label": "REGRESO A LA PARTIDA REAL",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "ONLY_AFTER_EXACT_V-P1_REAL_BOARD_AND_MAIN_CONTEXT_RESTORED"
  },
  {
    "id": "T08",
    "label": "PARTIDA REAL",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "NOT_APPLICABLE"
  },
  {
    "id": "T09",
    "label": "PARTIDA REAL",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "NOT_APPLICABLE"
  },
  {
    "id": "T10",
    "label": "SE OMITEN JUGADAS REALES",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "NOT_APPLICABLE"
  },
  {
    "id": "T11",
    "label": "PARTIDA REAL",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "NOT_APPLICABLE"
  },
  {
    "id": "T12",
    "label": "CIERRE EDITORIAL · LA PARTIDA CONTINÚA",
    "persistent_hypothetical": false,
    "audio_independent_factuality_label": true,
    "release_rule": "NOT_APPLICABLE"
  }
]);
const PINNED_RENDERING_POLICY = Object.freeze([
  "Set declared real board and real context before any move.",
  "Display real 17...Be6, do not infer optimality or intentions.",
  "Display real 18.Bxb6 queen capture; real game continues.",
  "Explicit rewind animation; no inverse chess move asserted.",
  "Raise hypothetical label before any unplayed move animation begins.",
  "Maintain persistent hypothetical label for all frames of 17...Qd8.",
  "Replace exact real board V-P1 before releasing hypothetical warning; show return banner.",
  "Resume the 17...Be6 real event without silent variant leak.",
  "Resume 18.Bxb6 real event on MAIN before timeline jump.",
  "Declare fourteen omitted real plies, 36 through 49 inclusive; never interpolate an invented game sequence.",
  "Show real 25...Nxd1 and correctly identify the white rook capture.",
  "Show editorial closure, NOT a historical end or checkmate."
]);
const PINNED_STORY_TRUTH = Object.freeze({
  hypothetical_move:"17...Qd8",
  hypothetical_historical_status:"UNPLAYED",
  real_move:"17...Be6",
  queen_taken_at:"18.Bxb6",
  rook_taken_at:"25...Nxd1",
  editorial_end_state:"V-EV2",
  editorial_end_ply:50,
  final_source_candidate:"41...Rc2# ply 82; secondary witness only",
  historical_primary_authentication:"NOT_VERIFIED"
});
const PINNED_OVERLAY_RELEASE = Object.freeze({
  permit:false,
  R6:"PENDING",
  IVV_GLOBAL:"NOT APPROVED"
});
const isRecord = x => x!==null && typeof x==="object" && !Array.isArray(x);
const plainText = x => typeof x==="string" && x.length>0 && x.length<=4096;
const own = (o,k) => Object.prototype.hasOwnProperty.call(o,k);
/**
 * Bounded structural equality for plain prevalidated JSON. Unlike stringify,
 * object member order cannot make an otherwise identical move declaration
 * appear different. This is still NOT a hostile-input or raw-byte validator.
 */
function sameDeclaredJson(left,right) {
  const pending=[[left,right]];
  let visited=0;
  while(pending.length) {
    if(++visited>1024) return false;
    const [a,b]=pending.pop();
    if(a===b) continue;
    if(Array.isArray(a)&&Array.isArray(b)) {
      if(a.length!==b.length) return false;
      for(let j=0;j<a.length;j++) pending.push([a[j],b[j]]);
    } else if(isRecord(a)&&isRecord(b)) {
      const ak=Object.keys(a).sort(),bk=Object.keys(b).sort();
      if(ak.length!==bk.length||ak.some((key,j)=>key!==bk[j])) return false;
      for(const key of ak) pending.push([a[key],b[key]]);
    } else return false;
  }
  return true;
}

/**
 * @param {object} caseV02 - independently validated v0.2 EP01 documentary case
 * @param {object} overlayV01 - independently validated 12-event overlay mapping
 * @returns {object} routing observation with unconditional NO-GO execution,
 *                   render and publication flags
 */
export function proposeEp01Routing(caseV02, overlayV01) {
  const faults=[];
  function fault(code,source) {
    if(faults.length<64) faults.push({code,source});
  }
  function response(routes=[]) {
    return {
      decision:faults.length ? "REJECTED_SOURCE_ROUTING" : "SOURCE_ROUTING_PROPOSAL_ONLY",
      faults,
      event_routes:faults.length ? [] : routes,
      rejected_routes_suppressed:faults.length>0,
      execution_authorized:false,
      legal_oracle_qualified:false,
      human_ivv_approved:false,
      commercial_rights_cleared:false,
      safe_to_render:false,
      safe_to_publish:false,
      policy_b_qualified_under_m:false,
      historical_score_authenticated:false,
      evidence_scope:"DOCUMENTARY_CROSS_REFERENCES_ONLY_NOT_EXECUTED"
    };
  }
  if(!isRecord(caseV02)||!isRecord(overlayV01)) {
    fault("INPUT_RECORDS_REQUIRED","$");
    return response();
  }
  if(caseV02.case_id!==EP01||caseV02.schema_version!=="chess-stories-semantic-case/0.2")
    fault("EP01_V02_ONLY","case");
  if(overlayV01.case_id!==EP01 ||
    overlayV01.artifact_version!=="chess-stories-ep01-truth-overlay-map/0.1-draft")
    fault("OVERLAY_VERSION_OR_CASE","overlay");
  if(overlayV01.source_document!=="cases/ED-CASE-REAL-01.v0.2.json" ||
     overlayV01.source_document_commit!=="chess-stories/semantic-contract-v0.2" ||
     overlayV01.source_document_ref_kind!=="BRANCH_LABEL_NOT_IMMUTABLE" ||
     overlayV01.source_document_head_commit_sha_observed!=="8e3da6639060a1605947bfc3aedd4113ab0068a1" ||
     overlayV01.source_document_git_blob_sha_observed!=="3514f19ac355763a5b4c61d5c573df090b0eccc1" ||
     overlayV01.source_identity_qualification!=="GIT_REPOSITORY_IDENTITY_ONLY_NOT_RAW_SHA256_BYTE_TRUST")
    fault("OVERLAY_SOURCE_BINDING_CHANGED","overlay");
  if(overlayV01.status!=="EDITORIAL_SPEC_NOT_RENDERED" ||
     overlayV01.all_time_values!=="UNSPECIFIED_UNMEASURED" ||
     overlayV01.frame_timing!==null)
    fault("OVERLAY_TOP_LEVEL_STATE_CHANGED","overlay");
  if(overlayV01.muted_viewing_requirements!==
       "No sound is required to distinguish real vs hypothetical; overlays are persistent by design.")
    fault("OVERLAY_MUTED_TRUTH_REQUIREMENT_CHANGED","overlay.muted_viewing_requirements");
  if(overlayV01.policy_disclosure_attribution!==
       "Case source candidates; not original-history authentication")
    fault("OVERLAY_PROVENANCE_ATTRIBUTION_CHANGED","overlay.policy_disclosure_attribution");
  if(!sameDeclaredJson(overlayV01.release,PINNED_OVERLAY_RELEASE))
    fault("OVERLAY_RELEASE_STATE_CHANGED","overlay.release");
  if(!sameDeclaredJson(overlayV01.mandatory_story_truth,PINNED_STORY_TRUTH))
    fault("OVERLAY_STORY_TRUTH_CHANGED","overlay.mandatory_story_truth");
  // Source-only integrity for identity, branch ownership, witness descriptions
  // and declared asset rights. Referential validity alone does not pin their meaning.
  if(caseV02.title!==PINNED_EP01_SOURCE_RECORDS.title)
    fault("EP01_CASE_TITLE_CHANGED","case.title");
  if(!sameDeclaredJson(caseV02.players,PINNED_EP01_SOURCE_RECORDS.players))
    fault("EP01_PLAYER_IDENTITY_CHANGED","case.players");
  if(!sameDeclaredJson(caseV02.branches,PINNED_EP01_SOURCE_RECORDS.branches))
    fault("EP01_BRANCH_DECLARATIONS_CHANGED","case.branches");
  if(!sameDeclaredJson(caseV02.evidence,PINNED_EP01_SOURCE_RECORDS.evidence))
    fault("EP01_EVIDENCE_DECLARATIONS_CHANGED","case.evidence");
  if(!sameDeclaredJson(caseV02.assets,PINNED_EP01_SOURCE_RECORDS.assets))
    fault("EP01_ASSET_RIGHTS_DECLARATIONS_CHANGED","case.assets");
  // Prevent the documentary router from accepting an altered assertion body,
  // F03 policy, historical terminal candidate or editorial-vs-historical end.
  // This does NOT replace independent claim admissibility or original sources.
  if(!sameDeclaredJson(caseV02.claims,PINNED_CASE_CLAIMS))
    fault("EP01_CASE_CLAIMS_CHANGED","case.claims");
  if(!sameDeclaredJson(caseV02.claim_admissibility,PINNED_CASE_ADMISSIBILITY))
    fault("EP01_F03_ADMISSIBILITY_CHANGED","case.claim_admissibility");
  if(!sameDeclaredJson(caseV02.historical_game_end,PINNED_HISTORICAL_END))
    fault("EP01_HISTORICAL_END_CHANGED","case.historical_game_end");
  if(!sameDeclaredJson(caseV02.sequence_end,PINNED_SEQUENCE_END))
    fault("EP01_EDITORIAL_END_DECLARATION_CHANGED","case.sequence_end");
  if(caseV02.status!=="DOCUMENTARY_CANDIDATE_NOT_APPROVED")
    fault("CASE_STATUS_UNAUTHORIZED","case.status");
  for(const [k,v] of Object.entries(FROZEN)) {
    if(!isRecord(caseV02.frozen_gates)||caseV02.frozen_gates[k]!==v)
      fault("FROZEN_GATE_MISMATCH","frozen_gates."+k);
  }
  const exec=caseV02.execution_policy;
  for(const [k,v] of Object.entries(EXEC_POLICY)) {
    if(!isRecord(exec)||exec[k]!==v)
      fault("POLICY_B_UNCHANGED_REQUIRED","case.execution_policy."+k);
  }
  if(!Array.isArray(caseV02.timeline)||!Array.isArray(overlayV01.overlays)||
    caseV02.timeline.length!==12||overlayV01.overlays.length!==12) {
    fault("EP01_TWELVE_EVENTS_REQUIRED","timeline");
    return response();
  }
  if(!Array.isArray(caseV02.states)) {
    fault("EP01_STATES_REQUIRED","states");
    return response();
  }
  const states=new Map();
  for(const s of caseV02.states) {
    if(!isRecord(s)||!plainText(s.id)||states.has(s.id)) {
      fault("STATE_REGISTRY_INVALID","states");continue;
    }
    states.set(s.id,s);
  }
  if(states.size!==6) fault("EP01_SIX_STATES_REQUIRED","states");
  for(const [id,pinned] of Object.entries(PINNED_STATE_DECLARATIONS)){
    const actual=states.get(id);
    if(!actual || Object.entries(pinned).some(([key,val])=>actual[key]!==val))
      fault("EP01_PINNED_STATE_CHANGED","states."+id);
  }

  const routes=[];
  for(let i=0;i<12;i++) {
    const event=caseV02.timeline[i],ov=overlayV01.overlays[i];
    if(!isRecord(event)||!isRecord(ov)) {
      fault("EVENT_OR_OVERLAY_INVALID","timeline["+i+"]");continue;
    }
    const id=EVENT_IDS[i], p="event."+id;
    if(event.id!==id||ov.id!==id||ov.event_kind!==event.kind)
      fault("EVENT_ORDER_KIND_MISMATCH",p);
    if(event.kind!==PINNED_EVENT_KINDS[i])
      fault("EP01_EVENT_FACTUALITY_CHANGED",p);
    const pinned=PINNED_EVENT_DECLARATIONS[i];
    for(const key of ["from_branch_id","to_branch_id","from_state","to_state"]){
      if(event[key]!==pinned[key]) fault("EP01_TRANSITION_CHANGED",p+"."+key);
    }
    // This EP01-only guard compares exact documentary move and gap declarations,
    // not independent move legality, historical source bytes or PGN authenticity.
    // Schema v0.2 requires "move" only for move kinds and "omitted_plies"
    // only for ELLIPSIS; other event kinds prohibit these keys entirely.
    // Reinforce that prevalidation boundary without treating missing as null.
    if(own(event,"move") !== (pinned.move!==null) ||
       own(event,"omitted_plies") !== (pinned.omitted_plies!==null) ||
       (own(event,"move") && !sameDeclaredJson(event.move,pinned.move)) ||
       (own(event,"omitted_plies") && !sameDeclaredJson(event.omitted_plies,pinned.omitted_plies)))
      fault("EP01_MOVE_OR_GAP_DECLARATION_CHANGED",p);
    const anchors=PINNED_EVENT_ANCHORS[id]??{};
    for(const key of ANCHOR_FIELDS) {
      const required=own(anchors,key),present=own(event,key);
      if(present!==required || (present && event[key]!==anchors[key]))
        fault("EP01_EVENT_ANCHOR_CHANGED",p+"."+key);
    }
    if(event.disclosure!==PINNED_EVENT_PROVENANCE.disclosure[i] ||
       !sameDeclaredJson(event.claim_refs,PINNED_EVENT_PROVENANCE.claim_refs[i]) ||
       !sameDeclaredJson(event.evidence_refs,PINNED_EVENT_PROVENANCE.evidence_refs[i]) ||
       !sameDeclaredJson(event.asset_refs,PINNED_EVENT_PROVENANCE.asset_refs[i]) ||
       !sameDeclaredJson(event.timing,PINNED_EVENT_PROVENANCE.timing[i]))
      fault("EP01_EVENT_EVIDENCE_OR_TIMING_CHANGED",p);
    if(!own(KIND,event.kind)) {
      fault("UNKNOWN_EVENT_KIND",p);continue;
    }
    for(const [a,b] of [
      ["from_branch_id","from_branch_id"],["to_branch_id","to_branch_id"],
      ["from_state","from_state_id"],["to_state","to_state_id"]
    ]) if(event[a]!==ov[b])fault("OVERLAY_REFERENCE_MISMATCH",p+"."+a);
    const originalClaims=event.claim_refs,overlaidClaims=ov.claim_references;
    if(!Array.isArray(originalClaims)||!Array.isArray(overlaidClaims)||
      originalClaims.length!==overlaidClaims.length||
      originalClaims.some((v,j)=>v!==overlaidClaims[j]))
      fault("OVERLAY_CLAIM_REFERENCES_MISMATCH",p);
    if(event.to_state!==null && !states.has(event.to_state))
      fault("UNKNOWN_TO_STATE",p);
    if(event.from_state!==null && !states.has(event.from_state))
      fault("UNKNOWN_FROM_STATE",p);
    if(!plainText(ov.display_label)||!plainText(ov.rendering_policy))
      fault("TRUTH_OVERLAY_MISSING",p);
    const truth=PINNED_VISUAL_TRUTH[i];
    if(ov.id!==truth.id ||
       ov.display_label!==truth.label ||
       ov.persistent_hypothetical!==truth.persistent_hypothetical ||
       ov.audio_independent_factuality_label!==true ||
       ov.hypothetical_warning_release_rule!==truth.release_rule)
      fault("EP01_VISUAL_FACTUALITY_CHANGED",p);
    const expectedDisplayedMove =
      (event.kind==="REAL_MOVE"||event.kind==="HYPOTHETICAL_MOVE")
        ? (event.move?.san??null) : null;
    const expectedOmission=id==="T10"
      ? {first_ply:36,last_ply:49,language:"14 medias jugadas omitidas"}
      : null;
    if(ov.index!==i+1 ||
       ov.display_label_required!==true ||
       ov.special_atomic_return!==(id==="T07") ||
       ov.displayed_chess_move!==expectedDisplayedMove ||
       !sameDeclaredJson(ov.mandatory_omission,expectedOmission) ||
       ov.rendering_policy!==PINNED_RENDERING_POLICY[i] ||
       ov.shot_start_ms!==null || ov.shot_end_ms!==null ||
       ov.voice_start_ms!==null || ov.voice_end_ms!==null ||
       ov.visual_comprehension_test!=="NOT_RUN" ||
       ov.historical_authentication!=="NOT_VERIFIED")
      fault("EP01_OVERLAY_RENDERING_DECLARATION_CHANGED",p);
    const isAlt=id==="T05"||id==="T06";
    if(isAlt&&(!ov.persistent_hypothetical ||
       !ov.display_label.includes("HIPOTÉTICA")||
       !ov.display_label.includes("NO JUGADA")))
      fault("HYPOTHETICAL_WARNING_MISSING",p);
    if(id==="T06"&&
       (event.kind!=="HYPOTHETICAL_MOVE" ||
        event.to_branch_id!=="ALT_QD8" ||event.move?.san!=="Qd8"))
      fault("T06_UNPLAYED_QD8_MISMATCH",p);
    if(id==="T07"&&
       (event.kind!=="RETURN_TO_REAL" ||event.from_branch_id!=="ALT_QD8"||
        event.to_branch_id!=="MAIN"||event.from_state!=="V-HYP"||
        event.to_state!=="V-P1"||
        ov.hypothetical_warning_release_rule!==
          "ONLY_AFTER_EXACT_V-P1_REAL_BOARD_AND_MAIN_CONTEXT_RESTORED"))
      fault("T07_ATOMIC_RETURN_MISMATCH",p);
    if(id==="T10") {
      const range=event.omitted_plies, overlayRange=ov.mandatory_omission;
      if(event.kind!=="ELLIPSIS" ||
        event.from_state!=="V-REAL"||event.to_state!=="V-PRE-EV2"||
        !isRecord(range)||range.first!==36||range.last!==49||
        !isRecord(overlayRange)||overlayRange.first_ply!==36||
        overlayRange.last_ply!==49)
        fault("T10_REAL_GAP_DISCLOSURE_MISMATCH",p);
    }
    if(id==="T11"&&(event.kind!=="REAL_MOVE"||
       event.move?.san!=="Nxd1"||event.from_state!=="V-PRE-EV2"||
       event.to_state!=="V-EV2"))
      fault("T11_ROOK_CAPTURE_MISMATCH",p);
    if(id==="T12"&&(event.kind!=="SEQUENCE_END"||
        event.to_state!=="V-EV2"|| !ov.display_label.includes("PARTIDA CONTINÚA")))
      fault("T12_EDITORIAL_END_MISMATCH",p);
    routes.push({
      event_id:id,kind:event.kind,oracle_or_editorial_route:KIND[event.kind],
      display_overlay:ov.display_label,
      externally_checked_legality:"NOT_RUN",
      source_historical_witness:"NOT_AUTHENTICATED",
      factuality_label_held_while_alt_or_return:isAlt||id==="T07",
      measured_frame_timing:null,
      legal_media_assets_cleared:false
    });
  }
  if(caseV02.sequence_end?.state_id!=="V-EV2"||
     caseV02.sequence_end?.historical_relation!=="GAME_CONTINUES")
    fault("PILOT_HISTORY_CONTINUATION_REQUIRED","sequence_end");
  // Even perfect documentary correspondence cannot establish execution safety.
  return response(routes);
}
