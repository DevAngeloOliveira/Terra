export function ResearchContent() {
  return (
    <>
      <header>
        <div className="label">
          {"TCC · registro de busca · 15 de outubro de 2026"}
        </div>
        <h1>
          {"Treinamento de equilíbrio em amputados transfemorais unilaterais"}
        </h1>
        <p>
          {
            "Estratégias adaptadas a quatro bases, referências recuperadas e decisões preliminares de pertinência."
          }
        </p>
      </header>
      <p className="notice">
        <strong>
          {"Registro parcial, sem número final de estudos incluídos."}
        </strong>
        {
          " PubMed e BVS foram coletadas integralmente nas buscas filtradas. O Google Acadêmico foi percorrido até a última página disponível. A SciELO não apresentou resultados verificáveis nesta sessão. Faltam a conferência fina das datas de 2019 no Scholar, a triagem de todos os registros e a leitura integral dos candidatos. Os números abaixo não devem ser apresentados como um fluxograma PRISMA concluído."
        }
      </p>
      <h2 id="recorte">{"Recorte e vocabulário"}</h2>
      <p>
        {
          "Pergunta: quais são os efeitos do treinamento de equilíbrio no controle postural, na funcionalidade e no risco de quedas de indivíduos com amputação transfemoral unilateral? A busca pode recuperar níveis mistos para não perder estudos com subgrupos. Sua inclusão na síntese específica exige resultados extraíveis dos transfemorais unilaterais; resultados agregados são evidência indireta."
        }
      </p>
      <p>
        {"Janela adotada: "}
        <strong>{"15/10/2019 a 15/10/2026"}</strong>
        {
          ". Scholar e BVS filtram por ano; por isso 2019–2026 é a janela de recuperação, que ainda exige conferir a data exata em 2019. Não equivale a declarar oito anos completos como sete. As datas de publicação eletrônica e de fascículo devem ser extraídas; a elegibilidade deve usar a primeira publicação, de forma consistente."
        }
      </p>
      <div
        className="report-table"
        role="region"
        aria-label="Tabela do relatório"
        tabIndex={0}
      >
        <table>
          <thead>
            <tr>
              <th scope="col">{"Conceito"}</th>
              <th scope="col">{"DeCS (português)"}</th>
              <th scope="col">{"MeSH (inglês)"}</th>
              <th scope="col">{"Identificador"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{"População"}</td>
              <td>
                <a
                  href="https://decs.bvsalud.org/ths/resource/?id=689"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Amputados"}
                </a>
              </td>
              <td>
                <a
                  href="https://meshb.nlm.nih.gov/record/ui?ui=D000674"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Amputees"}
                </a>
              </td>
              <td>{"D000674"}</td>
            </tr>
            <tr>
              <td>{"Equilíbrio"}</td>
              <td>
                <a
                  href="https://decs.bvsalud.org/ths/resource/?id=4936"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Equilíbrio Postural"}
                </a>
              </td>
              <td>
                <a
                  href="https://meshb.nlm.nih.gov/record/ui?ui=D004856"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Postural Balance"}
                </a>
              </td>
              <td>{"D004856"}</td>
            </tr>
            <tr>
              <td>{"Intervenção"}</td>
              <td>
                <a
                  href="https://decs.bvsalud.org/ths/resource/?id=5179"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Terapia por Exercício"}
                </a>
              </td>
              <td>
                <a
                  href="https://meshb.nlm.nih.gov/record/ui?ui=D005081"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Exercise Therapy"}
                </a>
              </td>
              <td>{"D005081"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        {"Expressões como "}
        <em>
          {"balance training, balance exercises, transfemoral, above-knee"}
        </em>
        {" e "}
        <em>{"treinamento de equilíbrio"}</em>
        {
          " são termos livres específicos; não são apresentados como nomes oficiais de descritores. Scholar e SciELO recebem expressões textuais derivadas desses conceitos, sem a marcação MeSH/mh. Sintaxes e extensão variam por base; os três conceitos clínicos permanecem como referência. A estratégia do Scholar é complementar e mais restrita à população transfemoral."
        }
      </p>
      <h2 id="estrategias">{"Quatro estratégias e links de reprodução"}</h2>
      <h3 id="pubmed">{"PubMed"}</h3>
      <pre>
        {
          '("Amputees"[Mesh] OR amput*[tiab] OR "limb loss"[tiab]) AND (("Postural Balance"[Mesh] AND "Exercise Therapy"[Mesh]) OR "balance training"[tiab] OR "balance exercises"[tiab] OR "balance exercise"[tiab] OR "perturbation training"[tiab] OR "proprioceptive training"[tiab])'
        }
      </pre>
      <p>
        {
          'MeSH + título/resumo. O filtro de publicação foi acrescentado à expressão completa: AND ("2019/10/15"[Date - Publication] : "2026/10/15"[Date - Publication]).'
        }
      </p>
      <p>
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/?term=%28%22Amputees%22%5BMesh%5D+OR+amput*%5Btiab%5D+OR+%22limb+loss%22%5Btiab%5D%29+AND+%28%28%22Postural+Balance%22%5BMesh%5D+AND+%22Exercise+Therapy%22%5BMesh%5D%29+OR+%22balance+training%22%5Btiab%5D+OR+%22balance+exercises%22%5Btiab%5D+OR+%22balance+exercise%22%5Btiab%5D+OR+%22perturbation+training%22%5Btiab%5D+OR+%22proprioceptive+training%22%5Btiab%5D%29"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Abrir busca / base"}
        </a>
        {" · "}
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/?term=%28%28%22Amputees%22%5BMesh%5D+OR+amput*%5Btiab%5D+OR+%22limb+loss%22%5Btiab%5D%29+AND+%28%28%22Postural+Balance%22%5BMesh%5D+AND+%22Exercise+Therapy%22%5BMesh%5D%29+OR+%22balance+training%22%5Btiab%5D+OR+%22balance+exercises%22%5Btiab%5D+OR+%22balance+exercise%22%5Btiab%5D+OR+%22perturbation+training%22%5Btiab%5D+OR+%22proprioceptive+training%22%5Btiab%5D%29%29+AND+%28%222019%2F10%2F15%22%5BDate+-+Publication%5D+%3A+%222026%2F10%2F15%22%5BDate+-+Publication%5D%29&format=abstract&size=200"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Abrir busca filtrada"}
        </a>
      </p>
      <h3 id="bvs">{"BVS"}</h3>
      <pre>
        {
          '(mh:"Amputados" OR tw:(amput* OR "limb loss")) AND ((mh:"Equilíbrio Postural" AND mh:"Terapia por Exercício") OR tw:("balance training" OR "balance exercises" OR "balance exercise" OR "perturbation training" OR "proprioceptive training" OR "treinamento de equilíbrio" OR "treino de equilíbrio" OR "exercícios de equilíbrio" OR "entrenamiento del equilibrio" OR "ejercicios de equilibrio"))'
        }
      </pre>
      <p>
        {
          "Coleção completa; mh para descritores, tw para termos livres. Filtro da interface: 2019–2026. Conferir dia/mês dos registros de 2019."
        }
      </p>
      <p>
        <a
          href="https://pesquisa.bvsalud.org/portal/?output=site&lang=pt&from=0&sort=&format=summary&count=20&fb=&page=1&tab=2&range_year_start=&range_year_end=&skfp=&index=&q=%28mh%3A%22Amputados%22+OR+tw%3A%28amput*+OR+%22limb+loss%22%29%29+AND+%28%28mh%3A%22Equil%C3%ADbrio+Postural%22+AND+mh%3A%22Terapia+por+Exerc%C3%ADcio%22%29+OR+tw%3A%28%22balance+training%22+OR+%22balance+exercises%22+OR+%22balance+exercise%22+OR+%22perturbation+training%22+OR+%22proprioceptive+training%22+OR+%22treinamento+de+equil%C3%ADbrio%22+OR+%22treino+de+equil%C3%ADbrio%22+OR+%22exerc%C3%ADcios+de+equil%C3%ADbrio%22+OR+%22entrenamiento+del+equilibrio%22+OR+%22ejercicios+de+equilibrio%22%29%29"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Abrir busca / base"}
        </a>
        {" · "}
        <a
          href="https://pesquisa.bvsalud.org/portal/?u_filter%5B%5D=fulltext&u_filter%5B%5D=db&u_filter%5B%5D=mj_cluster&u_filter%5B%5D=type_of_study&u_filter%5B%5D=la&fb=&output=site&lang=pt&from=1&sort=&format=summary&count=20&page=1&tab=2&range_year_start=&range_year_end=&skfp=&index=&q=%28mh%3A%22Amputados%22+OR+tw%3A%28amput*+OR+%22limb+loss%22%29%29+AND+%28%28mh%3A%22Equil%C3%ADbrio+Postural%22+AND+mh%3A%22Terapia+por+Exerc%C3%ADcio%22%29+OR+tw%3A%28%22balance+training%22+OR+%22balance+exercises%22+OR+%22balance+exercise%22+OR+%22perturbation+training%22+OR+%22proprioceptive+training%22+OR+%22treinamento+de+equil%C3%ADbrio%22+OR+%22treino+de+equil%C3%ADbrio%22+OR+%22exerc%C3%ADcios+de+equil%C3%ADbrio%22+OR+%22entrenamiento+del+equilibrio%22+OR+%22ejercicios+de+equilibrio%22%29%29&where=&range_year_start=2019&range_year_end=2026"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Abrir busca filtrada"}
        </a>
      </p>
      <h3 id="scholar">{"Google Scholar"}</h3>
      <pre>
        {
          '(transfemoral OR "above-knee") ("balance training" OR "balance exercises" OR "treinamento de equilíbrio")'
        }
      </pre>
      <p>
        {
          "Busca complementar focada no nível transfemoral. Espaço entre os blocos representa AND. Qualquer idioma, ordenação por relevância; patentes desmarcadas e citações incluídas. Período personalizado 2019–2026; conferir datas de 2019. Contadores aproximados."
        }
      </p>
      <p>
        <a
          href="https://scholar.google.com/scholar?hl=pt-BR&as_sdt=0%2C5&q=%28transfemoral+OR+%22above-knee%22%29+%28%22balance+training%22+OR+%22balance+exercises%22+OR+%22treinamento+de+equil%C3%ADbrio%22%29&btnG="
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Abrir busca / base"}
        </a>
        {" · "}
        <a
          href="https://scholar.google.com/scholar?q=%28transfemoral+OR+%22above-knee%22%29+%28%22balance+training%22+OR+%22balance+exercises%22+OR+%22treinamento+de+equil%C3%ADbrio%22%29&hl=pt-BR&as_sdt=0%2C5&as_ylo=2019&as_yhi=2026"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Abrir busca filtrada"}
        </a>
      </p>
      <h3 id="scielo">{"SciELO"}</h3>
      <pre>
        {
          '(amputados OR amputação OR amputees OR amputation OR amputación) AND (("equilíbrio postural" OR "postural balance" OR "equilibrio postural" OR balance OR equilíbrio) AND ("terapia por exercício" OR "exercise therapy" OR "terapia por ejercicio" OR "balance training" OR "balance exercises" OR "treinamento de equilíbrio" OR "treino de equilíbrio" OR "entrenamiento del equilibrio"))'
        }
      </pre>
      <p>
        {
          "Todos os índices; estratégia submetida, mas a interface não exibiu contador ou referências verificáveis. Contagens e aplicação do filtro temporal não concluídas. A consulta curta usada no diagnóstico não entra nas contagens."
        }
      </p>
      <p>
        <a
          href="https://search.scielo.org/?lang=pt"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Abrir busca / base"}
        </a>
      </p>
      <h2 id="contagens">{"Contagens verificadas"}</h2>
      <div
        className="report-table"
        role="region"
        aria-label="Tabela do relatório"
        tabIndex={0}
      >
        <table>
          <thead>
            <tr>
              <th scope="col">{"Base"}</th>
              <th scope="col">{"Sem filtro temporal"}</th>
              <th scope="col">{"Após filtro"}</th>
              <th scope="col">{"Registros capturados"}</th>
              <th scope="col">{"Observação"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{"PubMed"}</td>
              <td>{"37"}</td>
              <td>{"19"}</td>
              <td>{"19"}</td>
              <td>{"Filtro por data de publicação: 15/10/2019–15/10/2026."}</td>
            </tr>
            <tr>
              <td>{"BVS"}</td>
              <td>{"37"}</td>
              <td>{"20"}</td>
              <td>{"20"}</td>
              <td>{"Filtro por ano: 2019–2026. Coleção completa."}</td>
            </tr>
            <tr>
              <td>{"Google Acadêmico"}</td>
              <td>{"Aproximadamente 1.260"}</td>
              <td>{"Aproximadamente 695"}</td>
              <td>{"694"}</td>
              <td>
                {
                  "70 páginas acessíveis, ordenadas por relevância. Filtro anual 2019–2026."
                }
              </td>
            </tr>
            <tr>
              <td>{"SciELO"}</td>
              <td>{"Não confirmado"}</td>
              <td>{"Não confirmado"}</td>
              <td>{"Não obtido"}</td>
              <td>
                {
                  "Campo de contagem vazio e ausência de lista válida. Não é resultado zero."
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        {
          "Os totais sem filtro e após filtro representam a mesma estratégia em cada base. Não houve restrição adicional por idioma, tipo de estudo ou acesso gratuito. A busca retorna registros bibliográficos de vários tipos, incluindo revisões, livros, protocolos, teses e citações; não se deve chamar todos de artigos elegíveis."
        }
      </p>
      <h2 id="duplicatas">{"Duplicatas: registro por ocorrência"}</h2>
      <div className="flow">
        <div>
          <b>{"733"}</b>
          {"registros capturados"}
          <br />
          {"19 + 20 + 694"}
        </div>
        <div>
          <b>{"43"}</b>
          {"ocorrências duplicadas confirmadas"}
          <br />
          {"19 da BVS + 24 do Scholar"}
        </div>
        <div>
          <b>{"690"}</b>
          {"registros retidos provisoriamente"}
          <br />
          {"elegibilidade ainda em análise"}
        </div>
      </div>
      <p>
        {
          "Ordem de retenção: PubMed, BVS e Google Acadêmico. Correspondências por PMID, DOI/URL e títulos normalizados foram confrontadas com metadados. Títulos abreviados e traduções exigiram conferência adicional. Duas versões de um mesmo artigo contam uma vez; publicações diferentes sobre o mesmo estudo podem permanecer como relatos vinculados. A conferência de possíveis duplicatas adicionais faz parte da triagem restante."
        }
      </p>
      <p>
        {
          "Foram preservados os trabalhos acadêmicos de Delavari (2026) e Viktora (2023), embora tenham títulos iguais. Também foram preservados o projeto acadêmico e o artigo de periódico sobre foco de atenção, com identificadores distintos, e o editorial versus o livro "
        }
        <em>{"Neural Prostheses for Locomotion"}</em>
        {
          ". Esse cuidado impede excluir publicações distintas por mera semelhança textual."
        }
      </p>
      <details>
        <summary>{"Ver grupos de duplicatas confirmadas"}</summary>
        <div
          className="report-table"
          role="region"
          aria-label="Tabela do relatório"
          tabIndex={0}
        >
          <table>
            <thead>
              <tr>
                <th scope="col">{"Registro retido"}</th>
                <th scope="col">{"Ocorrências vinculadas"}</th>
                <th scope="col">{"Título"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"PM001"}</td>
                <td>{"BV009, GS002"}</td>
                <td>
                  {
                    "The Effectiveness of Exercise Interventions to Improve Gait and Balance in Individuals with Lower Limb Amputations: A Systematic Review and Meta-analysis."
                  }
                </td>
              </tr>
              <tr>
                <td>{"PM002"}</td>
                <td>{"BV002, GS028"}</td>
                <td>
                  {
                    "Do Exercise Programs Improve Fitness, Mobility, and Functional Capacity in Adults With Lower Limb Amputation? A Systematic Review on the Type and Minimal Dose Needed."
                  }
                </td>
              </tr>
              <tr>
                <td>{"PM003"}</td>
                <td>{"BV020"}</td>
                <td>
                  {
                    "Cross-step detection using center-of-pressure based algorithm for real-time applications."
                  }
                </td>
              </tr>
              <tr>
                <td>{"PM004"}</td>
                <td>{"BV014"}</td>
                <td>
                  {
                    "A randomised controlled study on the synergistic effects of neuroplasticity-based interventions for trunk control in post-stroke rehabilitation."
                  }
                </td>
              </tr>
              <tr>
                <td>{"PM005"}</td>
                <td>{"BV007, GS070"}</td>
                <td>{"Balance level of elite amputee football players."}</td>
              </tr>
              <tr>
                <td>{"PM006"}</td>
                <td>{"BV013"}</td>
                <td>
                  {
                    "Dynamic balance of persons with unilateral upper limb absence when responding to a walking disturbance."
                  }
                </td>
              </tr>
              <tr>
                <td>{"PM007"}</td>
                <td>{"BV018, GS003"}</td>
                <td>
                  {
                    "Physiotherapy Rehabilitation in an Above-Knee Amputee Following Compartment Syndrome in Post-tibial Plateau Fracture: A Case Report."
                  }
                </td>
              </tr>
              <tr>
                <td>{"PM008"}</td>
                <td>{"BV016"}</td>
                <td>
                  {
                    "Clinical Features of Gollop-Wolfgang Complex in North Africa: A Case Study."
                  }
                </td>
              </tr>
              <tr>
                <td>{"PM009"}</td>
                <td>{"BV006"}</td>
                <td>
                  {
                    "Effectiveness of telerehabilitation-based structured exercise program in individuals with unilateral transtibial amputation: a randomized controlled study."
                  }
                </td>
              </tr>
              <tr>
                <td>{"PM010"}</td>
                <td>{"BV008"}</td>
                <td>
                  {
                    "The eight-week concurrent training effect on functional capacity in person living with unilateral transtibial amputation: A randomized controlled trial."
                  }
                </td>
              </tr>
              <tr>
                <td>{"PM011"}</td>
                <td>{"BV011"}</td>
                <td>
                  {
                    "Correlates of Balance and Aerobic Indices in Lower-Limb Prostheses Users on Arm Crank Exercise."
                  }
                </td>
              </tr>
              <tr>
                <td>{"PM012"}</td>
                <td>{"BV015, GS405"}</td>
                <td>
                  {
                    "The effect of a home exercise intervention on persons with lower limb amputations: a randomized controlled trial."
                  }
                </td>
              </tr>
              <tr>
                <td>{"PM013"}</td>
                <td>{"BV010, GS087"}</td>
                <td>
                  {
                    "A block randomised controlled trial investigating changes in postural control following a personalised 12-week exercise programme for individuals with lower limb amputation."
                  }
                </td>
              </tr>
              <tr>
                <td>{"PM014"}</td>
                <td>{"BV012, GS118"}</td>
                <td>
                  {
                    "The Effect of Adding Virtual Reality Training on Traditional Exercise Program on Balance and Gait in Unilateral, Traumatic Lower Limb Amputee."
                  }
                </td>
              </tr>
              <tr>
                <td>{"PM015"}</td>
                <td>{"BV004, GS005"}</td>
                <td>
                  {
                    "Development of physical activity recommendations for adults living with lower limb amputation."
                  }
                </td>
              </tr>
              <tr>
                <td>{"PM016"}</td>
                <td>{"BV017, GS288"}</td>
                <td>
                  {
                    "Combining physical therapy and cognitive behavioral therapy techniques to improve balance confidence and community participation in people with unilateral transtibial amputation who use lower limb prostheses: a study protocol for a randomized sham-control clinical trial."
                  }
                </td>
              </tr>
              <tr>
                <td>{"PM017"}</td>
                <td>{"BV005, GS006"}</td>
                <td>
                  {
                    "Individualized task difficulty promotes balance training outcomes and self-efficacy in individuals with lower limb loss."
                  }
                </td>
              </tr>
              <tr>
                <td>{"PM018"}</td>
                <td>{"BV019"}</td>
                <td>
                  {
                    "Phantom Limb Pain Improvement Post Right Lower Extremity Amputation With a Liner-type Prosthesis and Pharmacotherapy Combination: A Case Report."
                  }
                </td>
              </tr>
              <tr>
                <td>{"PM019"}</td>
                <td>{"BV001, GS001"}</td>
                <td>
                  {
                    "Investigation of the Effects of Dual-Task Balance Training on Gait and Balance in Transfemoral Amputees: A Randomized Controlled Trial."
                  }
                </td>
              </tr>
              <tr>
                <td>{"GS039"}</td>
                <td>{"GS041"}</td>
                <td>
                  {
                    "From wheelchair to walking: first Genium® knee fitting in a bilateral transfemoral amputee in Algeria"
                  }
                </td>
              </tr>
              <tr>
                <td>{"GS059"}</td>
                <td>{"GS512"}</td>
                <td>
                  {"Rehabilitation of patients after transfemoral amputation"}
                </td>
              </tr>
              <tr>
                <td>{"GS073"}</td>
                <td>{"GS086"}</td>
                <td>
                  {
                    "Pain, Balance-Confidence, Functional Mobility, and Reach Are Associated With Risk of Recurrent Falls Among Adults With Lower-Limb Amputation"
                  }
                </td>
              </tr>
              <tr>
                <td>{"GS110"}</td>
                <td>{"GS162"}</td>
                <td>
                  {
                    "Development of machine learning algorithms for the determination of the centre of mass"
                  }
                </td>
              </tr>
              <tr>
                <td>{"GS136"}</td>
                <td>{"GS153"}</td>
                <td>
                  {
                    "Post-traumatıc Physıcal Therapy and Rehabılıtatıon ın Lower Extremıty"
                  }
                </td>
              </tr>
              <tr>
                <td>{"GS183"}</td>
                <td>{"GS441"}</td>
                <td>
                  {
                    "Effectiveness of (active) lifestyle interventions in people with a lower limb amputation: a systematic review"
                  }
                </td>
              </tr>
              <tr>
                <td>{"GS192"}</td>
                <td>{"GS207"}</td>
                <td>
                  {
                    "Tailored Physiotherapy Combined With Exercises for Enhanced Recovery Post-Below-Knee Amputation in a Diabetic Patient With Peripheral Artery Disease …"
                  }
                </td>
              </tr>
              <tr>
                <td>{"GS318"}</td>
                <td>{"GS335"}</td>
                <td>
                  {
                    "Development and Evaluation of a Wearable Vibrotactile Biofeedback System and a Gait Event Detection Algorithm to Improve Gait Symmetry of Individuals with Lower …"
                  }
                </td>
              </tr>
              <tr>
                <td>{"GS434"}</td>
                <td>{"GS582"}</td>
                <td>
                  {
                    "Human-Prosthetic Interaction (HumanIT): A study protocol for a clinical trial evaluating brain neuroplasticity and functional performance after lower limb loss"
                  }
                </td>
              </tr>
              <tr>
                <td>{"GS456"}</td>
                <td>{"GS495"}</td>
                <td>
                  {
                    "Paracanoagem e qualidade de vida: concepções de atletas com deficiência motora de Petrolina-PE"
                  }
                </td>
              </tr>
              <tr>
                <td>{"GS517"}</td>
                <td>{"GS528"}</td>
                <td>
                  {
                    "Preventable Burn Injury in a Person With Paraparesis Leading to Amputation: A Case Report"
                  }
                </td>
              </tr>
              <tr>
                <td>{"GS550"}</td>
                <td>{"GS607"}</td>
                <td>
                  {
                    "Benefits and harms of exercise therapy for patients with diabetic foot ulcers: a systematic review"
                  }
                </td>
              </tr>
              <tr>
                <td>{"GS655"}</td>
                <td>{"GS657"}</td>
                <td>
                  {
                    "Effectiveness of physical activity interventions in older adults with frailty or prefrailty: a systematic review and meta-analysis"
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
      <h2 id="leitura-prioritaria">
        {"Leitura prioritária: estudos diretamente próximos da pergunta"}
      </h2>
      <p>
        {
          "Esta classificação indica pertinência e prioridade de leitura. Não substitui a avaliação de risco de viés nem constitui inclusão definitiva."
        }
      </p>
      <div
        className="report-table"
        role="region"
        aria-label="Tabela do relatório"
        tabIndex={0}
      >
        <table>
          <thead>
            <tr>
              <th scope="col">{"Estudo / link"}</th>
              <th scope="col">{"Por que interessa"}</th>
              <th scope="col">{"Decisão"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/32653580/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Demirdel e Erbahçeci, 2020"}
                </a>
                <br />
                <small>
                  {
                    "Investigation of the Effects of Dual-Task Balance Training on Gait and Balance in Transfemoral Amputees: A Randomized Controlled Trial."
                  }
                </small>
              </td>
              <td>
                {
                  "20 participantes transfemorais; tarefa simples versus dupla; 60 minutos, três vezes/semana, quatro semanas. Avalia equilíbrio e mobilidade. O resumo não demonstra redução de incidência de quedas."
                }
              </td>
              <td>
                {
                  "Ensaio específico de treino de equilíbrio com tarefa simples e dupla em 20 amputados transfemorais; confirmar unilateralidade e critérios completos no texto integral."
                }
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.ijhsr.org/IJHSR_Vol.11_Issue.8_Aug2021/IJHSR014.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Suresh et al., 2021"}
                </a>
                <br />
                <small>
                  {
                    "Effect of pre-prosthetic training in balance and prosthetic performance in traumatic unilateral trans-femoral prosthesis users in the age group of 20-40 years"
                  }
                </small>
              </td>
              <td>
                {
                  "Treino pré-protético e de marcha com equilíbrio; população transfemoral unilateral traumática. DOI 10.52403/ijhsr.20210814. Texto integral na revista."
                }
              </td>
              <td>
                {
                  "Suresh et al., 2021: 27 transfemorais unilaterais traumáticos, comparação entre usuários antigos e novos; treino de 2–3 semanas inclui transferência de peso e marcha tandem. O artigo se denomina randomizado, mas a formação dos grupos por experiência protética exige avaliação crítica."
                }
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://onlinelibrary.wiley.com/doi/abs/10.1002/pri.70031"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Elfeky et al., 2025"}
                </a>
                <br />
                <small>
                  {
                    "Whole‐Body Vibration Without Visual Feedback on Postural Steadiness in Unilateral Trans‐Femoral Traumatic Amputees: A Randomized Controlled Trial"
                  }
                </small>
              </td>
              <td>
                {
                  "108 transfemorais unilaterais traumáticos; vibração com/sem informação visual, 12 semanas; controle postural. Confirmar enquadramento da modalidade no protocolo."
                }
              </td>
              <td>
                {
                  "Elfeky et al., 2025: ensaio com 108 transfemorais unilaterais traumáticos, vibração corporal com/sem informação visual. Alta pertinência ao controle postural; confirmar se essa modalidade se enquadra na definição de treino de equilíbrio adotada."
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 id="evidencia-indireta">
        {"Estudos condicionais e evidência indireta"}
      </h2>
      <div
        className="report-table"
        role="region"
        aria-label="Tabela do relatório"
        tabIndex={0}
      >
        <table>
          <thead>
            <tr>
              <th scope="col">{"Registro"}</th>
              <th scope="col">{"Estudo"}</th>
              <th scope="col">{"Condição para uso"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{"PM013"}</td>
              <td>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/33360642/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    "A block randomised controlled trial investigating changes in postural control following a personalised 12-week exercise programme for individuals with lower limb amputation."
                  }
                </a>
              </td>
              <td>
                {
                  "Programa de 12 semanas inclui equilíbrio, resistência, força e flexibilidade; confirmar resultados separáveis dos transfemorais unilaterais."
                }
              </td>
            </tr>
            <tr>
              <td>{"PM014"}</td>
              <td>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/33533682/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    "The Effect of Adding Virtual Reality Training on Traditional Exercise Program on Balance and Gait in Unilateral, Traumatic Lower Limb Amputee."
                  }
                </a>
              </td>
              <td>
                {
                  "Realidade virtual associada a exercícios, 32 amputados unilaterais; confirmar nível de amputação e resultados do subgrupo transfemoral."
                }
              </td>
            </tr>
            <tr>
              <td>{"PM017"}</td>
              <td>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/40333604/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    "Individualized task difficulty promotes balance training outcomes and self-efficacy in individuals with lower limb loss."
                  }
                </a>
              </td>
              <td>
                {
                  "Treino em estabilômetro; resultados agrupam idosos sem amputação e amputados de níveis mistos. Não há estimativa isolada do efeito em transfemorais no texto consultado."
                }
              </td>
            </tr>
            <tr>
              <td>{"GS096"}</td>
              <td>
                <a
                  href="https://journals.sagepub.com/doi/abs/10.1177/02692155211061222"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    "Group-based telerehabilitation intervention using Wii Fit to improve walking in older adults with lower limb amputation (WiiNWalk): a randomized control trial"
                  }
                </a>
              </td>
              <td>
                {
                  "Tao et al., 2022, WiiNWalk: 71 participantes, 80% transtibiais; melhora na confiança no equilíbrio, sem superioridade nos principais testes físicos. Confirmar subgrupo transfemoral."
                }
              </td>
            </tr>
            <tr>
              <td>{"GS099"}</td>
              <td>
                <a
                  href="https://academic.oup.com/milmed/article-abstract/189/5-6/980/7042146"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    "Fall prevention training for service members with an amputation or limb salvage following lower extremity trauma"
                  }
                </a>
              </td>
              <td>
                {
                  "Kaufman et al., 2024: prevenção de quedas com perturbações; reúne amputação e preservação de membro. Confirmar transfemorais unilaterais e dados separáveis."
                }
              </td>
            </tr>
            <tr>
              <td>{"GS124"}</td>
              <td>
                <a
                  href="https://he02.tci-thaijo.org/index.php/sirirajmedj/article/view/283047"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    "Effects of a Home-Based Fall Prevention Program in Older Lower Limb Prosthesis Users: A Randomized Controlled Trial"
                  }
                </a>
              </td>
              <td>
                {
                  "Sakulkosol et al., 2026: 44 usuários de prótese; educação e 16 exercícios por oito semanas. Não houve superioridade entre grupos no equilíbrio/confiança. Confirmar dados separados de transfemorais."
                }
              </td>
            </tr>
            <tr>
              <td>{"GS040"}</td>
              <td>
                <a
                  href="https://iopscience.iop.org/article/10.1016/j.medengphy.2022.103772/meta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    "EEG-explained cortical correlates of transfemoral amputees during balancing with vibrotactile feedback: A pilot study"
                  }
                </a>
              </td>
              <td>
                {
                  "Khajuria e Joshi, 2022: piloto com seis transfemorais traumáticos, biofeedback vibrotátil e EEG. Verificar se avalia aprendizagem/treinamento ou apenas efeito imediato do dispositivo."
                }
              </td>
            </tr>
            <tr>
              <td>{"GS034"}</td>
              <td>
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8169020/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    "Strategies for gait retraining in a collegiate runner with transfemoral amputation: A case report"
                  }
                </a>
              </td>
              <td>
                {
                  "Santer et al., 2021: reeducação da corrida em atleta transfemoral, com exercícios unipodais; verificar medidas de equilíbrio e aceitar apenas se relatos de caso e intervenções combinadas estiverem previstos."
                }
              </td>
            </tr>
            <tr>
              <td>{"GS227"}</td>
              <td>
                <a
                  href="https://www.thieme-connect.com/products/ejournals/html/10.1055/a-2735-0684"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    "Rehabilitative Training with the Nintendo Wii Fit Balance Board for Postural Control and Gait in Lower Limb Amputees"
                  }
                </a>
              </td>
              <td>
                {
                  "Schimske et al., 2026: treino com Nintendo Wii Fit Balance Board; título e metadados localizados, mas não houve confirmação suficiente da população e do protocolo na fonte primária acessível."
                }
              </td>
            </tr>
            <tr>
              <td>{"PM012"}</td>
              <td>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/31617395/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    "The effect of a home exercise intervention on persons with lower limb amputations: a randomized controlled trial."
                  }
                </a>
              </td>
              <td>
                {
                  "Exercícios domiciliares e educação; verificar componentes de equilíbrio, participantes transfemorais unilaterais e dados extraíveis desse subgrupo."
                }
              </td>
            </tr>
            <tr>
              <td>{"GS004"}</td>
              <td>
                <a
                  href="https://iro.uiowa.edu/view/pdfCoverPage?instCode=01IOWA_INST&filePid=13912544120002771&download=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    "Physical Therapist Management of an Above Knee Amputee: A Case Report"
                  }
                </a>
              </td>
              <td>
                {
                  "Relato acadêmico de manejo fisioterapêutico de amputado acima do joelho. Confirmar texto, medidas de resultado e admissão de trabalhos acadêmicos no protocolo."
                }
              </td>
            </tr>
            <tr>
              <td>{"BV003"}</td>
              <td>
                <a
                  href="https://pesquisa.bvsalud.org/portal/resource/pt/biblio-1697661"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {
                    "Development of a group physiotherapeutic training program for lower limb amputee patients / Elaboração de um programa fisioterapêutico de treinamento em grupo em pacientes amputados de membro inferior"
                  }
                </a>
              </td>
              <td>
                {
                  "Único registro BVS sem correspondência PMID nesta coleta; título indica proposta de programa. Confirmar execução da intervenção, resultados e inclusão de literatura cinzenta."
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        {
          "Wu et al. merece cuidado adicional: o resumo informa três transfemorais, mas a Tabela 1 do texto consultado informa dois transfemorais em cada grupo. Além disso, os resultados combinam idosos sem amputação e amputados. A inconsistência e a falta de estimativa isolada impedem tratar esse resultado como efeito específico em transfemorais."
        }
      </p>
      <h2 id="criterios">{"Critérios operacionais para a triagem"}</h2>
      <ol>
        <li>
          {
            "Adultos com amputação transfemoral unilateral; amostra mista somente com dados separáveis dessa população."
          }
        </li>
        <li>
          {
            "Intervenção de treinamento de equilíbrio efetivamente aplicada, com componentes, duração e frequência descritos. Treino de marcha, força, vibração ou prótese só entram se corresponderem à definição de intervenção aprovada no protocolo."
          }
        </li>
        <li>
          {
            "Pelo menos um desfecho pertinente: controle postural, equilíbrio, funcionalidade/mobilidade ou quedas. Melhorar TUG ou uma escala de equilíbrio não equivale a demonstrar redução da ocorrência de quedas."
          }
        </li>
        <li>
          {
            "Estudo primário com resultados, dentro da janela temporal. Protocolos e revisões podem fundamentar o texto e orientar busca de referências, mas não entram como ensaios primários de efeito."
          }
        </li>
        <li>
          {
            "Definir antecipadamente se relatos de caso, trabalhos acadêmicos e literatura cinzenta serão admitidos. Essa decisão altera a elegibilidade dos candidatos; não deve ser tomada para alcançar um número de artigos."
          }
        </li>
      </ol>
      <p>
        {
          "Não foi aplicada nesta etapa uma ferramenta formal de risco de viés. Não houve avaliação por dois revisores humanos independentes. Portanto, a metodologia do TCC não deve afirmar que essas etapas ocorreram."
        }
      </p>
      <h2 id="fluxograma">{"Dados para o fluxograma"}</h2>
      <p>
        {
          "Estágio atual: 733 registros recuperados nas três fontes coletadas → 43 ocorrências duplicadas confirmadas → 690 registros retidos para completar a triagem. Essa sequência é provisória, anterior ao ajuste fino das datas do Scholar e à incorporação da SciELO."
        }
      </p>
      <p>
        {
          "Para fechar o fluxograma: registrar os resultados válidos da SciELO, conferir as datas limítrofes, concluir a remoção de possíveis duplicatas remanescentes, documentar exclusões por título/resumo, registrar textos completos procurados/não obtidos e atribuir um motivo principal de exclusão por texto integral. Somente então informar estudos incluídos. Não somar aproximadamente 695 às demais bases como se todas essas referências tivessem sido coletadas exatamente."
        }
      </p>
    </>
  );
}
