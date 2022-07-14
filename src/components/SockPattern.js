import React from 'react'

function SockPattern({ sock, setShow, show}) {
  return (
    <div> 
        <div>
            <button style={{float: 'right'}} onClick={() => setShow(prev => !prev)}>Close</button>
        </div>
        
        <div className='pattern'>
        <br/><br/>
            <h1>Pattern</h1>

            <h2>Materials</h2>
            <p>Approximately 22 (29, 36, 43, 50, 57) grams/88 (116, 144, 172, 200, 228) yards TOTAL of fingering weight yarn.</p>
            <p>US Size 1 (2.25mm) knitting needles</p>
            <p>A tapestry needle for weaving in ends</p>

            <h2>Gauge</h2>
            <p>40 sts over 4"(10cm) and 28 rows, knit in stockinette in the round and blocked.</p>

            <h2 style={{marginBottom:'10px'}}>Color Guide</h2>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'20px'}}>

            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <p><b>CC1</b> </p>
                <div style={{height:'30px', width:'30px', backgroundColor:sock.ribColor}}></div>
            </div>

                { sock?.ankleColor !== '#fff' ?<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}><p><b>CC2</b> </p>
                <div style={{height:'30px', width:'30px', backgroundColor: sock.ankleColor}}></div></div> : null}

                { sock?.ankleColor !== '#fff' ?<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}><p><b>CC3</b> </p>
                <div style={{height:'30px', width:'30px', backgroundColor: sock.heelColor}}></div></div> : null}

                { sock?.ankleColor !== '#fff' ?<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}><p><b>CC4</b> </p>
                <div style={{height:'30px', width:'30px', backgroundColor: sock.footColor}}></div></div> : null}

                { sock?.ankleColor !== '#fff' ?<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}><p><b>CC5</b> </p>
                <div style={{height:'30px', width:'30px', backgroundColor: sock.toeColor}}></div></div> : null}

            </div>
            <br/>

            <h2>Cuff</h2>
            <p>With CC1 and US size 1 (2.25mm) needles, CO 39 (48, 57, 63, 72, 81) sts and join for working in the rnd, being careful now to twist your sts. Establish 2 x 1 ribbing pattern: [k2, p1] to end.</p>
            <p>Work ribbing pattern for 19 more rnds, then break CC1.</p>

            <h2>Leg</h2>
            <p>Join in CC2 and k1 rnd even in stockinetter, making the following increase or decrease according to your size: <br/>
            <b>Toddler:</b> K1, M1, k around to end. <b>40 sts.</b><br/>
            <b>Kid:</b> K around to end with no increase or decrease. <b>48 sts.</b> <br/>
            <b>S:</b> K1, ssk, k around to end. <b>56 sts.</b><br/>
            <b>M:</b> K1, M1, k around to end. <b>64 sts.</b><br/>
            <b>L:</b> K around to end with no increase or decrease. <b>72 sts.</b><br/>
            <b>XL:</b> K1, ssk, k around to end. <b>80 sts.</b>
            </p>
            <p>Continue in stockinette until leg measures 1 (3, 5, 6, 6, 7)" or your desired length from cast on edge.</p>

            <h2>Heel Flap</h2>
            <p>K across the first 20 (24, 28, 32, 36, 40) sts. Break CC2 and join in CC3. Begin working your heel flap back and forth across the remaining 20 (24, 28, 32, 36, 40) sts as follows:</p>
            <p>
                <b>Row 1:</b> K2, [sl1, k1] to end. Turn work.<br/>
                <b>Row 2:</b> Sl1, p to end. Turn work. <br/>
                <b>Row 3:</b> [Sl1, k1] to end. Turn work.<br/>
            </p>
            <p>Repeat rows 2 and 3 until heel flap measures 1.5 (1.75, 2, 2, 2.25, 2.5)"/4 (4.5, 5, 5.57, 6)cm. End after you have worked row 3.</p>

            <h2>Heel Turn</h2>
            <p>
                Work the following:</p>
            <p>
                <b>Row 1:</b> Sl 1, p 10 (12, 14, 16, 18, 20), p2tog, p1, turn.<br/>
                <b>Row 2:</b> Sl 1, k3, ssk, k1, turn. <br/>
                <b>Row 3:</b> Sl 1, p4, p2tog, p1, turn.<br/>
                <b>Row 4:</b> Sl 1, k5, ssk, k1, turn.<br/>
            </p>
            <p>
                You have now established the following pattern for your heel turn: sl1, k or p to one stitch before the hap created by turning on the previous row, ssk or p2tog, k1 or p1, turn. Continue in this pattern until all your heel stitches have been worked. You should now have 13 (15, 17, 19, 21, 23) heel sts. Break CC3.
            </p>

            <h2>Gusset</h2>
            <p>Join in CC4. With the right side of your work facing, pick up and k 10 (12, 14, 16, 18, 20) sts along the left side of your heel flap.</p>
            <p>Next, k 20 (24, 28, 32, 36, 40) sts across the front of your sock. Pm, and pick up 10 (12, 14, 16, 18, 20) sts on the right side of your heel flap. K across the heel sts, then down the first set of new sts on the left side. You've reached the end of the rnd, and all your sts have now been picked up.</p>

            <h2>Gusset Decreases</h2>
            <p>
                <b>Rnd 1:</b> K across 20 (24, 28, 32, 36, 40) sts, sl marker, k1, ssk, k around to 3 sts before the end of rnd, k2tog, k1.<br/>
                <b>Rnd 2:</b> Work even with no decreases.<br/>
            </p>
            <p>Repeat these two rnds until you have 40 (48, 56, 64, 72, 80) sts on your needles.</p>

            <h2>Foot</h2>
            <p>
                Continue in stockinette until your foot reaches your desired length before beginning your toe decreases.<br/>
            </p>
            <p>You will want to start your toe decreases at approximately 1.5" (4cm) before the end of your desired foot length. For baby and kid sizes, start the decreases around 1" (3cm) before the end of the desired foot length. </p>

            <h2>Toe Decreases</h2>
            <p>
                Break CC4 and join in CC5. K 1 rnd even, then begin the following decreases:<br/>
                <b>Rnd 1:</b> K1, ssk, k 14 (18, 22, 26, 30, 36) sts, k2tog, k1, pm, k1, ssk, k 14 (18, 22, 26, 30, 36), k2tog, k1.<br/>
                <b>Rnd 1:</b> K.<br/>
                <b>Rnd 1:</b> K1, ssk, k to 3 sts before marker, k2tog, k1, sl m, k1, ssk, k to 3 sts before end of rnd, k2tog, k1.<br/>
            </p>
            <p>Repeat rnds 2 and 3 until 16 (20, 24, 28, 32, 36) sts remain.</p>
            <p>Graft your toes closed using kitchener stitch.</p>

            <h2>Finishing</h2>
            <p>
                Weave in all ends and block your socks!
            </p>
        </div>
  </div>
  )
}

export default SockPattern