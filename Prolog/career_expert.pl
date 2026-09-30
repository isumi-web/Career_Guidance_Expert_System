% ============================================================
% CAREER GUIDANCE EXPERT SYSTEM
% Rule-Based Expert System
% ============================================================

:- dynamic user_fact/1.
:- dynamic derived_career/1.


% ============================================================
% SECTION 1 - CLEAR SYSTEM
% ============================================================

clear_system :-
    retractall(user_fact(_)),
    retractall(derived_career(_)).


clear_user_facts :-
    retractall(user_fact(_)),
    retractall(derived_career(_)).


% ============================================================
% SECTION 2 - ADD USER FACTS
% ============================================================

add_fact(Fact) :-
    valid_fact(Fact),
    \+ user_fact(Fact),
    assertz(user_fact(Fact)).

add_fact(Fact) :-
    user_fact(Fact).


% ============================================================
% SECTION 3 - CAREER RULES
% ============================================================
%
% The occupational knowledge represented here is based on
% documented occupational characteristics from O*NET.
%
% The documented characteristics are represented as explicit
% IF-THEN rules for this rule-based expert system.
%
% ============================================================


% ------------------------------------------------------------
% SOFTWARE DEVELOPMENT
% ------------------------------------------------------------

career_rule(
    r01,
    software_development,
    [programming_skill, problem_solving_skill, technology_interest],
    'O*NET - Software Developers'
).

career_rule(
    r02,
    software_development,
    [programming_skill, logical_thinking, computer_work_preference],
    'O*NET - Software Developers'
).

career_rule(
    r03,
    software_development,
    [technical_skill, programming_skill, technical_problem_solving_preference],
    'O*NET - Software Developers'
).


% ------------------------------------------------------------
% DATA ANALYSIS
% ------------------------------------------------------------

career_rule(
    r04,
    data_analysis,
    [mathematics_skill, analytical_thinking, data_interest],
    'O*NET - Data Scientists'
).

career_rule(
    r05,
    data_analysis,
    [analytical_thinking, attention_to_detail, data_work_preference],
    'O*NET - Data Scientists'
).

career_rule(
    r06,
    data_analysis,
    [mathematics_skill, information_analysis_preference, data_interest],
    'O*NET - Data Scientists'
).


% ------------------------------------------------------------
% CYBERSECURITY
% ------------------------------------------------------------

career_rule(
    r07,
    cybersecurity,
    [cybersecurity_interest, logical_thinking, problem_solving_skill],
    'O*NET - Information Security Analysts'
).

career_rule(
    r08,
    cybersecurity,
    [technology_interest, cybersecurity_interest, technical_skill],
    'O*NET - Information Security Analysts'
).

career_rule(
    r09,
    cybersecurity,
    [attention_to_detail, cybersecurity_interest,
     technical_problem_solving_preference],
    'O*NET - Information Security Analysts'
).


% ------------------------------------------------------------
% NETWORK ENGINEERING
% ------------------------------------------------------------

career_rule(
    r10,
    network_engineering,
    [networking_interest, technical_skill, problem_solving_skill],
    'O*NET - Network and Computer Systems Administrators'
).

career_rule(
    r11,
    network_engineering,
    [networking_interest, technology_interest,
     technical_problem_solving_preference],
    'O*NET - Network and Computer Systems Administrators'
).

career_rule(
    r12,
    network_engineering,
    [technical_skill, computer_work_preference, networking_interest],
    'O*NET - Network and Computer Systems Administrators'
).


% ------------------------------------------------------------
% UI/UX DESIGN
% ------------------------------------------------------------

career_rule(
    r13,
    ui_ux_design,
    [creativity_skill, design_interest, creative_work_preference],
    'O*NET - Web and Digital Interface Designers'
).

career_rule(
    r14,
    ui_ux_design,
    [creativity_skill, user_experience_interest, technology_interest],
    'O*NET - Web and Digital Interface Designers'
).

career_rule(
    r15,
    ui_ux_design,
    [communication_skill, design_interest, creative_work_preference],
    'O*NET - Web and Digital Interface Designers'
).


% ------------------------------------------------------------
% BUSINESS ANALYSIS
% ------------------------------------------------------------

career_rule(
    r16,
    business_analysis,
    [analytical_thinking, business_interest, problem_solving_skill],
    'O*NET - Management Analysts'
).

career_rule(
    r17,
    business_analysis,
    [communication_skill, business_interest,
     information_analysis_preference],
    'O*NET - Management Analysts'
).

career_rule(
    r18,
    business_analysis,
    [analytical_thinking, communication_skill, business_interest],
    'O*NET - Management Analysts'
).


% ------------------------------------------------------------
% ACCOUNTING AND FINANCE
% ------------------------------------------------------------

