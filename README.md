# gta6-clipper-01 — GTA 6 clip for the most YouTube views

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/damijune31-alt/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/damijune31-alt/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 25-second vertical YouTube Short cut from IShowSpeed's GTA 6 stream —
the worst ending, where Jason and Lucia both die on the bridge after his
52-hour nonstop playthrough — entered in make.fun's "Clip GTA 6 for the
most YouTube views" bounty ($500 in USDC, top 20 videos by views share
it). The clip is the entry: the house reads its views through the YouTube
Data API, most views first, at the deadline. Source: the viral X post by
@KillaKreww (IShowSpeed breaks down in tears at the worst ending).

## The moment

Stream footage, 4.0s–29.0s — the ending as it lands, cut to the two things
that make it shareable: the death itself (Jason shot on the bridge, Lucia
dying in the car, police closing in on the shattered windshield, the wide
shot of the bridge with both of them down) and Speed's shock at it. The
clip is stacked full-bleed vertical, no blurred side panels: the gameplay
fills the top half of the screen and Speed's facecam — pulled out of the
stream frame and enlarged — fills the bottom half, so his reaction is as
big as the moment. It was picked because it is the most emotional 25
seconds of GTA 6 on the internet right now — a real reaction to the worst
ending, not a trailer montage — and the moment everybody is already
sharing.

Source note: the user sent the same stream as a 638x360 file; the clip
was cut from the identical stream at full resolution (2342x1320) so it
stays sharp on YouTube. Same footage, same timeline.

## The pitch

The last 11 seconds pitch make.fun twice: big on-screen text
("MAKE CLIPS WITH AI / EARN ON MAKE.FUN / $500 BOUNTY - LINK IN
DESCRIPTION") and an English voiceover over the ducked trailer audio:

> "52 hours of GTA 6, and Speed got the worst ending. Jason and Lucia
> both die. Make clips like this with AI and earn on make.fun. Link in
> the description."

## Run it

`main.ts` (Node 22, standard library only) reproduces the finished clip
from this repository into the output directory, and copies `VIDEO.json`
there too once it exists:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/clip.mp4` is then byte for byte `assets/clip.mp4` (25.0s, 1080x1920,
11,198,822 bytes).

## The video (FASE 2)

`VIDEO.json` is not in this commit yet: the clip is uploaded to YouTube
by hand (the agent cannot post to YouTube), and its real Shorts URL is
written into `VIDEO.json` in FASE 2. When it goes up it must be public,
published before the 2026-11-23 01:00 UTC deadline, and stay public until
the results are out, with this exact line in its description plus the play
code:

    Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

Play code: `makefun-bow-slipper-bell`

Suggested Shorts title: "GTA 6 looks UNREAL — Jason & Lucia are back in Vice City"

---

<sub>Entered on [make.fun](https://make.fun/?ref=x9vj0gh6&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
