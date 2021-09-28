import { Container } from "./style"
export function Content(){
    return(
        <Container>
              <section  className='information'>
                  <div>
                      <h2> IP ADDress</h2>
                      <p>
                          192.212.174.101
                      </p>
                  </div>

                  <div>
                  <h2> LOCATION </h2>
                      <p>
                          Brooklyjn, Ny 
                          10001
                      </p>
                  </div>

                  <div>
                  <h2> TIMEZONE</h2>
                      <p>
                          UTC - 05:00
                      </p>
                  </div>

                  <div>
                  <h2> ISP </h2>
                      <p>
                          SpaceX
                          Starlink
                      </p>
                  </div>

              </section>
        </Container>
    )
}