career_rule(
    r19,
    accounting_finance,
    [mathematics_skill, finance_interest, attention_to_detail],
    'O*NET - Accountants and Auditors'
).

career_rule(
    r20,
    accounting_finance,
    [analytical_thinking, finance_interest,
     information_analysis_preference],
    'O*NET - Accountants and Auditors'
).

career_rule(
    r21,
    accounting_finance,
    [mathematics_skill, attention_to_detail, finance_interest],
    'O*NET - Accountants and Auditors'
).


% ------------------------------------------------------------
% DIGITAL MARKETING
% ------------------------------------------------------------

career_rule(
    r22,
    digital_marketing,
    [creativity_skill, marketing_interest,
     communication_work_preference],
    'O*NET - Advertising and Promotions Managers'
).

career_rule(
    r23,
    digital_marketing,
    [communication_skill, marketing_interest,
     people_interaction_preference],
    'O*NET - Advertising and Promotions Managers'
).

career_rule(
    r24,
    digital_marketing,
    [creativity_skill, communication_skill, marketing_interest],
    'O*NET - Advertising and Promotions Managers'
).


% ============================================================
% SECTION 4 - CONDITIONS
% ============================================================

conditions_satisfied([]).

conditions_satisfied([Condition|Rest]) :-
    known_fact(Condition),
    conditions_satisfied(Rest).


known_fact(Fact) :-
    user_fact(Fact).

known_fact(Fact) :-
    derived_career(Fact).


conditions_satisfied_from_user([]).

conditions_satisfied_from_user([Condition|Rest]) :-
    user_fact(Condition),
    conditions_satisfied_from_user(Rest).


% ============================================================
% SECTION 5 - RECOMMENDATION
% ============================================================

recommend(Career) :-
    career_rule(_, Career, Conditions, _),
    conditions_satisfied(Conditions).


% ============================================================
% SECTION 6 - SHOW USER FACTS
% ============================================================

show_user_facts :-
    nl,
    writeln('========== USER FACTS =========='),
    findall(Fact, user_fact(Fact), Facts),
    display_user_facts(Facts),
    writeln('================================').


display_user_facts([]).

display_user_facts([Fact|Rest]) :-
    format('- ~w~n', [Fact]),
    display_user_facts(Rest).


% ============================================================
% SECTION 7 - SHOW DERIVED CAREERS
% ============================================================

show_derived_careers :-
    nl,
    writeln('===== DERIVED CAREER CONCLUSIONS ====='),
    findall(Career, derived_career(Career), Careers),
    sort(Careers, UniqueCareers),
    display_derived_careers(UniqueCareers),
    writeln('======================================').


display_derived_careers([]) :-
    writeln('No career conclusion was derived.').

display_derived_careers(Careers) :-
    Careers = [_|_],
    display_derived_career_list(Careers).


display_derived_career_list([]).

display_derived_career_list([Career|Rest]) :-
    format('- ~w~n', [Career]),
    display_derived_career_list(Rest).


% ============================================================
% SECTION 8 - SHOW CAREER RECOMMENDATIONS
% ============================================================

show_recommendations :-
    nl,
    writeln('======= CAREER RECOMMENDATIONS ======='),
    findall(Career, recommend(Career), Careers),
    sort(Careers, UniqueCareers),
    display_careers(UniqueCareers),
    writeln('====================================').


display_careers([]) :-
    writeln('No career recommendation found.').

display_careers(Careers) :-
    Careers = [_|_],
    display_career_list(Careers).


display_career_list([]).

display_career_list([Career|Rest]) :-
    format('- ~w~n', [Career]),
    display_career_list(Rest).


% ============================================================
% SECTION 9 - FORWARD CHAINING
% ============================================================

forward_chain :-
    nl,
    writeln('========== FORWARD CHAINING =========='),
    forward_rules,
    writeln('======================================').


forward_rules :-
    career_rule(
        RuleNumber,
        Career,
        Conditions,
        Source
    ),

    conditions_satisfied_from_user(Conditions),

    \+ derived_career(Career),

    assertz(derived_career(Career)),

    format(
        'Rule ~w fired: ~w -> ~w~n',
        [RuleNumber, Conditions, Career]
    ),

    format(
        'Source: ~w~n',
        [Source]
    ),

    nl,

    fail.

forward_rules.


% ============================================================
% SECTION 10 - BACKWARD CHAINING
% ============================================================

backward_chain(Career) :-
    nl,
    writeln('========== BACKWARD CHAINING =========='),
    format('Goal: ~w~n', [Career]),
    nl,
    backward_reason(Career),
    writeln('=======================================').


