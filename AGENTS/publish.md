# Commit, push, publish

Automatic: do this at the end of every completed task, per
[spec/repository.md](../spec/repository.md#delivery-automatically-commit-push-publish),
after the relevant checks pass. A user instruction to hold off overrides it.
Never force-push or rewrite history unasked.

1. `git status`; stage specific paths (leave unrelated untracked files such as
   `locales/locales-by-priority.md` unless asked).
2. Commit with a present-tense imperative title and the trailer
   `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`. Commits are
   SSH-signed.
3. `git push origin main` (4 push URLs).
4. If anything under `architecture-decision-record.github.io/` changed:

   ```sh
   git subtree push --prefix=architecture-decision-record.github.io \
     git@github.com:architecture-decision-record/architecture-decision-record.github.io.git main
   ```

5. Report the commit, the push result, and the subtree range. Do not claim the
   site redeployed unless verified.
