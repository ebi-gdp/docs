import React from 'react';

export default function Footer(props) {
  return (
    <footer class="vf-footer">
      <div class="vf-footer__inner">
        <p class="vf-footer__notice">GeneticScores.org is a platform to democratise polygenic scores.</p>
        <p class="vf-footer__notice">We provide tools and data to help AI developers and human health researchers make better polygenic scores.</p>

        <div class="vf-footer__links-group | vf-grid vf-grid__col-5">
          <div class="vf-links">
          <h4 class="vf-links__heading">Resources</h4>
            <ul class="vf-links__list | vf-list">

              <li class="vf-list__item">
                <a class="vf-list__link" href="https://methods.geneticscores.org/tutorials/synthetic.html">Synthetic data</a>
              </li>

              <li class="vf-list__item">
                <a class="vf-list__link" href="https://methods.geneticscores.org/meta.html">Methods comparison</a>
              </li>

              <li class="vf-list__item">
                <a class="vf-list__link" href="https://calculate.geneticscores.org">Genetic score service</a>
              </li>

              <li class="vf-list__item">
                <a class="vf-list__link" href="https://docs.geneticscores.org/tools">Calculate scores locally</a>
              </li>

              <li class="vf-list__item">
                <a class="vf-list__link" href="https://geneticscores.org/posts">Updates and blog</a>
              </li>
            </ul>
          </div>
          <div class="vf-links">
            <h4 class="vf-links__heading">Data protection</h4>
            <ul class="vf-links__list | vf-list">

              <li class="vf-list__item">
                <a class="vf-list__link" href="https://www.ebi.ac.uk/about/terms-of-use">Terms of Use</a>
              </li>

              <li class="vf-list__item">
                <a class="vf-list__link" href="http://www.ebi.ac.uk/data-protection/privacy-notice/geneticscoresorg-analysis-service">Privacy notice</a>
              </li>

              <li class="vf-list__item">
                <a class="vf-list__link" href="https://docs.geneticscores.org/dataprocessing">Data processing</a>
              </li>

              <li class="vf-list__item">
                <a class="vf-list__link" href="https://docs.geneticscores.org/security">Security overview</a>
              </li>

            </ul>
          </div>
          <div class="vf-links">
            <h4 class="vf-links__heading">Project</h4>
            <ul class="vf-links__list | vf-list">

              <li class="vf-list__item">
                <a class="vf-list__link" href="https://docs.intervenegeneticscores.org">About</a>
              </li>

              <li class="vf-list__item">
                <a class="vf-list__link" href="https://docs.intervenegeneticscores.org">Documentation</a>
              </li>

              <li class="vf-list__item">
                <a class="vf-list__link" href="https://docs.intervenegeneticscores.org/#how-do-i-get-help">Get help</a>
              </li>

              <li class="vf-list__item">
                <a class="vf-list__link" href="https://github.com/ebi-gdp">GitHub</a>
              </li>

              <li class="vf-list__item">
                <a class="vf-list__link" href="https://www.interveneproject.eu/">INTERVENE</a>
              </li>

            </ul>
          </div>
          <div class="vf-links">
          </div>
        </div>

        <section class="vf-footer__legal | vf-grid vf-grid__col-1">
          <span class="vf-footer__legal-text">
            <a class="vf-footer__link" href="https://www.ebi.ac.uk">GeneticScores.org is developed by EMBL-EBI.</a> <a class="vf-footer__link" href="https://www.embl.org/">EMBL-EBI is part of the European Molecular Biology Laboratory.</a>
          </span>
        </section>

        <section class="vf-footer__legal">
          <span class="vf-footer__legal-text">
            Copyright © EMBL-EBI 2024. All resources and data are open source and permissively licensed, unless otherwise indicated.
          </span>
        </section>

        <section class="vf-footer__legal">
          <span class="vf-footer__legal-text">
            Current release version: <code class="">0.1</code>.  <a href="/posts" class="vf-footer__link">Release log.</a>
          </span>
        </section>

        <section class="vf-footer__legal | vf-grid vf-grid__col-1">
          <span class="vf-footer__legal-text">
            INTERVENE has received funding from the European Union's Horizon 2020 research and innovation programme under grant agreement No 101016775
          </span>
        </section>
      </div>
    </footer>
  );
}