backward_reason(Career) :-
    career_rule(
        RuleNumber,
        Career,
        Conditions,
        Source
    ),

    conditions_satisfied_from_user(Conditions),

    format(
        'Rule ~w supports the goal.~n',
        [RuleNumber]
    ),

    format(
        'Required facts: ~w~n',
        [Conditions]
    ),

    format(
        'Source: ~w~n',
        [Source]
    ),

    nl,

    writeln('All required facts are available.'),

    format(
        'Goal ~w is proved.~n',
        [Career]
    ),

    !.


backward_reason(Career) :-
    format(
        'The goal ~w could not be proved from the current user facts.~n',
        [Career]
    ).


% ============================================================
% SECTION 11 - EXPLANATION / REASONING
% ============================================================

explain_recommendation(Career) :-
    nl,
    writeln('========== EXPLANATION / REASONING =========='),
    format('Recommended Career: ~w~n', [Career]),
    nl,
    explain_matching_rules(Career),
    writeln('=============================================').


explain_matching_rules(Career) :-
    findall(
        rule_info(RuleNumber, Conditions, Source),
        (
            career_rule(
                RuleNumber,
                Career,
                Conditions,
                Source
            ),
            conditions_satisfied_from_user(Conditions)
        ),
        Rules
    ),
    explain_rule_list(Rules, Career).


explain_rule_list([], _).


explain_rule_list(
    [rule_info(RuleNumber, Conditions, Source)|Rest],
    Career
) :-

    writeln('--------------------------------------------'),

    format(
        'Rule Applied: ~w~n',
        [RuleNumber]
    ),

    format(
        'Required facts: ~w~n',
        [Conditions]
    ),

    format(
        'Source: ~w~n',
        [Source]
    ),

    nl,

    writeln('Reasoning:'),

    format(
        'The required user facts ~w are satisfied.~n',
        [Conditions]
    ),

    format(
        'Therefore, the rule supports the career recommendation: ~w.~n',
        [Career]
    ),

    writeln('--------------------------------------------'),

    explain_rule_list(Rest, Career).


% ============================================================
% SECTION 12 - EXPLAIN ALL RECOMMENDATIONS
% ============================================================

explain_all_recommendations :-
    findall(
        Career,
        recommend(Career),
        Careers
    ),

    sort(Careers, UniqueCareers),

    explain_career_list(UniqueCareers).


explain_career_list([]) :-
    nl,
    writeln('No career recommendations available for explanation.').


explain_career_list([Career|Rest]) :-
    explain_recommendation(Career),
    explain_career_list(Rest).


% ============================================================
% SECTION 13 - SHOW ALL RULES
% ============================================================

show_all_rules :-
    nl,
    writeln('=============== KNOWLEDGE BASE ==============='),
    show_rule_list,
    writeln('==============================================').


show_rule_list :-
    career_rule(
        RuleNumber,
        Career,
        Conditions,
        Source
    ),

    format('Rule: ~w~n', [RuleNumber]),
    format('IF: ~w~n', [Conditions]),
    format('THEN: ~w~n', [Career]),
    format('Source: ~w~n', [Source]),
    writeln('----------------------------------------------'),

    fail.

show_rule_list.


% ============================================================
% SECTION 14 - SHOW SINGLE RULE
% ============================================================

show_rule(RuleNumber) :-
    career_rule(
        RuleNumber,
        Career,
        Conditions,
        Source
    ),

    nl,
    writeln('=============== RULE ==============='),
    format('Rule Number: ~w~n', [RuleNumber]),
    format('IF: ~w~n', [Conditions]),
    format('THEN: ~w~n', [Career]),
    format('Source: ~w~n', [Source]),
    writeln('====================================').


% ============================================================
% SECTION 15 - MAIN SYSTEM
% ============================================================

start_system :-
    clear_system,

    nl,
    writeln('=============================================='),
    writeln('       CAREER GUIDANCE EXPERT SYSTEM'),
    writeln('=============================================='),

    nl,

    writeln('Enter your selected characteristics as facts.'),
    writeln('Example: programming_skill.'),
    writeln('Type stop. when you are finished.'),

    nl,

    collect_facts,

    show_user_facts,

    forward_chain,

    show_derived_careers,

    show_recommendations,

    explain_all_recommendations.


% ============================================================
% SECTION 16 - COLLECT USER FACTS
% ============================================================

collect_facts :-
    write('Enter a fact: '),
    read(Input),
    process_input(Input).


process_input(stop) :-
    !.


process_input(Input) :-
    valid_fact(Input),
    add_fact(Input),
    writeln('Fact added.'),
    collect_facts.


process_input(Input) :-
    \+ valid_fact(Input),
    format(
        'Invalid fact: ~w~n',
        [Input]
    ),
    writeln('Please enter a valid fact.'),
    collect_facts.


