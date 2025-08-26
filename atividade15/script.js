function abrirCurso() {
  const select = document.getElementById("cursoSelect");
  const curso = select.value;

  if (curso === "") return;

  const cursosInfo = {
    ads: "Curso de Análise e Desenvolvimento de Sistemas: Foco em programação, banco de dados e desenvolvimento de software.",
    logistica: "Curso de Logística: Gestão de transportes, armazenagem e cadeia de suprimentos.",
    eletronica: "Curso de Eletrônica Automotiva: Eletrônica aplicada a veículos automotores.",
    gestaoEAD: "Curso de Gestão Empresarial EAD: Administração, finanças e gestão estratégica.",
    qualidade: "Curso de Gestão de Qualidade: Sistemas de qualidade, auditoria e processos industriais.",
    manufatura: "Curso de Manufatura Avançada: Tecnologias industriais modernas e automação.",
    polimeros: "Curso de Polímeros: Estudo de materiais plásticos e processos de fabricação.",
    metalurgia: "Curso de Processos Metalúrgicos: Fundição, soldagem e tratamento de metais.",
    biomedicos: "Curso de Sistemas Biomédicos: Equipamentos médicos e hospitalares.",
    mecanicos: "Curso de Projetos Mecânicos: Desenvolvimento e modelagem de projetos mecânicos."
  };

  if (confirm("Deseja abrir informações sobre este curso?")) {
    const conteudo = `
  <html>
    <head>
      <title>Informações do Curso</title>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
      <style>
        body {
          font-family: 'Poppins', sans-serif;
          background: #f4f4f4;
          padding: 20px;
        }
        h2 {
          color: #c62828;
        }
        p {
          color: #333;
          font-size: 16px;
        }
      </style>
    </head>
    <body>
      <h2>${select.options[select.selectedIndex].text}</h2>
      <p>${cursosInfo[curso]}</p>
    </body>
  </html>
`;

    const novaJanela = window.open("", "Curso", "width=600,height=300");
    novaJanela.document.write(conteudo);
  } else {
    select.value = "";
  }
}