% ============================================================
% SECTION 17 - VALID FACTS
% ============================================================

valid_fact(programming_skill).
valid_fact(mathematics_skill).
valid_fact(problem_solving_skill).
valid_fact(analytical_thinking).
valid_fact(communication_skill).
valid_fact(creativity_skill).
valid_fact(logical_thinking).
valid_fact(attention_to_detail).
valid_fact(teamwork_skill).
valid_fact(technical_skill).

valid_fact(technology_interest).
valid_fact(data_interest).
valid_fact(cybersecurity_interest).
valid_fact(networking_interest).
valid_fact(design_interest).
valid_fact(business_interest).
valid_fact(finance_interest).
valid_fact(marketing_interest).
valid_fact(research_interest).
valid_fact(user_experience_interest).

valid_fact(technical_problem_solving_preference).
valid_fact(data_work_preference).
valid_fact(creative_work_preference).
valid_fact(people_interaction_preference).
valid_fact(computer_work_preference).
valid_fact(independent_work_preference).
valid_fact(teamwork_preference).
valid_fact(information_analysis_preference).
valid_fact(detail_oriented_work_preference).
valid_fact(communication_work_preference).


% ============================================================
% SECTION 18 - TEST SOFTWARE DEVELOPMENT
% ============================================================

test_software_development :-

    clear_system,

    add_fact(programming_skill),
    add_fact(problem_solving_skill),
    add_fact(technology_interest),

    nl,

    writeln('TEST: SOFTWARE DEVELOPMENT'),

    forward_chain,

    show_derived_careers,

    show_recommendations,

    explain_recommendation(software_development).


% ============================================================
% SECTION 19 - TEST DATA ANALYSIS
% ============================================================

test_data_analysis :-

    clear_system,

    add_fact(mathematics_skill),
    add_fact(analytical_thinking),
    add_fact(data_interest),

    nl,

    writeln('TEST: DATA ANALYSIS'),

    forward_chain,

    show_derived_careers,

    show_recommendations,

    explain_recommendation(data_analysis).


% ============================================================
% SECTION 20 - TEST CYBERSECURITY
% ============================================================

test_cybersecurity :-

    clear_system,

    add_fact(cybersecurity_interest),
    add_fact(logical_thinking),
    add_fact(problem_solving_skill),

    nl,

    writeln('TEST: CYBERSECURITY'),

    forward_chain,

    show_derived_careers,

    show_recommendations,

    explain_recommendation(cybersecurity).


% ============================================================
% SECTION 21 - TEST NETWORK ENGINEERING
% ============================================================

test_network_engineering :-

    clear_system,

    add_fact(networking_interest),
    add_fact(technical_skill),
    add_fact(problem_solving_skill),

    nl,

    writeln('TEST: NETWORK ENGINEERING'),

    forward_chain,

    show_derived_careers,

    show_recommendations,

    explain_recommendation(network_engineering).


% ============================================================
% SECTION 22 - TEST UI/UX DESIGN
% ============================================================

test_ui_ux_design :-

    clear_system,

    add_fact(creativity_skill),
    add_fact(design_interest),
    add_fact(creative_work_preference),

    nl,

    writeln('TEST: UI/UX DESIGN'),

    forward_chain,

    show_derived_careers,

    show_recommendations,

    explain_recommendation(ui_ux_design).


% ============================================================
% SECTION 23 - TEST BUSINESS ANALYSIS
% ============================================================

test_business_analysis :-

    clear_system,

    add_fact(analytical_thinking),
    add_fact(business_interest),
    add_fact(problem_solving_skill),

    nl,

    writeln('TEST: BUSINESS ANALYSIS'),

    forward_chain,

    show_derived_careers,

    show_recommendations,

    explain_recommendation(business_analysis).


% ============================================================
% SECTION 24 - TEST ACCOUNTING AND FINANCE
% ============================================================

test_accounting_finance :-

    clear_system,

    add_fact(mathematics_skill),
    add_fact(finance_interest),
    add_fact(attention_to_detail),

    nl,

    writeln('TEST: ACCOUNTING & FINANCE'),

    forward_chain,

    show_derived_careers,

    show_recommendations,

    explain_recommendation(accounting_finance).


% ============================================================
% SECTION 25 - TEST DIGITAL MARKETING
% ============================================================

test_digital_marketing :-

    clear_system,

    add_fact(creativity_skill),
    add_fact(marketing_interest),
    add_fact(communication_work_preference),

    nl,

    writeln('TEST: DIGITAL MARKETING'),

    forward_chain,

    show_derived_careers,

    show_recommendations,

    explain_recommendation(digital_marketing).


% ============================================================
% END OF CAREER GUIDANCE EXPERT SYSTEM
% ============================================================